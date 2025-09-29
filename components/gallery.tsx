const pairs = [
  {
    before: "/img/beforeafter/1-before-large.jpg",
    after: "/img/beforeafter/1-after-large.jpg",
    caption: "Interior deep clean and leather care.",
  },
  {
    before: "/img/beforeafter/2-before-large.jpg",
    after: "/img/beforeafter/2-after-large.jpg",
    caption: "Exterior wash and paint decontamination.",
  },
  {
    before: "/img/beforeafter/3-before-large.jpg",
    after: "/img/beforeafter/3-after-large.jpg",
    caption: "Headlight restoration and lens sealing.",
  },
  {
    before: "/img/beforeafter/4-before-large.jpg",
    after: "/img/beforeafter/4-after-large.jpg",
    caption: "Engine bay freshen and dressing.",
  },
  {
    before: "/img/beforeafter/5-before-large.jpg",
    after: "/img/beforeafter/5-after-large.jpg",
    caption: "Paint correction for swirl removal.",
  },
  {
    before: "/img/beforeafter/6-before-large.jpg",
    after: "/img/beforeafter/6-after-large.jpg",
    caption: "Ceramic coating hydrophobic finish.",
  },
]

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="gallery-title" className="text-3xl md:text-4xl font-semibold">
          Before & After
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {pairs.map((p, i) => (
            <figure key={i} className="reveal">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src={p.before || "/placeholder.svg"}
                  alt="Before detailing"
                  className="w-full h-40 object-cover rounded-md"
                  loading="lazy"
                />
                <img
                  src={p.after || "/placeholder.svg"}
                  alt="After detailing"
                  className="w-full h-40 object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted-foreground">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
