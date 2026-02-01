# START: Claude Code — Strona WWW dla Archigiliti (runbook)

> Cel: szybki start projektu WWW + sensowny workflow z Claude Code (bez chaosu).
> Założenia: repo git, iteracyjna praca, stałe miejsce na brief, decyzje i backlog.

---

## 1) Struktura repo (proponowana)

Utwórz repo i zacznij od takiej struktury:

.
├── README.md
├── START_CLAUDE_CODE_WEBSITE.md
├── docs/
│   ├── brief.md
│   ├── brand.md
│   ├── sitemap.md
│   ├── copy.md
│   ├── decisions.md
│   └── backlog.md
└── web/
    └── (tu będzie kod strony)

> Wskazówka: cały „produktowy kontekst” trzymaj w `docs/`, a kod w `web/`.

---

## 2) Minimalny zestaw decyzji (spisz zanim zaczniesz)

W `docs/decisions.md` zapisz odpowiedzi:
- Stack: (np. Next.js / Astro / Vite+React / Hugo)
- Hosting: (np. Vercel / Netlify / AWS S3+CloudFront)
- CMS: (brak / headless: Strapi, Contentful, Sanity / pliki MD)
- SEO: (tak/nie; i18n: PL/EN)
- Formularz kontaktowy: (mailto / Formspree / własny backend)
- Analityka: (GA4 / Plausible / brak)
- Polityka cookies: (tak/nie)

Jeśli nie wiesz: wybierz prostotę.
- Next.js + Vercel + brak CMS + content w MD (na start).

---

## 3) Brief projektu (wypełnij i traktuj jako „źródło prawdy”)

W `docs/brief.md` wklej i uzupełnij:

### Kontekst
- Firma: Archigiliti
- Oferta (3-6 punktów):
  1.
  2.
  3.
- Klienci docelowi:
- Główne problemy klientów, które rozwiązujemy:
- Ton komunikacji (np. konkretnie, technicznie, ale zrozumiale):

### Cele strony (najważniejsze)
1.
2.
3.

### CTA (Call To Action)
- Główny CTA:
- Alternatywny CTA:

### Ograniczenia / wymagania
- Języki:
- Terminy:
- Materiały: (logo, kolory, zdjęcia, case studies)

---

## 4) Brand i UI (minimum, żeby Claude nie „zgadywał”)

W `docs/brand.md`:
- Kolory (hex):
- Fonty:
- Styl: (minimalistyczny / enterprise / premium / playful)
- Elementy stałe:
  - logo w nagłówku
  - stopka z danymi
  - przyciski (primary/secondary)
- Referencje (2–3 linki do stron, które Ci się podobają) — wklej same URL-e.

---

## 5) Mapa strony (szybka, praktyczna)

W `docs/sitemap.md`:
- Home
- Oferta / Services
- Case studies (opcjonalnie)
- O mnie / Zespół
- Blog / Insights (opcjonalnie)
- Kontakt
- Polityka prywatności / Cookies

Do każdej podstrony dopisz:
- cel strony
- 3–6 sekcji (nagłówki)
- CTA

---

## 6) Copywriting (żeby Claude pisał spójnie)

W `docs/copy.md`:
- Elevator pitch (2–3 zdania)
- Hasło na hero (max 12 słów) + podtytuł
- 6–10 „value bullets” (konkretne korzyści)
- 3–5 typowych pytań klienta (FAQ)
- Krótki opis usług (po 3–5 zdań)

---

## 7) Backlog (praca iteracyjna)

W `docs/backlog.md` utrzymuj listę:
### Must-have (MVP)
- [ ] Strona główna (hero + oferta + CTA)
- [ ] Oferta (3–6 usług)
- [ ] Kontakt (formularz lub mailto)
- [ ] SEO podstawowe (title/description, OG)
- [ ] Responsywność

