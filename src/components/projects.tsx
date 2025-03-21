import { ExternalLink } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const projects = [
  {
    id: 1,
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus vulputate viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    id: 2,
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus vulputate viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    id: 3,
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus vulputate viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
]

export default function Projects() {
  return (
    <section className="container px-4 py-8 md:py-16 mx-auto" id="work">
      <div className="flex justify-center mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">Work</div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Some of the noteworthy projects I have built:
      </h2>
      <div className="space-y-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card key={project.id} className="overflow-hidden border shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="order-2 md:order-1 p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="rounded-md">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-64 md:h-auto overflow-hidden">
                <img src={project.image || "/placeholder.svg"} alt={project.name} className="object-cover" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

