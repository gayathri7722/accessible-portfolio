# Accessible Portfolio (Thiranex Task 1)

A multi-page personal portfolio built with semantic HTML5 and WCAG 2.1 AA accessibility in mind.

## Pages
- `index.html` Home
- `about.html` About
- `projects.html` Projects
- `contact.html` Contact (accessible, tab-navigable form)

## Features
- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`
- Skip link, `aria-current`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-live`, `role="status"`
- SEO meta tags: title, description, Open Graph, robots, theme-color
- Form with labels, fieldsets, inline validation and focus management
- Visible focus styles, colour contrast of 4.5:1 or higher, reduced-motion support

## Run locally
Open `index.html` in a browser, or run `python -m http.server` and visit http://localhost:8000.

## Test
Chrome DevTools > Lighthouse > select Accessibility and SEO > Analyze.
