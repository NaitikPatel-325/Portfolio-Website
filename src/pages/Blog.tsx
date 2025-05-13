
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample blog posts data
const blogPostsData = [
  {
    id: 1,
    title: "My First Competitive Programming Contest",
    excerpt: "An exciting journey through my first ever live coding competition - the challenges, the adrenaline, and the lessons learned.",
    date: "August 15, 2022",
    category: "Competitive Programming",
    image: "blog-1.jpg"
  },
  {
    id: 2,
    title: "Surviving Finals Week: A CS Student's Guide",
    excerpt: "How I balanced competitive programming practice with final exams preparation, and the techniques that helped me succeed.",
    date: "December 10, 2022",
    category: "College Life",
    image: "blog-2.jpg"
  },
  {
    id: 3,
    title: "Mastering Dynamic Programming",
    excerpt: "A deep dive into dynamic programming concepts that helped me solve complex competitive programming challenges.",
    date: "February 5, 2023",
    category: "Competitive Programming",
    image: "blog-3.jpg"
  },
  {
    id: 4,
    title: "My Internship Experience at Tech Giant",
    excerpt: "From classroom to corporate - how competitive programming prepared me for a real-world software engineering internship.",
    date: "July 22, 2023",
    category: "Career",
    image: "blog-4.jpg"
  },
  {
    id: 5,
    title: "Setting Up the Perfect Coding Environment",
    excerpt: "A tour of my development setup for both competitive programming and personal projects.",
    date: "September 8, 2023",
    category: "Productivity",
    image: "blog-5.jpg"
  },
  {
    id: 6,
    title: "Hackathon Adventure: 48 Hours of Coding",
    excerpt: "My experience participating in a college hackathon - the team dynamics, the project, and the valuable lessons.",
    date: "October 30, 2023",
    category: "College Life",
    image: "blog-6.jpg"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = searchQuery 
    ? blogPostsData.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPostsData;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <h1 className="text-gradient">The Code Chronicles</h1>
            <p className="text-xl text-muted-foreground">
              Stories from my journey through college life and competitive programming.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <div className="md:grid md:grid-cols-2">
                  {/* Featured Post Image */}
                  <div className="bg-muted h-64 md:h-auto">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-muted-foreground">Featured Post Image</span>
                    </div>
                  </div>
                  
                  {/* Featured Post Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                        {filteredPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{filteredPosts[0].date}</span>
                      <Button asChild variant="ghost" className="group">
                        <Link to={`/blog/${filteredPosts[0].id}`}>
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div 
                key={post.id} 
                className="rounded-lg overflow-hidden border border-border bg-card transition-all hover:shadow-md"
              >
                {/* Post Image */}
                <div className="aspect-video bg-muted">
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-muted-foreground">Post Image</span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button asChild variant="ghost" className="group p-0">
                      <Link to={`/blog/${post.id}`}>
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No blog posts found</h3>
              <p className="text-muted-foreground">
                Try changing your search query or check back later for new posts.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
