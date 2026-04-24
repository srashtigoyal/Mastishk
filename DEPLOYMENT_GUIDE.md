# 🚀 Deployment Guide - Mastishk

## ✅ Pre-Deployment Checklist

Before deploying, make sure:
- [ ] App runs locally without errors (`npm run dev`)
- [ ] All pages work (landing, login, register)
- [ ] Dark mode toggle works
- [ ] No console errors in browser (F12)
- [ ] Build completes successfully (`npm run build`)

---

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended - Easiest)** ⭐
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ Best for Next.js apps

### **Option 2: Netlify**
- ✅ Free tier available
- ✅ Easy drag-and-drop
- ✅ Good for static sites

### **Option 3: GitHub Pages**
- ✅ Completely free
- ✅ Good for static exports
- ⚠️ Requires configuration

---

## 🎯 Option 1: Deploy to Vercel (RECOMMENDED)

### **Step 1: Create Vercel Account**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub

### **Step 2: Push Code to GitHub**

```bash
# Navigate to your project
cd mastishk

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Mastishk Quiz Platform"

# Create repository on GitHub
# Go to github.com → New Repository → Name it "mastishk"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/mastishk.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 3: Deploy on Vercel**

#### **Method A: Using Vercel Website (Easiest)**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your `mastishk` repository
4. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
5. Click **"Deploy"**
6. Wait 2-3 minutes ⏳
7. ✅ Done! You'll get a URL like: `mastishk.vercel.app`

#### **Method B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? mastishk
# - In which directory is your code located? ./
# - Want to override settings? N

# Deploy to production
vercel --prod
```

### **Step 4: Get Your Live URL**

After deployment completes:
- ✅ You'll get a URL like: `https://mastishk.vercel.app`
- ✅ Share this URL with anyone!
- ✅ It's live and accessible worldwide!

---

## 🎯 Option 2: Deploy to Netlify

### **Step 1: Create Netlify Account**

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign Up"**
3. Choose **"GitHub"** to sign up
4. Authorize Netlify

### **Step 2: Deploy**

#### **Method A: Drag and Drop (Easiest)**

```bash
# Build your project locally
cd mastishk
npm run build

# The build creates a .next folder
```

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the **entire `mastishk` folder**
3. Wait for upload
4. ✅ Get your URL: `random-name.netlify.app`

#### **Method B: Connect GitHub Repository**

1. Push code to GitHub (see Vercel Step 2)
2. Go to Netlify Dashboard
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"GitHub"**
5. Select your `mastishk` repository
6. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
7. Click **"Deploy site"**
8. ✅ Done!

---

## 🎯 Option 3: Deploy to GitHub Pages

### **Step 1: Update next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mastishk', // Replace with your repo name
}

module.exports = nextConfig
```

### **Step 2: Build and Deploy**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "next build && next export && gh-pages -d out"

# Build
npm run build

# Deploy
npm run deploy
```

### **Step 3: Enable GitHub Pages**

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Source: **gh-pages branch**
4. Click **Save**
5. ✅ URL: `https://YOUR_USERNAME.github.io/mastishk`

---

## 🔧 Troubleshooting

### **Build Fails**

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### **Page Not Found After Deploy**

- Check that all routes are correct
- Verify `app/(auth)/layout.js` exists
- Check browser console for errors

### **Images Not Loading**

- Make sure image URLs are absolute
- Check `next.config.js` image configuration

### **Dark Mode Not Working**

- localStorage works on deployed sites
- Make sure JavaScript is enabled

---

## 📊 Post-Deployment Checklist

After deployment, test:
- [ ] Landing page loads
- [ ] Can register new account
- [ ] Can login
- [ ] Dark mode toggle works
- [ ] All animations work
- [ ] Mobile responsive
- [ ] No console errors

---

## 🎨 Custom Domain (Optional)

### **On Vercel:**

1. Go to Project Settings → Domains
2. Click **"Add"**
3. Enter your domain (e.g., `mastishk.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

### **On Netlify:**

1. Go to Site Settings → Domain Management
2. Click **"Add custom domain"**
3. Enter your domain
4. Update DNS records at your domain registrar
5. Wait for DNS propagation

---

## 🚀 Automatic Deployments

### **Vercel:**
- ✅ Auto-deploys on every `git push` to main branch
- ✅ Preview deployments for pull requests
- ✅ Instant rollbacks

### **Netlify:**
- ✅ Auto-deploys on every `git push`
- ✅ Deploy previews
- ✅ Branch deployments

---

## 📈 Monitoring Your Site

### **Vercel Analytics:**
1. Go to your project dashboard
2. Click **"Analytics"** tab
3. See visitor stats, performance metrics

### **Google Analytics (Optional):**

Add to `app/layout.js`:
```javascript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 💰 Pricing

### **Vercel:**
- **Free Tier:**
  - Unlimited deployments
  - 100 GB bandwidth/month
  - Automatic HTTPS
  - Custom domains
- **Pro:** $20/month (more bandwidth)

### **Netlify:**
- **Free Tier:**
  - 100 GB bandwidth/month
  - Unlimited sites
  - Automatic HTTPS
- **Pro:** $19/month

### **GitHub Pages:**
- **Completely Free**
- Unlimited bandwidth
- Custom domains

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Built specifically for Next.js
- ✅ Easiest deployment process
- ✅ Best performance
- ✅ Automatic optimizations
- ✅ Great free tier
- ✅ Excellent documentation

---

## 📝 Quick Deploy Commands

### **Vercel:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### **Netlify:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🎉 You're Live!

After deployment:
1. ✅ Share your URL with friends
2. ✅ Add to your portfolio
3. ✅ Share on LinkedIn
4. ✅ Add to your resume

**Example URLs:**
- Vercel: `https://mastishk.vercel.app`
- Netlify: `https://mastishk.netlify.app`
- Custom: `https://mastishk.com`

---

## 🔄 Updating Your Site

```bash
# Make changes to your code
# Commit and push
git add .
git commit -m "Update: improved design"
git push

# Vercel/Netlify will auto-deploy!
# No manual deployment needed!
```

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Final Checklist

Before sharing your site:
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check all links work
- [ ] Verify dark mode works
- [ ] Test registration and login
- [ ] Check for console errors
- [ ] Verify copyright shows your name
- [ ] Test on slow internet connection

---

**Created by Srashti Goyal**

**Ready to deploy? Start with Vercel - it's the easiest!** 🚀

*Last Updated: April 24, 2026*
