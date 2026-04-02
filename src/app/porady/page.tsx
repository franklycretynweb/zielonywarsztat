"use client";

import { useState } from "react";
import Link from "next/link";
import { posts, CATEGORIES, type Category } from "./lib/posts";
import FeaturedArticle from "./components/FeaturedArticle";
import ArticleCard from "./components/ArticleCard";
import TopicFilter from "./components/TopicFilter";
import BlogSidebar from "./components/BlogSidebar";
import Footer from "../components/Footer";

// Featured = newest / most relevant
const featuredPost = posts.find((p) => p.slug === "ogrod-po-budowie-co-zrobic-najpierw")!;
const restPosts = posts.filter((p) => p.slug !== featuredPost.slug);

// Counts per category
const categoryCounts: Record<string, number> = {};
posts.forEach((p) => {
  categoryCounts[p.category] = (categoryCounts[p.category] ?? 0) + 1;
});

// Popular posts for sidebar (top 3 by reading time as proxy)
const popularPosts = [...posts]
  .sort((a, b) => b.readingTime - a.readingTime)
  .slice(0, 3);

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const filtered = activeCategory
    ? restPosts.filter((p) => p.category === activeCategory)
    : restPosts;

  return (
    <main id="main-content">
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[48vh] items-end overflow-hidden bg-[#1e2415] pt-16">
        {/* Atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(106,122,92,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(90,60,30,0.12),transparent_50%)]" />

        {/* Decorative "leaf" big number */}
        <span
          className="pointer-events-none absolute right-0 top-0 select-none font-heading font-extrabold leading-none text-white/[0.03]"
          style={{ fontSize: "clamp(18rem, 25vw, 32rem)", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          ✿
        </span>

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/40" aria-label="Nawigacja strony">
            <Link href="/" className="transition-colors hover:text-white/70">Strona główna</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/60">Porady ogrodnicze</span>
          </nav>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              {/* Kicker */}
              <span className="mb-3 block font-body text-sm font-medium uppercase tracking-[0.2em] text-sage-300">
                Blog · Zielony Warsztat Piotra
              </span>
              <h1
                className="max-w-[22ch] font-heading font-extrabold leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 4rem)" }}
              >
                Porady ogrodnicze od Piotra
              </h1>
            </div>
            <p className="max-w-[38ch] font-body text-base leading-relaxed text-white/60 lg:text-right">
              Praktyczna wiedza o pielęgnacji ogrodu — kiedy przycinać, jak dbać o trawnik, co sadzić i jak unikać kosztownych błędów.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="font-heading text-2xl font-bold text-white">{posts.length}</p>
              <p className="font-body text-xs text-white/45 uppercase tracking-wider">Artykuły</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-white">{CATEGORIES.length}</p>
              <p className="font-body text-xs text-white/45 uppercase tracking-wider">Kategorie</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-white">
                {posts.reduce((s, p) => s + p.readingTime, 0)} min
              </p>
              <p className="font-body text-xs text-white/45 uppercase tracking-wider">Łącznie do czytania</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Featured Article */}
        <section className="mb-16" aria-label="Wyróżniony artykuł">
          <FeaturedArticle post={featuredPost} />
        </section>

        {/* Filter + Grid + Sidebar */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left: filter + grid */}
          <div className="min-w-0 flex-1">
            {/* Filter bar */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {activeCategory ? activeCategory : "Wszystkie artykuły"}
                <span className="ml-2 font-body text-sm font-normal text-foreground/40">
                  ({filtered.length})
                </span>
              </h2>
            </div>

            <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <TopicFilter
                onFilterChange={setActiveCategory}
                activeCategory={activeCategory}
                counts={categoryCounts}
              />
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {filtered.map((post, i) => (
                  <ArticleCard key={post.slug} post={post} priority={i < 2} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-sage-100/80 bg-sage-50 py-20 text-center">
                <span className="mb-4 text-5xl">🌱</span>
                <p className="font-heading text-lg font-bold text-foreground">
                  Artykuły wkrótce
                </p>
                <p className="mt-2 font-body text-sm text-foreground/55">
                  W tej kategorii pojawią się nowe artykuły wkrótce.
                </p>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="w-full lg:w-80 lg:shrink-0 lg:sticky lg:top-24 lg:self-start">
            <BlogSidebar popularPosts={popularPosts} />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 rounded-3xl bg-sage-50 px-8 py-14 text-center md:px-16 md:py-20 relative">
          <div
            className="pointer-events-none absolute -right-8 -top-8 select-none font-heading font-extrabold text-sage-200/40 leading-none"
            style={{ fontSize: "12rem" }}
            aria-hidden="true"
          >
            ?
          </div>
          <div className="relative max-w-xl mx-auto">
            <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-sage-400">
              Masz pytanie?
            </p>
            <h2
              className="mb-5 font-heading font-bold text-foreground"
              style={{ fontSize: "clamp(1.6rem, 1.2rem + 2vw, 2.8rem)" }}
            >
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h2>
            <p className="mb-8 font-body text-lg leading-relaxed text-foreground/65">
              Napisz na WhatsApp — zdjęcie + krótki opis problemu, a podpowiemy co zrobić.
            </p>
            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex"
            >
              Napisz na WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer hideCta />
    </main>
  );
}
