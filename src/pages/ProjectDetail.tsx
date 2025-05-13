import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample projects data (same as in Projects.tsx)
const projectsData = [
  {
    id: 1,
    title: "Algorithm Visualizer",
    description: "An interactive web application that visualizes various sorting and pathfinding algorithms.",
    longDescription: `
      <p>The Algorithm Visualizer is an educational tool designed to help students and programming enthusiasts understand how different algorithms work through interactive visualizations.</p>
      
      <p>This project showcases my ability to implement complex algorithms and create intuitive user interfaces that make abstract concepts more accessible.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Interactive visualization of sorting algorithms (Bubble Sort, Quick Sort, Merge Sort, etc.)</li>
        <li>Step-by-step execution with adjustable speed</li>
        <li>Pathfinding algorithms visualization (Dijkstra's, A*, BFS, DFS)</li>
        <li>Custom input options for testing different scenarios</li>
        <li>Detailed explanation of each algorithm's time and space complexity</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <p>The frontend is built with React and TypeScript, using the HTML Canvas API for rendering visualizations. State management is handled through React Context API, ensuring smooth transitions between algorithm states.</p>
      
      <p>The algorithm implementations are optimized for both performance and educational clarity, with each step carefully tracked to provide meaningful visual feedback.</p>
    `,
    technologies: ["React", "TypeScript", "Canvas API"],
    links: {
      github: "https://github.com/yourusername/algorithm-visualizer",
      live: "https://algorithm-visualizer-demo.com"
    },
    category: "web",
    image: "project-1.jpg",
    images: ["algo-1.jpg", "algo-2.jpg", "algo-3.jpg"]
  },
  {
    id: 2,
    title: "Competitive Programming Tracker",
    description: "A tool to track progress in competitive programming across multiple platforms.",
    longDescription: `
      <p>The Competitive Programming Tracker is a comprehensive tool that helps competitive programmers monitor their progress across platforms like Codeforces, LeetCode, HackerRank, and others.</p>
      
      <p>I built this project out of a personal need to track my own competitive programming journey and identify areas for improvement.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Unified dashboard showing performance across multiple platforms</li>
        <li>Progress tracking with visual charts and statistics</li>
        <li>Problem recommendation based on skill gaps</li>
        <li>Contest calendar with reminders</li>
        <li>Personal notes and solution storage</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <p>This full-stack application uses Next.js for the frontend, with a Node.js backend that integrates with various competitive programming platform APIs. MongoDB stores user data and problem-solving history.</p>
      
      <p>The recommendation engine uses a simple machine learning algorithm to suggest problems based on the user's solving history and identified weak areas.</p>
    `,
    technologies: ["Next.js", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/cp-tracker",
      live: "https://cptracker-demo.com"
    },
    category: "web",
    image: "project-2.jpg",
    images: ["tracker-1.jpg", "tracker-2.jpg", "tracker-3.jpg"]
  },
  // Other projects...
  {
    id: 3,
    title: "Graph Theory Solutions",
    description: "A collection of solutions to complex graph theory problems from competitive programming contests.",
    longDescription: "Full project description here...",
    technologies: ["C++", "Algorithms", "Data Structures"],
    links: {
      github: "https://github.com/yourusername/graph-theory-solutions",
    },
    category: "competitive",
    image: "project-3.jpg",
    images: ["graph-1.jpg", "graph-2.jpg"]
  },
  {
    id: 4,
    title: "Dynamic Programming Techniques",
    description: "Implementation of advanced DP techniques used in competitive programming.",
    longDescription: "Full project description here...",
    technologies: ["C++", "Algorithms"],
    links: {
      github: "https://github.com/yourusername/dp-techniques",
    },
    category: "competitive",
    image: "project-4.jpg",
    images: ["dp-1.jpg", "dp-2.jpg"]
  },
  {
    id: 5,
    title: "College Event Management System",
    description: "A full-stack application for managing college events and registrations.",
    longDescription: "Full project description here...",
    technologies: ["React", "Express", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/event-management",
      live: "https://event-system-demo.com"
    },
    category: "web",
    image: "project-5.jpg",
    images: ["event-1.jpg", "event-2.jpg", "event-3.jpg"]
  },
  {
    id: 6,
    title: "Data Structure Playground",
    description: "Interactive visualizations of complex data structures.",
    longDescription: "Full project description here...",
    technologies: ["JavaScript", "D3.js"],
    links: {
      github: "https://github.com/yourusername/ds-playground",
      live: "https://ds-playground-demo.com"
    },
    category: "web",
    image: "project-6.jpg",
    images: ["ds-1.jpg", "ds-2.jpg"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  
  // Find the project with the matching ID
  const project = projectsData.find(project => project.id === projectId);
  
  // Related projects (same category, excluding current project)
  const relatedProjects = project 
    ? projectsData
        .filter(p => p.category === project.category && p.id !== project.id)
        .slice(0, 3)
    : [];

  if (!project) {
    return (
      <div className="container px-4 md:px-6 py-20 text-center">
        <h1>Project Not Found</h1>
        <p className="text-muted-foreground mt-4">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Back to Projects Link */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
      
      <article className="max-w-4xl mx-auto">
        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.links?.github && (
              <Button asChild variant="outline" className="gap-2">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.links?.live && (
              <Button asChild className="gap-2">
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-12 border border-border">
          <div className="aspect-video bg-muted w-full">
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-muted-foreground">Project Screenshot</span>
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert mb-12"
          dangerouslySetInnerHTML={{ __html: project.longDescription }}
        />
        
        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-border">
                  <div className="aspect-video bg-muted">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-muted-foreground">Gallery Image {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="mt-16 pt-16 border-t border-border max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <div 
                key={relatedProject.id} 
                className="rounded-lg border border-border bg-card transition-all hover:shadow-md overflow-hidden"
              >
                <div className="aspect-video bg-muted">
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {relatedProject.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/projects/${relatedProject.id}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
