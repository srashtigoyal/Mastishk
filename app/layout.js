import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mastishk - AI-Powered Quiz Platform',
  description: 'Master any subject with AI-generated quizzes, personalized learning, and smart analytics',
  keywords: 'quiz, learning, AI, education, study, practice, test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
