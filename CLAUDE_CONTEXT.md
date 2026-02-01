Zaczynamy projekt strony WWW dla mojej firmy Archigiliti. Proszę pracuj w trybie „engineering”: małe kroki, czytelne commity, zero zgadywania – jeśli czegoś brakuje w materiałach, dopisz propozycję do odpowiedniego pliku .md zamiast wymyślać.

### ŹRÓDŁA PRAWDY (w repo, root):
- START_CLAUDE_CODE_WEBSITE.md (workflow i zasady)
- brief.md (kontekst + cele + CTA + dane kontaktowe)
- brand.md (styl, kolory, typografia, tagline)
- sitemap.md (struktura podstron i sekcji)
- copy.md (teksty i tone of voice)
- backlog.md (MVP i kolejne etapy)
- decisions.md (stack, hosting, decyzje techniczne)

### ASSETY:
- /images/ (logo + moje zdjęcie + ewentualne grafiki)

### CEL:
Zbudować minimalistyczną, szybką stronę firmową (SEO-first) z naciskiem na: Architektura IT + AI/GenAI + konsulting enterprise.
Priorytet: MVP (Home + Oferta + Kontakt) + podstawowe SEO + responsywność.

### ZADANIE DLA CIEBIE — KROK 1 (najpierw analiza i plan):
1) Przeczytaj wszystkie pliki .md z root oraz przejrzyj /images.
2) Wypisz w punktach:
   - co jest jasne i kompletne
   - jakie masz braki/ryzyka (maks 10)
   - jakie 2 warianty stacku rekomendujesz (np. Next.js vs Astro), z krótkim uzasadnieniem
3) Wybierz jeden wariant jako rekomendowany i uzasadnij go pod kątem: SEO, szybkość, prostota deploy, łatwość utrzymania.
4) Zaproponuj strukturę katalogów repo (np. /web + /docs lub bez /docs skoro md są w root) i nazwij kluczowe pliki.
5) Przygotuj plan MVP w 4–6 iteracjach, gdzie każda iteracja ma:
   - cel
   - listę plików do zmiany/dodania
   - definicję Done

### ZADANIE — KROK 2 (scaffolding i kod):
Po wyborze stacku:
1) Wygeneruj scaffolding projektu w katalogu /web (lub zaproponowanym).
2) Dodaj podstawowe: lint/format, routy stron, layout (header/footer), SEO meta/OG, placeholdery sekcji zgodnie z sitemap.md i copy.md.
3) Wykorzystaj logo z /images w headerze oraz w hero (jako wariant).
4) Moje zdjęcie z /images wykorzystaj na podstronie „O nas” (może być przygotowane, ale wdrożymy w kolejnym kroku).

### KRYTERIA JAKOŚCI:
- Minimalizm i „enterprise consulting” wg brand.md
- Mobile-first
- Brak ciężkich bibliotek bez powodu
- Komponenty wielokrotnego użytku
- Teksty zgodne z copy.md, bez marketingowego bełkotu
- SEO: title/description/OG, semantic headings, basic sitemap/robots

### OUTPUT:
- Najpierw plan i decyzje (KROK 1), potem dopiero zmiany w repo (KROK 2).
- Jeśli proponujesz zmiany w .md: podaj konkretne fragmenty do dopisania w odpowiednich plikach.

Zaczynaj od KROKU 1.