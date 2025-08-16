"use client"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <ServicesSection />
      </div>
    </div>
  )
}
