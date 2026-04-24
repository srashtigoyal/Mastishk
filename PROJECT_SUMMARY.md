# 🧠 Mastishk - Project Summary

## 📖 Overview

**Mastishk** is a production-ready, full-stack AI-powered quiz platform built with modern technologies. It enables users to generate unlimited quizzes on any topic using Groq AI, track their learning progress, compete on leaderboards, and receive personalized study recommendations.

---

## ✨ Key Features

### 🎯 Core Functionality
- **AI Quiz Generation**: Generate quizzes on any topic using Groq API
- **Multiple Question Types**: MCQ, True/False, Fill in the Blanks, Short Answer
- **Difficulty Levels**: Easy, Medium, Hard, Mixed
- **File Upload**: Generate quizzes from PDF/text files
- **Instant Feedback**: Detailed explanations for every answer

### 📊 Analytics & Tracking
- **Performance Dashboard**: Comprehensive analytics and insights
- **Topic-wise Analysis**: Track performance by subject
- **Weak Area Detection**: AI-powered recommendations
- **Progress Tracking**: Visual charts and graphs
- **Streak System**: Daily learning streaks

### 🏆 Gamification
- **Global Leaderboard**: Compete with users worldwide
- **Daily Challenges**: New quizzes every day
- **Achievement Badges**: Unlock rewards
- **Points & Levels**: Progression system
- **Category Rankings**: Subject-specific leaderboards

### 👨‍💼 Admin Features
- **User Management**: Monitor and manage users
- **Platform Analytics**: System-wide statistics
- **Content Moderation**: Review and delete quizzes
- **System Health**: Monitor API and database

### 🎨 UI/UX
- **Premium Design**: Glassmorphism and gradients
- **Dark/Light Mode**: Seamless theme switching
- **Fully Responsive**: Mobile-first design
- **Smooth Animations**: Framer Motion
- **Accessible**: WCAG compliant

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: ShadCN UI
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand
- **Forms**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **AI Integration**: Groq SDK
- **File Processing**: Multer, PDF-Parse
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan

### DevOps & Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **Database**: MongoDB Atlas
- **Version Control**: Git

---

## 📁 Project Structure

```
mastishk/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/             # Protected routes
│   │   ├── dashboard/           # User dashboard
│   │   ├── quiz/                # Quiz pages
│   │   ├── results/             # Results page
│   │   ├── history/             # Quiz history
│   │   ├── leaderboard/         # Leaderboards
│   │   └── profile/             # User profile
│   ├── admin/                   # Admin panel
│   ├── layout.js                # Root layout
│   ├── page.js                  # Landing page
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   └── progress.jsx
│   ├── layout/                  # Layout components
│   ├── quiz/                    # Quiz components
│   └── dashboard/               # Dashboard components
│
├── lib/                         # Utilities
│   ├── api.js                   # API client
│   ├── utils.js                 # Helper functions
│   └── constants.js             # App constants
│
├── store/                       # Zustand stores
│   ├── authStore.js             # Authentication
│   ├── quizStore.js             # Quiz state
│   └── themeStore.js            # Theme
│
├── server/                      # Backend
│   ├── models/                  # Mongoose models
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Performance.js
│   ├── controllers/             # Route controllers
│   │   ├── authController.js
│   │   ├── quizController.js
│   │   ├── analyticsController.js
│   │   ├── leaderboardController.js
│   │   └── adminController.js
│   ├── routes/                  # Express routes
│   │   ├── authRoutes.js
│   │   ├── quizRoutes.js
│   │   ├── analyticsRoutes.js
│   │   ├── leaderboardRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/              # Custom middleware
│   │   ├── auth.js
│   │   ├── validator.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── services/                # Business logic
│   │   ├── groqService.js       # AI integration
│   │   └── pdfService.js        # File processing
│   ├── config/                  # Configuration
│   │   └── database.js
│   ├── utils/                   # Helper functions
│   │   └── seedAdmin.js
│   └── index.js                 # Server entry
│
├── public/                      # Static assets
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── jsconfig.json                # Path aliases
├── README.md                    # Main documentation
├── SETUP.md                     # Setup guide
├── DEPLOYMENT.md                # Deployment guide
└── PROJECT_SUMMARY.md           # This file
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/password` - Update password

