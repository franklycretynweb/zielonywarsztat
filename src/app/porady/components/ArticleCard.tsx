import Image from "next/image";
import Link from "next/link";
import type { Post } from "../lib/posts";

interface ArticleCardProps {
  post: Post;
  priority?: boolean;
}

export default function ArticleCard({ post, priority = false }: ArticleCardProps) {
  return (
    <Link
      href={`/porady/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sage-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(45,53,31,0.10)]"
      style={{ boxShadow: "0 2px 8px rgba(45,53,31,0.06)" }}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-sage-100">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category overlay badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-body text-xs font-semibold text-terra-600 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta row */}
        <div className="mb-3 flex items-center gap-3 font-body text-xs text-foreground/45">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min czytania</span>
        </div>

        {/* Title */}
        <h2 className="mb-3 font-heading text-lg font-bold leading-snug text-foreground line-clamp-3 group-hover:text-terra-600 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="mb-6 font-body text-sm leading-relaxed text-foreground/65 line-clamp-2 flex-1">
          {post.description}
        </p>

        {/* Arrow CTA */}
        <div className="flex items-center gap-1.5 font-heading text-sm font-bold text-terra-500 transition-all group-hover:gap-2.5">
          <span>Czytaj więcej</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          >
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
