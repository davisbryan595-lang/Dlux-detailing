import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Renee M.",
    quote: "They brought my SUV back to life — looks better than delivery day.",
    rating: 5,
  },
  {
    name: "Carlos G.",
    quote: "On-time, meticulous, and the ceramic coating is unreal in the rain.",
    rating: 5,
  },
  {
    name: "Nadia P.",
    quote: "Great communication and stunning results. Highly recommend.",
    rating: 5,
  },
  {
    name: "Evan L.",
    quote: "Headlights are crystal clear. Night driving is safer now.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="testimonials-title" className="text-3xl md:text-4xl font-semibold">
          Testimonials
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="reveal">
              <CardContent className="p-6">
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground" aria-label={`${t.rating} out of 5 stars`}>
                    {"★★★★★".slice(0, t.rating)}
                  </p>
                </div>
                <p className="mt-3 text-pretty">{t.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
