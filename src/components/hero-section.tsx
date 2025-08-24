import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle } from "lucide-react"
import heroImage from "@/assets/hero-bg.jpg"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Grow Locally.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Win Consistently.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A full-service marketing agency focused on helping local businesses 
            attract and retain more clients. Results-driven, ROI-focused, and growth-minded.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="outline-white" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("#services")}
            >
              See Our Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-medium">Google Ads Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-medium">Meta Business Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-medium">100% Results Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}