import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Paint Correction",
    before: "https://i.imgur.com/yRwr54Y.jpg",
    after: "https://i.imgur.com/5Z1v2Zf.jpg",
  },
  {
    title: "Interior Detailing",
    before: "https://i.imgur.com/lKj2akB.jpg",
    after: "https://i.imgur.com/VmEoWxV.jpg",
  },
  {
    title: "Headlight Restoration",
    before: "https://i.imgur.com/69utpHu.jpg",
    after: "https://i.imgur.com/c3t1oLR.jpg",
  },
]

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="gallery-title" className="text-3xl md:text-4xl font-semibold">
          Before & After
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden reveal">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-semibold">Before</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-semibold">After</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
