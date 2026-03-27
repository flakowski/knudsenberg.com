import { useTranslations } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CareerPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Knudsen &amp; Berg AS</p>
            <h1 className="text-4xl font-semibold text-[#f0f4f8] mb-4">{t('career.title')}</h1>
            <div className="w-12 h-0.5 bg-[#c9a84c]" />
          </div>
          <div className="border border-[#1e3348] p-12 text-center">
            <p className="text-[#7a94ab] text-sm">{t('career.noOpenings')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
