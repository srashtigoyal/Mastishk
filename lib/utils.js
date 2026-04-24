import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function formatDateTime(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function calculateAccuracy(correct, total) {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

export function getAccuracyColor(accuracy) {
  if (accuracy >= 80) return 'text-green-500'
  if (accuracy >= 60) return 'text-yellow-500'
  return 'text-red-500'
}

export function getDifficultyColor(difficulty) {
  const colors = {
    easy: 'bg-green-500/20 text-green-500',
    medium: 'bg-yellow-500/20 text-yellow-500',
    hard: 'bg-red-500/20 text-red-500',
    mixed: 'bg-purple-500/20 text-purple-500'
  }
  return colors[difficulty] || colors.medium
}

export function getCategoryIcon(category) {
  const icons = {
    science: '🔬',
    mathematics: '🔢',
    history: '📜',
    geography: '🌍',
    literature: '📚',
    technology: '💻',
    business: '💼',
    arts: '🎨',
    sports: '⚽',
    general: '📖',
    custom: '✨'
  }
  return icons[category] || icons.general
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function generateAvatar(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=200`
}

export function getStreakEmoji(streak) {
  if (streak >= 30) return '🔥🔥🔥'
  if (streak >= 14) return '🔥🔥'
  if (streak >= 7) return '🔥'
  return '⭐'
}

export function getLevelInfo(points) {
  const level = Math.floor(points / 1000) + 1
  const currentLevelPoints = points % 1000
  const nextLevelPoints = 1000
  const progress = (currentLevelPoints / nextLevelPoints) * 100
  
  return {
    level,
    currentLevelPoints,
    nextLevelPoints,
    progress
  }
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePassword(password) {
  return password.length >= 6
}

export function getErrorMessage(error) {
  if (error.response?.data?.message) {
    return error.response.data.message
  }
  if (error.message) {
    return error.message
  }
  return 'An unexpected error occurred'
}
