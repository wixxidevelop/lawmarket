"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    title: "Workers' Compensation",
    description:
      "If the insurance carrier is denying your claim, underpaying your benefits or cutting them off early, our team can help.",
    details:
      "Workers' comp should pay all your necessary medical expenses and provide wage replacement or disability benefits while you are out of work. If your workers' compensation claim has been denied, if your benefits are being unreasonably delayed or cut off before you are ready to go back to work, our team can help you get the benefits you need and are entitled to under Florida workers' compensation law.",
  },
  {
    title: "Personal Injury",
    description:
      "When a negligent party hurts you, we'll hold them accountable for the justice and compensation you need and deserve.",
    details:
      "When you've been injured because of the negligence of another, you can hold them accountable for the harm they have caused, including your medical bills, lost wages, pain and suffering, and other legal damages. We've been handling personal injury claims in Tampa Bay for years and know what it takes to get the other side to pay.",
  },
  {
    title: "Social Security Disability",
    description:
      "Most initial applications for Social Security Disability benefits are rejected. We'll work to get your claim approved.",
    details:
      "Out of every paycheck you've ever earned, the government has taken a chunk to pay for Social Security Disability Insurance (SSDI). If you become disabled and can no longer work, then Social Security owes you monthly benefits. The government turns away more than two-thirds of the applications it receives. We know how to fix problems with your claim and move it through the proper channels to get it approved.",
  },
  {
    title: "Car & Auto Accidents",
    description:
      "Injured in a car accident? We fight to get you the compensation you deserve for your injuries and damages.",
    details:
      "If your accident happened while you were working, you might have both a personal injury claim and a workers' compensation claim. While you can't sue your employer for a workplace accident, you can sue a third party who was liable for causing the injury. As a law firm with practices in both personal injury and workers' compensation, we can explore both avenues to get you all the compensation available.",
  },
  {
    title: "Appeals & Mediations",
    description:
      "Our lead attorney is a Certified Circuit Civil Mediator who can advise you on whether it makes sense to appeal your case.",
    details:
      "Attorney Manny is a frequent lecturer to attorney groups on legal matters as well as a Certified Circuit Civil Mediator who frequently performs workers' compensation and personal injury mediations. He is also a successful appellate lawyer who can handle your workers' comp, personal injury or SSDI appeal as necessary.",
  },
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-foreground leading-tight">
            Practice Areas
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Comprehensive legal solutions tailored to your unique needs, delivered with precision and care.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {services.map((service, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground font-mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                }`}
              >
                <div className="pl-12 md:pl-16 pr-16 space-y-4">
                  <p className="text-lg text-foreground">{service.description}</p>
                  <p className="text-muted-foreground">{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
