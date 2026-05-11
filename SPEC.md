# NicheBoost — SPEC.md

## 1. Concept & Vision

NicheBoost reverse-engineers viral content for TikTok and YouTube creators. Paste any creator's username or video URL and get a full breakdown of exactly what made their content work — trending audio, caption formulas, hashtag strategy, optimal posting time, and engagement prediction. The vibe is bold, analytical, hacker-edge: think data lab meets growth hacker's war room.

## 2. Design Language

**Aesthetic:** Dark analytical dashboard with hacker-edge accents — a data scientist's tool that actually looks cool.

**Color Palette:**
- Background: `#030712` (deep dark)
- Surface: `#0a1628` (card background)
- Border: `#1e3a5f` (subtle blue border)
- Primary: `#06b6d4` (cyan — data, analysis)
- Secondary: `#f59e0b` (amber — viral, attention)
- Success: `#22c55e` (green)
- Text: `#f0f9ff` (near white)
- Muted: `#64748b` (slate gray)

**Typography:** Inter (Google Font), fallback sans-serif. Weights 400, 500, 600, 700, 800.

**Spatial System:** Generous padding, large type for headlines, tight grid for feature cards. Max-width containers with 24px side padding.

**Motion:** Smooth transitions (200-300ms ease), hover lifts on cards, gradient shimmer on CTA buttons. Loading animation on analysis demo.

**Visual Assets:** Lucide React icons, inline SVGs for logo and decorative elements.

## 3. Layout & Structure

- **NavBar:** Sticky top, logo left, nav links center, CTA button right. Blur backdrop on scroll.
- **Hero:** Full viewport-height, centered text, animated gradient text for headline, mock demo below fold.
- **Analysis Preview:** Live demo mock — input → loading → result cards. Shows the product promise immediately.
- **Features Grid:** 6 cards in 3x2 grid. Icon + title + description per card.
- **How It Works:** 3-step horizontal flow with numbered badges.
- **Stats Bar:** 3-4 key metrics displayed prominently (creators, analyses, viral wins).
- **Testimonials:** 3 cards side-by-side with creator name, handle, and quote about viral win.
- **Pricing:** 3-column grid. Middle card (Growth) highlighted with primary border glow.
- **CTA Section:** Bold centered CTA above footer.
- **Footer:** Simple 2-row footer with logo and links.

## 4. Features & Interactions

- **NavBar:** Logo clickable (no-op in landing page). Nav links scroll to sections. "Try Free" scrolls to demo. Active state on scroll.
- **Hero CTA:** Scrolls to demo input.
- **Demo Input:** Text input with placeholder "Paste a TikTok or YouTube URL..." Search icon button. On click, shows a fake loading state (2s) then reveals 4 result cards.
- **Feature Cards:** Hover: translateY(-4px) lift + border brightens.
- **Pricing Cards:** Hover: scale(1.02). Popular badge on Growth tier.
- **CTA Button:** Gradient shimmer animation on hover.

## 5. Component Inventory

| Component | States |
|-----------|--------|
| NavBar | default, scrolled (backdrop blur) |
| Hero | static |
| Demo Input | empty, typing, loading (animated), results |
| Result Card | audio, caption, hashtags, timing |
| Feature Card | default, hover |
| Step Card | numbered badge, icon, text |
| Stats Item | static number + label |
| Testimonial Card | avatar, quote, name, handle |
| Pricing Card | standard, featured (highlighted) |
| CTA Section | static |
| Footer | static |

## 6. Technical Approach

- **Framework:** Next.js 15 App Router, TypeScript
- **Styling:** Tailwind CSS v4 with CSS variables via `@theme {}`
- **Icons:** Lucide React
- **Font:** Inter via next/font/google
- **Deployment:** Vercel via CLI (`npx vercel --yes --token <token>`)
- **No backend required:** Static landing page, all client-side React

## 7. Page Sections

1. NavBar
2. Hero — "Reverse-engineer viral. Every time."
3. Analysis Preview (interactive mock)
4. Features Grid (6 features)
5. How It Works (3 steps)
6. Stats Bar
7. Testimonials (3)
8. Pricing (3 tiers)
9. CTA
10. Footer

## 8. Pricing Tiers

| Tier | Price | Analyses | Features |
|------|-------|----------|----------|
| Starter | $0/mo | 3/mo | Basic URL analysis |
| Growth | $15/mo | 20/mo | + Trending audio detection |
| Pro | $39/mo | Unlimited | + API access, export |