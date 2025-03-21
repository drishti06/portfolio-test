import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Copy, MapPin } from "lucide-react";
import { Button } from "./components/ui/button";
import TechStack from "./components/tech-stack";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-8 md:py-16 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hi, I&apos;m Drishti <span className="inline-block">👋</span>
            </h1>
            <p className="text-muted-foreground mb-6">
              I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              1 years, I still love it as if it was something new.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2 text-green-500 mb-6">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span>Available for new projects</span>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/drishti06" target="_blank">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-background shadow-xl">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Sagar's profile picture"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-8 md:py-16 mx-auto" id="about">
        <div className="flex justify-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">
            About me
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Curious about me? Here you have it:
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=400"
                alt="Sagar standing outdoors"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-4">
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clean, readable, highly performant code matters to me.
            </p>
            <p className="mb-4">
              I began my journey as a web developer in 2015, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my 7th year as a developer, I&apos;ve had the opportunity
              to work with various companies and clients, building applications
              using modern technologies such as Next.js, TypeScript, Node.js,
              PostgreSQL, Supabase and much more.
            </p>
            <p className="mb-4">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="mb-8">
              When I&apos;m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, consuming the
              latest developments in the tech world, or on a flight to explore
              the world. You can find tech-related blogs and build in public, or
              you can follow me on GitHub.
            </p>
            <div className="mb-8">
              <h3 className="font-medium mb-3">
                Finally, some quick bits about me:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>B.Sc in Computer Science</li>
                <li>Full time Freelancer</li>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              One last thing, I&apos;m available for freelance work, so feel
              free to reach out and say hello! I promise I don&apos;t bite 🙂
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <TechStack />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section className="container px-4 py-8 md:py-16 mx-auto" id="contact">
        <div className="flex justify-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">
            Get in touch
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What&apos;s next? Feel free to reach out to me if you&apos;re looking
          for a developer, have a query, or simply want to connect.
        </h2>

        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-medium">kurmavanshi81@gmail.com</span>
            </div>
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="container px-4 py-8 mx-auto border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <p className="text-sm text-muted-foreground">© 2023 Sagar Shah. All Rights Reserved.</p> */}
          </div>
          <div className="flex gap-4">
            {/* <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Twitter
        </a> */}
            <a
              href="https://github.com/drishti06"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/drishti-kurmavanshi-950571242/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
