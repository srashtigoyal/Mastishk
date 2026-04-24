# 🧠 Mastishk - AI-Powered Quiz Assistant (Frontend Only)

> A production-ready, enterprise-grade quiz platform powered by Groq AI

![Mastishk Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=Mastishk+-+AI+Quiz+Platform)

## ✨ Features

### 🎯 Core Features
- **AI-Powered Quiz Generation** - Generate quizzes on any topic using Groq API
- **Multiple Quiz Types** - MCQ, True/False, Fill in the Blanks, Short Answer
- **Smart Content Upload** - Upload PDFs, notes, or text to generate custom quizzes
- **Difficulty Levels** - Easy, Medium, Hard with adaptive learning
- **Instant Feedback** - Real-time scoring with detailed explanations
- **Voice Quiz Mode** - Practice quizzes using voice commands

### 📊 Analytics & Tracking
- **Performance Dashboard** - Track accuracy, progress, and improvement
- **Topic Analysis** - Identify weak areas and strong subjects
- **Streak Tracking** - Maintain daily learning streaks
- **Achievement System** - Unlock badges and milestones
- **Quiz History** - Review all past attempts with detailed insights

### 🎨 Premium UI/UX
- **Modern Design** - Glassmorphism, gradients, smooth animations
- **Dark/Light Mode** - Seamless theme switching
- **Fully Responsive** - Perfect experience on all devices
- **Framer Motion** - Buttery smooth animations
- **ShadCN UI** - Beautiful, accessible components

### 🏆 Gamification
- **Global Leaderboard** - Compete with learners worldwide
- **Daily Challenges** - New quizzes every day
- **Smart Revision** - AI-powered study recommendations
- **Personalized Learning** - Adaptive difficulty based on performance

### 👨‍💼 Admin Dashboard
- **User Management** - Monitor and manage users
- **Quiz Analytics** - Track platform-wide statistics
- **Content Moderation** - Review and manage quizzes
- **System Health** - Monitor API usage and performance

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **ShadCN UI** - Component library
- **Recharts** - Data visualization
- **Zustand** - State management
- **React Hook Form** - Form handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Groq SDK** - AI integration

### Security & Performance
- **Helmet** - Security headers
- **Rate Limiting** - API protection
- **Compression** - Response optimization
- **Morgan** - Request logging
- **Express Validator** - Input validation

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- Groq API Key ([Get it here](https://console.groq.com))

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/mastishk.git
cd mastishk
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
GROQ_API_KEY=your_groq_api_key
```

### Step 4: Start Development Servers

**Terminal 1 - Backend:**
```bash
npm run server:dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 🌐 Deployment

### Deploy to Vercel (Frontend)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Add Environment Variables:**
Go to Vercel Dashboard → Settings → Environment Variables

### Deploy to Render (Backend)

1. **Create New Web Service** on [Render](https://render.com)

2. **Configure:**
   - Build Command: `npm install`
   - Start Command: `npm run server`

3. **Add Environment Variables:**
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `GROQ_API_KEY`
   - `CLIENT_URL` (your Vercel URL)

### MongoDB Atlas Setup

1. **Create Cluster** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Get Connection String:**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string

3. **Whitelist IP:**
   - Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)

## 📁 Project Structure

```
mastishk/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth routes
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Protected routes
│   │   ├── dashboard/
│   │   ├── quiz/
│   │   ├── results/
│   │   ├── history/
│   │   ├── leaderboard/
│   │   └── profile/
│   ├── admin/               # Admin panel
│   ├── api/                 # API routes (proxy)
│   ├── layout.js
│   └── page.js              # Landing page
├── components/              # React components
│   ├── ui/                  # ShadCN components
│   ├── layout/              # Layout components
│   ├── quiz/                # Quiz components
│   ├── dashboard/           # Dashboard components
│   └── landing/             # Landing page components
├── lib/                     # Utilities
│   ├── utils.js
│   ├── api.js
│   └── constants.js
├── store/                   # Zustand stores
│   ├── authStore.js
│   ├── quizStore.js
│   └── themeStore.js
├── server/                  # Backend
│   ├── config/              # Configuration
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── middleware/          # Custom middleware
│   ├── services/            # Business logic
│   ├── utils/               # Helper functions
│   └── index.js             # Server entry
├── public/                  # Static assets
├── styles/                  # Global styles
└── package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Quiz
- `POST /api/quiz/generate` - Generate AI quiz
- `POST /api/quiz/upload` - Upload file for quiz
- `GET /api/quiz/:id` - Get quiz by ID
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/history` - Get user quiz history

### Analytics
- `GET /api/analytics/dashboard` - Get user analytics
- `GET /api/analytics/performance` - Get performance data
- `GET /api/analytics/weak-topics` - Get weak areas

### Leaderboard
- `GET /api/leaderboard/global` - Global rankings
- `GET /api/leaderboard/daily` - Daily challenge rankings

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/stats` - Platform statistics
- `DELETE /api/admin/quiz/:id` - Delete quiz

## 🎨 Design System

### Colors
- **Primary:** `#6366f1` (Indigo)
- **Secondary:** `#8b5cf6` (Purple)
- **Accent:** `#ec4899` (Pink)
- **Success:** `#10b981` (Green)
- **Warning:** `#f59e0b` (Amber)
- **Error:** `#ef4444` (Red)

### Typography
- **Font Family:** Inter, system-ui, sans-serif
- **Headings:** Bold, gradient text
- **Body:** Regular, high contrast

### Components
- Glassmorphism cards
- Smooth hover transitions
- Elegant shadows
- Gradient backgrounds
- Animated interactions

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Groq](https://groq.com) - Lightning-fast AI inference
- [ShadCN UI](https://ui.shadcn.com) - Beautiful components
- [Vercel](https://vercel.com) - Deployment platform
- [MongoDB](https://www.mongodb.com) - Database

## 📧 Contact

- **Website:** [mastishk.com](https://mastishk.com)
- **Email:** support@mastishk.com
- **Twitter:** [@mastishk](https://twitter.com/mastishk)

---

Made with ❤️ by the Mastishk Team
