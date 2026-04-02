import Image from "next/image";
import Link from "next/link";
import type { Post } from "../lib/posts";

interface FeaturedArticleProps {
  post: Post;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <Link
      href={`/porady/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl lg:flex-row"
      style={{ boxShadow: "0 4px 32px rgba(45,53,31,0.12)" }}
      aria-label={`Artykuł wyróżniony: ${post.title}`}
    >
      {/* Image — 55% width on desktop */}
      <div className="relative h-72 w-full overflow-hidden lg:h-auto lg:w-[55%] lg:shrink-0">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Gradient overlay leading to the text side */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e2415]/70 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#1e2415]/60" />

        {/* Featured badge */}
        <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-terra-500 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-white">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Polecany artykuł
        </span>
      </div>

      {/* Text — 45% */}
      <div className="flex flex-1 flex-col justify-center gap-6 bg-[#1e2415] p-8 lg:p-12">
        {/* Category + reading time */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sage-800/60 px-3 py-1 font-body text-xs font-semibold text-sage-300">
            {post.category}
          </span>
          <span className="font-body text-xs text-white/40">{post.readingTime} min czytania</span>
        </div>

        {/* Title */}
        <h2
          className="font-heading font-bold leading-snug text-white group-hover:text-terra-300 transition-colors"
          style={{ fontSize: "clamp(1.5rem, 1.1rem + 2vw, 2.4rem)" }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-body text-base leading-relaxed text-white/65 line-clamp-3">
          {post.description}
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-terra-400 transition-all group-hover:gap-3">
            Czytaj artykuł
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-body text-xs text-white/35">
            {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
