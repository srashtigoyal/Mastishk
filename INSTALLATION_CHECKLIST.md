# ✅ Mastishk Installation Checklist

Use this checklist to ensure proper installation and setup.

## 📋 Pre-Installation

### System Requirements
- [ ] Node.js 18.0.0 or higher installed
  ```bash
  node --version  # Should show v18.x.x or higher
  ```
- [ ] npm 9.0.0 or higher installed
  ```bash
  npm --version  # Should show 9.x.x or higher
  ```
- [ ] Git installed (for version control)
  ```bash
  git --version
  ```

### Accounts & API Keys
- [ ] MongoDB account created (Atlas or local)
- [ ] Groq API account created
- [ ] Groq API key obtained
- [ ] Vercel account created (for deployment)
- [ ] Render account created (for deployment)

---

## 🚀 Installation Steps

### 1. Project Setup
- [ ] Navigated to project directory
  ```bash
  cd mastishk
  ```
- [ ] Dependencies installed
  ```bash
  npm install
  ```
- [ ] No installation errors
- [ ] `node_modules` folder created

### 2. Environment Configuration
- [ ] `.env` file created from template
  ```bash
  cp .env.example .env
  ```
- [ ] MongoDB URI configured
  ```env
  MONGODB_URI=mongodb://localhost:27017/mastishk
  # OR
  MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/mastishk
  ```
- [ ] JWT Secret generated and added
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- [ ] Groq API key added
  ```env
  GROQ_API_KEY=your_actual_groq_api_key
  ```
- [ ] All required environment variables set

### 3. Database Setup
- [ ] MongoDB running (if local)
  ```bash
  # Windows
  net start MongoDB
  
  # Mac/Linux
  sudo systemctl start mongod
  ```
- [ ] MongoDB connection tested
- [ ] Database `mastishk` created (auto-created on first connection)

### 4. Backend Setup
- [ ] Backend server starts without errors
  ```bash
  npm run server:dev
  ```
- [ ] Console shows "MongoDB Connected"
- [ ] Console shows "Mastishk server running on port 5000"
- [ ] Health endpoint accessible
  ```bash
  curl http://localhost:5000/health
  ```

### 5. Frontend Setup
- [ ] Frontend server starts without errors
  ```bash
  npm run dev
  ```
- [ ] Console shows "Ready on http://localhost:3000"
- [ ] No compilation errors
- [ ] Browser opens successfully

---

## 🧪 Functionality Testing

### Authentication
- [ ] Landing page loads correctly
- [ ] Can navigate to registration page
- [ ] Can create new account
- [ ] Receives success message
- [ ] Redirected to dashboard
- [ ] Can logout
- [ ] Can login with created account

### Quiz Generation
- [ ] Can access quiz generation page
- [ ] Can enter topic
- [ ] Can select difficulty
- [ ] Can select number of questions
- [ ] Can select quiz type
- [ ] Quiz generates successfully (within 10 seconds)
- [ ] Questions display correctly
- [ ] Options are visible

### Quiz Taking
- [ ] Can select answers
- [ ] Can navigate between questions
- [ ] Progress bar updates
- [ ] Timer works (if enabled)
- [ ] Can submit quiz
- [ ] Results display correctly
- [ ] Explanations are shown
- [ ] Score is calculated correctly

### Dashboard
- [ ] Dashboard loads
- [ ] User stats display
- [ ] Recent quizzes show
- [ ] Charts render correctly
- [ ] No console errors

### File Upload
- [ ] Can upload PDF file
- [ ] File processes successfully
- [ ] Quiz generates from content
- [ ] Questions are relevant to content

### Analytics
- [ ] Performance page loads
- [ ] Charts display data
- [ ] Weak topics identified
- [ ] Recommendations shown

### Leaderboard
- [ ] Global leaderboard loads
- [ ] User rank displays
- [ ] Other users visible
- [ ] Daily challenge accessible

### Theme
- [ ] Can toggle dark/light mode
- [ ] Theme persists on refresh
- [ ] All pages respect theme

