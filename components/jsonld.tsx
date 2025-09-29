export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "D-LUX Detailing",
    image: "https://dlux.example.com/img/logo-dlux.jpeg",
    url: "https://dlux.example.com",
    telephone: "+1-505-557-0590",
    email: "Do620322@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      addressCountry: "US",
    },
    areaServed: "Albuquerque, NM and surrounding areas",
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
