import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBar } from "@/components/marquee-bar"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeBar />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
