import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="flex items-start gap-3">
          <Image src="/img/logo-dlux.jpeg" alt="D-LUX logo" width={44} height={44} className="rounded-sm" />
          <div>
            <p className="font-semibold text-lg">D-LUX Detailing</p>
            <p className="text-sm text-muted-foreground">
              Luxury mobile detailing in Albuquerque — precision care for interior, exterior, and protection services.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <p className="font-medium mb-3">Quick Links</p>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#gallery">Before & After</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Get a Quote</a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="font-medium mb-3">Contact</p>
          <ul className="text-sm space-y-2">
            <li>
              <a href="tel:+15055570590">Call: (505) 557-0590</a>
            </li>
            <li>
              <a href="mailto:Do620322@gmail.com">Email: Do620322@gmail.com</a>
            </li>
            <li className="text-muted-foreground">Serving Albuquerque and surrounding areas</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} D-LUX Detailing. All rights reserved.</p>
          <p className="text-muted-foreground">
            <Link href="#">Privacy</Link>
            {" · "}
            <Link href="#">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
