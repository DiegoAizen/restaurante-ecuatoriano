import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabor Ecuatoriano - Auténtica Comida Criolla',
  description: 'Descubre los sabores tradicionales de Ecuador en nuestro restaurante de comida criolla',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.className} ${playfair.className}`}>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}