---

## 🔐 Security Checks

- [ ] Passwords are hashed (not visible in database)
- [ ] JWT tokens are generated
- [ ] Protected routes require authentication
- [ ] Unauthorized access is blocked
- [ ] Rate limiting is active
- [ ] CORS is configured correctly
- [ ] No sensitive data in console logs

---

## 📊 Database Verification

### Collections Created
- [ ] `users` collection exists
- [ ] `quizzes` collection exists
- [ ] `performances` collection exists

### Sample Data
- [ ] At least one user document
- [ ] At least one quiz document
- [ ] User stats are updating

### Indexes
- [ ] User email index exists
- [ ] Quiz user index exists
- [ ] Performance user index exists

---

## 🎨 UI/UX Checks

### Responsive Design
- [ ] Desktop view (1920x1080)
- [ ] Laptop view (1366x768)
- [ ] Tablet view (768x1024)
- [ ] Mobile view (375x667)

### Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient
- [ ] Alt text on images
- [ ] ARIA labels present

---

## 🚀 Performance Checks

- [ ] Page load time < 3 seconds
- [ ] Quiz generation < 10 seconds
- [ ] No memory leaks
- [ ] Images optimized
- [ ] No unnecessary re-renders
- [ ] API responses < 1 second

---

## 📝 Documentation Review

- [ ] README.md is clear
- [ ] SETUP.md is followed successfully
- [ ] DEPLOYMENT.md is understandable
- [ ] API endpoints documented
- [ ] Code comments are helpful

---

## 🐛 Common Issues Resolved

### MongoDB Connection
- [ ] Connection string is correct
- [ ] IP whitelist configured (Atlas)
- [ ] Database user has permissions
- [ ] Network allows connection

### Groq API
- [ ] API key is valid
- [ ] API has credits/quota
- [ ] Model name is correct
- [ ] Network allows API calls

### Port Conflicts
- [ ] Port 3000 is available
- [ ] Port 5000 is available
- [ ] No other apps using ports

### Dependencies
- [ ] All packages installed
- [ ] No version conflicts
- [ ] Compatible Node version
- [ ] No deprecated warnings

---

## 🎯 Optional Enhancements

- [ ] Admin user created
  ```bash
  node server/utils/seedAdmin.js
  ```
- [ ] Sample quizzes generated
- [ ] Custom categories added
- [ ] Logo/branding customized
- [ ] Email notifications configured
- [ ] Analytics integrated
- [ ] Error tracking setup

---

## 📈 Production Readiness

### Before Deployment
- [ ] All tests pass
- [ ] No console errors
- [ ] Environment variables documented
- [ ] Security review completed
- [ ] Performance optimized
- [ ] Backup strategy planned
- [ ] Monitoring setup
- [ ] Error logging configured

### Deployment Checklist
- [ ] MongoDB Atlas configured
- [ ] Groq API key for production
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Health checks passing

---

## ✅ Final Verification

### Smoke Tests
- [ ] Can register new user
- [ ] Can login
- [ ] Can generate quiz
- [ ] Can take quiz
- [ ] Can view results
- [ ] Can see dashboard
- [ ] Can logout

### Load Testing
- [ ] Multiple users can register
- [ ] Concurrent quiz generation works
- [ ] Database handles load
- [ ] API doesn't timeout

### User Acceptance
- [ ] UI is intuitive
- [ ] Features work as expected
- [ ] Performance is acceptable
- [ ] No critical bugs

---

## 🎉 Installation Complete!

If all items are checked, your Mastishk installation is complete and ready to use!

### Next Steps
1. Create your first quiz
2. Explore all features
3. Customize branding
4. Deploy to production
5. Share with users!

### Support
- Documentation: `README.md`, `SETUP.md`, `DEPLOYMENT.md`
- Issues: GitHub Issues
- Community: Discord/Forum

---

**Congratulations! You're ready to start learning with Mastishk! 🚀**

*Last Updated: April 24, 2026*
