import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Version Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <span>Nuvexa platform is live!</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Innovative Technology <span className=" inline bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              For a
            </span> {" "} 
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Better Future
            </span>
            <br />
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simplify your financial life with our all-in-one Budget & Bill Tracker.
            <br />
            Track expenses, set budgets, and stay on top of bills with ease.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="flex justify-center">
          <div className="relative max-w-5xl w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl transform scale-105"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <Image
                  src="/images/hero-2.jpg"
                  alt="Nuvexa team collaborating"
                  className="w-full h-96 object-cover"
                  width={1200}
                  height={800}
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
