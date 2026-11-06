# Day 10: CSS Flexbox Section Layouts 📐

A comprehensive guide and practical code implementation of **Webpage Section Layouts using CSS Flexbox**, covering real-world layout structures, clear theory, and reusable React code.

---

## 📖 Theory: Why Use Flexbox for Section Layouts?

Websites are divided into distinct semantic sections (`<header>`, `<section>`, `<aside>`, `<footer>`). 
**CSS Flexbox** is the industry standard for structuring elements within these sections because:
1. **Dynamic Content Adaptation**: Flexbox items adjust their width and height automatically to fit content and screen dimensions.
2. **Effortless Alignment**: Both horizontal (`justify-content`) and vertical (`align-items`) alignment are solved with single-line rules without floats or positioning hacks.
3. **Equal Height Columns**: Child elements in a flex container stretch by default (`align-items: stretch`), giving all cards/columns in a row uniform height automatically.
4. **Order and Reversibility**: Using `flex-direction: row-reverse` or the `order` property, you can flip layouts (e.g., alternating image-text sections) seamlessly for mobile devices.
5. **Fluid Wrapping (`flex-wrap: wrap`)**: Multi-card grids adapt naturally to smaller viewports by flowing onto subsequent rows without requiring complex media query calculations.

---

## 🏛️ Essential Flexbox Section Layout Patterns

### 1. Two-Column Split Hero Section
The classic landing page hero: Text and call-to-action on one side, graphic/image on the other.

```
+-----------------------------------------------------------+
|  [Left: Headline, Subtitle, CTA]   |   [Right: Graphic]   |
+-----------------------------------------------------------+
```

```html
<section class="hero-section">
  <div class="hero-text">
    <h1>Design Faster with Flexbox</h1>
    <p>Build scalable, responsive web sections with minimal CSS.</p>
    <button class="cta-btn">Get Started</button>
  </div>
  <div class="hero-image">
    <img src="hero-graphic.png" alt="Hero illustration" />
  </div>
</section>
```

```css
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 4rem 2rem;
  min-height: 75vh;
}

.hero-text {
  flex: 1 1 500px; /* grow, shrink, baseline 500px */
}

.hero-image {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
}

/* Mobile Stacking */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse; /* image on top, or text first */
    text-align: center;
  }
}
```

---

### 2. Auto-Fitting Features / Cards Section
A multi-card section where cards distribute evenly across rows and wrap automatically.

```
+-----------------------------------------------------------+
|  [ Card 1 ]        |  [ Card 2 ]        |  [ Card 3 ]     |
+-----------------------------------------------------------+
|  [ Card 4 ]        |  [ Card 5 ]        |                 |
+-----------------------------------------------------------+
```

```html
<section class="features-section">
  <div class="section-header">
    <h2>Our Core Features</h2>
    <p>Everything you need to launch quickly</p>
  </div>
  <div class="cards-container">
    <div class="card"><h3>Fast</h3><p>Optimized for rapid load times.</p></div>
    <div class="card"><h3>Responsive</h3><p>Looks great on any screen.</p></div>
    <div class="card"><h3>Accessible</h3><p>Built with WCAG compliance in mind.</p></div>
  </div>
</section>
```

```css
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  /* grow and shrink freely, wrap when width drops below 280px */
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```

---

### 3. Sidebar + Main Content Section
A classic dashboard, documentation, or blog layout with a fixed-width sidebar and fluid main content area.

```
+-----------------------------------------------------------+
| [Sidebar: 260px] | [Main Content: flex-grow: 1]           |
+-----------------------------------------------------------+
```

```html
<div class="layout-container">
  <aside class="sidebar">
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#guides">Guides</a></li>
    </ul>
  </aside>
  <main class="content-area">
    <h1>Documentation</h1>
    <p>Main content area automatically fills all remaining horizontal space.</p>
  </main>
</div>
```

```css
.layout-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.sidebar {
  flex: 0 0 260px; /* never grow, never shrink, exact 260px */
  position: sticky;
  top: 1rem;
}

.content-area {
  flex: 1 1 0%; /* takes all remaining width */
}

@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }
  .sidebar {
    flex: 1 1 100%;
    position: static;
  }
}
```

---

### 4. Alternating Feature Rows (Z-Pattern Layout)
Using `flex-direction: row-reverse` on even rows to create alternating eye-tracking patterns.

```
Row 1: [ Text Content ]  -->  [ Image ]
Row 2: [ Image ]         <--  [ Text Content ]
```

```css
.feature-row {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Reverse layout for alternating rows */
.feature-row:nth-child(even) {
  flex-direction: row-reverse;
}

.feature-col {
  flex: 1 1 45%;
}
```

---

### 5. Multi-Column Footer Section
A responsive footer distributing brand information, navigation categories, and newsletter signup evenly.

```html
<footer class="footer">
  <div class="footer-col brand-col">
    <h3>DevBrand</h3>
    <p>Building tools for the modern web.</p>
  </div>
  <div class="footer-col">
    <h4>Products</h4>
    <a href="#">UI Kits</a>
    <a href="#">Templates</a>
  </div>
  <div class="footer-col">
    <h4>Company</h4>
    <a href="#">About</a>
    <a href="#">Careers</a>
  </div>
</footer>
```

```css
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #0f172a;
  color: #e2e8f0;
}

.footer-col {
  flex: 1 1 180px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.brand-col {
  flex: 2 1 280px; /* Takes double space if available */
}
```

---

## 💻 Included Files & Code

This repository contains ready-to-use implementations:
- **`src/components/SectionLayout.jsx`**: Complete React component demonstrating:
  - Hero Split Section
  - Responsive Card Grid with Equal Heights
  - Alternating Feature Rows
  - Sidebar + Fluid Content Layout
- **`src/components/SectionLayout.module.css`**: CSS module with modern styling, variables, hover animations, and media queries.
- **`index.html`**: Pure HTML/CSS preview that can be opened directly in any web browser.
