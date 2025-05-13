
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "Algorithm Visualizer",
    description: "An interactive web application that visualizes various sorting and pathfinding algorithms.",
    technologies: ["React", "TypeScript", "Canvas API"],
    category: "web",
    image: "project-1.jpg"
  },
  {
    id: 2,
    title: "Competitive Programming Tracker",
    description: "A tool to track progress in competitive programming across multiple platforms.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "web",
    image: "project-2.jpg"
  },
  {
    id: 3,
    title: "Graph Theory Solutions",
    description: "A collection of solutions to complex graph theory problems from competitive programming contests.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    category: "competitive",
    image: "project-3.jpg"
  },
  {
    id: 4,
    title: "Dynamic Programming Techniques",
    description: "Implementation of advanced DP techniques used in competitive programming.",
    technologies: ["C++", "Algorithms"],
    category: "competitive",
    image: "project-4.jpg"
  },
  {
    id: 5,
    title: "College Event Management System",
    description: "A full-stack application for managing college events and registrations.",
    technologies: ["React", "Express", "MongoDB"],
    category: "web",
    image: "project-5.jpg"
  },
  {
    id: 6,
    title: "Data Structure Playground",
    description: "Interactive visualizations of complex data structures.",
    technologies: ["JavaScript", "D3.js"],
    category: "web",
    image: "project-6.jpg"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <h1 className="text-gradient">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my work in web development and competitive programming.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          {/* Filter Controls */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="rounded-l-md rounded-r-none"
              >
                All Projects
              </Button>
              <Button
                variant={filter === "web" ? "default" : "outline"}
                onClick={() => setFilter("web")}
                className="rounded-none border-x-0"
              >
                Web Development
              </Button>
              <Button
                variant={filter === "competitive" ? "default" : "outline"}
                onClick={() => setFilter("competitive")}
                className="rounded-r-md rounded-l-none"
              >
                Competitive Programming
              </Button>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center bg-secondary/30">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <div className="pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={`/projects/${project.id}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No projects found</h3>
              <p className="text-muted-foreground">
                Try changing the filter or check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
