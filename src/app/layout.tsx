import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JG University | Empowering Minds, Shaping Futures',
  description: 'The best University in Ahmedabad offering world-class Education in Management, IT, Commerce, and more.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'JG University - Empowering Minds, Shaping Futures',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
