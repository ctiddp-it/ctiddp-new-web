// Shared allowlist: keep byte-identical with both frontend copies (checked by tests).
export function safeUrl(value, image = false) {
  if (typeof value !== 'string') return '';
  const url = value.trim();
  if (!url || [...url].some(c => c.charCodeAt(0) <= 32 || c.charCodeAt(0) === 127 || c === '\\')) return '';
  if (/^https?:\/\//i.test(url)) return url;
  if (/^\/(?!\/)/.test(url)) return url;
  if (!image && /^(#|mailto:|tel:)/i.test(url)) return url;
  return '';
}
const color = v => typeof v === 'string' && /^(#[\da-f]{3,8}|[a-z]{3,20}|rgba?\([\d.,% ]+\))$/i.test(v) ? v : undefined;
const types = new Set(['doc', 'text', 'paragraph', 'heading', 'bulletList', 'orderedList', 'listItem', 'blockquote', 'codeBlock', 'hardBreak', 'horizontalRule', 'image', 'table', 'tableRow', 'tableCell', 'tableHeader']);
const marks = new Set(['bold', 'strong', 'italic', 'em', 'underline', 'strike', 'code', 'link', 'textStyle', 'highlight', 'subscript', 'superscript']);
export function sanitizeContent(input) {
  let count = 0;
  function visit(node, depth = 0) {
    if (!node || typeof node !== 'object' || depth > 40 || ++count > 60000 || !types.has(node.type)) return null;
    const out = {
      type: node.type
    };
    if (node.type === 'text') out.text = String(node.text || '');
    const a = node.attrs || {};
    const attrs = {};
    if (['heading', 'paragraph'].includes(node.type) && ['left', 'center', 'right', 'justify'].includes(a.textAlign)) attrs.textAlign = a.textAlign;
    if (node.type === 'heading') {
      attrs.level = Math.min(6, Math.max(1, Number(a.level) || 2));
      if (/^[\w-]+$/.test(a.id || '')) attrs.id = a.id;
    }
    if (node.type === 'orderedList') attrs.start = Math.max(1, Number(a.start) || 1);
    if (node.type === 'image') {
      attrs.src = safeUrl(a.src, true);
      if (!attrs.src) return null;
      attrs.alt = String(a.alt || '');
      attrs.title = String(a.title || '');
    }
    if (['tableCell', 'tableHeader'].includes(node.type)) {
      attrs.colspan = Math.min(100, Math.max(1, Number(a.colspan) || 1));
      attrs.rowspan = Math.min(100, Math.max(1, Number(a.rowspan) || 1));
    }
    if (Object.keys(attrs).length) out.attrs = attrs;
    if (Array.isArray(node.marks)) out.marks = node.marks.filter(m => marks.has(m.type)).flatMap(m => {
      if (m.type === 'link') {
        const href = safeUrl(m.attrs?.href);
        return href ? [{
          type: 'link',
          attrs: {
            href
          }
        }] : [];
      }
      if (['textStyle', 'highlight'].includes(m.type)) return [{
        type: m.type,
        attrs: {
          color: color(m.attrs?.color)
        }
      }];
      return [{
        type: m.type
      }];
    });
    if (Array.isArray(node.content)) out.content = node.content.map(n => visit(n, depth + 1)).filter(Boolean);
    return out;
  }
  const result = visit(input);
  return result?.type === 'doc' ? result : {
    type: 'doc',
    content: []
  };
}
