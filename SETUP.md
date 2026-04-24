# 🚀 Mastishk - Quick Setup Guide

Get Mastishk running locally in 5 minutes!

## 📋 Prerequisites

Make sure you have these installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **MongoDB** (local or Atlas account)
- **Groq API Key** ([Get one free](https://console.groq.com))

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
# Navigate to the project
cd mastishk

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Database (choose one)
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/mastishk

# Option 2: MongoDB Atlas (recommended)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mastishk

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-min-32-characters

# Groq API
GROQ_API_KEY=your-groq-api-key-here
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
npm run server:dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 4. Open Application

Visit: **http://localhost:3000**

---

## 🎯 First Steps

1. **Create Account**: Click "Get Started Free"
2. **Generate Quiz**: Enter any topic (e.g., "JavaScript")
3. **Take Quiz**: Answer questions and get instant feedback
4. **View Analytics**: Check your dashboard for insights

---

## 🔧 Troubleshooting

### MongoDB Connection Error

**Problem**: `MongooseServerSelectionError`

**Solutions**:
- **Local MongoDB**: Make sure MongoDB is running
  ```bash
  # Windows
  net start MongoDB
  
  # Mac/Linux
  sudo systemctl start mongod
  ```
- **MongoDB Atlas**: Check connection string and IP whitelist

### Groq API Error

**Problem**: `Failed to generate quiz`

**Solutions**:
- Verify `GROQ_API_KEY` is correct
- Check you have API credits remaining
- Try a different model in `.env`:
  ```env
  GROQ_MODEL=llama2-70b-4096
  ```

### Port Already in Use

**Problem**: `Port 3000/5000 already in use`

**Solution**: Change ports in `.env`:
```env
PORT=5001  # Backend
```

And in `next.config.js` for frontend:
```bash
npm run dev -- -p 3001
```

### Module Not Found

**Problem**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 Project Structure

```
mastishk/
├── app/                    # Next.js pages
│   ├── (auth)/            # Auth pages (login, register)
│   ├── (dashboard)/       # Protected pages
│   ├── layout.js          # Root layout
│   └── page.js            # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── quiz/             # Quiz-specific components
├── lib/                   # Utilities
│   ├── api.js            # API client
│   ├── utils.js          # Helper functions
│   └── constants.js      # App constants
├── store/                 # Zustand stores
│   ├── authStore.js      # Authentication state
│   ├── quizStore.js      # Quiz state
│   └── themeStore.js     # Theme state
├── server/                # Backend
│   ├── models/           # Mongoose models
│   ├── controllers/      # Route controllers
│   ├── routes/           # Express routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # Business logic
│   └── index.js          # Server entry
└── public/               # Static assets
```

---

## 🧪 Testing the API

### Health Check
```bash
curl http://localhost:5000/health
```

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "Test123!"
  }'
```

### Generate Quiz
```bash
# First, get your token from login/register response
curl -X POST http://localhost:5000/api/quiz/generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "topic": "JavaScript",
    "difficulty": "medium",
    "numberOfQuestions": 5,
    "quizType": "mcq"
  }'
```

---

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(238 76% 62%)", // Change this
      },
    },
  },
}
```

### Add New Quiz Category

Edit `lib/constants.js`:
```javascript
export const CATEGORIES = [
  // ... existing categories
  { value: 'music', label: 'Music', icon: '🎵' },
];
```

### Modify AI Prompts

Edit `server/services/groqService.js` → `buildPrompt()` method

---

## 📊 Database Management

### View Data (MongoDB Compass)

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your `MONGODB_URI`
3. Browse collections: `users`, `quizzes`, `performances`

### Reset Database

```bash
# Connect to MongoDB
mongosh

# Switch to database
use mastishk

# Drop all collections
db.dropDatabase()
```

---

## 🔐 Create Admin User

### Method 1: MongoDB Compass
1. Open `users` collection
2. Find your user
3. Edit document
4. Change `role: "user"` to `role: "admin"`
5. Save

### Method 2: MongoDB Shell
```javascript
use mastishk
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

---

## 📦 Build for Production

### Frontend
```bash
npm run build
npm start
```

### Backend
```bash
NODE_ENV=production npm run server
```

---

## 🐛 Debug Mode

### Enable Detailed Logging

Backend - Edit `server/index.js`:
```javascript
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
```

Frontend - Check browser console for errors

### Common Issues

1. **CORS Error**: Check `CLIENT_URL` in backend `.env`
2. **401 Unauthorized**: Token expired, login again
3. **500 Server Error**: Check backend logs
4. **Build Fails**: Clear `.next` folder and rebuild

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Groq API Docs](https://console.groq.com/docs)

---

## 🆘 Need Help?

1. Check the logs (backend terminal)
2. Review this guide
3. Check `DEPLOYMENT.md` for production setup
4. Verify all environment variables

---

## ✅ Checklist

Before starting development:

- [ ] Node.js 18+ installed
- [ ] MongoDB running (local or Atlas)
- [ ] Groq API key obtained
- [ ] `.env` file configured
- [ ] Dependencies installed (`npm install`)
- [ ] Backend running (port 5000)
- [ ] Frontend running (port 3000)
- [ ] Can access http://localhost:3000
- [ ] Can create account and login

---

## 🎉 You're Ready!

Start building amazing quiz experiences with Mastishk!

For deployment to production, see `DEPLOYMENT.md`.
