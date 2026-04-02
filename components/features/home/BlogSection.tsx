import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BLOG_POSTS } from "@/constants/blog"; // Adjust path to your TS file

export function BlogSection() {
  // Sorting by date to ensure the newest appear first
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <Section className="bg-white dark:bg-slate-950 py-24 px-6 md:px-20 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl"> 
            <SectionHeading 
              title="Latest Blogs" 
              description="Deep dives into modern web development, architecture, and design principles." 
            />
          </div>
          <Link href="/blog" className="hidden md:block">
            <Button variant="ghost" className="group text-teal-500 hover:text-teal-600 dark:text-teal-400 p-0 font-semibold">
              Explore all posts 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
              <article className="flex flex-col h-full p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.category.slice(0, 2).map((cat) => (
                    <span key={cat} className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-widest">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-teal-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <Calendar className="h-3.5 w-3.5 text-teal-500" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <ArrowRight className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex justify-center">
          <Button asChild variant="outline" className="rounded-full px-10 border-slate-200 dark:border-slate-800">
            <Link href="/blog">View Blog</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}