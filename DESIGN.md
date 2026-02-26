# XYZ Agency — Design System

> Extracted from Stitch-generated mockups. Single source of truth for all UI components.

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `--accent-primary` | `#EC7F13` | CTAs, highlights, active states, accent text |
| `--accent-hover` | `#D4710F` | Button hover states |
| `--accent-glow` | `rgba(236, 127, 19, 0.3)` | Glow effects, focus rings |

### Dark Theme (Hero, Contact, Footer, Admin)
| Token | Hex | Usage |
|---|---|---|
| `--dark-bg` | `#0A0A0A` | Hero background, footer |
| `--dark-surface` | `#141414` | Cards on dark backgrounds |
| `--dark-surface-elevated` | `#1A1A1A` | Elevated cards, admin panel |
| `--dark-border` | `rgba(255,255,255,0.08)` | Subtle borders on dark |
| `--dark-text` | `#FFFFFF` | Primary text on dark |
| `--dark-text-muted` | `rgba(255,255,255,0.6)` | Secondary text on dark |

### Light Theme (Sections)
| Token | Hex | Usage |
|---|---|---|
| `--light-bg` | `#FAFAFA` | Page background |
| `--light-surface` | `#FFFFFF` | Cards, form containers |
| `--light-border` | `#E5E5E5` | Card borders, dividers |
| `--light-text` | `#1A1A1A` | Primary text |
| `--light-text-muted` | `#666666` | Secondary/caption text |

---

## Typography

**Font Family:** `'Inter', system-ui, -apple-system, sans-serif`

| Element | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Hero Label | `0.85rem` | 700 | 1.4 | `0.15em` |
| Hero Title | `3.5rem` → `2.2rem` mob | 800 | 1.08 | `-0.02em` |
| Section Title (h2) | `2.5rem` → `2rem` mob | 700 | 1.15 | `-0.01em` |
| Card Title (h3) | `1.25rem` | 700 | 1.3 | normal |
| Body | `1rem` (16px) | 400 | 1.6 | normal |
| Caption/Label | `0.85rem` | 600 | 1.4 | `0.05em` |
| Small/Meta | `0.8rem` | 500 | 1.4 | normal |

---

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `4px` | Icon gaps |
| `--space-sm` | `8px` | Tight padding |
| `--space-md` | `16px` | Card padding, gaps |
| `--space-lg` | `24px` | Inner section spacing |
| `--space-xl` | `40px` | Grid gaps |
| `--space-2xl` | `60px` | Between sections |
| `--space-3xl` | `80px` | Section padding (desktop) |
| `--space-4xl` | `120px` | Hero padding |

---

## Shadows & Effects

```css
/* Card shadow (light bg) */
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.12);

/* Elevated elements */
--shadow-elevated: 0 10px 30px rgba(0, 0, 0, 0.15);

/* Glass-morphism (admin panel) */
--glass-bg: rgba(20, 20, 20, 0.85);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: blur(20px);

/* Glow (accent buttons) */
--glow-primary: 0 0 20px rgba(236, 127, 19, 0.4);
```

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Inputs, small buttons |
| `--radius-md` | `8px` | Cards, containers |
| `--radius-lg` | `12px` | Large cards, video slots |
| `--radius-xl` | `16px` | Featured containers |
| `--radius-full` | `9999px` | Pills, avatar, toggle |

---

## Transitions

```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-smooth: 400ms cubic-bezier(0.16, 1, 0.3, 1);
--transition-bounce: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

---

## Component Patterns

### Buttons
- **Primary:** `bg: --accent-primary`, white text, `border-radius: --radius-sm`, glow on hover
- **Outline Light:** transparent bg, white 1px border, white text → fills white on hover
- **Outline Dark:** transparent bg, `--light-border` border → darkens on hover
- **Size:** min-height `44px` desktop, `48px` mobile, `padding: 12px 28px`

### Video Slot (Admin)
- **Visitor mode:** Shows `<video>` if loaded, or styled placeholder (dark bg + play icon)
- **Admin mode:** Overlay with dashed orange border, "Browse & Select" button, filename display, remove button
- **Aspect ratios:** `auto` (hero full-screen), `16/9` (showreel), `9/16` (work cards)

### Cards
- White bg, `--radius-lg`, `--shadow-card`, `padding: 24-30px`
- Hover: `translateY(-6px)` + `--shadow-card-hover`
- Popular variant: orange top border or tag badge

### Section Layout
- Max-width: `1200px`, centered, `90%` width
- Section padding: `80px 0` desktop, `60px 0` mobile
- Header: centered h2 + optional subtitle

---

## Scroll Animations

All sections use IntersectionObserver-based reveal:
- **Fade-in-up:** `opacity: 0 → 1`, `translateY(30px → 0)`, `600ms ease-out`
- **Stagger:** Grid children delay `100ms` per item
- **Trigger:** `threshold: 0.15`, fires once

---

## Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | `≤ 768px` | Single column, stacked CTAs, hamburger nav |
| Tablet | `769–1024px` | 2-column grids |
| Desktop | `≥ 1025px` | Full layout, 3-column grids |

---

## File Structure

```
src/
├── styles/
│   └── index.css              # Design tokens + global resets
├── context/
│   └── AdminContext.jsx        # Admin state (videos, toggle)
├── components/
│   ├── common/
│   │   ├── VideoSlot.jsx       # Reusable video browse/preview
│   │   ├── VideoSlot.css
│   │   ├── ScrollReveal.jsx    # IntersectionObserver wrapper
│   │   └── ScrollReveal.css
│   └── admin/
│       ├── AdminToggle.jsx     # Floating gear toggle
│       └── AdminToggle.css
├── sections/
│   ├── Navbar/   (Navbar.jsx + .css)
│   ├── Hero/     (Hero.jsx + .css)
│   ├── LeadMagnet/ ...
│   ├── NicheStrip/ ...
│   ├── CredStrip/ ...
│   ├── FeaturedWork/ ...
│   ├── PortfolioCTA/ ...
│   ├── LeadCapture/ ...
│   ├── Services/ ...
│   ├── Process/ ...
│   ├── Packages/ ...
│   ├── Testimonials/ ...
│   ├── Contact/ ...
│   ├── Footer/ ...
│   └── StickyCTA/ ...
├── App.jsx
├── App.css
└── main.jsx
```

---

## Stitch Mockup References

| Screen | Stitch ID | Description |
|---|---|---|
| Hero | `58abcac4` | Dark cinematic hero with camera background |
| Portfolio & CTA | `5f3ca9bb` | Showreel + 3 work cards + CTA banner |
| Services/Process/Packages | `fef707e7` | 3-section content layout |
| Testimonials/Lead/Footer | `4cc403b3` | Social proof + forms + footer |
| Admin Panel | `5aac5572` | Floating glass-morphism admin overlay |
