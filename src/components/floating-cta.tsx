import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Phone } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero section
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="cta"
        size="lg"
        onClick={scrollToContact}
        className="rounded-full shadow-hero animate-pulse hover:animate-none px-6"
      >
        <Phone className="h-5 w-5 mr-2" />
        Book a Call
      </Button>
    </div>
  )
}