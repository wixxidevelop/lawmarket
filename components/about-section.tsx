"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Your Personal Law Firm
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-foreground leading-tight text-balance">
              Dedicated to Providing Quality Representation
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              One of the hallmarks of Franco Law Firm is the personal attention we give to our clients. We meet with
              clients in person but can also conduct meetings via Zoom if that is more comfortable or convenient for
              you.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Have a question or need to talk? Our staff is available throughout the day via phone and email. We are a
              hands-on law office, and we are all here for you. Our satisfied clients let us know how much they
              appreciate our approach and the relationships we build with them.
            </p>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-foreground font-medium">Hablamos Español</p>
              <p className="text-muted-foreground text-sm mt-1">
                Franco Law Firm is a Spanish-speaking bilingual law firm serving the entire Tampa Bay area.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <img
                    src="/modern-office-meeting-room-glass-walls-professiona.jpg"
                    alt="Franco Law Firm consultation room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 rounded-lg bg-primary text-primary-foreground">
                  <div className="font-serif text-3xl font-semibold">Free</div>
                  <div className="text-sm mt-1 opacity-80">Initial Consultation</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="font-serif text-3xl font-semibold text-foreground">20+</div>
                  <div className="text-sm mt-1 text-muted-foreground">Years Experience</div>
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <img
                    src="https://i.ibb.co/3YMqVcJK/046a000a-c37a-49a5-8fd9-f43dfd631445.jpg"
                    alt="Attorney Manny Franco"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
