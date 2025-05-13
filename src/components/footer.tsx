
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram, Code, BookOpen } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 py-8 mt-12 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">Code Chronicles</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Competitive programmer and college student documenting my journey through algorithms, data structures, and software development.
            </p>
            <div className="flex space-x-4 mt-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter (X)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LeetCode"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors inline-flex">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors inline-flex">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors inline-flex">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors inline-flex">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p className="mb-2">your.email@example.com</p>
                <p>Your City, Country</p>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Code Chronicles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
