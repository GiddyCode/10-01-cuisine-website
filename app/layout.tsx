import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: '10:01 Cuisine and more | Fresh African Food Delivered in Abuja',
  description: 'Order delicious homemade African dishes - Jollof Rice, Egusi Soup, Peppered Chicken & more. Fresh ingredients, made on order, delivered hot across Abuja.',
  keywords: ['African food', 'Nigerian food', 'Abuja delivery', 'Jollof rice', 'Egusi soup', 'food delivery'],
  openGraph: {
    title: '10:01 Cuisine and more',
    description: 'Fresh African meals made on order, delivered across Abuja',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#F5C400',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
