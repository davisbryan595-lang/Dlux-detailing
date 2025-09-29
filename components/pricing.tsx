import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Standard",
    price: "$149",
    features: ["Exterior wash", "Interior vacuum & wipe-down", "Windows & tires"],
  },
  {
    name: "Premium",
    price: "$249",
    features: ["Standard + clay decon", "Interior steam touchpoints", "Spray sealant"],
  },
  {
    name: "Elite",
    price: "Custom",
    features: ["Paint correction", "Ceramic coating", "Show car finish"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="pricing-title" className="text-3xl md:text-4xl font-semibold">
          Pricing
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Card key={t.name} className="reveal hover-glow">
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{t.name}</span>
                  <span className="text-2xl font-semibold">{t.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-5 bg-primary text-primary-foreground w-full hover-glow">
                  <a href="#contact" aria-label={`Choose ${t.name} plan`}>
                    Get a Quote
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
