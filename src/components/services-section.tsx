import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Megaphone, 
  Share2, 
  Globe, 
  Target, 
  Settings2, 
  Zap 
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Paid Ads Management",
    description: "Google, Facebook, and Instagram advertising campaigns that drive qualified leads and maximize your ROI.",
    features: ["Campaign Setup", "Ongoing Optimization", "Performance Reporting"]
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Local SEO strategies to help your business rank higher in search results and attract more customers.",
    features: ["Local Citations", "Google My Business", "Content Optimization"]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Professional social media presence that engages your audience and builds brand awareness.",
    features: ["Content Creation", "Community Management", "Social Advertising"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Conversion-focused websites designed to turn visitors into customers and grow your business.",
    features: ["Custom Design", "Mobile Responsive", "Speed Optimized"]
  },
  {
    icon: Target,
    title: "Lead Funnels",
    description: "Automated lead generation systems that capture, nurture, and convert prospects into paying customers.",
    features: ["Landing Pages", "Email Sequences", "Lead Magnets"]
  },
  {
    icon: Settings2,
    title: "CRM Implementation",
    description: "Customer relationship management systems to organize leads and automate your sales process.",
    features: ["System Setup", "Data Migration", "Team Training"]
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Custom automated workflows that save time and increase efficiency while nurturing your leads.",
    features: ["Email Marketing", "SMS Campaigns", "Workflow Design"]
  }
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Our Services"
            subtitle="Comprehensive digital marketing solutions designed to grow your local business and increase your revenue."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-1 bg-card-gradient border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center shadow-button">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 hover:bg-secondary hover:text-secondary-foreground border-secondary"
                  onClick={scrollToContact}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="xl" onClick={scrollToContact}>
            Get Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  )
}