"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Linkedin } from "lucide-react"

const practiceAreas = [
  "Workers' Compensation",
  "Personal Injury",
  "Social Security Disability",
  "Car Accidents",
  "Slip & Fall",
  "Appeals & Mediations",
]

const firmLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-16 border-b border-primary-foreground/10">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-balance max-w-xl">
              Injured? Get a Free Case Review Today.
            </h3>
            <p className="mt-3 text-primary-foreground/60 max-w-md">
              No recovery, no fee. We only get paid when you win.
            </p>
          </div>
          <Link
            href="tel:+19295980910"
            className="group flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Call +1 929 598 0910
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xl font-bold">L</span>
              </div>
              <div>
                <span className="font-serif text-xl font-medium tracking-tight block">LAW & MARKET FIRM</span>
                <span className="text-primary-foreground/50 text-xs uppercase tracking-wider">Attorneys at Law</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed mb-4">
              Zealously representing injured victims. Free consultations and contingency-based representation.
            </p>
            <p className="text-accent font-medium">Hablamos Español</p>
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3">
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-primary-foreground/40">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {area}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm Links */}
          <div className="lg:col-span-2">
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-primary-foreground/40">The Firm</h4>
            <ul className="space-y-3">
              {firmLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-primary-foreground/40">Our Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-sm">Los Angeles, California</div>
                  <div className="text-primary-foreground/50 text-xs">777 South Figueroa Street</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 py-8 border-y border-primary-foreground/10">
          <Link
            href="tel:+19295980910"
            className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-primary-foreground/40 uppercase tracking-wider">Call Us</div>
              <div className="text-sm font-medium">+1 929 598 0910</div>
            </div>
          </Link>
          <Link
            href="mailto:law@cotraders.cfd"
            className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-primary-foreground/40 uppercase tracking-wider">Email Us</div>
              <div className="text-sm font-medium">law@cotraders.cfd</div>
            </div>
          </Link>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} LAW & MARKET FIRM. All rights reserved.
          </div>
        
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-primary-foreground/5">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-8 relative">
          <div className="font-serif text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-primary-foreground/[0.03] select-none text-center">
          LAW & MARKET
          </div>
        </div>
      </div>
    </footer>
  )
}
