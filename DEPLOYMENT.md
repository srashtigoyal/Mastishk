# 🚀 Mastishk Deployment Guide

Complete step-by-step guide to deploy Mastishk to production.

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Groq API key
- Vercel account (for frontend)
- Render account (for backend)

---

## 🗄️ Step 1: MongoDB Atlas Setup

### 1.1 Create Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click "Build a Database"
4. Choose **FREE** tier (M0 Sandbox)
5. Select your preferred cloud provider and region
6. Name your cluster (e.g., "mastishk-cluster")
7. Click "Create"

### 1.2 Create Database User

1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### 1.3 Whitelist IP Address

1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.4 Get Connection String

1. Go to "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `mastishk`

Example:
```
mongodb+srv://username:password@cluster.mongodb.net/mastishk?retryWrites=true&w=majority
```

---

## 🤖 Step 2: Groq API Setup

### 2.1 Get API Key

1. Go to [Groq Console](https://console.groq.com)
2. Sign up or log in
3. Navigate to "API Keys"
4. Click "Create API Key"
5. Name it "Mastishk Production"
6. Copy the API key (save it securely!)

---

## 🖥️ Step 3: Deploy Backend to Render

### 3.1 Prepare Repository

1. Push your code to GitHub:
```bash
cd mastishk
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/mastishk.git
git push -u origin main
```

### 3.2 Create Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `mastishk-api`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Instance Type**: Free

### 3.3 Add Environment Variables

Click "Advanced" → "Add Environment Variable" and add:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string_from_step_1
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
JWT_EXPIRE=7d
GROQ_API_KEY=your_groq_api_key_from_step_2
GROQ_MODEL=mixtral-8x7b-32768
CLIENT_URL=https://your-app-name.vercel.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
MAX_FILE_SIZE=10485760
```

**Important**: Generate a strong JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3.4 Deploy

1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://mastishk-api.onrender.com`)

---

## 🌐 Step 4: Deploy Frontend to Vercel

### 4.1 Install Vercel CLI

```bash
npm install -g vercel
```

### 4.2 Deploy

```bash
cd mastishk
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? `mastishk`
- Directory? `./`
- Override settings? **N**

### 4.3 Add Environment Variables

```bash
vercel env add NEXT_PUBLIC_API_URL
```

Enter your Render backend URL: `https://mastishk-api.onrender.com`

Or add via Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://mastishk-api.onrender.com`
   - **Environments**: Production, Preview, Development

### 4.4 Deploy to Production

```bash
vercel --prod
```

Your app will be live at: `https://mastishk.vercel.app`

---

## 🔄 Step 5: Update Backend CLIENT_URL

1. Go to Render Dashboard
2. Select your `mastishk-api` service
3. Go to "Environment"
4. Update `CLIENT_URL` to your Vercel URL: `https://mastishk.vercel.app`
5. Click "Save Changes"
6. Service will automatically redeploy

---

## ✅ Step 6: Verify Deployment

### 6.1 Test Backend

```bash
curl https://mastishk-api.onrender.com/health
```

Should return:
```json
{
  "success": true,
  "message": "Mastishk API is running",
  "timestamp": "2026-04-24T..."
}
```

### 6.2 Test Frontend

1. Visit your Vercel URL
2. Click "Get Started Free"
3. Create an account
4. Try generating a quiz

---

## 🔧 Step 7: Create Admin Account

### Option 1: Via MongoDB Atlas

1. Go to MongoDB Atlas → Browse Collections
2. Select `mastishk` database → `users` collection
3. Find your user document
4. Click "Edit Document"
5. Change `role` from `"user"` to `"admin"`
6. Click "Update"

### Option 2: Via MongoDB Shell

```javascript
// Connect to your database
use mastishk

// Update user to admin
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

---

## 📊 Step 8: Monitor Your Application

### Backend Monitoring (Render)

1. Go to Render Dashboard → Your Service
2. View "Logs" tab for real-time logs
3. View "Metrics" for performance data

### Frontend Monitoring (Vercel)

1. Go to Vercel Dashboard → Your Project
2. View "Analytics" for usage stats
3. View "Logs" for deployment logs

---

## 🔐 Step 9: Security Checklist

- [ ] Strong JWT_SECRET (32+ characters)
- [ ] MongoDB IP whitelist configured
- [ ] Environment variables set correctly
- [ ] HTTPS enabled (automatic on Vercel/Render)
- [ ] Rate limiting enabled
- [ ] CORS configured with correct CLIENT_URL

---

## 🚨 Troubleshooting

### Backend Issues

**Problem**: "Cannot connect to MongoDB"
- **Solution**: Check MongoDB connection string and IP whitelist

**Problem**: "Groq API error"
- **Solution**: Verify GROQ_API_KEY is correct and has credits

**Problem**: "CORS error"
- **Solution**: Ensure CLIENT_URL matches your Vercel URL exactly

### Frontend Issues

**Problem**: "API calls failing"
- **Solution**: Check NEXT_PUBLIC_API_URL is set correctly

**Problem**: "Build fails"
- **Solution**: Run `npm install` and check for missing dependencies

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**Vercel**: Automatically deploys on push to `main` branch

**Render**: Automatically deploys on push to `main` branch

To disable auto-deploy:
- **Vercel**: Project Settings → Git → Disable
- **Render**: Service Settings → Auto-Deploy → Disable

---

## 📈 Scaling

### Free Tier Limits

**Render Free**:
- Spins down after 15 minutes of inactivity
- 750 hours/month
- 512 MB RAM

**Vercel Free**:
- 100 GB bandwidth/month
- Unlimited deployments

### Upgrade Options

**Render**: $7/month for always-on service
**Vercel**: $20/month for Pro features

---

## 🎉 Success!

Your Mastishk application is now live! 

- **Frontend**: https://mastishk.vercel.app
- **Backend**: https://mastishk-api.onrender.com
- **Database**: MongoDB Atlas

Share your app and start helping people learn! 🚀

---

## 📞 Support

If you encounter issues:
1. Check the logs on Render/Vercel
2. Verify all environment variables
3. Test API endpoints with curl/Postman
4. Check MongoDB connection

For more help, refer to:
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)
