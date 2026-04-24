# 🧠 Mastishk - Frontend Only Version

> A beautiful, production-ready quiz platform built with Next.js - No backend required!

![Mastishk Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=Mastishk+-+Frontend+Quiz+Platform)

## ✨ Features

### 🎯 Core Features
- **Quiz Generation** - Create quizzes with mock data
- **Multiple Quiz Types** - MCQ, True/False, Fill in the Blanks, Short Answer
- **Difficulty Levels** - Easy, Medium, Hard
- **Local Storage** - All data saved in browser
- **Performance Tracking** - Track your progress locally
- **Leaderboard** - View mock leaderboard data
- **Dark/Light Mode** - Beautiful theme switching
- **Fully Responsive** - Perfect on all devices

### 🎨 Premium UI/UX
- Modern glassmorphism design
- Smooth Framer Motion animations
- Gradient backgrounds
- Professional components
- Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))

### Installation

```bash
# 1. Navigate to project
cd mastishk

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

That's it! No database, no API keys, no backend setup needed! 🎉

## 📦 What's Included

### Frontend Stack
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **ShadCN UI** - Beautiful components
- **Zustand** - State management
- **Recharts** - Data visualization
- **React Hook Form** - Form handling

### Features
- ✅ Landing page with animations
- ✅ Login/Register pages
- ✅ Quiz generation (mock data)
- ✅ Quiz taking interface
- ✅ Results and analytics
- ✅ Performance dashboard
- ✅ Leaderboard
- ✅ Profile management
- ✅ Dark/light mode
- ✅ Local storage persistence

## 🎯 How It Works

### Data Storage
All data is stored in your browser's localStorage:
- **User accounts** - Stored locally
- **Quiz history** - Saved in browser
- **Performance stats** - Tracked locally
- **Preferences** - Theme and settings

### Mock Data
The app uses pre-defined quiz templates and generates questions based on:
- Topic selection
- Difficulty level
- Number of questions
- Question type

## 📁 Project Structure

```
mastishk/
├── app/                      # Next.js pages
│   ├── (auth)/              # Login/Register
│   ├── layout.js            # Root layout
│   └── page.js              # Landing page
├── components/              # React components
│   └── ui/                  # Reusable UI components
├── lib/                     # Utilities
│   ├── api.js              # Mock API (localStorage)
│   ├── mockData.js         # Sample data
│   ├── utils.js            # Helper functions
│   └── constants.js        # App constants
├── store/                   # Zustand stores
│   ├── authStore.js        # Authentication
│   ├── quizStore.js        # Quiz state
│   └── themeStore.js       # Theme
├── public/                  # Static assets
└── styles/                  # Global styles
```

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "hsl(238 76% 62%)", // Change this
}
```

### Add Quiz Templates
Edit `lib/mockData.js`:
```javascript
export const QUIZ_TEMPLATES = {
  yourTopic: {
    title: 'Your Quiz',
    questions: [...]
  }
}
```

### Modify UI Components
All components are in `components/ui/` and fully customizable.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Click "Deploy"
- Done! ✨

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `.next` folder
- Done! ✨

## 📊 Features Breakdown

### ✅ Implemented
- Landing page with hero section
- User authentication (localStorage)
- Quiz generation with templates
- Quiz taking interface
- Results and scoring
- Performance analytics
- Leaderboard (mock data)
- Profile management
- Theme switching
- Responsive design

### 🚧 Can Be Added
- More quiz templates
- Export quiz results
- Print functionality
- Share quiz results
- PWA support
- Offline mode
- More chart types
- Achievement animations

## 🎯 Use Cases

### Perfect For:
- ✅ **Portfolio Projects** - Showcase your skills
- ✅ **Learning** - Study Next.js and React
- ✅ **Prototypes** - Quick MVP without backend
- ✅ **Demos** - Show off UI/UX skills
- ✅ **Practice** - Build and customize

### Not Suitable For:
- ❌ Multi-user platforms (no real backend)
- ❌ Data persistence across devices
- ❌ Real-time collaboration
- ❌ Large-scale applications

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create file in `app/` directory
2. Export default component
3. Next.js handles routing automatically

### Adding New Components

1. Create file in `components/`
2. Import and use in pages
3. Style with Tailwind CSS

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)

### Typography
- **Font**: Inter (system font)
- **Headings**: Bold, gradient text
- **Body**: Regular, high contrast

### Components
- Glassmorphism cards
- Smooth transitions
- Gradient buttons
- Animated interactions

## 📝 License

MIT License - Feel free to use for personal or commercial projects!

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **ShadCN UI** - Components
- **Lucide** - Icons

## 📞 Support

- **Documentation**: This README
- **Issues**: GitHub Issues
- **Questions**: GitHub Discussions

## 🎉 Get Started Now!

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and start building! 🚀

---

**Built with ❤️ for developers and learners**

*No backend, no complexity, just pure frontend magic!* ✨
