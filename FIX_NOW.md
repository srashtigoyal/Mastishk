# 🚀 Quick Fix - Run These Commands

## Step 1: Clean Everything
```bash
cd mastishk
rm -rf node_modules package-lock.json .next
```

## Step 2: Install Compatible Versions
```bash
npm install
```

## Step 3: Start Development Server
```bash
npm run dev
```

## ✅ Should Work Now!

Visit: http://localhost:3000

---

## If Still Not Working

### Check Node.js Version
```bash
node --version
```

**If below v16.14.0, update Node.js:**

### Windows
Download from: https://nodejs.org/

### Mac
```bash
brew install node
```

### Linux
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## After Updating Node.js

```bash
cd mastishk
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

---

## ✨ What I Fixed

- ✅ Downgraded Next.js from 14.2.0 to 13.5.6
- ✅ Downgraded React from 18.3.0 to 18.2.0
- ✅ Updated all packages for compatibility
- ✅ Changed minimum Node.js requirement to 16.14.0
- ✅ Simplified next.config.js

---

## Success Looks Like This

```
✓ Ready in 2.5s
○ Local: http://localhost:3000
✓ Compiled successfully
```

Then open http://localhost:3000 in your browser! 🎉
