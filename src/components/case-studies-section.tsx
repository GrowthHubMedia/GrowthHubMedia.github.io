import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    business: "Elite Plumbing Services",
    industry: "Home Services",
    challenge: "Low online visibility and inconsistent lead flow",
    solution: "Local SEO optimization, Google Ads, and lead funnel implementation",
    results: {
      leads: { before: "8", after: "45", metric: "leads/month" },
      revenue: { before: "$15K", after: "$65K", metric: "monthly revenue" },
      roi: { before: "1.2x", after: "4.8x", metric: "return on ad spend" }
    },
    timeframe: "6 months"
  },
  {
    business: "Downtown Dental Practice", 
    industry: "Healthcare",
    challenge: "Difficulty attracting new patients in competitive market",
    solution: "Facebook advertising, reputation management, and conversion optimization",
    results: {
      leads: { before: "12", after: "38", metric: "new patients/month" },
      revenue: { before: "$28K", after: "$89K", metric: "monthly revenue" },
      roi: { before: "1.5x", after: "5.2x", metric: "return on ad spend" }
    },
    timeframe: "4 months"
  },
  {
    business: "Premier Auto Repair",
    industry: "Automotive", 
    challenge: "Relying on word-of-mouth, needed digital presence",
    solution: "Website redesign, local SEO, and social media marketing",
    results: {
      leads: { before: "5", after: "28", metric: "online leads/month" },
      revenue: { before: "$22K", after: "$58K", metric: "monthly revenue" },
      roi: { before: "0.8x", after: "3.7x", metric: "return on ad spend" }
    },
    timeframe: "5 months"
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Case Studies"
            subtitle="Real results from real local businesses. See how we've helped companies like yours achieve remarkable growth."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-card bg-white border-0 hover:shadow-hero transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {study.industry}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{study.timeframe}</span>
                </div>
                <CardTitle className="text-xl font-heading font-bold text-foreground">
                  {study.business}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-sm text-red-600 mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                {/* Solution */} 
                <div>
                  <h4 className="font-semibold text-sm text-blue-600 mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-sm text-green-600 mb-3">Results</h4>
                  <div className="space-y-3">
                    {Object.entries(study.results).map(([key, result]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-muted-foreground">{result.before}</span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm font-bold text-green-600">{result.after}</span>
                          <TrendingUp className="h-3 w-3 text-green-600" />
                        </div>
                      </div>
                    ))}
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