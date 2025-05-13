
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-gradient">Naitik Patel</span>
        </Link>

        <div className="flex md:hidden">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-base font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/projects" className="text-base font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          {/* <Link to="/blog" className="text-base font-medium transition-colors hover:text-primary">
            Blog
          </Link> */}
          <ThemeSwitcher />
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 flex flex-col bg-background p-6 md:hidden">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              {/* <Link 
                to="/blog" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
