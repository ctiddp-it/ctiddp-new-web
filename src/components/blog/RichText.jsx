import { createElement as h, Fragment } from 'react';
import { sanitizeContent } from '../../lib/richText';
export default function RichText({
  content,
  mediaBase = ''
}) {
  function render(node, key) {
    const a = node.attrs || {};
    // Identity belongs to the text node, not its nested formatting marks.
    if (node.type === 'text') return h(Fragment, { key }, (node.marks || []).reduce((text, mark) => {
      const tags = {
        bold: 'strong',
        strong: 'strong',
        italic: 'em',
        em: 'em',
        underline: 'u',
        strike: 's',
        code: 'code',
        subscript: 'sub',
        superscript: 'sup'
      };
      if (tags[mark.type]) return h(tags[mark.type], null, text);
      if (mark.type === 'link') return h('a', {
        href: mark.attrs.href,
        rel: 'noopener noreferrer',
        ...(mark.attrs.href.startsWith('http') ? {
          target: '_blank'
        } : {})
      }, text);
      if (mark.type === 'textStyle') return h('span', {
        style: {
          color: mark.attrs?.color
        }
      }, text);
      if (mark.type === 'highlight') return h('mark', {
        style: {
          backgroundColor: mark.attrs?.color || '#fff1a8'
        }
      }, text);
      return text;
    }, node.text || ''));
    const children = node.content?.map((n, i) => render(n, i));
    if (node.type === 'doc') return h('div', {
      key
    }, children);
    if (node.type === 'image') return h('figure', {
      key
    }, h('img', {
      src: a.src.startsWith('/') ? mediaBase + a.src : a.src,
      alt: a.alt,
      loading: 'lazy',
      style: {
        maxWidth: '100%',
        height: 'auto'
      }
    }), a.title ? h('figcaption', null, a.title) : null);
    if (node.type === 'table') return h('div', {
      key,
      style: {
        overflowX: 'auto'
      }
    }, h('table', null, h('tbody', null, children)));
    const tags = {
      paragraph: 'p',
      heading: `h${a.level || 2}`,
      bulletList: 'ul',
      orderedList: 'ol',
      listItem: 'li',
      blockquote: 'blockquote',
      codeBlock: 'pre',
      hardBreak: 'br',
      horizontalRule: 'hr',
      tableRow: 'tr',
      tableCell: 'td',
      tableHeader: 'th'
    };
    const tag = tags[node.type];
    if (!tag) return null;
    const props = {
      key,
      ...(a.textAlign ? {
        style: {
          textAlign: a.textAlign
        }
      } : {}),
      ...(a.id ? {
        id: a.id
      } : {})
    };
    if (node.type === 'orderedList') props.start = a.start;
    if (['td', 'th'].includes(tag)) {
      props.colSpan = a.colspan;
      props.rowSpan = a.rowspan;
    }
    return ['br', 'hr'].includes(tag) ? h(tag, props) : h(tag, props, children);
  }
  return h('div', {
    className: 'rich-text-content'
  }, render(sanitizeContent(content), 0));
}
