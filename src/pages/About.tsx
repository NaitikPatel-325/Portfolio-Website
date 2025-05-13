
import { Link } from "react-router-dom";
import { ArrowRight, Code, Book, Briefcase, Award, Calendar, Star, GraduationCap, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section with Typography Effect */}
      <section className="mb-16 text-center">
        <div className="relative mb-8 inline-block">
          <h1 className="text-7xl font-extrabold tracking-tighter sm:text-8xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Hey!
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a competitive programmer, student, and tech enthusiast passionate about solving complex problems
          and pushing the boundaries of what's possible with code.
        </p>
      </section>

      {/* Summary Section */}
      <section className="mb-16 bg-secondary/10 rounded-xl p-8 backdrop-blur-sm border border-border/30">
        <h2 className="text-gradient mb-6 text-3xl font-bold">About Me</h2>
        <div className="space-y-4">
          <p className="leading-relaxed">
            I'm currently pursuing my degree in Computer Science with a focus on algorithms and competitive programming.
            My journey began with a fascination for solving puzzles, which eventually led me to discover the world of
            competitive programming.
          </p>
          <p className="leading-relaxed">
            Beyond academics, I enjoy building personal projects, writing about my experiences, and exploring new technologies.
            I'm particularly interested in algorithm optimization, machine learning, and web development.
          </p>
          <p className="leading-relaxed">
            This portfolio is a showcase of my skills, achievements, and ongoing journey in the world of computer science.
            I'm always open to connecting with like-minded individuals and exploring new opportunities.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-gradient mb-8 text-3xl font-bold">My Journey</h2>
        <div className="relative border-l border-primary/30 pl-8 space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>
            <div className="flex items-center mb-2 text-sm">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-muted-foreground">2023 - Present</span>
            </div>
            <h3 className="text-xl font-semibold">Advanced Algorithms Research</h3>
            <p className="mt-2 text-muted-foreground">
              Working on advanced algorithm research and participating in international competitive programming contests.
              Achieved top rankings in multiple global competitions.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>
            <div className="flex items-center mb-2 text-sm">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-muted-foreground">2021 - 2023</span>
            </div>
            <h3 className="text-xl font-semibold">University Team Lead</h3>
            <p className="mt-2 text-muted-foreground">
              Led the university's competitive programming team to regional finals. Mentored junior students
              and organized coding bootcamps.
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>
            <div className="flex items-center mb-2 text-sm">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-muted-foreground">2019 - 2021</span>
            </div>
            <h3 className="text-xl font-semibold">College Admission</h3>
            <p className="mt-2 text-muted-foreground">
              Started my computer science degree with a scholarship. Discovered my passion for algorithms and data structures.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - Reimagined with cards */}
      <section className="mb-16">
        <h2 className="text-gradient mb-8 text-3xl font-bold">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">C++</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Python</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">JavaScript</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">TypeScript</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Java</Badge>
            </div>
          </div>

          {/* Competitive Programming */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Competitive Programming</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Algorithms</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Data Structures</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Problem Solving</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Dynamic Programming</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Graph Theory</Badge>
            </div>
          </div>
          
          {/* Web Development */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">React</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Node.js</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Tailwind CSS</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">MongoDB</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">TypeScript</Badge>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Git & GitHub</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Docker</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Linux</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">VS Code</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">AWS</Badge>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Leadership</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Technical Writing</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Problem Solving</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Team Collaboration</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Mentoring</Badge>
            </div>
          </div>
          
          {/* Machine Learning */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Machine Learning</h3>
            </div>
            <div className="space-y-3">
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">TensorFlow</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">PyTorch</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Scikit-Learn</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">Data Analysis</Badge>
              <Badge className="mr-2 mb-2 bg-primary/10 text-foreground hover:bg-primary/20 border-primary/20">NLP</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Courses Section */}
      <section className="mb-16">
        <h2 className="text-gradient mb-8 text-3xl font-bold">Relevant Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sepp">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-card/80 hover:bg-card">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold">Software Engineering Principles & Practices</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-muted-foreground">
                    An advanced course covering software development methodologies, design patterns, testing strategies,
                    and team collaboration techniques. Key projects included developing a full-stack web application
                    using agile practices.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mt-2">Agile</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">SOLID Principles</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">TDD</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">CI/CD</Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="dbms">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-card/80 hover:bg-card">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold">Database Management Systems</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-muted-foreground">
                    Comprehensive study of database design, implementation, and administration. Topics included 
                    ER modeling, normalization, SQL optimization, transaction management, and modern NoSQL systems.
                    Final project involved building a complex database system for a mock e-commerce platform.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mt-2">SQL</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">MongoDB</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Database Design</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Query Optimization</Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="os">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-card/80 hover:bg-card">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold">Operating Systems</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-muted-foreground">
                    In-depth exploration of modern operating system principles including process management, 
                    memory management, file systems, and security. Practical assignments involved implementing
                    key OS components in C and analyzing performance trade-offs.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mt-2">Process Scheduling</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Memory Management</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">File Systems</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Synchronization</Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cn">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-card/80 hover:bg-card">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold">Computer Networks</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-muted-foreground">
                    Comprehensive study of network architecture, protocols, and applications. Topics covered
                    included TCP/IP stack, routing algorithms, network security, and emerging technologies
                    like SDN. Projects included implementing network protocols and analyzing network traffic.
                  </p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mt-2">TCP/IP</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Routing</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Network Security</Badge>
                    <Badge variant="outline" className="mr-2 mt-2">Socket Programming</Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <h2 className="text-gradient mb-8 text-3xl font-bold">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Competitive Programming</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">1</div>
                <span className="text-muted-foreground">Ranked in the top 5% in Google CodeJam 2022</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">2</div>
                <span className="text-muted-foreground">Gold Medal at ACM-ICPC Regional 2021</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">3</div>
                <span className="text-muted-foreground">Top performer in university-level coding competitions</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">4</div>
                <span className="text-muted-foreground">5-star rating on Hackerrank and Codeforces</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Academic Achievements</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">1</div>
                <span className="text-muted-foreground">Dean's List for Academic Excellence (2020-2023)</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">2</div>
                <span className="text-muted-foreground">Merit scholarship recipient</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">3</div>
                <span className="text-muted-foreground">Best Student Project Award 2022</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">4</div>
                <span className="text-muted-foreground">Published research paper on algorithm optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <Button asChild size="lg" className="bg-gradient text-white">
          <Link to="/projects">
            View My Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
