import { Card, CardContent } from "@/components/ui/card"

const steps = [
  { title: "Request a Quote", desc: "Tell us your vehicle and location in Albuquerque.", icon: "/icons/badge.jpg" },
  { title: "We Come to You", desc: "Fully equipped mobile detailing van at your driveway.", icon: "/icons/truck.jpg" },
  {
    title: "Cinematic Finish",
    desc: "Meticulous techniques for a glossy, protected result.",
    icon: "/icons/badge.jpg",
  },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-16 md:py-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="process-title" className="text-3xl md:text-4xl font-semibold">
          How It Works
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <Card key={s.title} className="reveal">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img src={s.icon || "/placeholder.svg"} alt="" width={28} height={28} aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
