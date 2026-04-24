# 🎯 START HERE - Mastishk Complete Guide

**Welcome to Mastishk!** This is your starting point for everything you need to know.

---

## 📚 Documentation Overview

Choose the guide that matches your needs:

### 🚀 Quick Start (5 minutes)
**File**: `QUICKSTART.md`  
**For**: Getting the app running ASAP  
**Includes**: Minimal setup, basic commands

### 📖 Complete Setup (15 minutes)
**File**: `SETUP.md`  
**For**: Detailed local development setup  
**Includes**: Troubleshooting, customization, testing

### ✅ Installation Checklist
**File**: `INSTALLATION_CHECKLIST.md`  
**For**: Step-by-step verification  
**Includes**: Every check needed for success

### 🌐 Production Deployment (30 minutes)
**File**: `DEPLOYMENT.md`  
**For**: Deploying to Vercel + Render  
**Includes**: MongoDB Atlas, environment setup, monitoring

### 📊 Project Overview
**File**: `PROJECT_SUMMARY.md`  
**For**: Understanding the architecture  
**Includes**: Tech stack, structure, features

### 🤝 Contributing
**File**: `CONTRIBUTING.md`  
**For**: Contributing to the project  
**Includes**: Code style, PR process, guidelines

### 📘 Main Documentation
**File**: `README.md`  
**For**: Complete project information  
**Includes**: Features, installation, deployment, API

---

## 🎯 Choose Your Path

### Path 1: "I want to try it NOW" ⚡
1. Read `QUICKSTART.md`
2. Follow 4 simple steps
3. Start using Mastishk!

### Path 2: "I want to develop locally" 💻
1. Read `SETUP.md`
2. Configure everything properly
3. Start building features!

### Path 3: "I want to deploy to production" 🚀
1. Read `SETUP.md` first
2. Test locally
3. Follow `DEPLOYMENT.md`
4. Go live!

### Path 4: "I want to understand the code" 🧠
1. Read `PROJECT_SUMMARY.md`
2. Explore the codebase
3. Check `CONTRIBUTING.md`
4. Start contributing!

---

## 📋 Prerequisites

Before starting ANY path, ensure you have:

