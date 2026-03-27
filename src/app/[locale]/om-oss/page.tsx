import { useTranslations } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Knudsen &amp; Berg AS</p>
            <h1 className="text-4xl font-semibold text-[#f0f4f8] mb-4">{t('about.title')}</h1>
            <div className="w-12 h-0.5 bg-[#c9a84c]" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#7a94ab] leading-relaxed text-sm">{t('about.text')}</p>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { label: 'Est.', value: '2012' },
                  { label: 'Founded by', value: 'J. Knudsen & Ø. Berg' },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-[#1e3348] p-4">
                    <p className="text-[#7a94ab] text-xs uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-[#c9a84c] font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div
                className="aspect-square bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url('/images/Bilde til nettside.jpg')" }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
