export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  date: string;
  author: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string; // for nested categories e.g. "tech" -> "react"
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "tech", name: "Technology" },
  { slug: "design", name: "Design" },
  { slug: "life", name: "Life" },
  { slug: "react", name: "React", parent: "tech" },
  { slug: "nextjs", name: "Next.js", parent: "tech" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
  id: "1",
    slug: "state-management-zustand-redux",
    title: "State Management: Zustand vs. Redux",
    excerpt: "Choosing the right tool for your application's data flow.",
    content: "As applications grow, managing state becomes the biggest challenge. We compare the boilerplate-heavy power of Redux with the minimalist, hook-based approach of Zustand to help you decide which fits your next project.",
    category: ["react", "javascript"],
    date: "2025-02-18",
    author: "John Rigel Recuerdo",
  },
  {
   id: "8",
    slug: "effective-testing-vitest",
    title: "Effective Testing with Vitest",
    excerpt: "Why speed matters in your CI/CD pipeline.",
    content: "Testing shouldn't be a chore. We look at Vitest's lightning-fast execution and how to write meaningful unit tests that actually catch bugs without slowing down your development workflow.",
    category: ["testing", "devops"],
    date: "2025-02-22",
    author: "Jordan Lee"
  },
  {
  id: "3",
  slug: "mastering-api-performance",
  title: "Mastering API Performance",
  excerpt: "Strategies for building lightning-fast APIs that scale.",
  content: "Performance isn't just about code speed; it's about smart architecture. We dive into caching strategies, database indexing, and why payload reduction is the secret to a snappy user experience.",
  category: ["development", "backend"],
  date: "2025-02-10",
  author: "John Rigel Recuerdo",
  },
  {
    id: "4",
    slug: "accessibility-first-development",
    title: "Accessibility-First Development",
    excerpt: "Building a web that everyone can use.",
    content: "Accessibility isn't a feature; it's a foundation. This post covers ARIA patterns, keyboard navigation, and the importance of semantic HTML in creating inclusive digital experiences.",
    category: ["web", "a11y"],
    date: "2025-02-15",
    author: "John Rigel Recuerdo",
  },
  {
   id: "5",
    slug: "typescript-beyond-any",
    title: "TypeScript: Beyond the 'Any' Type",
    excerpt: "Leveraging advanced types for bulletproof codebases.",
    content: "Moving from JavaScript to TypeScript is more than just adding types. We explore Generics, Discriminated Unions, and Utility Types to make your components more predictable and self-documenting.",
    category: ["typescript", "engineering"],
    date: "2025-02-12",
    author: "John Rigel Recuerdo",
  },
];