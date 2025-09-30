"use client"

import Image from "next/image"

const gallery = [
  {
    before: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1619767886558-efdc50d4b786?auto=format&fit=crop&w=1920&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1615732045431-4c3f1e8efb1c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1603690439501-098e996b5841?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
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
