'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { locales } from '@/i18n/config';

const localeNames: Record<string, string> = { no:'NO',en:'EN',sv:'SV',da:'DA',fi:'FI',it:'IT',fr:'FR',et:'ET' };

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/blogg', label: t('blog') },
    { href: '/om-oss', label: t('about') },
    { href: '/karriere', label: t('career') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e3348] bg-black/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wider text-[#c9a84c] uppercase">
          Knudsen &amp; Berg
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-xs tracking-widest uppercase text-[#f0f4f8] hover:text-[#c9a84c] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-1">
          {locales.map(l => (
            <Link key={l} href={pathname} locale={l} className={`text-xs px-1 ${locale===l?'text-[#c9a84c]':'text-[#7a94ab] hover:text-[#f0f4f8]'}`}>
              {localeNames[l]}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-[#f0f4f8]" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1e3348] bg-black px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-xs tracking-widest uppercase" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[#1e3348]">
            {locales.map(l => (
              <Link key={l} href={pathname} locale={l} className={`text-xs ${locale===l?'text-[#c9a84c]':'text-[#7a94ab]'}`} onClick={() => setOpen(false)}>{localeNames[l]}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
