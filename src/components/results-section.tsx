import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "150%",
    label: "Average Lead Increase",
    color: "text-green-600"
  },
  {
    icon: Users,
    value: "89%",
    label: "Client Retention Rate", 
    color: "text-blue-600"
  },
  {
    icon: DollarSign,
    value: "3.2x",
    label: "Average ROI",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    value: "30",
    label: "Days to See Results",
    color: "text-orange-600"
  }
]

const testimonials = [
  {
    quote: "CM Effective Marketing transformed our online presence. We went from 5 leads per month to over 40!",
    author: "Sarah Johnson",
    business: "Johnson's Plumbing Services",
    location: "Austin, TX"
  },
  {
    quote: "The ROI on our marketing spend has never been better. Highly recommend their services.",
    author: "Mike Chen",
    business: "Chen's Auto Repair", 
    location: "Denver, CO"
  },
  {
    quote: "Professional, results-driven, and always available. They truly care about our success.",
    author: "Lisa Rodriguez",
    business: "Rodriguez Law Firm",
    location: "Miami, FL"
  }
]

const clientLogos = [
  "ABC Plumbing Co.",
  "Elite Auto Services", 
  "Downtown Dental",
  "Prime Real Estate",
  "Metro Law Group",
  "Summit HVAC"
]

export function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Results You Can Expect"
            subtitle="Our clients consistently see significant improvements in leads, sales, and business growth."
            centered
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card bg-white border-0 text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-50 flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card bg-white border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl text-secondary mb-4">"</div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold text-muted-foreground mb-8">
            Trusted by Local Businesses
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {clientLogos.map((logo, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                {logo}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}