const technologies = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "expressjs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Socket.io", icon: "socketio" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Sass/Scss", icon: "sass" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Figma", icon: "figma" },
  { name: "Cypress", icon: "cypress" },
  { name: "Storybook", icon: "storybook" },
  { name: "Git", icon: "git" },
]

export default function TechStack() {
  return (
    <section className="container px-4 py-8 md:py-16 mx-auto" id="skills">
      <div className="flex justify-center mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">Skills</div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        The skills, tools and technologies I am really good at:
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <TechIcon name={tech.icon} />
            </div>
            <span className="text-xs text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function TechIcon({ name }: { name: string }) {
  // This is a simplified version - in a real implementation, you would import actual SVG icons
  // or use a library like react-icons
  return (
    <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center text-xs font-mono">
      {name.substring(0, 2).toUpperCase()}
    </div>
  )
}

