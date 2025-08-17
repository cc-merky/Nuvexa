import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";



export default function AboutPage() {
  return (
    <MainLayout className="bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        <div className="relative">
          <div className="text-center py-32 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Innovation,
              <br />
              One Step at a Time
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Nuvexa, we are passionate about delivering innovative solutions that simplify and enhance everyday
              experiences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-2.jpg"
                alt="Nuvexa team collaborating"
                className="w-full h-96 object-cover"
                width={1200}
                height={384}
                priority
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mb-20">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">TechCorp</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">InnovateLab</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">CloudSync</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">DataFlow</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">AICore</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <span className="font-medium">DevTools</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mb-20">
            <div className="text-center mb-12">
              <p className="text-purple-600 font-medium mb-2">Numbers</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A global community of trust</h2>
              <p className="text-gray-600">Join our trusted global community for meaningful connections and growth</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="font-medium text-gray-900 mb-2">Active clients</div>
                <p className="text-gray-600 text-sm">Join over 500+ satisfied clients worldwide.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">$10 million</div>
                <div className="font-medium text-gray-900 mb-2">Revenue generated</div>
                <p className="text-gray-600 text-sm">
                  Join our success story with $10 million in client value delivered.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="font-medium text-gray-900 mb-2">Uptime guarantee</div>
                <p className="text-gray-600 text-sm">Trust our product with a 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Journey of Innovation and Growth</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  At Nuvexa, our commitment to innovation has driven us to continuously evolve and expand.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-6">2024</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Launched advanced AI-driven automation platform</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Expanded to new markets in Europe and Asia</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Opened new headquarters in Berlin</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Introduced personalized AI solutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-6">2023</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Reached 500+ active clients globally</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Rolled out new cloud infrastructure solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Added multi-platform support for enterprise clients</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Recognized as a top fintech innovator</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-6">2022</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Released the mobile app for both iOS and Android</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Introduced real-time collaboration tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Grew our customer support team to offer 24/7 assistance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Completed integration with major enterprise platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    
  )
}
