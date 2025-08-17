import MainLayout from "@/components/layout/MainLayout";


export default function AboutPage() {
  return (
    <MainLayout className="bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative">
        <div className="text-center py-32 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">Nuvexa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in intelligent technology, dedicated to engineering solutions that inspire transformation
            and empower businesses to scale through innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Company Story */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At Nuvexa, we believe that intelligent technology should be accessible, transformative, and
                  purpose-driven. We specialize in creating AI agents, robust cloud infrastructure, and bespoke
                  applications that don't just solve problems—they unlock potential.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Innovation First</h3>
                    <p className="text-gray-600">
                      We push the boundaries of what's possible with cutting-edge AI and cloud technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Client-Centric</h3>
                    <p className="text-gray-600">
                      Every solution is tailored to your unique challenges and growth objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
                    <p className="text-gray-600">
                      We deliver robust, scalable solutions built with enterprise-grade security and reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="font-semibold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
                <p className="text-gray-600">
                  Over 500+ successful projects delivered, serving startups to Fortune 500 companies across 25+
                  countries.
                </p>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Agents & Automation</h3>
                  <p className="text-gray-600">
                    Intelligent systems that learn, adapt, and optimize your business processes automatically.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-600">
                    Scalable, secure cloud solutions that grow with your business needs and ensure 99.9% uptime.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Bespoke Applications</h3>
                  <p className="text-gray-600">
                    Custom-built software solutions designed specifically for your unique business requirements.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Our Approach</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We combine deep technical expertise with strategic business insight to deliver solutions that not only
                  meet your current needs but position you for future growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}