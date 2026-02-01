# Archigiliti WWW

Strona firmowa Archigiliti — doradztwo IT i AI.

## Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS
- **Hosting:** OVH Shared Hosting
- **Deploy:** GitHub Actions → SFTP

## Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Development server
npm run dev
# → http://localhost:4321

# Build produkcyjny
npm run build

# Preview buildu
npm run preview
```

## Struktura

```
web/
├── public/
│   ├── .htaccess       # Apache config (OVH)
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Strony

| URL | Opis |
|-----|------|
| `/` | Strona główna |
| `/oferta` | Szczegóły usług |
| `/kontakt` | Dane kontaktowe |
| `/polityka-prywatnosci` | Polityka prywatności |

## Deploy

### Automatyczny (GitHub Actions)

Push do `main` → automatyczny build i deploy na OVH via SFTP.

Wymagane secrets w repozytorium GitHub:
- `FTP_HOST` — adres serwera FTP OVH
- `FTP_USER` — nazwa użytkownika FTP
- `FTP_PASSWORD` — hasło FTP
- `FTP_PATH` — ścieżka docelowa (np. `/www/` lub `/public_html/`)

### Ręczny

```bash
# 1. Build
cd web
npm run build

# 2. Upload zawartości dist/ na OVH przez SFTP/FTP
# Narzędzia: FileZilla, rsync, lftp
```

## SEO

- ✅ Meta tags (title, description)
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Schema.org (Organization)
- ✅ Canonical URLs
- ✅ sitemap.xml (automatyczny)
- ✅ robots.txt

## OVH Hosting — konfiguracja

Plik `.htaccess` w `public/` zawiera:
- HTTPS redirect
- Clean URLs (trailing slash)
- Cache headers dla statycznych zasobów
- Obsługa 404
- Kompresja gzip

## Dokumentacja projektu

Źródła prawdy znajdują się w katalogu głównym repo (`../`):

- `brief.md` — kontekst i cele
- `brand.md` — kolory, typografia
- `sitemap.md` — struktura stron
- `copy.md` — treści
- `decisions.md` — decyzje techniczne
