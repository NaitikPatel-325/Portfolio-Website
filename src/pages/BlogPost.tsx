import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog posts data (same as in Blog.tsx)
const blogPostsData = [
  {
    id: 1,
    title: "My First Competitive Programming Contest",
    excerpt: "An exciting journey through my first ever live coding competition - the challenges, the adrenaline, and the lessons learned.",
    content: `
      <p>It was a chilly Saturday morning when I walked into the university computer lab, laptop in hand, heart racing with anticipation. This was it - my first live competitive programming contest after months of practice on online platforms.</p>
      
      <p>The room was filled with fellow students, some chatting nervously, others silently reviewing algorithms and data structures. I found my assigned seat and began setting up my environment - editor, compiler, and my trusty notebook of code snippets I had compiled over the past few months.</p>
      
      <h2>The First Challenge</h2>
      
      <p>As the contest began, five problems appeared on the screen. The first one seemed approachable - a string manipulation problem that required parsing and some careful edge case handling. I started coding immediately, confident in my approach.</p>
      
      <p>Twenty minutes in, my solution was ready for submission. I ran it against the sample test cases - all passed! With a deep breath, I submitted it... and waited. The verdict came back: "Wrong Answer on Test Case 7." My heart sank.</p>
      
      <p>This was my first lesson in competitive programming contests: never underestimate edge cases. After careful review, I found that my solution didn't handle empty strings correctly. A quick fix, another submission, and finally - "Accepted"!</p>
      
      <h2>The Time Crunch</h2>
      
      <p>With one problem down, I moved to the next. This one involved graph theory - specifically, finding the shortest path with some constraints. I recognized it as a variation of Dijkstra's algorithm, something I had practiced extensively.</p>
      
      <p>As I coded, I kept an eye on the clock and the leaderboard. Time was ticking fast, and other contestants were solving problems at an impressive rate. The pressure was mounting.</p>
      
      <p>Two hours into the contest, I had solved three problems and was working on the fourth. This one involved dynamic programming, and I was struggling to formulate the recurrence relation correctly. The frustration was real - I knew the concept, but translating it into code under pressure was challenging.</p>
      
      <h2>The Final Push</h2>
      
      <p>With thirty minutes left on the clock, I decided to abandon the fourth problem temporarily and attempt the fifth one. It was a greedy algorithm problem, and to my surprise, I saw the solution almost immediately. Within fifteen minutes, I had coded it up and received an "Accepted" verdict.</p>
      
      <p>With a renewed confidence, I returned to problem four. The break had helped clear my mind, and I now saw where I was going wrong. A few adjustments to my DP table, and... "Accepted" on my second try!</p>
      
      <h2>Lessons Learned</h2>
      
      <p>As the contest ended and results were announced, I found myself in the top 10 - not bad for a first-timer! But beyond the ranking, what I valued most were the lessons learned:</p>
      
      <ul>
        <li>Time management is crucial - know when to move on from a problem</li>
        <li>Always consider edge cases before submitting</li>
        <li>Taking a break and returning to a problem with fresh eyes can work wonders</li>
        <li>Practice under timed conditions is different from leisurely solving problems</li>
      </ul>
      
      <p>This contest was just the beginning of my competitive programming journey. The thrill of solving problems under pressure, the camaraderie with fellow contestants, and the constant learning process - I was hooked!</p>
      
      <p>Stay tuned for more stories from my competitive programming adventures. Next time, I'll share how I tackled my first national-level contest and the advanced techniques I learned along the way.</p>
    `,
    date: "August 15, 2022",
    category: "Competitive Programming",
    image: "blog-1.jpg"
  },
  {
    id: 2,
    title: "Surviving Finals Week: A CS Student's Guide",
    excerpt: "How I balanced competitive programming practice with final exams preparation, and the techniques that helped me succeed.",
    content: `
      <p>Finals week - those dreaded seven days that can make or break your semester. As a computer science student with a passion for competitive programming, balancing academic responsibilities with contest preparation was a unique challenge I faced every term.</p>
      
      <p>This post shares my strategy for not just surviving but thriving during finals week, while still keeping my competitive programming skills sharp.</p>
      
      <h2>The Preparation Phase</h2>
      
      <p>Two weeks before finals, I create a detailed schedule that allocates time for each subject and includes short competitive programming practice sessions. Here's what works for me:</p>
      
      <ul>
        <li>Create a priority list of topics for each subject</li>
        <li>Allocate more time to challenging subjects</li>
        <li>Schedule 30-minute competitive programming practice sessions as "brain breaks"</li>
        <li>Prepare healthy snacks and meals in advance</li>
      </ul>
      
      <h2>Effective Study Techniques</h2>
      
      <p>For CS theory courses, I use the Feynman Technique: explain complex concepts in simple terms as if teaching someone else. This helps identify gaps in understanding.</p>
      
      <p>For programming courses, I create mini-projects that apply the concepts. This practical approach reinforces learning and makes revision more engaging.</p>
      
      <p>The Pomodoro Technique (25 minutes of focused study followed by a 5-minute break) helps maintain concentration throughout long study sessions.</p>
      
      <h2>Competitive Programming as a Study Aid</h2>
      
      <p>Surprisingly, competitive programming can complement exam preparation when done strategically:</p>
      
      <ul>
        <li>Solve problems related to course material</li>
        <li>Use competitive programming as a reward after completing study milestones</li>
        <li>Focus on understanding algorithms deeply rather than just solving quickly</li>
      </ul>
      
      <p>For example, when studying discrete mathematics, I found problems on number theory and combinatorics on Codeforces. Solving these reinforced my understanding of the concepts while keeping my competitive edge sharp.</p>
      
      <h2>The Finals Week Strategy</h2>
      
      <p>During the actual finals week, I modify my approach:</p>
      
      <ul>
        <li>Reduce competitive programming to just one problem per day</li>
        <li>Focus on revision rather than learning new material</li>
        <li>Get at least 7 hours of sleep every night</li>
        <li>Stay hydrated and take short walks between study sessions</li>
      </ul>
      
      <p>The day before an exam, I avoid competitive programming altogether and focus solely on final revision and mental preparation.</p>
      
      <h2>Post-Exam Recovery</h2>
      
      <p>After each exam, I give myself a few hours to decompress before starting preparation for the next one. This might involve:</p>
      
      <ul>
        <li>A quick competitive programming contest as a mental reset</li>
        <li>Physical exercise to reduce stress</li>
        <li>Reviewing my performance and adjusting strategy for the next exam</li>
      </ul>
      
      <h2>The Results</h2>
      
      <p>This balanced approach has helped me maintain strong academic performance while continuing to improve my competitive programming ranking. Last semester, I managed to achieve a 3.9 GPA while advancing to the regional round of ACM ICPC.</p>
      
      <p>The key takeaway? Balance is possible with careful planning and strategic integration of your passions into your academic life. Competitive programming doesn't have to take a backseat during finals - it can become part of your success strategy.</p>
      
      <p>How do you balance your competitive programming practice with academic responsibilities? Share your tips and experiences in the comments!</p>
    `,
    date: "December 10, 2022",
    category: "College Life",
    image: "blog-2.jpg"
  },
  // Other blog posts...
  {
    id: 3,
    title: "Mastering Dynamic Programming",
    excerpt: "A deep dive into dynamic programming concepts that helped me solve complex competitive programming challenges.",
    content: "Full blog content here...",
    date: "February 5, 2023",
    category: "Competitive Programming",
    image: "blog-3.jpg"
  },
  {
    id: 4,
    title: "My Internship Experience at Tech Giant",
    excerpt: "From classroom to corporate - how competitive programming prepared me for a real-world software engineering internship.",
    content: "Full blog content here...",
    date: "July 22, 2023",
    category: "Career",
    image: "blog-4.jpg"
  },
  {
    id: 5,
    title: "Setting Up the Perfect Coding Environment",
    excerpt: "A tour of my development setup for both competitive programming and personal projects.",
    content: "Full blog content here...",
    date: "September 8, 2023",
    category: "Productivity",
    image: "blog-5.jpg"
  },
  {
    id: 6,
    title: "Hackathon Adventure: 48 Hours of Coding",
    excerpt: "My experience participating in a college hackathon - the team dynamics, the project, and the valuable lessons.",
    content: "Full blog content here...",
    date: "October 30, 2023",
    category: "College Life",
    image: "blog-6.jpg"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  
  // Find the blog post with the matching ID
  const post = blogPostsData.find(post => post.id === postId);
  
  // Related posts (same category, excluding current post)
  const relatedPosts = post 
    ? blogPostsData
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="container px-4 md:px-6 py-20 text-center">
        <h1>Blog Post Not Found</h1>
        <p className="text-muted-foreground mt-4">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Back to Blog Link */}
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      
      <article className="max-w-4xl mx-auto">
        {/* Blog Post Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <span>{post.date}</span>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-12 border border-border">
          <div className="aspect-video bg-muted w-full">
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-muted-foreground">Featured Image</span>
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {post.category}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              Competitive Programming
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              College Life
            </span>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-16 border-t border-border max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div 
                key={relatedPost.id} 
                className="rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {relatedPost.excerpt}
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link to={`/blog/${relatedPost.id}`} className="group inline-flex items-center text-sm">
                    Read more
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
