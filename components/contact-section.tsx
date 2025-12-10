"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send")
      }
      toast({ title: "Message sent", description: "We will contact you shortly." })
      setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    } catch (err: any) {
      toast({ title: "Unable to send", description: err?.message || "Please try again later." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Contact Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-foreground leading-tight">
              Free Consultation
            </h2>
            <p className="text-muted-foreground mt-6 text-lg max-w-md">
              Whether you&apos;ve been injured at work, in an accident, or need help with a disability claim, we&apos;re
              here to help. Let&apos;s discuss your case.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Los Angeles Office</div>
                  <div className="text-muted-foreground mt-1">
                    777 South Figueroa Street
                    <br />
                    Los Angeles, CA
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <div className="text-muted-foreground mt-1">+1 929 598 0910</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground mt-1">contact@francofirm.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Office Hours</div>
                  <div className="text-muted-foreground mt-1">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    After-hours appointments available
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl font-medium text-card-foreground mb-2">Get Your Free Case Review</h3>
            <p className="text-muted-foreground mb-6 text-sm">No recovery, no fee. All cases taken on contingency.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                  <Input
                    value={formState.firstName}
                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    placeholder="Your first name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                  <Input
                    value={formState.lastName}
                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    placeholder="Your last name"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@email.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="(555) 555-5555"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Tell Us About Your Case</label>
                <Textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Briefly describe your injury or situation..."
                  className="bg-background min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group font-medium" disabled={submitting}>
                Request Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
