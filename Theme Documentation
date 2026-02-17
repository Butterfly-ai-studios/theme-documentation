<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Butterfly AI Gadgets Theme Documentation</title>
  <meta name="description" content="Official documentation for the Butterfly AI Gadgets Shopify theme.">
  <style>
    :root {
      --bg:#0b1220; --panel:#111a2e; --card:#17233d; --text:#e8eefc; --muted:#b6c2e3;
      --line:#2b3a61; --brand:#35d0ff; --brand2:#8a7dff; --ok:#2ad38b; --warn:#ffca57;
      --max:1100px;
    }
    *{box-sizing:border-box} body{margin:0;font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,var(--bg),#0f1930);color:var(--text)}
    a{color:var(--brand)} .wrap{max-width:var(--max);margin:auto;padding:24px}
    .hero{background:linear-gradient(135deg,#122143,#0f1a34);border:1px solid var(--line);border-radius:14px;padding:28px}
    .badge{display:inline-block;padding:4px 10px;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:12px}
    h1,h2,h3{line-height:1.25;margin:0 0 12px} h1{font-size:34px} h2{font-size:24px;margin-top:28px}
    p,li{color:var(--muted)} .grid{display:grid;gap:16px}.g2{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
    .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:18px}
    code,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Menlo,monospace}
    pre{background:#0a1326;border:1px solid var(--line);padding:14px;border-radius:10px;overflow:auto}
    table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--line);border-radius:12px;overflow:hidden}
    th,td{padding:12px;border-bottom:1px solid var(--line);text-align:left}
    .toc a{display:block;padding:6px 0;text-decoration:none}
    .note{border-left:3px solid var(--brand);padding:10px 12px;background:#101d36;border-radius:8px}
    .ok{color:var(--ok)} .warn{color:var(--warn)}
    footer{margin:28px 0 8px;color:#8fa2d3;font-size:14px}
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <span class="badge">Theme Documentation</span>
      <h1>Butterfly AI Gadgets</h1>
      <p>Version: <strong>1.0.0</strong> | Last updated: <strong>2026-02-16</strong></p>
      <p>This guide covers installation, setup, customization, and troubleshooting for the Butterfly AI Gadgets Shopify theme.</p>
    </section>

    <section class="grid g2" style="margin-top:18px">
      <article class="card toc">
        <h2 style="margin-top:0">Contents</h2>
        <a href="#requirements">1. Requirements</a>
        <a href="#install">2. Installation</a>
        <a href="#quickstart">3. Quick Start</a>
        <a href="#features">4. Feature Overview</a>
        <a href="#sections">5. Sections & Templates</a>
        <a href="#settings">6. Theme Settings</a>
        <a href="#apps">7. App Blocks</a>
        <a href="#performance">8. Performance Tips</a>
        <a href="#seo">9. SEO & Social</a>
        <a href="#troubleshoot">10. Troubleshooting</a>
        <a href="#faq">11. FAQ</a>
        <a href="#changelog">12. Changelog</a>
        <a href="#support">13. Support</a>
      </article>
      <article class="card">
        <h2 style="margin-top:0">Theme Info</h2>
        <ul>
          <li>Online Store 2.0 compatible</li>
          <li>JSON templates + section-based architecture</li>
          <li>Faceted filtering and sorting support on collection/search</li>
          <li>App block and custom liquid support</li>
        </ul>
        <p class="note"><strong>Important:</strong> Always duplicate your live theme before applying major changes.</p>
      </article>
    </section>

    <h2 id="requirements">1) Requirements</h2>
    <div class="card">
      <ul>
        <li>Shopify plan with Online Store channel enabled</li>
        <li>Modern browser (latest Chrome, Safari, Firefox, Edge)</li>
        <li>Admin access to Themes and Navigation</li>
      </ul>
    </div>

    <h2 id="install">2) Installation</h2>
    <div class="card">
      <ol>
        <li>Go to <strong>Shopify Admin -> Online Store -> Themes</strong>.</li>
        <li>Click <strong>Add theme -> Upload zip file</strong>.</li>
        <li>Upload the theme package and wait for processing.</li>
        <li>Click <strong>Customize</strong> to configure settings.</li>
        <li>Use <strong>Publish</strong> only after QA checks.</li>
      </ol>
    </div>

    <h2 id="quickstart">3) Quick Start Checklist</h2>
    <div class="card">
      <ul>
        <li>Upload logo and favicon</li>
        <li>Set colors/typography under Theme settings</li>
        <li>Assign header/footer menus</li>
        <li>Configure homepage sections</li>
        <li>Verify product page buy buttons + dynamic checkout</li>
        <li>Test cart, checkout redirect, and contact forms</li>
      </ul>
    </div>

    <h2 id="features">4) Feature Overview</h2>
    <table>
      <thead><tr><th>Feature</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Smart product presentation</td><td>Custom product layouts with media, variants, and upsell-ready blocks.</td></tr>
        <tr><td>Collection filtering</td><td>Faceted filtering and sorting for collection and search experiences.</td></tr>
        <tr><td>Theme presets</td><td>Prebuilt visual styles for fast store setup.</td></tr>
        <tr><td>B2B-ready sections</td><td>Dedicated enterprise-focused components and contact-oriented flows.</td></tr>
        <tr><td>App integration</td><td>Supports Shopify app blocks in core templates.</td></tr>
      </tbody>
    </table>

    <h2 id="sections">5) Sections & Templates</h2>
    <div class="card">
      <p>Common templates include:</p>
      <pre>templates/index.json
