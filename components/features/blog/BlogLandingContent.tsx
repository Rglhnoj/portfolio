import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";

export function BlogLandingContent() {
  return (
    <Section className="py-12 dark:bg-slate-900 rounded-3xl">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group p-6 border rounded-2xl hover:border-primary/50 hover:bg-muted/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{post.date}</span>
                </div>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.category.map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}