"use client"

const team = [
  {
    name: "Manny Rodriguez",
    role: "lawyer",
    specialty: "Investment cases.",
    image: "https://i.ibb.co/8HN1fX6/8558682a-55bb-4475-a460-061fc97a31c8.jpg",
  },
  {
    name: "Sean Guerra",
    role: "Paralegal",
    specialty: "Case Management",
    image: "https://i.ibb.co/qMDwc9wz/3398622f-5ef0-4b29-9d8f-d4fe41854744.jpg",
  },
  {
    name: "Sonia Vega",
    role: "Case Manager",
    specialty: "Client Relations",
    image: "https://i.ibb.co/Cp79LwvD/6cac1a68-e162-4ded-8e9f-a676a5cf6301.jpg",
  },
  {
    name: "Jude Morilla",
    role: "Bilingual Receptionist",
    specialty: "Client Services",
    image: "https://i.ibb.co/MxzPcNBm/3ab03999-7d08-4db0-8de3-4183329b7f7e.jpg",
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
            <div key={index} className="group">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
