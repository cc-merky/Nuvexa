import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Next-Generation Technology Solutions
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span > Engineer Intelligent Technology That Inspires</span> <br />
                <TypingAnimation className="text-accent" text="Transformation" speed={80} />
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Nuvexa delivers full-spectrum digital solutions including AI agents, cloud infrastructure, and
                bespoke applications to empower businesses to scale intelligently through innovation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/tech-team-collaboration.png"
              alt="Nuvexa team working on innovative technology solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}