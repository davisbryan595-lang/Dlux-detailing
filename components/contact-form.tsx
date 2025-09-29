"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const FORMSPREE_ID = "your-formspree-id" // replace in README.md

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setStatus("ok")
        form.reset()
        return
      }
      throw new Error("Formspree error")
    } catch {
      setStatus("error")
      // Fallback: open mailto with prefilled content
      const subject = encodeURIComponent("D-LUX Detailing Quote Request")
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\nMessage: ${data.get("message")}`,
      )
      window.location.href = `mailto:Do620322@gmail.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-semibold">
            Contact
          </h2>
          <p className="mt-2 text-muted-foreground">
            Serving Albuquerque, NM and surrounding areas. Call, email, or use the form and we’ll get back to you
            quickly.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a className="hover:underline" href="tel:+15055570590">
                Phone: (505) 557-0590
              </a>
            </li>
            <li>
              <a className="hover:underline" href="mailto:Do620322@gmail.com">
                Email: Do620322@gmail.com
              </a>
            </li>
            <li className="text-muted-foreground">Hours: Mon–Sat 8am–6pm</li>
            <li className="text-muted-foreground">Area: Albuquerque, NM</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="bg-card border rounded-lg p-5 space-y-4" noValidate>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required aria-required="true" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" required aria-required="true" pattern="^[0-9+()\\-\\s]{7,}$" />
          </div>
          <div>
            <Label htmlFor="service">Service Interested In</Label>
            <Input id="service" name="service" placeholder="Full detailing, ceramic coating…" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={4} />
          </div>
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="bg-primary text-primary-foreground w-full"
          >
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
          {status === "ok" && (
            <p role="status" className="text-sm text-green-500">
              Thanks! We’ll be in touch.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-500">
              Couldn’t reach the form service, opened your email client as fallback.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
