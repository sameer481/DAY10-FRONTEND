import React, { useState } from "react";
import styles from "./SectionLayout.module.css";

/**
 * SectionLayout Component
 * Demonstrates common web page section layouts built with Flexbox:
 * 1. Split Hero Section (Text + Media)
 * 2. Feature Cards Grid (Fluid auto-wrap with equal heights)
 * 3. Alternating Feature Sections (Z-pattern with row-reverse)
 * 4. Sidebar + Main Content Layout
 */
const SectionLayout = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={styles.pageWrapper}>
      {/* Header Bar */}
      <header className={styles.navbar}>
        <div className={styles.brand}>FlexLayouts</div>
        <nav className={styles.navLinks}>
          <a href="#hero">Hero</a>
          <a href="#features">Features</a>
          <a href="#alternating">Showcase</a>
          <a href="#sidebar">Sidebar Layout</a>
        </nav>
      </header>

      {/* 1. Split Hero Section */}
      <section id="hero" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>CSS Flexbox Patterns</span>
          <h1 className={styles.heroTitle}>
            Modern Web Section Layouts Made Simple
          </h1>
          <p className={styles.heroSubtitle}>
            Leverage one-dimensional flex containers to build robust,
            responsive, and content-adaptable sections without layout glitches.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Explore Sections</button>
            <button className={styles.secondaryBtn}>Documentation</button>
          </div>
        </div>
        <div className={styles.heroGraphic}>
          <div className={styles.cardPreview}>
            <div className={styles.previewHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.previewContent}>
              <code>display: flex;</code>
              <code>justify-content: space-between;</code>
              <code>align-items: center;</code>
              <code>flex-wrap: wrap;</code>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Cards Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2>Why Flexbox for Page Sections?</h2>
          <p>Key architectural advantages of flex containers across sections</p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconBox}>⚡</div>
            <h3>Dynamic Alignment</h3>
            <p>
              Centering content vertically and horizontally requires only two lines
              of CSS without tricky margin hacks.
            </p>
            <span className={styles.tag}>justify & align</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}>📐</div>
            <h3>Equal Column Heights</h3>
            <p>
              Flex items automatically stretch to fill the height of the tallest
              sibling card in the row.
            </p>
            <span className={styles.tag}>align-items: stretch</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconBox}>📱</div>
            <h3>Seamless Wrapping</h3>
            <p>
              Items gracefully flow into multiple rows on mobile devices when space
              is constrained.
            </p>
            <span className={styles.tag}>flex-wrap: wrap</span>
          </div>
        </div>
      </section>

      {/* 3. Alternating Z-Pattern Section */}
      <section id="alternating" className={styles.alternatingSection}>
        <div className={styles.sectionHeader}>
          <h2>Alternating Section Rows</h2>
          <p>Using <code>flex-direction: row-reverse</code> for visual rhythm</p>
        </div>

        <div className={styles.altRow}>
          <div className={styles.altText}>
            <h3>1. Fluid Card Distribution</h3>
            <p>
              Each card receives <code>flex: 1 1 280px</code>. They expand equally
              when there is free space and shrink safely without overflowing.
            </p>
          </div>
          <div className={styles.altBox}>Visual Block A</div>
        </div>

        <div className={`${styles.altRow} ${styles.altRowReverse}`}>
          <div className={styles.altText}>
            <h3>2. Responsive Ordering</h3>
            <p>
              By flipping the flex-direction on even elements, the layout forms an
              engaging zigzag pattern while keeping clean HTML source order.
            </p>
          </div>
          <div className={`${styles.altBox} ${styles.altBoxAccent}`}>Visual Block B</div>
        </div>
      </section>

      {/* 4. Sidebar + Main Content Layout */}
      <section id="sidebar" className={styles.sidebarSection}>
        <div className={styles.sectionHeader}>
          <h2>Sidebar + Content Section</h2>
          <p>Fixed sidebar paired with expanding content area</p>
        </div>

        <div className={styles.sidebarContainer}>
          <aside className={styles.sidebar}>
            <h4>Section Nav</h4>
            <ul>
              <li className={styles.activeLink}>Overview</li>
              <li>Flex Direction</li>
              <li>Justify & Align</li>
              <li>Flex Grow & Shrink</li>
              <li>Media Queries</li>
            </ul>
          </aside>
          <main className={styles.mainContent}>
            <h3>Main Content Body</h3>
            <p>
              This container is configured with <code>flex: 1 1 0%</code> so it
              naturally absorbs all remaining space beside the fixed 240px sidebar.
            </p>
            <div className={styles.metricStrip}>
              <div className={styles.metric}>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>
              <div className={styles.metric}>
                <strong>0</strong>
                <span>Float Hacks</span>
              </div>
              <div className={styles.metric}>
                <strong>10+</strong>
                <span>Flex Properties</span>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Multi-Column Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerColBrand}>
          <h3>FlexLayouts</h3>
          <p>Crafting modern, accessible web layouts with CSS Flexbox.</p>
        </div>
        <div className={styles.footerCol}>
          <h4>Sections</h4>
          <a href="#hero">Hero Split</a>
          <a href="#features">Feature Grid</a>
          <a href="#alternating">Z-Pattern</a>
        </div>
        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank" rel="noreferrer">
            MDN Flexbox Guide
          </a>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">
            CSS-Tricks Guide
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SectionLayout;
