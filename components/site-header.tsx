"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function SiteHeader() {
  // simple reveal hook
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 },
    )
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" aria-label="D-LUX Detailing Home" className="flex items-center gap-3 hover-glow">
          <Image
            src="/img/logo-dlux.jpeg"
            alt="D-LUX Detailing logo"
            width={40}
            height={40}
            className="rounded-sm"
            priority
          />
          <span className="font-semibold tracking-wide">D-LUX Detailing</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a href="#services" className="hover:underline underline-offset-4 hover-glow">
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="hover:underline underline-offset-4 hover-glow">
                Process
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline underline-offset-4 hover-glow">
                Before/After
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline underline-offset-4 hover-glow">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline underline-offset-4 hover-glow">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-primary text-primary-foreground hover-glow">
            <a href="tel:+15055570590" aria-label="Call D-LUX Detailing">
              (505) 557-0590
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
