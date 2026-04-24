export const QUIZ_TYPES = [
  { value: 'mcq', label: 'Multiple Choice', icon: '📝' },
  { value: 'true-false', label: 'True/False', icon: '✓✗' },
  { value: 'fill-blank', label: 'Fill in the Blank', icon: '___' },
  { value: 'short-answer', label: 'Short Answer', icon: '✍️' },
  { value: 'mixed', label: 'Mixed Types', icon: '🎲' },
];

export const DIFFICULTY_LEVELS = [
  { value: 'easy', label: 'Easy', color: 'green', icon: '😊' },
  { value: 'medium', label: 'Medium', color: 'yellow', icon: '🤔' },
  { value: 'hard', label: 'Hard', color: 'red', icon: '😰' },
  { value: 'mixed', label: 'Mixed', color: 'purple', icon: '🎯' },
];

export const CATEGORIES = [
  { value: 'science', label: 'Science', icon: '🔬' },
  { value: 'mathematics', label: 'Mathematics', icon: '🔢' },
  { value: 'history', label: 'History', icon: '📜' },
  { value: 'geography', label: 'Geography', icon: '🌍' },
  { value: 'literature', label: 'Literature', icon: '📚' },
  { value: 'technology', label: 'Technology', icon: '💻' },
  { value: 'business', label: 'Business', icon: '💼' },
  { value: 'arts', label: 'Arts', icon: '🎨' },
  { value: 'sports', label: 'Sports', icon: '⚽' },
  { value: 'general', label: 'General Knowledge', icon: '📖' },
  { value: 'custom', label: 'Custom', icon: '✨' },
];

export const ACHIEVEMENTS = [
  { name: 'First Quiz', icon: '🎯', description: 'Complete your first quiz' },
  { name: 'Perfect Score', icon: '💯', description: 'Get 100% accuracy' },
  { name: 'Week Streak', icon: '🔥', description: 'Maintain a 7-day streak' },
  { name: 'Month Streak', icon: '🔥🔥', description: 'Maintain a 30-day streak' },
  { name: 'Quiz Master', icon: '👑', description: 'Complete 100 quizzes' },
  { name: 'Speed Demon', icon: '⚡', description: 'Complete a quiz in under 5 minutes' },
  { name: 'Knowledge Seeker', icon: '📚', description: 'Try all quiz categories' },
  { name: 'Top 10', icon: '🏆', description: 'Reach top 10 on leaderboard' },
];

export const TIME_RANGES = [
  { value: '7', label: 'Last 7 days' },
  { value: '30', label: 'Last 30 days' },
  { value: '90', label: 'Last 3 months' },
  { value: 'all', label: 'All time' },
];

export const LEADERBOARD_TYPES = [
  { value: 'global', label: 'Global', icon: '🌍' },
  { value: 'daily', label: 'Daily Challenge', icon: '📅' },
  { value: 'streaks', label: 'Streaks', icon: '🔥' },
];

export const QUESTION_LIMITS = [5, 10, 15, 20, 25, 30];

export const SUPPORTED_FILE_TYPES = [
  'application/pdf',
  'text/plain',
  'text/markdown',
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  QUIZ_GENERATE: '/quiz/generate',
  QUIZ_PLAY: '/quiz/play',
  QUIZ_RESULTS: '/quiz/results',
  HISTORY: '/history',
  LEADERBOARD: '/leaderboard',
  PROFILE: '/profile',
  ADMIN: '/admin',
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
};
