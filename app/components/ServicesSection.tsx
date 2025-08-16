import { Badge } from "@/components/ui/badge"
import { Bot, Cloud, Zap, Users, Shield } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary mb-4">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Technology Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background/50 cursor-pointer group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-primary">
              AI Agents
            </div>
            <div className="text-lg font-semibold text-primary">Intelligent Automation</div>
            <p className="text-muted-foreground">
              Advanced AI-powered agents that streamline operations and enhance decision-making processes.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background/50 cursor-pointer group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Cloud className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-primary">
              Cloud Infrastructure
            </div>
            <div className="text-lg font-semibold text-primary">Scalable Hosting</div>
            <p className="text-muted-foreground">
              Secure, scalable cloud hosting and DevOps support with enterprise-grade reliability.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background/50 cursor-pointer group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-primary">
              Custom Development
            </div>
            <div className="text-lg font-semibold text-primary">Bespoke Applications</div>
            <p className="text-muted-foreground">
              Tailored applications and MVP development designed for your unique business requirements.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background/50 cursor-pointer group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-primary">
              Technology Consultancy
            </div>
            <div className="text-lg font-semibold text-primary">Strategic Guidance</div>
            <p className="text-muted-foreground">
              Expert consulting and digital transformation strategies to modernize your business.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-background/50 cursor-pointer group md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-primary">
              Enterprise IT
            </div>
            <div className="text-lg font-semibold text-primary">Security & Support</div>
            <p className="text-muted-foreground">
              Cybersecurity audits, data compliance, and comprehensive enterprise IT services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}