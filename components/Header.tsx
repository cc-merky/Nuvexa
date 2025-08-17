"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react" 

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // close menu on mobile after clicking

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold">Nuvexa</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#services"
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="/#solutions"
              onClick={(e) => handleScroll(e, "solutions")}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Solutions
            </a>
            <Link href="/about">About</Link>
            <Link href="/contact">
              <Button variant="secondary" size="sm" className="cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <a
              href="/#services"
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-accent"
            >
              Services
            </a>
            <a
              href="/#solutions"
              onClick={(e) => handleScroll(e, "solutions")}
              className="hover:text-accent"
            >
              Solutions
            </a>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="secondary" size="sm" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
