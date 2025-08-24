import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Target, BarChart3, Zap, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Tailored Strategy",
    description: "We analyze your business goals and create a customized marketing strategy that fits your unique needs and budget."
  },
  {
    icon: BarChart3,
    number: "02", 
    title: "Data-Backed Campaigns",
    description: "Launch targeted campaigns with continuous optimization based on real performance data and analytics."
  },
  {
    icon: Zap,
    number: "03",
    title: "Conversion-Focused Assets",
    description: "Build websites, landing pages, and funnels designed specifically to convert visitors into paying customers."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Automation & Efficiency",
    description: "Implement marketing automation to save time, nurture leads, and increase your overall business efficiency."
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="How We Do It"
            subtitle="Our proven 4-step process ensures your marketing investment delivers measurable results and sustainable growth."
            centered
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative shadow-card bg-card-gradient border-0 hover:shadow-hero transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary-foreground">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 transform -translate-y-1/2 z-10" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}