templates/product.json
templates/collection.json
templates/search.json
templates/cart.json
templates/page.json</pre>
      <p>Core section examples include Header, Footer, Main Product, Main Collection Product Grid, Main Search, Cart, and optional specialty sections.</p>
    </div>

    <h2 id="settings">6) Theme Settings</h2>
    <div class="card">
      <ul>
        <li><strong>Branding:</strong> logo, favicon, color palette, typography</li>
        <li><strong>Layout:</strong> spacing, card styles, radius/shadows</li>
        <li><strong>Commerce:</strong> quick add, compare, wishlist, bundle tools</li>
        <li><strong>Navigation:</strong> header menu and footer menus</li>
        <li><strong>Social:</strong> social profile links</li>
      </ul>
    </div>

    <h2 id="apps">7) App Blocks</h2>
    <div class="card">
      <p>The theme supports app blocks in product areas. Add via Theme Editor:</p>
      <ol>
        <li>Open product template</li>
        <li>Select product section</li>
        <li>Click <strong>Add block</strong> and choose your app block</li>
        <li>Save and test on storefront</li>
      </ol>
    </div>

    <h2 id="performance">8) Performance Tips</h2>
    <div class="card">
      <ul>
        <li>Use optimized images (WebP/AVIF where possible)</li>
        <li>Avoid oversized hero media</li>
        <li>Minimize third-party scripts/apps</li>
        <li>Audit with Shopify Theme Inspector and Lighthouse</li>
      </ul>
    </div>

    <h2 id="seo">9) SEO & Social</h2>
    <div class="card">
      <ul>
        <li>Set product, collection, and page metadata</li>
        <li>Ensure unique titles/descriptions</li>
        <li>Use proper alt text for images</li>
        <li>Validate Open Graph/Twitter previews</li>
      </ul>
    </div>

    <h2 id="troubleshoot">10) Troubleshooting</h2>
    <div class="card">
      <h3>Theme editor changes not visible</h3>
      <p>Clear browser cache, verify published theme, and check if preview uses the same theme ID.</p>
      <h3>Filters not working as expected</h3>
      <p>Confirm product data consistency (tags/vendors/availability), and that the correct template is assigned.</p>
      <h3>Layout issue on mobile</h3>
      <p>Check custom CSS and app embeds first; disable recently added scripts to isolate conflicts.</p>
    </div>

    <h2 id="faq">11) FAQ</h2>
    <div class="card">
      <p><strong>Can I use this with Shopify apps?</strong><br>Yes, app blocks are supported in core templates.</p>
      <p><strong>Will updates overwrite my content?</strong><br>Theme updates can affect code; always back up before updating.</p>
      <p><strong>Can I request customizations?</strong><br>Yes, use the support form linked below.</p>
    </div>

    <h2 id="changelog">12) Changelog</h2>
    <div class="card">
      <p><strong>v1.0.0</strong> (2026-02-16)</p>
      <ul>
        <li>Initial public release</li>
        <li>OS 2.0 template architecture</li>
        <li>Faceted filtering/sorting support and Theme Check compliance</li>
      </ul>
    </div>

    <h2 id="support">13) Support</h2>
    <div class="card">
      <p>Need help? Use the support page:</p>
      <p><a href="/theme-support.html">Open Support Form</a></p>
      <p>Support scope includes installation, setup guidance, and bug reports related to unmodified theme code.</p>
    </div>

    <footer>
      &copy; 2026 Butterfly AI Gadgets. All rights reserved.
    </footer>
  </div>
</body>
</html>
