"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <a href="/" className="font-mono text-lg font-bold">
            &lt;SS /&gt;
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <a href="#work" className="text-sm font-medium hover:text-primary">
            Work
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button> */}

          <a
            className="hidden md:inline-flex border p-2 rounded-md bg-blue-500 hover:bg-transparent dark:hover:border-white"
            href="/Drishti-Kurmavanshi-Resume.pdf"
            download
          >
            Download CV
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-lg font-medium hover:text-primary"
                >
                  Work
                </a>
                <a
                  href="#testimonials"
                  className="text-lg font-medium hover:text-primary"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-primary"
                >
                  Contact
                </a>
                <a href="/Drishti-Kurmavanshi-Resume.pdf" download>
                  Download CV
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
