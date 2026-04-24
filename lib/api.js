// Frontend-only API using localStorage and mock data
import { SAMPLE_QUIZZES, SAMPLE_USERS, SAMPLE_LEADERBOARD, SAMPLE_PERFORMANCE, QUIZ_TEMPLATES } from './mockData';

// Simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Get from localStorage
const getFromStorage = (key, defaultValue = null) => {
  if (typeof window === 'undefined') return defaultValue;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

// Save to localStorage
const saveToStorage = (key, value) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

// Auth API (using localStorage)
export const authAPI = {
  register: async (data) => {
    await delay();
    const users = getFromStorage('users', []);
    
    // Check if user exists
    if (users.find(u => u.email === data.email)) {
      throw new Error('User already exists');
    }
    
    const newUser = {
      id: generateId(),
      ...data,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=6366f1&color=fff`,
      role: 'user',
      stats: {
        totalQuizzes: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        currentStreak: 0,
        longestStreak: 0,
        totalPoints: 0,
        averageAccuracy: 0
      },
      achievements: [],
      preferences: {
        theme: 'light',
        notifications: true,
        voiceMode: false
      },
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveToStorage('users', users);
    saveToStorage('currentUser', newUser);
    
    return { data: { user: newUser, token: 'mock-token-' + newUser.id } };
  },

  login: async (data) => {
    await delay();
    const users = getFromStorage('users', SAMPLE_USERS);
    const user = users.find(u => u.email === data.email);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    saveToStorage('currentUser', user);
    return { data: { user, token: 'mock-token-' + user.id } };
  },

  getMe: async () => {
    await delay();
    const user = getFromStorage('currentUser');
    if (!user) throw new Error('Not authenticated');
    return { data: { user } };
  },

  updateProfile: async (data) => {
    await delay();
    const user = getFromStorage('currentUser');
    const updatedUser = { ...user, ...data };
    saveToStorage('currentUser', updatedUser);
    
    // Update in users array
    const users = getFromStorage('users', []);
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = updatedUser;
      saveToStorage('users', users);
    }
    
    return { data: { user: updatedUser } };
  },

  updatePassword: async () => {
    await delay();
    return { data: { message: 'Password updated successfully' } };
  },
};

// Quiz API (using localStorage)
export const quizAPI = {
  generate: async (data) => {
    await delay(1000); // Simulate AI generation time
    
    const template = QUIZ_TEMPLATES[data.topic.toLowerCase()] || QUIZ_TEMPLATES.javascript;
    const numQuestions = parseInt(data.numberOfQuestions) || 5;
    
    // Generate questions based on template
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
      const templateQ = template.questions[i % template.questions.length];
      questions.push({
        id: generateId(),
        ...templateQ,
        difficulty: data.difficulty || 'medium'
      });
    }
    
    const quiz = {
      id: generateId(),
      title: `${data.topic} Quiz`,
      topic: data.topic,
      category: data.category || 'general',
      difficulty: data.difficulty || 'medium',
      totalQuestions: questions.length,
      questions,
      createdAt: new Date().toISOString(),
      isCompleted: false
    };
    
    // Save quiz
    const quizzes = getFromStorage('quizzes', []);
    quizzes.push(quiz);
    saveToStorage('quizzes', quizzes);
    
    return { data: { quiz } };
  },

  getQuiz: async (id) => {
    await delay();
    const quizzes = getFromStorage('quizzes', SAMPLE_QUIZZES);
    const quiz = quizzes.find(q => q.id === id);
    if (!quiz) throw new Error('Quiz not found');
    return { data: { quiz } };
  },

  submitQuiz: async (data) => {
    await delay();
    const quizzes = getFromStorage('quizzes', []);
    const quiz = quizzes.find(q => q.id === data.quizId);
    
    if (!quiz) throw new Error('Quiz not found');
    
    // Calculate score
    let correctAnswers = 0;
    let totalPoints = 0;
    
    const results = quiz.questions.map((q, index) => {
      const userAnswer = data.answers[index]?.answer || '';
      const isCorrect = userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
      
      if (isCorrect) {
        correctAnswers++;
        totalPoints += q.points;
      }
      
      return {
        question: q.question,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      };
    });
    
    const accuracy = Math.round((correctAnswers / quiz.totalQuestions) * 100);
    
    // Update quiz
    quiz.isCompleted = true;
    quiz.score = totalPoints;
    quiz.correctAnswers = correctAnswers;
    quiz.wrongAnswers = quiz.totalQuestions - correctAnswers;
    quiz.accuracy = accuracy;
    quiz.timeTaken = data.timeTaken || 0;
    quiz.completedAt = new Date().toISOString();
    
    saveToStorage('quizzes', quizzes);
    
    // Update user stats
    const user = getFromStorage('currentUser');
    if (user) {
      user.stats.totalQuizzes += 1;
      user.stats.totalQuestions += quiz.totalQuestions;
      user.stats.correctAnswers += correctAnswers;
      user.stats.totalPoints += totalPoints;
      user.stats.averageAccuracy = Math.round(
        (user.stats.correctAnswers / user.stats.totalQuestions) * 100
      );
      saveToStorage('currentUser', user);
    }
    
    return {
      data: {
        result: {
          quizId: quiz.id,
          score: totalPoints,
          correctAnswers,
          wrongAnswers: quiz.wrongAnswers,
          accuracy,
          timeTaken: quiz.timeTaken,
          questions: results
        }
      }
    };
  },

  getHistory: async () => {
    await delay();
    const quizzes = getFromStorage('quizzes', SAMPLE_QUIZZES);
    const completed = quizzes.filter(q => q.isCompleted);
    return { data: { quizzes: completed, total: completed.length } };
  },

  deleteQuiz: async (id) => {
    await delay();
    const quizzes = getFromStorage('quizzes', []);
    const filtered = quizzes.filter(q => q.id !== id);
    saveToStorage('quizzes', filtered);
    return { data: { message: 'Quiz deleted' } };
  },
};

// Analytics API (using localStorage)
export const analyticsAPI = {
  getDashboard: async () => {
    await delay();
    const user = getFromStorage('currentUser', SAMPLE_USERS[0]);
    const quizzes = getFromStorage('quizzes', SAMPLE_QUIZZES);
    const completed = quizzes.filter(q => q.isCompleted).slice(0, 5);
    
    return {
      data: {
        analytics: {
          userStats: user.stats,
          level: Math.floor(user.stats.totalPoints / 1000) + 1,
          recentQuizzes: completed,
          performanceByCategory: SAMPLE_PERFORMANCE,
          weakTopics: SAMPLE_PERFORMANCE.filter(p => p.averageAccuracy < 80),
          strongTopics: SAMPLE_PERFORMANCE.filter(p => p.averageAccuracy >= 80),
          progressData: []
        }
      }
    };
  },

  getPerformance: async () => {
    await delay();
    return {
      data: {
        analytics: {
          performanceOverTime: [],
          difficultyBreakdown: [],
          topicPerformance: SAMPLE_PERFORMANCE,
          totalTimeLearning: 3600
        }
      }
    };
  },

  getWeakTopics: async () => {
    await delay();
    const weak = SAMPLE_PERFORMANCE.filter(p => p.averageAccuracy < 80);
    const strong = SAMPLE_PERFORMANCE.filter(p => p.averageAccuracy >= 80);
    
    return {
      data: {
        weakTopics: weak,
        strongTopics: strong,
        recommendations: 'Focus on practicing React and improving your understanding of hooks and state management.',
        overallAccuracy: 80
      }
    };
  },

  getStats: async () => {
    await delay();
    const user = getFromStorage('currentUser', SAMPLE_USERS[0]);
    return {
      data: {
        stats: {
          userStats: user.stats,
          quizzesByCategory: [],
          quizTypeDistribution: [],
          accuracyTrend: []
        }
      }
    };
  },
};

// Leaderboard API (using mock data)
export const leaderboardAPI = {
  getGlobal: async () => {
    await delay();
    return {
      data: {
        leaderboard: SAMPLE_LEADERBOARD,
        currentUserRank: 5,
        totalUsers: 100
      }
    };
  },

  getDaily: async () => {
    await delay();
    return {
      data: {
        leaderboard: SAMPLE_LEADERBOARD.slice(0, 3),
        currentUserRank: null,
        hasCompletedToday: false
      }
    };
  },

  getCategory: async (category) => {
    await delay();
    return {
      data: {
        category,
        leaderboard: SAMPLE_LEADERBOARD,
        currentUserRank: 5
      }
    };
  },

  getStreaks: async () => {
    await delay();
    return {
      data: {
        leaderboard: SAMPLE_LEADERBOARD,
        currentUserRank: 5
      }
    };
  },
};

export default { authAPI, quizAPI, analyticsAPI, leaderboardAPI };
