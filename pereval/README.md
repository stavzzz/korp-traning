# Перевал — горный лагерь на Алтае

Лендинг горного лагеря для взрослых 25–35 лет. 7 дней перезагрузки в горах Алтая, без связи, в комфортных палатках.

**Стек:** чистый HTML + CSS + JS. Без сборщиков, без фреймворков. Хостится на GitHub Pages.

## Структура

- `index.html` — главный лендинг (10 секций: hero, для кого, как устроено, программа 7 дней, проживание, место, что включено, бронирование, FAQ, footer)
- `style.css` — стили (мобильно-first, адаптив)
- `script.js` — мобильное меню, плавный скролл, валидация формы, scroll-reveal
- `robots.txt`, `sitemap.xml` — SEO
- `CNAME` — заготовка для собственного домена

## SEO

- Семантическое ядро: `горный лагерь Алтай`, `лагерь для взрослых Алтай`, `перезагрузка в горах`, `отдых от работы в горах`, `детокс лагерь Алтай`
- Title/Description/OG/Twitter
- Schema.org: `TouristTrip`, `FAQPage`, `Organization` (валидируется в Google Rich Results)
- Canonical URL
- Sitemap.xml
- Семантические H1/H2/H3
- `prefers-reduced-motion` уважается

## Запуск

### Локально

```bash
# любой статический сервер, например:
python3 -m http.server 8000
# → http://localhost:8000
```

### Деплой на GitHub Pages

1. Создай репозиторий `OpenPages` на GitHub (public).
2. Залей код:
   ```bash
   git remote add origin git@github.com:stavzzz/OpenPages.git
   git push -u origin main
   ```
3. В репо: **Settings → Pages → Source: Deploy from a branch → branch: main → /(root)**.
4. Подожди 1–2 минуты. Сайт будет доступен на `https://stavzzz.github.io/OpenPages/`.

### Свой домен

1. В `CNAME` впиши свой домен (например, `pereval.ru`).
2. В DNS добавь `CNAME` запись: `www → stavzzz.github.io` (или `ALIAS` для корня на `stavzzz.github.io`).
3. В GitHub: **Settings → Pages → Custom domain → вписать домен → Save → Enforce HTTPS**.

## Редактирование контента

- **Тексты** — все в `index.html`, ищи по якорям секций.
- **Программа 7 дней** — секция `#program`, каждый день — `<li class="program__day">`.
- **Даты заездов** — в форме (`#booking`) и FAQ.
- **Цены, контакты, Telegram** — в футере и форме.

## Лицензия

Содержимое — все права на тексты и идею: Перевал.
Код — MIT, можешь переиспользовать.
