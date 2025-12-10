"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Cases Won", description: "Successfully resolved for our clients" },
  { value: 20, suffix: "+", label: "Years of Experience", description: "Serving Tampa Bay since 2005" },
  { value: 67, suffix: "%", label: "Claims Initially Denied", description: "SSDI claims we help overturn" },
  { value: 100, suffix: "%", label: "No Fee Guarantee", description: "No recovery, no fee promise" },
]

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-primary">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-20">
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-4">Proven Results</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-center text-balance">
            Our Impact in Numbers
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-12 h-px bg-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 md:p-10 border border-primary/10 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Card number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="text-primary/40 text-sm font-medium">0{index + 1}</span>
              </div>

              {/* Animated counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Label and description */}
              <div className="mt-4 pt-4 border-t border-primary/10">
                <div className="font-medium text-foreground text-lg">{stat.label}</div>
                <div className="mt-1 text-muted-foreground text-sm">{stat.description}</div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-1 bg-accent rounded-t-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
