import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy and campaign is designed with measurable outcomes in mind. We focus on metrics that matter to your bottom line."
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused",
    description: "Your marketing investment should generate returns. We optimize every dollar spent to maximize your return on investment."
  },
  {
    icon: Award,
    title: "Growth-Minded",
    description: "We're not just maintaining your current position - we're building sustainable systems for long-term business growth."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionTitle 
            title="Who We Are"
            subtitle="A full-service marketing agency focused on helping local businesses attract and retain more clients."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="shadow-card bg-card-gradient border-0 text-center hover:shadow-hero transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}