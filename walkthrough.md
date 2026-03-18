# Portfolio Website — Walkthrough

## What Was Built
A complete React + Vite portfolio website for **Ankit Kumar Singh** with all CV information populated automatically.

## Sections Implemented
| Section | Features |
|---------|----------|
| **Navbar** | Sticky, glassmorphic, active section tracking, mobile hamburger, theme toggle |
| **Hero** | Typing animation, floating shapes, scroll indicator, CTA buttons |
| **About** | Profile card, bio, stats counters, info pills |
| **Skills** | Card grid with animated progress bars (IntersectionObserver) |
| **Projects** | Screenshot images, hover zoom, tech tags, highlights, GitHub links |
| **Experience** | Vertical timeline for training + achievements |
| **Certificates** | Photo cards with hover scaling |
| **Education** | Cards with grade badges, current indicator |
| **Contact** | Email/phone info cards, social icons, contact form, Download CV |
| **Footer** | Brand, nav links, social icons, copyright |

## Key Features
- **Light/Dark theme** with localStorage persistence and smooth CSS transitions
- **Scroll animations** via custom [useScrollAnimation](file:///c:/Users/User/Desktop/digital%20portfolio/src/hooks/useScrollAnimation.js#3-31) hook (IntersectionObserver)
- **Responsive design** at 1024px, 768px, and 480px breakpoints
- **Project & certificate images** with hover effects

## Browser Verification

### Dark Theme — Projects with Images
![Projects section with screenshots](C:\Users\User\.gemini\antigravity\brain\c247a87b-00ff-496c-be6c-954ef17b7dab\projects_section_verification_1773686686539.png)

### Dark Theme — Certificate Photos
![Certificates with images](C:\Users\User\.gemini\antigravity\brain\c247a87b-00ff-496c-be6c-954ef17b7dab\certificates_verification_final_1773686746971.png)

### Light Theme
![Light theme view](C:\Users\User\.gemini\antigravity\brain\c247a87b-00ff-496c-be6c-954ef17b7dab\light_theme_portfolio_1773686290099.png)

### Full Scrollthrough Recording
![Browser recording of the portfolio](C:\Users\User\.gemini\antigravity\brain\c247a87b-00ff-496c-be6c-954ef17b7dab\portfolio_with_images_1773686655501.webp)

## Project Structure
```
digital portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/images/          ← Project & certificate images
│   ├── project-land-tax.png
│   ├── project-rent-a-ride.png
│   ├── cert-nptel.png
│   └── cert-coursera.png
└── src/
    ├── main.jsx
    ├── App.jsx              ← Theme state + section composition
    ├── index.css             ← Design system, themes, animations
    ├── data/data.js          ← All CV content
    ├── hooks/useScrollAnimation.js
    └── components/
        ├── Navbar.jsx + .css
        ├── Hero.jsx + .css
        ├── About.jsx + .css
        ├── Skills.jsx + .css
        ├── Projects.jsx + .css
        ├── Experience.jsx + .css
        ├── Education.jsx + .css
        ├── Contact.jsx + .css
        └── Footer.jsx + .css
```
