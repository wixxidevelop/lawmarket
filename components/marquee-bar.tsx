"use client"

export function MarqueeBar() {
  const items = [
    "WORKERS' COMPENSATION",
    "PERSONAL INJURY",
    "SOCIAL SECURITY DISABILITY",
    "CAR ACCIDENTS",
    "SLIP & FALL",
    "WORKPLACE INJURIES",
    "DISABILITY BENEFITS",
    "FREE CONSULTATION",
  ]

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-primary-foreground tracking-wider flex items-center gap-8"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
