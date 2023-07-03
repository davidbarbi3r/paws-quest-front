import './globals.css'
import { Margarine, Space_Mono } from 'next/font/google'

const margarine = Margarine({weight: '400', subsets: ['latin'], variable: '--font-margarine'})
const spaceMono = Space_Mono({weight: '400', subsets: ['latin'], variable: '--font-space-mono'})

export const metadata = {
  title: 'Paws quest',
  description: "The world of deck building meets feline ferocity! In paws quest, build your deck and command your cat to overcome challenges and ultimately the holy croquinettes! Get ready to strategize, conquer, and satisfy your cat's hunger pangs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${margarine.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  )
}
