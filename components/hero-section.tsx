"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const phrases = [
    { prefix: "responsive and individual ", suffix: "legal approach" },
    { prefix: "dedication to providing ", suffix: "quality representation" },
    { prefix: "Zealously Representing ", suffix: "Injured Victims" },
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typedLength, setTypedLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const current = phrases[phraseIndex]
    const speed = deleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (typedLength < current.suffix.length) {
          setTypedLength(typedLength + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (typedLength > 0) {
          setTypedLength(typedLength - 1)
        } else {
          setDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, typedLength === current.suffix.length && !deleting ? 800 : speed)
    return () => clearTimeout(timeout)
  }, [typedLength, deleting, phraseIndex, phrases])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-24 overflow-hidden"
      style={{ "--mouse-x": "0.5", "--mouse-y": "0.5" } as React.CSSProperties}
    >
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(calc(var(--mouse-x) * -50px), calc(var(--mouse-y) * -50px))`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[150px] rounded-full bg-primary/8 blur-2xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(calc(var(--mouse-x) * 30px), calc(var(--mouse-y) * 30px))`,
          }}
        />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tampa Bay&apos;s Trusted Legal Team
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground text-balance">
              {phrases[phraseIndex].prefix}
              <span className="italic text-primary">
                {phrases[phraseIndex].suffix.slice(0, typedLength)}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              If you&apos;ve been hurt in an accident at work or on the road, you need to know your medical bills will
              be taken care of. Franco Law Firm is here to fight for the benefits and compensation you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group font-medium">
                Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium bg-transparent">
                Call (813) 872-0929
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-serif font-semibold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Cases Won</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-serif font-semibold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-serif font-semibold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">No Fee Promise</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="/elegant-modern-law-office-interior-with-floor-to-c.jpg"
                alt="Franco Law Firm office in Tampa Bay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">No Recovery, No Fee</div>
                  <div className="text-sm text-muted-foreground mt-1">You only pay when we win your case</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
