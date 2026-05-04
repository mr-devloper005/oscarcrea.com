import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return `<p>${escapeHtml(fallback)}</p>`;
  if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
  return source
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
    .join("");
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/profile/${post.slug}`,
      },
    ],
  };

  const visualTone = {
    shell: 'bg-[#0b0e0f] text-white',
    panel: 'border border-white/10 bg-[rgba(255,255,255,0.05)] shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-md',
    soft: 'border border-white/10 bg-white/[0.06] backdrop-blur-sm',
    muted: 'text-slate-400',
    title: 'text-white',
    badge: 'border border-[#3ee0c2]/35 bg-[#3ee0c2]/12 text-[#3ee0c2]',
    action: 'bg-[#3ee0c2] text-[#050807] shadow-[0_0_24px_rgba(62,224,194,0.35)] hover:bg-[#2fd4b4]',
    actionAlt: 'border border-[#3ee0c2]/50 bg-transparent text-[#e8fffa] hover:bg-[#3ee0c2]/10',
    glow: 'shadow-[0_0_22px_rgba(62,224,194,0.35)]',
  }

  return (
    <div className={`min-h-screen ${visualTone.shell}`}>
      <NavbarShell />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Hero Section with Background Pattern */}
        <section className="relative overflow-hidden rounded-[3rem] p-8 md:p-16">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <svg viewBox="0 0 400 200" className="w-full text-white" aria-hidden>
              <path
                d="M60 100c0-55 45-85 90-55 35 22 55 22 90 0 45-30 90 0 90 55s-45 85-90 55c-35-22-55-22-90 0-45 30-90 0-90-55z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          
          <div className="relative grid gap-12 lg:grid-cols-[300px_1fr] lg:items-center">
            {/* Profile Logo/Card */}
            <div className="flex justify-center lg:justify-start">
              <div className={`relative h-48 w-48 overflow-hidden rounded-[2rem] border border-white/20 ${visualTone.panel} p-1`}>
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#0a0f1a]">
                  {logoUrl ? (
                    <ContentImage 
                      src={logoUrl} 
                      alt={post.title} 
                      fill 
                      className="object-cover" 
                      sizes="192px" 
                      intrinsicWidth={192} 
                      intrinsicHeight={192} 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white/30">
                      {post.title.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#3ee0c2]/10 to-transparent" />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#3ee0c2]">
                  <span className="h-2 w-2 rounded-full bg-[#3ee0c2]" />
                  Profile
                </div>
                <h1 className="mt-4 text-4xl font-bold uppercase tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {brandName}
                </h1>
                {domain ? (
                  <p className="mt-2 text-sm font-medium text-slate-400">{domain}</p>
                ) : null}
              </div>
              
              <div className={`max-w-3xl rounded-[2rem] p-6 ${visualTone.panel}`}>
                <article
                  className="prose prose-invert prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-[#3ee0c2] prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </div>
              
              {website ? (
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className={`px-8 text-sm font-semibold uppercase tracking-wide ${visualTone.action}`}>
                    <Link href={website} target="_blank" rel="noopener noreferrer">
                      Visit Official Site
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Link href="/profile" className={`inline-flex items-center justify-center gap-2 rounded-xl border px-8 text-sm font-semibold uppercase tracking-wide ${visualTone.actionAlt}`}>
                    Browse Profiles
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Suggested Articles Section */}
        {suggestedArticles.length ? (
          <section className="mt-16">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex rounded-full border border-[#3ee0c2]/40 bg-[#3ee0c2]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ee0c2]">
                  Related Content
                </div>
                <h2 className="mt-4 text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">Suggested Reading</h2>
                <p className="font-body-ui mt-2 max-w-xl text-sm text-slate-400">Articles and insights that complement this profile.</p>
              </div>
              <Link href="/articles" className="text-sm font-semibold text-[#3ee0c2] hover:underline">
                View all articles
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <TaskPostCard
                  key={article.id}
                  post={article}
                  href={buildPostUrl("article", article.slug)}
                  taskKey="article"
                  compact
                />
              ))}
            </div>
            
            {/* Related Links */}
            <nav className={`mt-8 rounded-[2rem] p-6 ${visualTone.panel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3ee0c2]/90">Quick Links</p>
              <ul className="mt-4 grid gap-3 text-sm">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <li key={`related-${article.id}`}>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="flex items-center gap-2 text-slate-300 hover:text-[#3ee0c2] transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#3ee0c2]" />
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/profile" className="flex items-center gap-2 text-slate-300 hover:text-[#3ee0c2] transition-colors">
                    <span className="h-1 w-1 rounded-full bg-[#3ee0c2]" />
                    Browse all profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
