# F1 Travel - Premium Travel Landing Page

Премиальные путешествия с мастермайндами и нетворкингом для предпринимателей и инвесторов.

## 🌐 Live Site
**https://stavzzz.github.io/open-sites/f1-travel/**

## 📋 Features

### ✅ Implemented (Phase 1 & 2)

**Main Page (index.html):**
- [x] Responsive design (mobile-first)
- [x] Sticky navigation with smooth scroll
- [x] Hero section with CTA
- [x] Value proposition cards
- [x] Tour cards (Baikal, Vietnam, South Africa)
- [x] Testimonials section
- [x] FAQ accordion
- [x] Lead capture forms
- [x] Modal popup
- [x] Telegram floating widget
- [x] SEO meta tags
- [x] Open Graph tags
- [x] Exit intent popup

**Detailed Tour Pages:**
- [x] **baikal.html** - Зимний Байкал (5 дней)
  - Timeline программа по дням (5 дней детально)
  - Highlights (6 карточек)
  - Что включено / не включено
  - Цена: от 185 000 ₽
  - Фотогалерея (6 фото)
  - FAQ по туру (6 вопросов)
  - Форма бронирования

- [x] **vietnam.html** - Бутик-яхта в заливе Халонг (7 дней)
  - Timeline программа по дням (7 дней детально)
  - О яхте (детальное описание кают и зон)
  - Highlights (6 карточек)
  - Что включено / не включено
  - Цена: от 320 000 ₽
  - Фотогалерея (6 фото)
  - FAQ по туру (6 вопросов)
  - Форма бронирования

- [x] **southafrica.html** - ЮАР: Сафари и вина (9 дней)
  - Timeline программа по дням (9 дней детально)
  - Highlights (6 карточек)
  - Что включено / не включено
  - Цена: от 480 000 ₽
  - Фотогалерея (6 фото)
  - FAQ по туру (6 вопросов)
  - Форма бронирования

### 🎨 Design System
**Colors:**
- Primary: `#2C5F4D` (dark green)
- Secondary: `#E8A05D` (terracotta)
- Accent: `#F4E5D3` (beige)

**Typography:**
- Headings: Montserrat Bold
- Body: Inter Regular
- Line-height: 1.7
- Responsive font sizes (clamp)

**Components:**
- Tour hero with overlay
- Timeline for day-by-day programs
- Highlight cards
- Included/excluded lists
- Pricing cards
- Gallery grids
- Booking forms
- FAQ accordions

**Spacing:**
- 8px grid system
- Consistent padding/margins
- Mobile-optimized

### 📱 Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Next Steps (Phase 3)

### Priority:
1. **Backend Integration:**
   - [ ] Connect forms to Google Sheets / Telegram bot
   - [ ] Email automation (welcome series)
   - [ ] CRM integration

2. **Content:**
   - [ ] Real participant photos
   - [ ] Video testimonials
   - [ ] Blog section
   - [ ] Case studies

3. **SEO:**
   - [ ] Schema.org markup (Event, LocalBusiness, Trip)
   - [ ] Sitemap.xml
   - [ ] Robots.txt
   - [ ] Google Analytics 4
   - [ ] Yandex Metrica

4. **Optimization:**
   - [ ] Image compression
   - [ ] Lazy loading
   - [ ] Critical CSS
   - [ ] Service worker (PWA)

5. **Additional Pages:**
   - [ ] About page (bio of organizer)
   - [ ] Privacy policy page
   - [ ] Terms & conditions
   - [ ] Blog/Articles

## 📂 File Structure

```
f1-travel/
├── index.html          # Main page (370 lines)
├── baikal.html         # Baikal tour details (427 lines)
├── vietnam.html        # Vietnam tour details (492 lines)
├── southafrica.html    # South Africa tour details (499 lines)
├── css/
│   └── style.css      # Design system + tour styles (1208 lines)
├── js/
│   └── script.js      # Interactive features (294 lines)
├── images/            # Placeholder for images
└── README.md          # This file
```

**Total:** ~3000 lines of code

## 🛠️ Tech Stack
- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Montserrat)
- GitHub Pages (hosting)

## 📊 Pages Overview

### Main Page Features:
- Hero with photo slider background
- 3 value proposition cards
- 3 tour preview cards
- 3 testimonials
- 6 FAQ items
- 2 lead forms (hero + contact section)
- Footer with navigation

### Tour Pages Structure:
Each tour page includes:
1. **Hero Section:**
   - Background image
   - Tour title + subtitle
   - Key details (dates, duration, group size)
   - CTA button to booking form

2. **Highlights:**
   - 6 highlight cards with icons
   - Key features of the tour

3. **Day-by-Day Program:**
   - Timeline UI with numbered dots
   - Detailed schedule for each day
   - Morning/afternoon/evening activities

4. **What's Included:**
   - 2-column layout
   - ✅ Included items list
   - ❌ Not included items list
   - Pricing card with deposits

5. **Photo Gallery:**
   - 6 images in grid
   - Hover effects

6. **Tour-Specific FAQ:**
   - 6 common questions
   - Accordion UI

7. **Booking Form:**
   - Name, email, phone
   - Room type selection
   - Comment textarea
   - Submit button

## 📈 Conversion Goals
- Lead capture rate: 5-8%
- Time on site: 3+ minutes
- Bounce rate: <50%
- Form completion: 15-20%

## 📝 Content Statistics

**Baikal Tour:**
- Duration: 5 days / 4 nights
- Price: from 185,000 ₽
- Group: up to 15 people
- Highlights: Baggy on ice, ice stations, fishing
- Mastermind sessions: 3

**Vietnam Tour:**
- Duration: 7 days / 6 nights
- Price: from 320,000 ₽
- Group: up to 10 people (yacht cabins)
- Highlights: Luxury yacht, Ha Long Bay, spa
- Mastermind sessions: 4

**South Africa Tour:**
- Duration: 9 days / 8 nights
- Price: from 480,000 ₽
- Group: up to 12 people
- Highlights: Safari Big Five, wine valleys, Cape Town
- Mastermind sessions: 5

## 📌 Notes
- All forms currently log to console (need backend)
- Images use original URLs (should migrate to own hosting)
- No analytics yet (add GA4)
- No cookie consent banner (add before EU traffic)
- Breadcrumbs navigation on tour pages
- Cross-linking between tour pages

---

**Created:** February 18, 2026  
**Version:** 2.0.0  
**Phase 1:** Main page ✅  
**Phase 2:** Tour detail pages ✅  
**Phase 3:** Backend & optimization ⏳  
**Author:** STAZIS II  
**For:** Alexey Chudik / F1 Travel
