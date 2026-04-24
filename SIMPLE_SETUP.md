# 🎯 Mastishk - Simple Setup (Frontend Only)

## What You Get

A beautiful quiz platform that runs entirely in your browser. No backend, no database, no complexity!

## Installation

```bash
# 1. Install
npm install

# 2. Run
npm run dev

# 3. Open
http://localhost:3000
```

That's literally it! 🎉

## How It Works

- **User Data**: Stored in browser localStorage
- **Quizzes**: Generated from templates
- **Analytics**: Calculated from local data
- **Leaderboard**: Mock data for demo

## Features

✅ Create account (local)  
✅ Generate quizzes  
✅ Take quizzes  
✅ View results  
✅ Track performance  
✅ Dark/light mode  
✅ Fully responsive  

## Customization

### Add Quiz Topics

Edit `lib/mockData.js`:

```javascript
export const QUIZ_TEMPLATES = {
  myTopic: {
    title: 'My Topic Quiz',
    questions: [
      {
        question: 'Your question?',
        type: 'mcq',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        explanation: 'Why A is correct',
        difficulty: 'medium',
        points: 10
      }
    ]
  }
}
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "hsl(238 76% 62%)", // Your color
}
```

## Deploy

### Vercel (Easiest)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload .next folder to Netlify
```

## File Structure

```
mastishk/
├── app/              # Pages
├── components/       # UI components
├── lib/             # Utils & mock data
├── store/           # State management
└── public/          # Static files
```

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Zustand
- localStorage

## Perfect For

- Portfolio projects
- Learning Next.js
- UI/UX demos
- Quick prototypes
- Practice projects

## Not Suitable For

- Multi-user platforms
- Data persistence across devices
- Production apps with real users
- Apps requiring backend

## Support

- Read `FRONTEND_README.md` for details
- Check `lib/mockData.js` for examples
- Modify `components/` for UI changes

## License

MIT - Use freely!

---

**Enjoy building! 🚀**
