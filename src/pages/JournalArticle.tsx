import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useEffect } from "react";
import { articles, getArticle } from "@/data/articles";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const JournalArticle = () => {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (article) {
      document.title = `${article.title} · Hyderabad Globe FC Journal`;
    }
  }, [article]);

  if (!article) {
    return (
      <>
        <Nav />
        <main className="container-fluid py-40 text-center">
          <p className="eyebrow mb-3">404</p>
          <h1 className="font-display text-display-lg uppercase">Article not found</h1>
          <Link to="/#blog" className="mt-8 inline-flex items-center gap-2 text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to The Journal
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main>
        {/* Hero band */}
        <header
          className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
          style={{ background: article.accent }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(0_0%_100%/0.18),transparent_60%)]" />
          <div className="container-fluid relative">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-background/80 hover:text-background transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> The Journal
            </Link>
            <div className="mt-6 max-w-3xl">
              <span className="rounded-sm bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground">
                {article.tag}
              </span>
              <h1 className="mt-5 font-display text-display-lg uppercase text-background text-balance leading-[1.05]">
                {article.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-background/85">
                <span className="inline-flex items-center gap-2"><User className="h-3.5 w-3.5" />{article.author}</span>
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" />{article.read}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <article className="bg-background py-20 md:py-28">
          <div className="container-fluid">
            <div className="mx-auto max-w-2xl">
              <p className="text-fluid-body text-foreground/90 text-pretty">{article.excerpt}</p>
              <div className="mt-10 space-y-7">
                {article.body.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85 text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-surface-elevated py-20">
            <div className="container-fluid">
              <div className="eyebrow mb-6">Keep reading</div>
              <ul className="grid gap-6 md:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/journal/${r.slug}`}
                      className="tactile-card group block rounded-sm bg-surface p-7 shadow-tactile"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{r.tag}</div>
                      <h3 className="mt-3 font-display text-2xl uppercase text-foreground">{r.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{r.excerpt}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default JournalArticle;