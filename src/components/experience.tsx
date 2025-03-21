import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Sr. Frontend Developer",
    company: "Upwork",
    period: "Nov 2021 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id euismod metus semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    company: "Upwork",
    period: "Jul 2017 - Oct 2021",
    responsibilities: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Upwork",
    period: "Dec 2015 - May 2017",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
]

export default function Experience() {
  return (
    <section className="container px-4 py-8 md:py-16 mx-auto" id="experience">
      <div className="flex justify-center mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">Experience</div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Here is a quick summary of my most recent experiences:
      </h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-8 bg-green-100 text-green-800 flex items-center justify-center rounded">
                    upwork
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

