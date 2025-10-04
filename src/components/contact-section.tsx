import { useState } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const trustPoints = [
  "Free strategy consultation with marketing expert",
  "No long-term contracts required", 
  "90-day results guarantee",
  "Transparent reporting and communication"
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    budget: "",
    message: ""
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, just show a success message
    // In production, this would integrate with Formspree or similar service
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      website: "",
      budget: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Ready to Grow Your Business?"
            subtitle="Get your free strategy consultation and discover how we can help you attract more customers and increase revenue."
            centered
            className="text-white [&_h2]:text-white [&_p]:text-blue-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-hero bg-white/95 backdrop-blur-sm border-0">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Get Your Free Strategy Call
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business">Business Name *</Label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => handleInputChange("business", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Monthly Budget</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2,000</SelectItem>
                        <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your goals</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="What are your main business goals and challenges?"
                  />
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full">
                  Get My Free Strategy Call
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Trust Points & Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-hero bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-hero bg-white/95 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground">(555) 555-0123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground">hello@efficientmarketingagency.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground">123 Main St, YourTown, ST</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}