### Nice-to-have
- [ ] Case studies
- [ ] Blog (MD)
- [ ] Wielojęzyczność
- [ ] Analityka + cookies banner

---

## 8) Zasady pracy z Claude Code (żeby to było „inżynierskie”)

### Zasada 1: Claude nie ma zgadywać kontekstu
- Każde zadanie zaczynaj od wskazania plików w `docs/`, które są „source of truth”.
- Jeśli czegoś brakuje — najpierw dopisz do `docs/`, dopiero potem generuj kod.

### Zasada 2: Małe kroki, częste commity
- Jedna zmiana = jeden commit.
- Każdy commit ma mieć krótką notatkę „dlaczego”.

### Zasada 3: „Definition of done” dla każdego zadania
- działa lokalnie
- brak błędów w konsoli
- podstawowe SEO ustawione
- mobilka OK

---

## 9) Prompty startowe do Claude Code (kopiuj/wklej)

### A) Ustal stack i scaffolding
**Prompt:**
Zaczynamy nowy projekt strony WWW dla firmy Archigiliti. Kontekst masz w:
- docs/brief.md
- docs/brand.md
- docs/sitemap.md
Chcę wybrać stack, który zapewni: świetne SEO, szybkie ładowanie, prosty deploy.
Zaproponuj 2 warianty (np. Next.js i Astro) i wskaż rekomendację. Następnie podaj kroki scaffolding + strukturę katalogów w web/.

### B) Wygeneruj plan implementacji
**Prompt:**
Na bazie docs/backlog.md przygotuj plan iteracji (MVP w 3–6 krokach).
Do każdego kroku: jakie pliki dotkniemy, jakie komponenty powstaną, jak sprawdzimy Done.

### C) Zbuduj layout i design system
**Prompt:**
W web/ tworzę layout (header/footer) oraz podstawowy design system:
- typografia
- przyciski
- sekcje (hero, feature grid, testimonial, CTA)
Uwzględnij docs/brand.md. Zrób to minimalistycznie i „enterprise”.
Wygeneruj kod + krótką instrukcję uruchomienia.

### D) Home page (MVP)
**Prompt:**
Zaimplementuj stronę Home zgodnie z docs/sitemap.md i docs/copy.md.
Sekcje: hero, usługi, „dlaczego my”, CTA, stopka.
Dodaj podstawowe SEO i OG tags.

### E) SEO checklista
**Prompt:**
Przejrzyj projekt i wypisz checklistę SEO (title/desc, headings, OG, sitemap.xml, robots.txt, canonical, performance).
Wskaż co już jest zrobione i co dodać.

---

## 10) Checklisty jakości (przed publikacją)

### Performance
- [ ] Lighthouse: Performance/SEO/Best Practices >= 90
- [ ] Obrazy zoptymalizowane (format, rozmiar)
- [ ] Lazy loading gdzie ma sens

### Bezpieczeństwo / kontakt
- [ ] Formularz ma antyspam (captcha lub honeypot)
- [ ] Brak wycieków danych w logach
- [ ] Polityka prywatności gotowa (jeśli zbierasz dane)

### Utrzymanie
- [ ] README: jak uruchomić lokalnie + deploy
- [ ] `docs/decisions.md` uzupełnione
- [ ] `docs/backlog.md` aktualny

---

## 11) README (szablon)

W `README.md` wstaw (i uzupełnij):
- Cel projektu
- Stack
- Jak uruchomić lokalnie
- Jak wdrożyć
- Gdzie trzymamy content (docs/ / MD)
- Zasady pracy (link do START_CLAUDE_CODE_WEBSITE.md)

---

## 12) Następny krok (konkretny)

1) Uzupełnij `docs/brief.md` (10 minut)
2) Uzupełnij `docs/brand.md` (kolory + 2 referencje)
3) Uruchom prompt (A) i wybierz stack
4) Scaffold w `web/` i pierwszy commit

Powodzenia — to jest runbook, który ma Ci oszczędzać czas.