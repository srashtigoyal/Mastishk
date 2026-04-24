import { create } from 'zustand';

const useQuizStore = create((set, get) => ({
  currentQuiz: null,
  currentQuestionIndex: 0,
  answers: [],
  timeElapsed: 0,
  isQuizActive: false,
  quizResult: null,

  // Start quiz
  startQuiz: (quiz) => {
    set({
      currentQuiz: quiz,
      currentQuestionIndex: 0,
      answers: Array(quiz.questions.length).fill(null),
      timeElapsed: 0,
      isQuizActive: true,
      quizResult: null,
    });
  },

  // Set answer for current question
  setAnswer: (answer) => {
    const { currentQuestionIndex, answers } = get();
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    set({ answers: newAnswers });
  },

  // Go to next question
  nextQuestion: () => {
    const { currentQuestionIndex, currentQuiz } = get();
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  // Go to previous question
  previousQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  // Go to specific question
  goToQuestion: (index) => {
    set({ currentQuestionIndex: index });
  },

  // Update time elapsed
  updateTime: (seconds) => {
    set({ timeElapsed: seconds });
  },

  // End quiz
  endQuiz: (result) => {
    set({
      isQuizActive: false,
      quizResult: result,
    });
  },

  // Reset quiz
  resetQuiz: () => {
    set({
      currentQuiz: null,
      currentQuestionIndex: 0,
      answers: [],
      timeElapsed: 0,
      isQuizActive: false,
      quizResult: null,
    });
  },

  // Get current question
  getCurrentQuestion: () => {
    const { currentQuiz, currentQuestionIndex } = get();
    return currentQuiz?.questions[currentQuestionIndex];
  },

  // Get current answer
  getCurrentAnswer: () => {
    const { answers, currentQuestionIndex } = get();
    return answers[currentQuestionIndex];
  },

  // Check if all questions answered
  isAllAnswered: () => {
    const { answers } = get();
    return answers.every((answer) => answer !== null && answer !== '');
  },

  // Get progress percentage
  getProgress: () => {
    const { currentQuestionIndex, currentQuiz } = get();
    if (!currentQuiz) return 0;
    return ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  },
}));

export default useQuizStore;
