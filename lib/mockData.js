// Mock data for frontend-only version

export const SAMPLE_QUIZZES = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    topic: 'JavaScript',
    category: 'technology',
    difficulty: 'medium',
    totalQuestions: 5,
    questions: [
      {
        id: 'q1',
        question: 'What is the output of: typeof null?',
        type: 'mcq',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 'object',
        explanation: 'In JavaScript, typeof null returns "object". This is actually a bug in JavaScript that has been kept for backward compatibility.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'q2',
        question: 'JavaScript is a compiled language.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'JavaScript is an interpreted language, not a compiled language. It is executed line by line at runtime.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'q3',
        question: 'What keyword is used to declare a constant in JavaScript?',
        type: 'short-answer',
        options: [],
        correctAnswer: 'const',
        explanation: 'The "const" keyword is used to declare constants in JavaScript. Once assigned, the value cannot be reassigned.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'q4',
        question: 'The ___ operator is used for strict equality comparison.',
        type: 'fill-blank',
        options: [],
        correctAnswer: '===',
        explanation: 'The === operator checks for strict equality, comparing both value and type without type coercion.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'q5',
        question: 'Which method is used to add an element to the end of an array?',
        type: 'mcq',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()',
        explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.',
        difficulty: 'easy',
        points: 5
      }
    ]
  },
  {
    id: '2',
    title: 'React Basics',
    topic: 'React',
    category: 'technology',
    difficulty: 'medium',
    totalQuestions: 5,
    questions: [
      {
        id: 'q1',
        question: 'What is JSX?',
        type: 'mcq',
        options: [
          'A JavaScript extension',
          'A syntax extension for JavaScript',
          'A new programming language',
          'A CSS framework'
        ],
        correctAnswer: 'A syntax extension for JavaScript',
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'q2',
        question: 'React components must return a single root element.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'React components must return a single root element. You can use fragments (<></>) if you don\'t want an extra DOM element.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'q3',
        question: 'Which hook is used for side effects in React?',
        type: 'short-answer',
        options: [],
        correctAnswer: 'useEffect',
        explanation: 'useEffect is the hook used for performing side effects in React functional components.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'q4',
        question: 'Props are ___ in React components.',
        type: 'fill-blank',
        options: [],
        correctAnswer: 'immutable',
        explanation: 'Props are read-only (immutable) in React. Components should never modify their own props.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'q5',
        question: 'What is the virtual DOM?',
        type: 'mcq',
        options: [
          'A copy of the real DOM kept in memory',
          'A new browser API',
          'A CSS technique',
          'A database'
        ],
        correctAnswer: 'A copy of the real DOM kept in memory',
        explanation: 'The virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to optimize updates.',
        difficulty: 'hard',
        points: 15
      }
    ]
  }
];

export const SAMPLE_USERS = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@mastishk.com',
    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6366f1&color=fff',
    role: 'user',
    stats: {
      totalQuizzes: 15,
      totalQuestions: 150,
      correctAnswers: 120,
      currentStreak: 5,
      longestStreak: 12,
      totalPoints: 1200,
      averageAccuracy: 80
    },
    achievements: [
      { name: 'First Quiz', icon: '🎯', unlockedAt: new Date('2026-04-01') },
      { name: 'Week Streak', icon: '🔥', unlockedAt: new Date('2026-04-15') }
    ],
    preferences: {
      theme: 'light',
      notifications: true,
      voiceMode: false
    }
  }
];

export const SAMPLE_LEADERBOARD = [
  { rank: 1, name: 'Alex Johnson', avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff', totalPoints: 5000, averageAccuracy: 95, totalQuizzes: 50, currentStreak: 30 },
  { rank: 2, name: 'Sarah Williams', avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=8b5cf6&color=fff', totalPoints: 4500, averageAccuracy: 92, totalQuizzes: 45, currentStreak: 25 },
  { rank: 3, name: 'Michael Brown', avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=ec4899&color=fff', totalPoints: 4200, averageAccuracy: 90, totalQuizzes: 42, currentStreak: 20 },
  { rank: 4, name: 'Emily Davis', avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=10b981&color=fff', totalPoints: 3800, averageAccuracy: 88, totalQuizzes: 38, currentStreak: 15 },
  { rank: 5, name: 'Demo User', avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6366f1&color=fff', totalPoints: 1200, averageAccuracy: 80, totalQuizzes: 15, currentStreak: 5 },
];

export const SAMPLE_PERFORMANCE = [
  { topic: 'JavaScript', category: 'technology', averageAccuracy: 85, totalAttempts: 5 },
  { topic: 'React', category: 'technology', averageAccuracy: 75, totalAttempts: 3 },
  { topic: 'CSS', category: 'technology', averageAccuracy: 90, totalAttempts: 4 },
  { topic: 'HTML', category: 'technology', averageAccuracy: 95, totalAttempts: 3 },
];

export const QUIZ_TEMPLATES = {
  javascript: {
    title: 'JavaScript Quiz',
    topic: 'JavaScript',
    category: 'technology',
    questions: [
      {
        question: 'What is a closure in JavaScript?',
        type: 'mcq',
        options: [
          'A function with access to its outer scope',
          'A way to close the browser',
          'A CSS property',
          'A database connection'
        ],
        correctAnswer: 'A function with access to its outer scope',
        explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
        difficulty: 'hard',
        points: 15
      },
      {
        question: 'JavaScript supports object-oriented programming.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'JavaScript supports object-oriented programming through prototypes and ES6 classes.',
        difficulty: 'easy',
        points: 5
      }
    ]
  },
  python: {
    title: 'Python Quiz',
    topic: 'Python',
    category: 'technology',
    questions: [
      {
        question: 'What is the output of: print(type([]))?',
        type: 'mcq',
        options: ['<class \'list\'>', '<class \'array\'>', '<class \'tuple\'>', '<class \'dict\'>'],
        correctAnswer: '<class \'list\'>',
        explanation: '[] creates an empty list in Python, and type() returns the class type.',
        difficulty: 'easy',
        points: 5
      },
      {
        question: 'Python is an interpreted language.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Python is an interpreted language, meaning code is executed line by line.',
        difficulty: 'easy',
        points: 5
      }
    ]
  }
};
