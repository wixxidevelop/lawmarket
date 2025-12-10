"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"

const team = [
  {
    name: "Manny Rodriguez",
    role: "lawyer",
    specialty: "Investment cases.",
    image: "https://i.ibb.co/8HN1fX6/8558682a-55bb-4475-a460-061fc97a31c8.jpg",
    email: "Manny Rodriguez@lawmarketfirm.com",
   
    bio:
      "Dedicated trial attorney focused on investment and injury cases, delivering strategic representation with client-first care.",
    practiceAreas: ["Workers' Compensation", "Personal Injury", "Social Security Disability", "Appeals"],
  },
  {
    name: "Sean Guerra",
    role: "Paralegal",
    specialty: "Case Management",
    image: "https://i.ibb.co/qMDwc9wz/3398622f-5ef0-4b29-9d8f-d4fe41854744.jpg",
    email: "SeanGuerra@lawmarketfirm.com",
  
    bio:
      "Experienced paralegal supporting discovery, filings, and case coordination to keep matters moving efficiently.",
    practiceAreas: ["Workers' Compensation", "Personal Injury"],
  },
  {
    name: "Sonia Vega",
    role: "Case Manager",
    specialty: "Client Relations",
    image: "https://i.ibb.co/Cp79LwvD/6cac1a68-e162-4ded-8e9f-a676a5cf6301.jpg",
    email: "SoniaVeg@lawmarketfirm.com",
    
    bio:
      "Client-focused case manager ensuring clear communication and timely updates throughout your case.",
    practiceAreas: ["Client Relations", "Scheduling"],
  },
  {
    name: "Jude Morilla",
    role: "Bilingual Receptionist",
    specialty: "Client Services",
    image: "https://i.ibb.co/MxzPcNBm/3ab03999-7d08-4db0-8de3-4183329b7f7e.jpg",
    email: "JudeMorilla@lawmarketfirm.com",
    phone: "+1929 598 0910",
    bio:
      "Frontline bilingual receptionist assisting clients with intake and appointment support in English and Spanish.",
    practiceAreas: ["Client Services", "Intake"],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-foreground">
              Get Personalized Representation
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From our dedicated team who works quickly to help find solutions and ensures you understand everything every
            step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Dialog key={index}>
              <div className="group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{member.name}</h3>
                <div className="text-muted-foreground text-sm mt-1">{member.role}</div>
                <div className="text-primary text-sm font-medium mt-1">{member.specialty}</div>
                <div className="mt-4">
                  <DialogTrigger asChild>
                    <Button size="sm" className="font-medium">View Profile</Button>
                  </DialogTrigger>
                </div>
              </div>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{member.name}</DialogTitle>
                  <DialogDescription>{member.role}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-muted-foreground">{member.bio}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href={`mailto:${member.email}`} className="text-foreground font-medium hover:underline">{member.email}</a>
                    </div>
                    {member.phone && (
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <a
                          href={`tel:${(member.phone ?? '').replace(/\s/g, '')}`}
                          className="text-foreground font-medium hover:underline"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-muted-foreground mb-2">Focus Areas</div>
                    <div className="flex flex-wrap gap-2">
                      {member.practiceAreas?.map((area) => (
                        <span key={area} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                 
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
