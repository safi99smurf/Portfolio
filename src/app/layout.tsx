import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/ui/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Syed Ali Safi - Software Developer & Research Assistant",
  description:
    "Portfolio of Syed Ali Safi, Software Developer and Research Assistant specializing in full-stack development, mobile applications, and AI research.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
