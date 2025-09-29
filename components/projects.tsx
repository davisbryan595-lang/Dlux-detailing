import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  {
    title: "Daily Driver Revival",
    problem: "Road film, light swirls, tired interior.",
    solution: "Two-stage wash, clay decon, interior steam, leather nourish.",
    result: "Deep gloss and fresh cabin ready for the week.",
    img: "/img/projects/p1-large.jpg",
  },
  {
    title: "Ceramic Weekend Warrior",
    problem: "Paint lacked protection for track days.",
    solution: "Single-stage correction and 2-year ceramic coating.",
    result: "Slick, hydrophobic finish and easy maintenance.",
    img: "/img/projects/p2-large.jpg",
  },
  {
    title: "Crystal Night Visibility",
    problem: "Cloudy headlights reduced night safety.",
    solution: "Wet sand, polish, UV sealant.",
    result: "Sharper beam and cleaner front-end look.",
    img: "/img/projects/p3-large.jpg",
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="projects-title" className="text-3xl md:text-4xl font-semibold">
          Projects
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <Card key={p.title} className="overflow-hidden reveal hover-glow">
              <CardHeader className="p-0">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.img}')` }}
                  aria-hidden="true"
                />
              </CardHeader>
              <CardContent className="p-5">
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <dl className="mt-3 text-sm space-y-1 text-muted-foreground">
                  <div>
                    <dt className="inline font-medium text-foreground">Problem:</dt>{" "}
                    <dd className="inline">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-foreground">Solution:</dt>{" "}
                    <dd className="inline">{p.solution}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-foreground">Result:</dt>{" "}
                    <dd className="inline">{p.result}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
