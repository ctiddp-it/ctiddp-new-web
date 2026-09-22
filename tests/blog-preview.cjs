const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || path.join(require('node:os').homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const context = await browser.newContext();
    const errors = [];
    const forbidden = [];
    context.on('page', page => page.on('pageerror', error => errors.push(error.message)));
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.pathname === '/preview-fixture') return route.fulfill({ contentType: 'text/html', body: '<!doctype html><title>Isolated editor</title><button>Preview</button>' });
      if (url.pathname.includes('/api/blog/')) forbidden.push(url.pathname);
      if (url.pathname.startsWith('/api/') || !['localhost', '127.0.0.1'].includes(url.hostname)) return route.fulfill({ contentType: 'application/json', body: '{}' });
      return route.continue();
    });
    const opener = await context.newPage();
    await opener.goto('http://localhost:5173/preview-fixture');
    const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
    const payload = { type: 'CTIDDP_BLOG_PREVIEW', nonce: 'isolated-preview', post: {
      title: 'Unsaved preview regression', slug: 'never-published', excerpt: 'Draft content only',
      publishedAt: '2026-09-22T10:00:00.000Z', readingTime: 1,
      seo: { metaTitle: 'Current SEO title', metaDescription: 'Current SEO description' },
      content: { type: 'doc', content: [{ type: 'heading', attrs: { level: 2, id: 'section-one' }, content: [{ type: 'text', text: 'Section one' }] }, { type: 'paragraph', content: [{ type: 'text', text: 'Unsaved words', marks: [{ type: 'bold' }] }] }] },
      tableOfContents: [{ id: 'section-one', text: 'Section one' }], tags: [],
    }, relatedPosts: [], adjacent: { prev: null, next: null } };
    const opened = context.waitForEvent('page');
    await opener.evaluate(({ base, payload }) => {
      const popup = window.open(`${base}/blog/preview?preview=${payload.nonce}`, '_blank');
      window.addEventListener('message', event => {
        if (event.source === popup && event.origin === new URL(base).origin && event.data?.type === 'CTIDDP_PREVIEW_READY') popup.postMessage(payload, new URL(base).origin);
      });
    }, { base, payload });
    const preview = await opened;
    await preview.getByRole('heading', { name: payload.post.title, exact: true }).waitFor();
    await preview.waitForFunction(() => document.title === 'Current SEO title | CTIDDP', null, { timeout: 5000 });
    assert.equal(await preview.title(), 'Current SEO title | CTIDDP');
    assert.equal(await preview.locator('.rich-text-content strong').textContent(), 'Unsaved words');
    assert.equal(await preview.locator('meta[name="robots"]').getAttribute('content'), 'noindex, nofollow');
    await preview.locator('a[href="#section-one"]').click();
    assert.equal(new URL(preview.url()).hash, '#section-one');
    // A same-tab forged message has the wrong source and cannot replace the article.
    await preview.evaluate(payload => window.postMessage({ ...payload, post: { ...payload.post, title: 'Forged content' } }, location.origin), payload);
    await preview.waitForTimeout(100);
    assert.equal(await preview.getByRole('heading', { name: 'Forged content' }).count(), 0);
    await preview.reload();
    await preview.getByRole('heading', { name: payload.post.title, exact: true }).waitFor();
    assert.deepEqual(forbidden, [], 'Draft preview must never request published slug APIs');
    assert.deepEqual(errors, []);
    const direct = await context.newPage();
    await direct.goto(`${base}/blog/preview`);
    await direct.getByRole('heading', { name: 'Preview unavailable' }).waitFor();
    console.log('PASS: unsaved new-tab preview, metadata/noindex, formatting, heading anchors, forged-message rejection, reload, missing opener and no published-slug requests.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
