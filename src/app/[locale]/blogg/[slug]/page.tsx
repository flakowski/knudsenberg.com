import { useTranslations, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getPostBySlug, getAllSlugs, getPostsByLocale } from '@/lib/content/blog';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blogg" className="text-[#7a94ab] text-xs tracking-widest uppercase hover:text-[#c9a84c] transition-colors">
              ← Blog
            </Link>
          </div>
          <article>
            <header className="mb-8 pb-8 border-b border-[#1e3348]">
              <p className="text-[#7a94ab] text-xs mb-4">
                {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h1 className="text-3xl font-semibold text-[#f0f4f8] mb-4">{post.title}</h1>
              <div className="w-12 h-0.5 bg-[#c9a84c]" />
            </header>
            <div className="prose prose-invert max-w-none">
              {post.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#7a94ab] leading-relaxed mb-4 text-sm">{para}</p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
