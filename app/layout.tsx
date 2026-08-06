import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/app/context/LanguageContext'
import { Toaster } from 'sonner'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://gonzagramaglia.com/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Gonzalo\'s Portfolio',
    template: '%s | Gonzalo\'s Portfolio',
  },
  description:
    'Website of the personal portfolio of Gonzalo Gramaglia, a Full Stack Developer & IT Support Specialist. Showcasing projects, work experience, and insights on web development and cybersecurity.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <LanguageProvider>
            <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
              <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
            <Toaster position="bottom-right" offset={190} duration={1900} />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
