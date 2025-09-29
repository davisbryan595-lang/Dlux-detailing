import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden min-h-[100svh]">
      {/* Background moving image (hotlink) */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photos/jJ2u2XEj3tQ?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat motion-safe:hero-drift"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 min-h-[100svh] flex items-center">
        <div className="max-w-2xl reveal">
          <h1 className="text-balance text-4xl md:text-6xl font-semibold leading-tight">
            Experience the luxury your car deserves
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Cinematic mobile detailing in Albuquerque and surrounding areas — exterior & interior cleaning, full
            detailing, ceramic coating, paint correction, and headlight restoration.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover-glow">
              <a href="tel:+15055570590">Call Now</a>
            </Button>
            <Button variant="secondary" asChild className="hover-glow">
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
      {/* subtle vignetting for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-background/20" />
    </section>
  )
}
