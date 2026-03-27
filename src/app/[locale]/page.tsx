import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomePage() {
  const t = useTranslations();

  const services = [
    { key: 'strategic', icon: '◆' },
    { key: 'investment', icon: '◆' },
    { key: 'consulting', icon: '◆' },
  ] as const;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center px-6 pt-20">
          <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">Knudsen &amp; Berg AS</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#f0f4f8] leading-tight mb-6">
                {t('hero.tagline')}
              </h1>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-[#7a94ab] leading-relaxed mb-8 max-w-md">
                {t('services.strategicDesc')}
              </p>
              <Link
                href="/om-oss"
                className="inline-block bg-[#c9a84c] text-[#0d1b2a] px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#d4b860] transition-colors"
              >
                {t('nav.about')}
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-[#142232]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">{t('hero.whatWeDo')}</p>
              <h2 className="text-3xl font-semibold text-[#f0f4f8]">{t('hero.exceed')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border border-[#1e3348]">
              {services.map(({ key, icon }) => (
                <div key={key} className="p-8 border-b md:border-b-0 md:border-r border-[#1e3348] last:border-0 hover:bg-[#1a2e42] transition-colors">
                  <p className="text-[#c9a84c] text-2xl mb-4">{icon}</p>
                  <h3 className="text-[#f0f4f8] font-semibold text-sm tracking-wider uppercase mb-3">
                    {t(`services.${key}`)}
                  </h3>
                  <p className="text-[#7a94ab] text-sm leading-relaxed">
                    {t(`services.${key}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div
              className="aspect-video bg-cover bg-center opacity-80"
              style={{ backgroundImage: "url('/images/Knudsen og Berg diagram crop.png')" }}
            />
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Est. 2012</p>
              <h2 className="text-3xl font-semibold text-[#f0f4f8] mb-6">{t('about.title')}</h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-[#7a94ab] leading-relaxed text-sm mb-8">{t('about.text')}</p>
              <Link href="/blogg" className="inline-block border border-[#c9a84c] text-[#c9a84c] px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0d1b2a] transition-colors">
                {t('nav.blog')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
