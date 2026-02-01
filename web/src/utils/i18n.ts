export type Lang = 'pl' | 'en';

export const languages: Record<Lang, string> = {
  pl: 'Polski',
  en: 'English',
};

export const defaultLang: Lang = 'pl';

export const ui = {
  pl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Oferta',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Porozmawiajmy',

    // Footer
    'footer.navigation': 'Nawigacja',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Polityka prywatności',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.description': 'Doradztwo IT i AI dla organizacji, które myślą długoterminowo.',

    // 404
    '404.title': 'Strona nie znaleziona',
    '404.description': 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
    '404.back': 'Wróć na stronę główną',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s talk',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'footer.description': 'IT and AI consulting for organizations that think long-term.',

    // 404
    '404.title': 'Page not found',
    '404.description': 'The page you are looking for does not exist or has been moved.',
    '404.back': 'Back to homepage',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.pl): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove leading slash and any existing lang prefix
  const cleanPath = path.replace(/^\/?(pl|en)?\/?/, '');
  return `/${lang}/${cleanPath}`;
}
