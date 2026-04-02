import Link from "next/link";
import type { Post } from "../lib/posts";
import { CONTACT, LINKS } from "../../lib/site";

interface BlogSidebarProps {
  popularPosts: Post[];
}

const towns = ["Szczecin", "Police", "Goleniów", "Stargard", "Gryfino"];

export default function BlogSidebar({ popularPosts }: BlogSidebarProps) {
  return (
    <aside className="flex flex-col gap-6" aria-label="Sidebar bloga">

      {/* === CTA BOX === */}
      <div
        className="rounded-2xl bg-[#1e2415] p-6 text-white"
        style={{ boxShadow: "0 4px 20px rgba(45,53,31,0.18)" }}
      >
        {/* Online dot + avatar */}
        <div className="mb-5 flex items-center gap-3">
          <div className="relative">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-sage-600">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="48" height="48" fill="#3a4429"/>
                <circle cx="24" cy="18" r="9" fill="#7a8c5e"/>
                <path d="M6 44c0-9.941 8.059-18 18-18s18 8.059 18 18" fill="#7a8c5e"/>
              </svg>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#1e2415] bg-[#25D366]" />
          </div>
          <div>
            <p className="font-heading font-bold text-white text-sm leading-snug">Piotr</p>
            <p className="font-body text-white/55 text-xs">Zwykle odpowiada w kilka minut</p>
          </div>
        </div>

        <p className="mb-5 font-body text-sm leading-relaxed text-white/70">
          Masz pytanie po przeczytaniu artykułu? Zadzwoń lub napisz — doradzę bezpłatnie.
        </p>

        <a
          href={LINKS.tel}
          className="mb-3 flex w-full items-center justify-center rounded-xl bg-[#e0a580] py-3 font-heading text-sm font-bold text-white shadow-[0_4px_0_0_#7a4330] transition-all hover:translate-y-[3px] hover:shadow-[0_1px_0_0_#7a4330] active:translate-y-[4px] active:shadow-none"
        >
          Zadzwoń: {CONTACT.phoneDisplay}
        </a>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-white/14"
        >
          <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Napisz na WhatsApp
        </a>
      </div>

      {/* === POPULAR POSTS === */}
      <div className="rounded-2xl border border-sage-100/80 bg-white p-6">
        <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
          Popularne artykuły
        </p>
        <ul className="flex flex-col divide-y divide-sage-100/60">
          {popularPosts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/porady/${post.slug}`}
                className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
              >
                <span className="mt-0.5 shrink-0 font-heading text-2xl font-bold leading-none text-sage-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold leading-snug text-foreground line-clamp-2 group-hover:text-terra-500 transition-colors">
                    {post.title}
                  </p>
                  <p className="mt-1 font-body text-xs text-foreground/45">
                    {post.readingTime} min · {post.category}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* === SERVICE AREA === */}
      <div className="rounded-2xl border border-sage-100/80 bg-sage-50 p-6">
        <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
          Obszar działania
        </p>
        <div className="flex flex-wrap gap-2">
          {towns.map((t) => (
            <span
              key={t}
              className="rounded-full border border-sage-200 bg-white px-3 py-1 font-body text-xs font-medium text-foreground/70"
            >
              {t}
            </span>
          ))}
          <span className="rounded-full border border-sage-300 bg-sage-100 px-3 py-1 font-body text-xs font-semibold text-sage-700">
            + okolice 50 km
          </span>
        </div>
      </div>
    </aside>
  );
}