### Quiz
- `POST /api/quiz/generate` - Generate AI quiz
- `POST /api/quiz/upload` - Upload file for quiz
- `GET /api/quiz/:id` - Get quiz by ID
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/history` - Get quiz history
- `DELETE /api/quiz/:id` - Delete quiz

### Analytics
- `GET /api/analytics/dashboard` - Dashboard data
- `GET /api/analytics/performance` - Performance metrics
- `GET /api/analytics/weak-topics` - Weak areas
- `GET /api/analytics/stats` - Quiz statistics

### Leaderboard
- `GET /api/leaderboard/global` - Global rankings
- `GET /api/leaderboard/daily` - Daily challenge
- `GET /api/leaderboard/category/:category` - Category rankings
- `GET /api/leaderboard/streaks` - Streak rankings

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/users/:id` - Get user details
- `PUT /api/admin/users/:id/status` - Update user status
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/stats` - Platform statistics
- `DELETE /api/admin/quiz/:id` - Delete quiz
- `GET /api/admin/health` - System health

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Express Validator
- **CORS Protection**: Configured origins
- **Helmet**: Security headers
- **MongoDB Injection**: Mongoose sanitization
- **XSS Protection**: Input sanitization

---

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  role: String (user/admin),
  stats: {
    totalQuizzes, totalQuestions, correctAnswers,
    currentStreak, longestStreak, totalPoints, averageAccuracy
  },
  achievements: Array,
  preferences: { theme, notifications, voiceMode },
  isActive: Boolean,
  lastLogin: Date
}
```

### Quiz Model
```javascript
{
  user: ObjectId,
  title: String,
  topic: String,
  category: String,
  difficulty: String,
  questions: [{
    question, type, options, correctAnswer, explanation, difficulty, points
  }],
  totalQuestions: Number,
  timeLimit: Number,
  isCompleted: Boolean,
  score: Number,
  correctAnswers: Number,
  wrongAnswers: Number,
  accuracy: Number,
  timeTaken: Number,
  userAnswers: Array,
  generatedFrom: String,
  sourceFile: String,
  isDaily: Boolean,
  tags: Array
}
```

### Performance Model
```javascript
{
  user: ObjectId,
  topic: String,
  category: String,
  totalAttempts: Number,
  totalQuestions: Number,
  correctAnswers: Number,
  wrongAnswers: Number,
  averageAccuracy: Number,
  averageTimeTaken: Number,
  totalPoints: Number,
  difficultyBreakdown: { easy, medium, hard },
  lastAttempt: Date,
  isWeakArea: Boolean
}
```

---

## 🚀 Getting Started

### Local Development
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Start backend
npm run server:dev

# Start frontend (new terminal)
npm run dev
```

### Production Deployment
See `DEPLOYMENT.md` for complete guide.

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Voice-based quiz mode
- [ ] Google OAuth integration
- [ ] Real-time multiplayer quizzes
- [ ] Quiz sharing and collaboration
- [ ] Mobile app (React Native)
- [ ] Advanced AI study recommendations
- [ ] Spaced repetition system
- [ ] Video content integration
- [ ] Certificate generation
- [ ] API for third-party integrations

### Technical Improvements
- [ ] Redis caching
- [ ] WebSocket for real-time features
- [ ] GraphQL API
- [ ] Microservices architecture
- [ ] Kubernetes deployment
- [ ] CI/CD pipeline
- [ ] Automated testing
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] Analytics (Google Analytics)

---

## 📈 Performance Metrics

### Target Metrics
- **Page Load**: < 2 seconds
- **API Response**: < 500ms
- **Quiz Generation**: < 5 seconds
- **Uptime**: 99.9%
- **Lighthouse Score**: > 90

### Optimization Techniques
- Code splitting
- Image optimization
- Lazy loading
- API caching
- Database indexing
- CDN for static assets
- Compression (gzip)

---

## 🧪 Testing Strategy

### Unit Tests
- Model validation
- Utility functions
- API endpoints

### Integration Tests
- Authentication flow
- Quiz generation
- Data persistence

### E2E Tests
- User registration
- Quiz taking flow
- Dashboard navigation

---

## 📝 Code Quality

### Standards
- ESLint configuration
- Prettier formatting
- Consistent naming conventions
- Comprehensive comments
- Error handling
- Logging

### Best Practices
- DRY (Don't Repeat Yourself)
- SOLID principles
- RESTful API design
- Secure coding practices
- Performance optimization
- Accessibility compliance

---

## 🤝 Contributing

### Development Workflow
1. Fork repository
2. Create feature branch
3. Make changes
4. Write tests
5. Submit pull request

### Code Review Checklist
- [ ] Code follows style guide
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance impact assessed
- [ ] Security reviewed

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👥 Team

- **Project Lead**: Your Name
- **Backend**: Your Name
- **Frontend**: Your Name
- **UI/UX**: Your Name

---

## 📞 Support

- **Documentation**: README.md, SETUP.md, DEPLOYMENT.md
- **Issues**: GitHub Issues
- **Email**: support@mastishk.com
- **Discord**: [Join our community]

---

## 🎉 Acknowledgments

- **Groq**: AI inference platform
- **ShadCN**: UI components
- **Vercel**: Hosting platform
- **MongoDB**: Database
- **Open Source Community**: Various libraries

---

**Built with ❤️ for learners worldwide**

*Last Updated: April 24, 2026*
