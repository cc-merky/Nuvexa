"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import ServicePackagesSection from "../components/ServicePackagesSection"
import MainLayout from "@/components/layout/MainLayout"


export default function HomePage() {
  const pathname = usePathname()
  const hash = typeof window !== "undefined" ? window.location.hash : ""

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }, [pathname, hash])

  return (
    <MainLayout className="bg-background">
      <div className="pt-20">
        <HeroSection />
        <ServicesSection />
        <ServicePackagesSection />
      </div>
    </MainLayout>
  )
}