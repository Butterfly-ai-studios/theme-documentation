const fs = require('fs');
const { marked } = require('/tmp/mdtools/node_modules/marked');
const SRC = '/home/hatch/workspace/shopify-theme-audit/buyer-docs';
const CSS = `:root{--bg:#0b1220; --panel:#111a2e; --card:#17233d; --text:#e8eefc; --muted:#b6c2e3; --line:#2b3a61; --brand:#35d0ff; --brand2:#8a7dff; --ok:#2ad38b; --warn:#ffca57; --max:1100px;} *{box-sizing:border-box} body{margin:0;font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,var(--bg),#0f1930);color:var(--text)} a{color:var(--brand)} .wrap{max-width:var(--max);margin:auto;padding:24px} .hero{background:linear-gradient(135deg,#122143,#0f1a34);border:1px solid var(--line);border-radius:14px;padding:28px;margin-bottom:22px} .badge{display:inline-block;padding:4px 10px;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:12px} h1,h2,h3{line-height:1.25;margin:22px 0 10px} h1{font-size:32px;margin-top:0} h2{font-size:23px;border-top:1px solid var(--line);padding-top:22px} h3{font-size:18px} p,li{color:var(--muted)} strong{color:var(--text)} nav.top{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px} nav.top a{border:1px solid var(--line);background:var(--panel);padding:7px 13px;border-radius:999px;text-decoration:none;font-size:14px} nav.top a.active{border-color:var(--brand);color:#fff} table{width:100%;border-collapse:collapse;background:var(--panel);border:1px solid var(--line);border-radius:12px;overflow:hidden;margin:14px 0} th,td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top} code{font-family:ui-monospace,SFMono-Regular,Consolas,Menlo,monospace;background:#0a1326;border:1px solid var(--line);border-radius:6px;padding:1px 5px;font-size:.92em;color:#cfe3ff} pre{background:#0a1326;border:1px solid var(--line);padding:14px;border-radius:10px;overflow:auto} pre code{border:0;padding:0} blockquote{border-left:3px solid var(--brand);margin:14px 0;padding:8px 14px;background:#101d36;border-radius:8px} hr{border:0;border-top:1px solid var(--line);margin:26px 0} footer{margin:30px 0 8px;color:#8fa2d3;font-size:14px} img{max-width:100%}`;
const PAGES = [
  ['index.html', 'README.md', 'Butterfly Neural Theme Documentation', 'Official documentation for the Butterfly Neural Shopify theme by VOOQIO INC.'],
  ['features.html', 'FEATURES.md', 'Features — Butterfly Neural', 'Every feature of the Butterfly Neural Shopify theme: what it does, where it lives, and how to set it up.'],
  ['pages-and-metafields.html', 'PAGES-AND-METAFIELDS.md', 'Pages & Metafields Setup — Butterfly Neural', 'Exact setup checklists for Butterfly Neural: special pages, menus, metafields, and Search & Discovery filters.'],
  ['faq.html', 'FAQ.md', 'FAQ & Troubleshooting — Butterfly Neural', 'Frequently asked questions and troubleshooting for the Butterfly Neural Shopify theme.'],
  ['changelog.html', 'CHANGELOG.md', 'Changelog — Butterfly Neural', 'Version history for the Butterfly Neural Shopify theme.'],
];
const NAV = [['index.html','Overview'],['features.html','Features'],['pages-and-metafields.html','Pages & Metafields'],['faq.html','FAQ'],['changelog.html','Changelog']];
for (const [out, md, title, desc] of PAGES) {
  const body = marked.parse(fs.readFileSync(`${SRC}/${md}`, 'utf8'));
  const nav = NAV.map(([h, l]) => `<a href="${h}"${h === out ? ' class="active"' : ''}>${l}</a>`).join('');
  const html = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>${title}</title>\n<meta name="description" content="${desc}">\n<style>${CSS}</style>\n</head>\n<body>\n<div class="wrap">\n<nav class="top">${nav}</nav>\n${body}\n<footer>Butterfly Neural by VOOQIO INC · <a href="https://butterfly-ai-studios.github.io/theme-support/">Theme support</a></footer>\n</div>\n</body>\n</html>\n`;
  fs.writeFileSync(out, html);
  console.log('built', out, html.length, 'bytes');
}
fs.copyFileSync('index.html', 'theme-documentation.html');
console.log('theme-documentation.html = index copy');
