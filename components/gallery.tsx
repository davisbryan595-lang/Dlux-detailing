"use client"

import Image from "next/image"

const gallery = [
  {
    before: "/img/beforeafter/1-before-large.jpg",
    after: "/img/beforeafter/1-after-large.jpg",
  },
  {
    before: "/img/beforeafter/2-before-large.jpg",
    after: "/img/beforeafter/2-after-large.jpg",
  },
  {
    before: "/img/beforeafter/3-before-large.jpg",
    after: "/img/beforeafter/3-after-large.jpg",
  },
]

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="gallery-title" className="text-3xl md:text-4xl font-semibold">
          Before & After
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {gallery.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2 reveal">
              <div className="relative w-full h-48 md:h-64 rounded overflow-hidden">
                <Image
                  src={item.before}
                  alt="Before detailing"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  Before
                </span>
              </div>
              <div className="relative w-full h-48 md:h-64 rounded overflow-hidden">
                <Image
                  src={item.after}
                  alt="After detailing"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
