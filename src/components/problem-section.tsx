import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Low Visibility in Your Local Market",
    description: "Your potential customers can't find you when they're searching for your services online."
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Lead Generation",
    description: "Your business struggles with unpredictable lead flow, making growth planning difficult."
  },
  {
    icon: Clock,
    title: "Wasted Time on Ineffective Marketing",
    description: "You're spending valuable time on marketing tactics that don't generate real results."
  },
  {
    icon: Users,
    title: "Difficulty Converting Leads to Customers",
    description: "You're getting some leads but struggling to convert them into paying customers."
  }
]

export function ProblemSection() {
  return (
    <section id="problems" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="The Problems We Solve"
            subtitle="Local businesses face unique marketing challenges. We understand these pain points and have proven solutions."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="shadow-card bg-white border-0 hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}