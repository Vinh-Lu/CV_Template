import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tran Vu Linh - Web Developer",
  description: "Professional portfolio and CV of Tran Vu Linh, Web Developer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-20">{children}</main>
          <footer className="py-6 border-t border-[#333] bg-[#0a0a0a] text-gray-400">
            <div className="container mx-auto px-4 text-center text-sm">
              <p>© {new Date().getFullYear()} Tran Vu Linh - Web Developer</p>
            </div>
          </footer>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}



import './globals.css'