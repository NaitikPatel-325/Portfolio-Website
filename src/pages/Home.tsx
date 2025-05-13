import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-gradient">Hey, I'm Naitik Patel</h1>
              <p className="text-xl text-muted-foreground">
                I'm a competitive programmer and college student who enjoys solving complex problems and developing modern web applications. From algorithms to UI/UX, I'm passionate about creating intuitive, high-performance software and sharing my learning through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient text-white">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-delayed animate-fade-in lg:flex lg:justify-end">
              <div className="rounded-xl overflow-hidden border border-border shadow-lg max-w-[320px] mx-auto w-full">
                <div className="aspect-[4/5] bg-muted/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  <img
                    src="/Naitiks.jpeg"
                    alt="Naitik Jpg" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
