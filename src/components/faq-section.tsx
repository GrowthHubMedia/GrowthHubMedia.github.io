import { SectionTitle } from "@/components/ui/section-title"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial improvements within 30 days, with significant results typically appearing within 60-90 days. Timeline varies based on your industry, competition, and chosen services."
  },
  {
    question: "What's your typical budget range for local businesses?",
    answer: "Our services range from $2,000 to $10,000+ per month depending on your needs and goals. We offer flexible packages for businesses of all sizes and can work within most budgets."
  },
  {
    question: "Which industries do you work with?",
    answer: "We specialize in local service businesses including plumbing, HVAC, legal, dental, automotive, real estate, restaurants, retail, and professional services. If you serve local customers, we can help."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We offer both month-to-month and annual contracts. While we recommend longer partnerships for better results, we're flexible and can work with arrangements that suit your business needs."
  },
  {
    question: "How do you measure and report on performance?",
    answer: "We provide comprehensive monthly reports showing key metrics like leads generated, cost per lead, conversion rates, and ROI. You'll have access to a client dashboard with real-time performance data."
  },
  {
    question: "Can you work with our existing website and systems?",
    answer: "Absolutely! We can optimize your current website and integrate with your existing CRM, booking systems, and other tools. If improvements are needed, we'll recommend the most cost-effective solutions."
  },
  {
    question: "What makes you different from other marketing agencies?",
    answer: "We focus exclusively on local businesses and understand their unique challenges. Our data-driven approach, transparent reporting, and dedicated account management ensure your success is our priority."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Yes! We offer a 90-day results guarantee. If you don't see measurable improvements in your lead generation within 90 days, we'll work for free until you do or provide a full refund."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our services, process, and results."
            centered
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card border-0 px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-secondary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}