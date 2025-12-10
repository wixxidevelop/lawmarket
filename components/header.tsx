"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["about", "services", "team", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2.5 text-xs">
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 opacity-70" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="w-px h-3 bg-primary-foreground/20" />
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 opacity-70" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+19295980910" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-3.5 h-3.5 opacity-70" />
                <span>+1 929 598 0910</span>
              </a>
              <div className="w-px h-3 bg-primary-foreground/20" />
              <a
                href="mailto:contact@lawmarketfirm.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5 opacity-70" />
                <span>contact@lawmarketfirm.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
            : "top-10 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center transition-all duration-300 group-hover:rounded-2xl group-hover:scale-105 shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-serif text-2xl font-bold">L</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent/50 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-0" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground tracking-tight leading-none">
                  LAW & MARKET FIRM
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-px bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
                    Attorneys at Law
                  </span>
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full p-1.5 border border-border/50">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right hidden xl:block">
                <p className="text-xs text-muted-foreground">Injured? We Can Help</p>
                <p className="text-sm font-semibold text-foreground">Free Consultation</p>
              </div>
              <Button asChild className="group font-semibold gap-2 px-6 py-5 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <a href="tel:+19295980910">
                  <span>Call Now</span>
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </Button>
            </div>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-5 h-5">
                <span
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground my-1 transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 top-0 bg-background z-50 transition-all duration-500 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif text-xl font-bold">L</span>
                </div>
                <span className="font-serif text-lg font-bold text-foreground">LAW & MARKET FIRM</span>
              </Link>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between py-5 border-b border-border text-3xl font-serif font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-border">
              <Button className="w-full py-6 text-lg font-semibold gap-3 rounded-full">
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <a href="tel:+19295980910" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:contact@lawmarketfirm.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
