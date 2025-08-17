import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import Image from "next/image"

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
            <Image
                src="/images/hero-2.jpg"    
                alt="Nuvexa team working on innovative technology solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// import { Button } from "@/components/ui/button"
// import { Play } from "lucide-react"

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
//       </div>

//       <div className="container mx-auto px-4 py-16 relative z-10">
//         {/* Version Badge */}
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//             <span className="bg-white/20 px-2 py-0.5 rounded text-xs">v1.0</span>
//             <span>Toggle finance is out now!</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </div>
//         </div>

//         {/* Main Heading */}
//         <div className="text-center max-w-4xl mx-auto mb-8">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
//             Take Control of{" "}
//             <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Your Finances
//             </span>
//             <br />
//             with Budget & Bill Tracker
//           </h1>

//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Simplify your financial life with our all-in-one Budget & Bill Tracker.
//             <br />
//             Track expenses, set budgets, and stay on top of bills with ease.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//           <Button
//             size="lg"
//             className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
//           >
//             Get Started
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-full bg-transparent"
//           >
//             <Play className="w-5 h-5 mr-2" />
//             Watch video
//           </Button>
//         </div>

//         {/* Dashboard Preview */}
//         <div className="flex justify-center">
//           <div className="relative max-w-5xl w-full">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl transform scale-105"></div>
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20at%2001.25.44-jEaO6SqeKp9YyYEouJOppWRoQTFWov.png"
//                 alt="Budget & Bill Tracker Dashboard Preview"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
