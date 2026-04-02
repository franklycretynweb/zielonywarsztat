import Image from "next/image";
import Link from "next/link";
import type { Post } from "../lib/posts";

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="mt-20 border-t border-sage-100/80 pt-16" aria-label="Powiązane artykuły">
      <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
        Czytaj też
      </p>
      <h2 className="mb-10 font-heading text-2xl font-bold text-foreground">
        Powiązane artykuły
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/porady/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-sage-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 font-body text-[11px] font-semibold text-terra-600 backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-2 font-body text-xs text-foreground/40">{post.readingTime} min czytania</p>
              <h3 className="font-heading text-lg font-bold leading-snug text-foreground line-clamp-2 group-hover:text-terra-500 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-foreground/55 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-auto flex items-center gap-1 pt-5 font-heading text-sm font-bold text-terra-500">
                Czytaj
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
