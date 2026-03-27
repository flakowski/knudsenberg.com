import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getPostsByLocale } from '@/lib/content/blog';

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const posts = getPostsByLocale(locale);

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Knudsen &amp; Berg AS</p>
            <h1 className="text-4xl font-semibold text-[#f0f4f8] mb-4">{t('blog.title')}</h1>
            <div className="w-12 h-0.5 bg-[#c9a84c]" />
          </div>
          <div className="space-y-0">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-[#1e3348] py-8 grid md:grid-cols-[140px_1fr] gap-6">
                <div>
                  <p className="text-[#7a94ab] text-xs">
                    {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#f0f4f8] font-semibold text-lg mb-2">
                    <Link href={`/blogg/${post.slug}`} className="hover:text-[#c9a84c] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[#7a94ab] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blogg/${post.slug}`}
                    className="text-[#c9a84c] text-xs tracking-widest uppercase hover:underline"
                  >
                    {t('blog.readMore')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
