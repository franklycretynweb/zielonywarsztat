import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "../lib/posts";
import TableOfContents from "../components/TableOfContents";
import ReadingProgress from "../components/ReadingProgress";
import ProTipBlock from "../components/ProTipBlock";
import RelatedPosts from "../components/RelatedPosts";
import CopyLinkButton from "../components/CopyLinkButton";
import Footer from "../../components/Footer";
import { LINKS } from "../../lib/site";

/* ── Static params for Next.js SSG ── */
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.zielonywarsztat.com/porady/${post.slug}`;

  return {
    title: `${post.title} | Zielony Warsztat Piotra`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Piotr — Zielony Warsztat Piotra"],
      tags: [post.category, "ogrodnictwo", "Szczecin"],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    alternates: { canonical: url },
  };
}

/* ── Page ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);

  /* Schema.org Article JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: `https://www.zielonywarsztat.com${post.image}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Person",
          name: "Piotr",
          url: "https://www.zielonywarsztat.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Zielony Warsztat Piotra",
          url: "https://www.zielonywarsztat.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.zielonywarsztat.com/photos/logo/logo.webp",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.zielonywarsztat.com/porady/${post.slug}`,
        },
        articleSection: post.category,
        wordCount: post.sections.reduce(
          (acc, s) => acc + s.body.split(" ").length + (s.heading.split(" ").length),
          0
        ),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.zielonywarsztat.com" },
          { "@type": "ListItem", position: 2, name: "Porady ogrodnicze", item: "https://www.zielonywarsztat.com/porady" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.zielonywarsztat.com/porady/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <main id="main-content">
        {/* ═══ HERO ═══ */}
        <section
          className="relative flex min-h-[55vh] items-end overflow-hidden bg-[#1e2415] pt-16"
          aria-label="Nagłówek artykułu"
        >
          {/* Hero image with overlay */}
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,11,0.92)_0%,rgba(10,18,11,0.65)_50%,rgba(10,18,11,0.50)_100%)]" />

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:pb-20">
            {/* Breadcrumb */}
            <nav
              className="mb-6 flex flex-wrap items-center gap-2 font-body text-sm text-white/75"
              aria-label="Nawigacja strony"
            >
              <Link href="/" className="transition-colors hover:text-white/75">Strona główna</Link>
              <span aria-hidden="true">/</span>
              <Link href="/porady" className="transition-colors hover:text-white/75">Porady ogrodnicze</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/60 line-clamp-1">{post.title}</span>
            </nav>

            {/* Category + reading time */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-terra-500 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 font-body text-sm text-white/80">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {post.readingTime} min czytania
              </div>
            </div>

            {/* H1 */}
            <h1
              className="max-w-[26ch] font-heading font-extrabold leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 1.3rem + 3.5vw, 3.8rem)" }}
            >
              {post.title}
            </h1>

            {/* Meta footer */}
            <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/25 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-700 border border-sage-600">
                  <span className="font-heading font-bold text-white text-sm">P</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white leading-snug">Piotr</p>
                  <p className="font-body text-xs text-white/70">Zielony Warsztat Piotra</p>
                </div>
              </div>
              <time
                dateTime={post.publishedAt}
                className="font-body text-sm text-white/75"
              >
                {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        {/* ═══ ARTICLE BODY ═══ */}
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

            {/* LEFT: TOC (sticky, desktop only) */}
            <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:sticky lg:top-24 lg:self-start">
              <TableOfContents sections={post.sections} />
            </div>

            {/* CENTER: Article content */}
            <article
              className="min-w-0 flex-1"
              aria-label="Treść artykułu"
            >
              {/* Lead paragraph = first sentence of description */}
              <p
                className="mb-10 font-body font-medium leading-relaxed text-brown-600 text-balance"
                style={{ fontSize: "clamp(1.1rem, 0.9rem + 0.8vw, 1.3rem)" }}
              >
                {post.description}
              </p>

              {/* Sections */}
              {post.sections.map((section, i) => (
                <section key={i} id={`section-${i}`} className="scroll-mt-28">
                  <h2
                    className="mb-5 mt-14 first:mt-0 font-heading font-bold text-foreground"
                    style={{ fontSize: "clamp(1.4rem, 1rem + 1.5vw, 2rem)" }}
                  >
                    {section.heading}
                  </h2>

                  {/* Render body — support simple markdown bold (**text**) and newlines */}
                  <div className="font-body leading-[1.85] text-foreground/80 prose-section">
                    {section.body.split("\n\n").map((para, pi) => {
                      // Bold markdown
                      const rendered = para.split(/\*\*(.*?)\*\*/g).map((chunk, ci) =>
                        ci % 2 === 1 ? <strong key={ci} className="font-semibold text-foreground">{chunk}</strong> : chunk
                      );
                      return (
                        <p key={pi} className="mb-4 last:mb-0" style={{ fontSize: "clamp(1rem, 0.9rem + 0.3vw, 1.15rem)" }}>
                          {rendered}
                        </p>
                      );
                    })}
                  </div>

                  {/* Pro Tip */}
                  {section.proTip && <ProTipBlock tip={section.proTip} />}

                  {/* In-article CTA after section 2 (roughly 50% through) */}
                  {i === Math.floor(post.sections.length / 2) - 1 && post.serviceHref && (
                    <div className="my-10 flex flex-col gap-4 overflow-hidden rounded-2xl bg-[#1e2415] p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-sage-400 mb-1">
                          Usługa
                        </p>
                        <p className="font-heading font-bold text-white leading-snug">
                          Potrzebujesz pomocy z {post.category.toLowerCase()}?
                        </p>
                        <p className="font-body text-sm text-white/55 mt-1">
                          Bezpłatna wycena na miejscu — Piotr przyjedzie i oceni.
                        </p>
                      </div>
                      <Link
                        href={post.serviceHref}
                        className="shrink-0 btn-cta whitespace-nowrap !py-3 !px-5 !text-sm"
                      >
                        Dowiedz się więcej →
                      </Link>
                    </div>
                  )}
                </section>
              ))}

              {/* End of article share + CTA */}
              <div className="mt-16 border-t border-sage-100/80 pt-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground mb-2">
                      Masz pytanie po przeczytaniu?
                    </p>
                    <a
                      href={LINKS.tel}
                      className="font-body text-sm text-terra-500 hover:text-terra-600 underline underline-offset-4 transition-colors"
                    >
                      Zadzwoń — odpowiemy na nie
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Copy link */}
                    <CopyLinkButton />
                    {/* WhatsApp share */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + " — www.zielonywarsztat.com/porady/" + post.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2.5 font-body text-sm font-medium text-[#1a8c43] transition-all hover:bg-[#25D366]/20"
                    >
                      <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Udostępnij
                    </a>
                  </div>
                </div>
              </div>

              {/* Related posts */}
              <RelatedPosts posts={related} />
            </article>

            {/* RIGHT: Sticky CTA sidebar (desktop) */}
            <div className="hidden xl:block xl:w-64 xl:shrink-0 xl:sticky xl:top-24 xl:self-start">
              <div className="flex flex-col gap-4">
                {/* Mini CTA */}
                <div className="rounded-2xl bg-[#1e2415] p-5 text-white">
                  <p className="mb-1 font-heading text-sm font-bold text-white leading-snug">
                    Masz taki problem w ogrodzie?
                  </p>
                  <p className="mb-4 font-body text-xs leading-relaxed text-white/55">
                    Piotr przyjedzie, oceni i powie co naprawdę warto zrobić.
                  </p>
                  <a href={LINKS.tel} className="btn-cta w-full !py-3 !text-sm text-center">
                    Zadzwoń teraz
                  </a>
                </div>

                {/* Service link */}
                {post.serviceHref && (
                  <Link
                    href={post.serviceHref}
                    className="group flex items-center justify-between rounded-xl border border-sage-200 bg-white px-4 py-3.5 font-body text-sm font-medium text-foreground/70 transition-all hover:border-terra-300 hover:text-terra-600"
                  >
                    <span className="leading-snug">{post.serviceLabel}</span>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5">
                      <path d="M6 10h8M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}

                {/* Back to blog */}
                <Link
                  href="/porady"
                  className="flex items-center gap-2 font-body text-sm text-foreground/50 transition-colors hover:text-foreground"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path d="M14 10H6M9 14l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Wszystkie porady
                </Link>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
