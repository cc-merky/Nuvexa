"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold">Nuvexa</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Services
            </a>
            <a
              href="#solutions"
              className="hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Solutions
            </a>
            <a
              href="#about"
              className="hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </a>
            <Button variant="secondary" size="sm">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}