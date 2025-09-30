"use client"

import Image from "next/image"

const gallery = [
  {
    before: "https://images.unsplash.com/photo-1612874741806-0f63a8ad6f26?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1612874741657-72a2c6c3f963?auto=format&fit=crop&w=1920&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1616628186206-1b52415573f1?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1616628186137-2f1a5c9dff6a?auto=format&fit=crop&w=1920&q=80",
  },
  {
    before: "https://images.unsplash.com/photo-1606227779730-bfa28c408a9a?auto=format&fit=crop&w=1920&q=80",
    after: "https://images.unsplash.com/photo-1606227779700-dbf4e8685a6d?auto=format&fit=crop&w=1920&q=80",
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
