import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-[#1e3348] py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#c9a84c] font-semibold tracking-wider text-sm uppercase">Knudsen &amp; Berg</p>
        <p className="text-[#7a94ab] text-xs">© {new Date().getFullYear()} Knudsen &amp; Berg AS. {t('rights')}.</p>
      </div>
    </footer>
  );
}