### Required
- ✅ **Node.js 18+** - [Download](https://nodejs.org/)
- ✅ **MongoDB** - Local or [Atlas](https://www.mongodb.com/cloud/atlas)
- ✅ **Groq API Key** - [Get Free](https://console.groq.com)

### Optional (for deployment)
- ⭐ **Vercel Account** - [Sign Up](https://vercel.com)
- ⭐ **Render Account** - [Sign Up](https://render.com)

---

## 🚀 Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your credentials

# 3. Start backend (Terminal 1)
npm run server:dev

# 4. Start frontend (Terminal 2)
npm run dev

# 5. Open browser
# Visit: http://localhost:3000
```

---

## 🗂️ Project Structure

```
mastishk/
├── 📄 START_HERE.md          ← You are here!
├── 📄 README.md              ← Main documentation
├── 📄 QUICKSTART.md          ← 5-minute setup
├── 📄 SETUP.md               ← Detailed setup
├── 📄 DEPLOYMENT.md          ← Production deployment
├── 📄 PROJECT_SUMMARY.md     ← Architecture overview
├── 📄 INSTALLATION_CHECKLIST.md ← Verification steps
├── 📄 CONTRIBUTING.md        ← Contribution guide
│
├── 📁 app/                   ← Next.js pages
├── 📁 components/            ← React components
├── 📁 lib/                   ← Utilities
├── 📁 store/                 ← State management
├── 📁 server/                ← Backend API
│   ├── 📁 models/           ← Database models
│   ├── 📁 controllers/      ← Route handlers
│   ├── 📁 routes/           ← API routes
│   ├── 📁 services/         ← Business logic
│   └── 📁 middleware/       ← Custom middleware
│
├── 📄 package.json           ← Dependencies
├── 📄 .env.example           ← Environment template
└── 📄 .gitignore             ← Git ignore rules
```

---

## 🎓 Learning Path

### Week 1: Setup & Basics
- [ ] Complete local setup
- [ ] Create account
- [ ] Generate first quiz
- [ ] Explore dashboard
- [ ] Try all quiz types

### Week 2: Features
- [ ] Upload PDF for quiz
- [ ] Check analytics
- [ ] View leaderboard
- [ ] Customize profile
- [ ] Try dark mode

### Week 3: Advanced
- [ ] Understand codebase
- [ ] Make small changes
- [ ] Add custom category
- [ ] Modify UI colors
- [ ] Create admin user

### Week 4: Deployment
- [ ] Setup MongoDB Atlas
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Vercel
- [ ] Configure domains
- [ ] Monitor performance

---

## 🔑 Key Concepts

### Frontend (Next.js)
- **App Router**: Modern Next.js routing
- **Server Components**: Optimized rendering
- **Client Components**: Interactive UI
- **Zustand**: State management
- **Tailwind CSS**: Utility-first styling

### Backend (Express)
- **RESTful API**: Standard HTTP methods
- **JWT Auth**: Secure authentication
- **Mongoose**: MongoDB ODM
- **Middleware**: Request processing
- **Services**: Business logic layer

### AI Integration (Groq)
- **Quiz Generation**: AI-powered questions
- **Explanations**: Detailed answers
- **Recommendations**: Personalized learning
- **Content Analysis**: PDF processing

---

## 🛠️ Common Tasks

### Create Admin User
```bash
node server/utils/seedAdmin.js
```

### Reset Database
```javascript
// In MongoDB shell
use mastishk
db.dropDatabase()
```

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "hsl(238 76% 62%)", // Change this
}
```

### Add New Category
Edit `lib/constants.js`:
```javascript
{ value: 'music', label: 'Music', icon: '🎵' }
```

### Test API Endpoint
```bash
curl http://localhost:5000/health
```

---

## 🐛 Troubleshooting

### Issue: MongoDB Connection Failed
**Solution**: Check connection string in `.env`
```env
MONGODB_URI=mongodb://localhost:27017/mastishk
```

### Issue: Groq API Error
**Solution**: Verify API key is correct
```env
GROQ_API_KEY=gsk_...
```

### Issue: Port Already in Use
**Solution**: Change port in `.env`
```env
PORT=5001
```

### Issue: Module Not Found
**Solution**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Getting Help

### Documentation
1. Check relevant `.md` file
2. Search for your issue
3. Follow troubleshooting steps

### Community
- **GitHub Issues**: Report bugs
- **Discussions**: Ask questions
- **Discord**: Real-time help
- **Email**: support@mastishk.com

### Self-Help Resources
- Console logs (F12 in browser)
- Backend terminal output
- MongoDB logs
- Network tab (DevTools)

---

## ✅ Success Checklist

Before considering setup complete:

- [ ] Both servers running without errors
- [ ] Can access http://localhost:3000
- [ ] Can create account
- [ ] Can generate quiz
- [ ] Can take quiz
- [ ] Can view results
- [ ] Dashboard shows data
- [ ] No console errors

---

## 🎯 Next Steps

### After Setup
1. ✅ Verify everything works
2. 📚 Read `PROJECT_SUMMARY.md`
3. 🎨 Customize branding
4. 🧪 Test all features
5. 🚀 Deploy to production

### For Developers
1. 📖 Read `CONTRIBUTING.md`
2. 🔍 Explore codebase
3. 🛠️ Make improvements
4. 🤝 Submit PRs
5. 🌟 Star the repo!

### For Users
1. 🎓 Create quizzes
2. 📊 Track progress
3. 🏆 Climb leaderboard
4. 💡 Share feedback
5. 🎉 Enjoy learning!

---

## 🌟 Pro Tips

### Development
- Use `nodemon` for auto-restart
- Enable React DevTools
- Use MongoDB Compass for DB
- Keep console open for errors
- Test on multiple browsers

### Performance
- Optimize images
- Use lazy loading
- Enable caching
- Monitor API calls
- Check bundle size

### Security
- Never commit `.env`
- Use strong JWT secret
- Keep dependencies updated
- Validate all inputs
- Use HTTPS in production

---

## 📈 Roadmap

### Current Version: 1.0.0
- ✅ AI quiz generation
- ✅ Multiple question types
- ✅ Analytics dashboard
- ✅ Leaderboards
- ✅ File upload

### Coming Soon: 1.1.0
- 🔜 Voice quiz mode
- 🔜 Google OAuth
- 🔜 Real-time multiplayer
- 🔜 Mobile app
- 🔜 Advanced AI features

---

## 🎉 You're Ready!

Choose your path above and start your Mastishk journey!

### Quick Links
- 🚀 [Quick Start](QUICKSTART.md)
- 📖 [Full Setup](SETUP.md)
- 🌐 [Deployment](DEPLOYMENT.md)
- 📊 [Project Info](PROJECT_SUMMARY.md)

---

**Happy Learning! 🧠✨**

*Built with ❤️ for learners worldwide*

*Last Updated: April 24, 2026*
