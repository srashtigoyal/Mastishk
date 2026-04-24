# 💾 Data Storage Explanation - Mastishk

## How Your Data is Stored

### 🌐 **Frontend-Only Application**

Mastishk is a **frontend-only** application, which means:

- ✅ **No Backend Server** - Everything runs in your browser
- ✅ **No Database** - No MongoDB, PostgreSQL, or any external database
- ✅ **localStorage** - All data is stored in your browser's localStorage

---

## 📊 What Gets Stored?

### 1. **User Accounts**
When you register:
```javascript
{
  id: "unique-id",
  name: "Your Name",
  email: "your@email.com",
  password: "hashed-password", // Not actually hashed in frontend-only
  avatar: "avatar-url",
  stats: { totalQuizzes: 0, ... },
  createdAt: "2026-04-24"
}
```

**Stored in:** `localStorage.getItem('users')`

### 2. **Current User Session**
When you login:
```javascript
{
  user: { ...userData },
  token: "mock-token-123",
  isAuthenticated: true
}
```

**Stored in:** `localStorage.getItem('currentUser')`

### 3. **Quiz History**
All your completed quizzes:
```javascript
[
  {
    id: "quiz-1",
    title: "JavaScript Quiz",
    score: 80,
    questions: [...],
    completedAt: "2026-04-24"
  }
]
```

**Stored in:** `localStorage.getItem('quizzes')`

---

## 🔍 How to View Your Data

### **Chrome/Edge:**
1. Press `F12` to open DevTools
2. Go to **Application** tab
3. Click **Local Storage** → `http://localhost:3000`
4. See all your data!

### **Firefox:**
1. Press `F12` to open DevTools
2. Go to **Storage** tab
3. Click **Local Storage** → `http://localhost:3000`

---

## ⚠️ Important Limitations

### **Browser-Specific Storage**
- ✅ Data persists across sessions
- ❌ Data is **NOT** synced across devices
- ❌ Data is **NOT** synced across browsers
- ❌ Clearing browser data = losing all data

### **Security**
- ⚠️ localStorage is **NOT encrypted**
- ⚠️ Anyone with access to your browser can see the data
- ⚠️ Not suitable for sensitive information

### **Storage Limits**
- 📦 localStorage limit: ~5-10 MB per domain
- 📦 Enough for hundreds of quizzes
- 📦 But not for large-scale data

---

## 🔄 Data Flow

### **Registration:**
```
1. You enter: name, email, password
2. JavaScript creates user object
3. Saves to localStorage.users array
4. Sets currentUser in localStorage
5. Redirects to dashboard
```

### **Login:**
```
1. You enter: email, password
2. JavaScript checks localStorage.users
3. Finds matching email
4. Compares password (plain text in frontend-only)
5. Sets currentUser in localStorage
6. Redirects to dashboard
```

### **Quiz Generation:**
```
1. You select: topic, difficulty, count
2. JavaScript uses quiz templates
3. Generates questions from mockData.js
4. Saves to localStorage.quizzes
5. Shows quiz interface
```

---

## 🚀 Upgrading to Real Database

If you want to add a real database later:

### **Option 1: Firebase (Easiest)**
```javascript
// Install Firebase
npm install firebase

// Configure
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Use Firestore instead of localStorage
```

### **Option 2: Supabase (PostgreSQL)**
```javascript
// Install Supabase
npm install @supabase/supabase-js

// Configure
import { createClient } from '@supabase/supabase-js';

// Use Supabase instead of localStorage
```

### **Option 3: Backend API**
- Build Express.js backend
- Add MongoDB database
- Replace localStorage calls with API calls
- Deploy backend separately

---

## 📝 Current Implementation

### **File: `lib/api.js`**
All "API" calls are actually localStorage operations:

```javascript
// Fake API that uses localStorage
export const authAPI = {
  register: async (data) => {
    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  },
  
  login: async (data) => {
    // Read from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === data.email);
    // ...
  }
}
```

---

## ✅ Advantages of localStorage

1. **No Setup** - Works immediately
2. **No Cost** - Completely free
3. **Fast** - Instant read/write
4. **Offline** - Works without internet
5. **Simple** - Easy to understand

## ❌ Disadvantages of localStorage

1. **No Sync** - Can't access from other devices
2. **No Security** - Data is visible in browser
3. **Limited** - Only ~5-10 MB storage
4. **Temporary** - Lost if browser data cleared
5. **Single User** - Can't share data between users

---

## 🎯 Perfect For:

- ✅ Learning projects
- ✅ Prototypes
- ✅ Portfolio demos
- ✅ Single-user apps
- ✅ Offline-first apps

## ❌ Not Suitable For:

- ❌ Multi-user platforms
- ❌ Production apps
- ❌ Apps requiring data sync
- ❌ Apps with sensitive data
- ❌ Large-scale applications

---

## 🔐 Your Data is Safe Because:

1. **Local Only** - Never leaves your browser
2. **No Server** - No one can hack a server that doesn't exist
3. **No Network** - No data transmitted over internet
4. **Full Control** - You can delete it anytime

---

## 🗑️ How to Clear Your Data

### **Method 1: Browser DevTools**
1. Open DevTools (F12)
2. Go to Application/Storage
3. Right-click Local Storage
4. Click "Clear"

### **Method 2: JavaScript Console**
```javascript
localStorage.clear()
```

### **Method 3: Browser Settings**
- Chrome: Settings → Privacy → Clear browsing data
- Firefox: Settings → Privacy → Clear Data

---

## 📚 Learn More

- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

---

**Created by Srashti Goyal**
*Last Updated: April 24, 2026*
