import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ResultsSection } from "@/components/results-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    // Add scroll animation observers
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    })

    // Observe all fade-in-up elements
    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <CaseStudiesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default Index
