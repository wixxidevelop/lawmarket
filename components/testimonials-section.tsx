"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Law & Market Firm will always be my first choice. Only attorney in the Tampa Bay area that will work directly for you! Don't make the mistake of not calling them first.",
    author: "Ean B.",
    role: "Workers' Compensation Client",
  },
  {
    quote:
      "I greatly appreciate the team and their work. You can see the seriousness and enthusiasm in their work. I am grateful for everything they did for my case.",
    author: "Jorge G.",
    role: "Personal Injury Client",
  },
  {
    quote:
      "Very grateful to Law & Market Firm and their collaboration group. My disability case was approved. They gave me peace of mind and confidence throughout the entire process.",
    author: "Fredy R.",
    role: "Social Security Disability Client",
  },
  {
    quote:
      "Would recommend to anyone, great people. Very personable, answered all my questions and explained everything clearly.",
    author: "Shannon G.",
    role: "Workers' Compensation Client",
  },
  {
    quote:
      "What great people here!! Always put my needs and wants first. Very professional and knowledgeable. Even better, kind. Thank you!!",
    author: "Mark G.",
    role: "Personal Injury Client",
  },
  {
    quote:
      "Definitely will recommend! This place did what the biggest firms were not able to. They always have time to talk and truly care about their clients.",
    author: "Hansel G.",
    role: "Workers' Compensation Client",
  },
  {
    quote:
      "A wonderful team that works quickly to help find solutions! They made sure I understood everything every step of the way.",
    author: "Zoe O.",
    role: "Social Security Disability Client",
  },
  {
    quote:
      "I highly recommend Law & Market Firm to anyone seeking WC legal representation that is fair, honest and will keep your best interests at heart. Thank you for your professionalism.",
    author: "Arlington K.",
    role: "Workers' Compensation Client",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Client Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-balance">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <Quote className="w-16 h-16 text-accent/30 mx-auto mb-8" />

          <div className="min-h-[200px] flex items-center justify-center">
            <blockquote className="text-center">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-balance">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <footer className="mt-8">
                <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{testimonials[currentIndex].role}</div>
              </footer>
            </blockquote>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
