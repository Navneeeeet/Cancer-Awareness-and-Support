"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Heart className="h-6 w-6 md:h-7 md:w-7 text-primary fill-primary transition-transform group-hover:scale-110" />
            </div>
            <span className="text-lg md:text-xl font-semibold text-foreground">Cancer Awareness</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <Link
              href="/"
              className={`text-sm md:text-base transition-colors ${
                pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/donate"
              className={`text-sm md:text-base transition-colors ${
                pathname === "/donate" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Donate
            </Link>
            <Link
              href="/#awareness"
              className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Awareness
            </Link>
            <Link
              href="/#contact"
              className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm md:text-base px-4 py-2 rounded-lg transition-colors ${
                pathname === "/dashboard"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
