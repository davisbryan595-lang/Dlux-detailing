import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "exterior",
    title: "Exterior Cleaning",
    bullets: ["Hand wash & dry", "Wheel & tire care", "Gloss-safe techniques"],
    time: "1–2 hours",
    price: "from $99",
    img: "/img/services/exterior-large.jpg",
    alt: "Technician hand-washing a sleek car with glossy reflections",
  },
  {
    id: "interior",
    title: "Interior Cleaning",
    bullets: ["Vacuum & dust", "Steam clean touchpoints", "Leather care"],
    time: "1.5–3 hours",
    price: "from $129",
    img: "/img/services/interior-large.jpg",
    alt: "Steam-cleaning leather seats inside a luxury sedan",
  },
  {
    id: "full",
    title: "Full Detailing",
    bullets: ["Inside & out", "Decontamination", "Showroom finish"],
    time: "3–5 hours",
    price: "from $249",
    img: "/img/services/full-large.jpg",
    alt: "Before and after showing a car restored to a glossy finish",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    bullets: ["Hydrophobic beading", "Long-lasting protection", "Enhanced gloss"],
    time: "Half-day",
    price: "quote",
    img: "/img/services/ceramic-large.jpg",
    alt: "Close-up of water beading on ceramic-coated hood",
  },
  {
    id: "paint",
    title: "Paint Correction",
    bullets: ["Swirl removal", "Machine polish", "Depth and clarity"],
    time: "Half-day+",
    price: "quote",
    img: "/img/services/paint-large.jpg",
    alt: "Macro of paint polishing in progress with compound swirls",
  },
  {
    id: "headlight",
    title: "Headlight Restoration",
    bullets: ["Oxidation removal", "UV protectant", "Sharper visibility"],
    time: "1 hour",
    price: "from $79",
    img: "/img/services/headlight-large.jpg",
    alt: "Side-by-side of yellowed vs restored headlight lens",
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="services-title" className="text-3xl md:text-4xl font-semibold">
          Services
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Premium mobile detailing brought to your driveway. Every package uses safe, high-end products and meticulous
          methods.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.id} className="overflow-hidden reveal group hover-glow dark:bg-gray-800">
              <CardHeader className="p-0">
                <div
                  className="h-40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${s.img}')` }}
                  aria-hidden="true"
                />
              </CardHeader>
              <CardContent className="p-5">
                <CardTitle className="text-xl">{s.title}</CardTitle>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{s.time}</span>
                  <span className="font-medium">{s.price}</span>
                </div>
                <div className="mt-5">
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover-glow">
                    <a href="#contact" aria-label={`Get quote for ${s.title}`}>
                      Get a Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
