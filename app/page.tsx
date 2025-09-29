import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/jsonld"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Projects />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <SiteFooter />
      <JsonLd />
    </>
  )
}
