import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicePackagesSection() {
  return (
    <section id="solutions" className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <span>Packages</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="text-center mb-16">
          {/* <h2 className="text-5xl font-bold text-gray-900 mb-6">Packages</h2> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tailored solutions for every stage of your technology journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* LaunchPad */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">LaunchPad</h3>
            <p className="text-gray-600 text-sm mb-6">MVP app development and basic cloud deployment for startups and new projects</p>

            <p className="font-medium text-gray-900 mb-4">For individuals and small teams:</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Custom MVP Development</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Basic Cloud Deployment</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Technical Documentation</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full bg-transparent">
              Get Started
            </Button>
          </div>

          {/* ScaleForce - Highlighted */}
          <div className="bg-white rounded-2xl border-2 border-purple-500 p-8 shadow-lg relative">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ScaleForce</h3>
            {/* <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$49</span>
            </div> */}
            <p className="text-gray-600 text-sm mb-6">Advanced AI agents and system integration for growing businesses</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">AI Agent Development</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700"> System Integration</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Performance Optimization</span>
              </li>
            </ul>

            <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
          </div>

          {/* ConsultEdge */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ConsultEdge</h3>
            {/* <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$99</span>
            </div> */}
            <p className="text-gray-600 text-sm mb-6">Full technology audit and strategic consulting for enterprise transformation</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Technology Audit</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Strategic Planning</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Implementation Roadmap</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
