# Decisions — Archigiliti WWW

## Stack technologiczny
- **Framework:** Astro (SSG)
- **Styling:** Tailwind CSS
- **Tryb renderowania:** Static Site Generation (domyślny)
- **JavaScript:** Islands architecture — JS tylko gdzie konieczne (cookie banner, drobne UI)
- **Content:** Markdown / Astro Content Collections (bez CMS na MVP)

## Hosting
- **Docelowy:** OVH Shared Hosting
- **Typ:** Statyczne pliki (HTML/CSS/JS)
- **Deploy:** GitHub Actions → SFTP
- **Zasada:** Brak vendor-specific funkcji, czyste SSG

## Deploy
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Metoda:** SFTP via FTP-Deploy-Action
- **Trigger:** Push do `main`
- **Secrets:** FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_PATH

## SEO
- Meta tags (title, description)
- Open Graph tags
- sitemap.xml (automatyczny)
- robots.txt
- Canonical URLs
- Schema.org (Organization)

## Formularz kontaktowy
- MVP: mailto link
- Później: Formspree lub podobne

## Analityka
- MVP: brak
- Później: Plausible (privacy-friendly)

## Cookies
- MVP: brak bannera (brak analityki = brak potrzeby)
- Później: prosty banner jeśli dodamy analitykę

## Język
- MVP: PL
- Docelowo: PL + EN

## Wymagania jakości
- Mobile-first
- Minimalizm enterprise
- Lighthouse: Performance/SEO/Best Practices >= 90
- Brak ciężkich bibliotek UI
