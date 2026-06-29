/**
 * TiptapRenderer — Renders Tiptap JSON content to React JSX.
 *
 * Server Component compatible — no client-side dependencies.
 * Preserves existing article typography and design system.
 */

import Image from 'next/image';
import Link from 'next/link';

/**
 * Render inline marks (bold, italic, underline, strikethrough, code, link).
 */
function renderMarks(node) {
  if (!node.marks || node.marks.length === 0) return node.text || '';

  let element = node.text || '';

  for (const mark of node.marks) {
    switch (mark.type) {
      case 'bold':
      case 'strong':
        element = <strong key={mark.type}>{element}</strong>;
        break;
      case 'italic':
      case 'em':
        element = <em key={mark.type}>{element}</em>;
        break;
      case 'underline':
        element = <u key={mark.type}>{element}</u>;
        break;
      case 'strike':
        element = <s key={mark.type}>{element}</s>;
        break;
      case 'code':
        element = (
          <code
            key={mark.type}
            className="bg-slate-100 text-[#0B2A6B] px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {element}
          </code>
        );
        break;
      case 'link': {
        const href = mark.attrs?.href || '#';
        const isExternal = href.startsWith('http');
        element = (
          <a
            key={mark.type}
            href={href}
            className="text-[#003DA5] hover:text-[#0B2A6B] underline underline-offset-2 transition-colors"
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {element}
          </a>
        );
        break;
      }
      case 'highlight':
        element = (
          <mark key={mark.type} className="bg-yellow-100 px-0.5 rounded">
            {element}
          </mark>
        );
        break;
      case 'subscript':
        element = <sub key={mark.type}>{element}</sub>;
        break;
      case 'superscript':
        element = <sup key={mark.type}>{element}</sup>;
        break;
      default:
        break;
    }
  }

  return element;
}

/**
 * Render inline content (text nodes, hard breaks, etc.)
 */
function renderInline(nodes) {
  if (!nodes || !Array.isArray(nodes)) return null;

  return nodes.map((node, i) => {
    switch (node.type) {
      case 'text':
        return <span key={i}>{renderMarks(node)}</span>;
      case 'hardBreak':
        return <br key={i} />;
      default:
        return null;
    }
  });
}

/**
 * Render a single Tiptap node.
 */
function renderNode(node, index) {
  if (!node) return null;

  switch (node.type) {
    case 'heading': {
      const level = node.attrs?.level || 2;
      const id = node.attrs?.id || undefined;
      const Tag = `h${level}`;
      const sizeClass = {
        1: 'text-3xl md:text-4xl',
        2: 'text-2xl',
        3: 'text-xl',
        4: 'text-lg',
        5: 'text-base',
        6: 'text-sm',
      }[level] || 'text-xl';

      return (
        <Tag
          key={index}
          id={id}
          className={`${sizeClass} font-bold mb-4 scroll-mt-24`}
          style={{ color: '#0B2A6B' }}
        >
          {renderInline(node.content)}
        </Tag>
      );
    }

    case 'paragraph':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {renderInline(node.content)}
        </p>
      );

    case 'bulletList':
      return (
        <ul key={index} className="list-disc pl-6 mb-4 space-y-1.5 text-gray-600">
          {node.content?.map((item, i) => renderNode(item, i))}
        </ul>
      );

    case 'orderedList':
      return (
        <ol key={index} className="list-decimal pl-6 mb-4 space-y-1.5 text-gray-600">
          {node.content?.map((item, i) => renderNode(item, i))}
        </ol>
      );

    case 'listItem':
      return (
        <li key={index} className="leading-relaxed">
          {node.content?.map((child, i) => {
            // List items wrap content in paragraphs — render without extra margin
            if (child.type === 'paragraph') {
              return <span key={i}>{renderInline(child.content)}</span>;
            }
            return renderNode(child, i);
          })}
        </li>
      );

    case 'blockquote':
      return (
        <blockquote
          key={index}
          className="border-l-4 border-[#0B2A6B] pl-5 py-2 mb-4 italic text-gray-600 bg-slate-50/50 rounded-r-lg"
        >
          {node.content?.map((child, i) => renderNode(child, i))}
        </blockquote>
      );

    case 'codeBlock': {
      const lang = node.attrs?.language || '';
      return (
        <pre
          key={index}
          className="bg-gray-900 text-gray-100 rounded-xl p-5 mb-4 overflow-x-auto text-sm font-mono leading-relaxed"
        >
          <code className={lang ? `language-${lang}` : ''}>
            {node.content?.map((n) => n.text || '').join('') || ''}
          </code>
        </pre>
      );
    }

    case 'image': {
      const src = node.attrs?.src || '';
      const alt = node.attrs?.alt || '';
      const title = node.attrs?.title || '';
      if (!src) return null;

      return (
        <figure key={index} className="mb-6">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={src}
              alt={alt}
              title={title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {(title || alt) && (
            <figcaption className="text-center text-xs text-gray-400 mt-2">
              {title || alt}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'horizontalRule':
      return <hr key={index} className="border-slate-100 my-6" />;

    case 'table': {
      const rows = node.content || [];

      // A row is a header row if every cell is a tableHeader node.
      const isHeaderRow = (row) =>
        row.content?.length > 0 && row.content.every((cell) => cell.type === 'tableHeader');

      const headRows = rows.filter(isHeaderRow);
      const bodyRows = rows.filter((row) => !isHeaderRow(row));

      return (
        <div key={index} className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
          <table className="min-w-full divide-y divide-slate-200">
            {headRows.length > 0 && (
              <thead>
                {headRows.map((child, i) => renderNode(child, i))}
              </thead>
            )}
            {bodyRows.length > 0 && (
              <tbody className="divide-y divide-slate-100">
                {bodyRows.map((child, i) => renderNode(child, i))}
              </tbody>
            )}
          </table>
        </div>
      );
    }

    case 'tableRow':
      return (
        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
          {node.content?.map((child, i) => renderNode(child, i))}
        </tr>
      );

    case 'tableHeader':
      return (
        <th
          key={index}
          className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
          style={{ color: '#0B2A6B', background: '#EEF2FF' }}
          colSpan={node.attrs?.colspan || 1}
          rowSpan={node.attrs?.rowspan || 1}
        >
          {node.content?.map((child, i) => {
            if (child.type === 'paragraph') return <span key={i}>{renderInline(child.content)}</span>;
            return renderNode(child, i);
          })}
        </th>
      );

    case 'tableCell':
      return (
        <td
          key={index}
          className="px-4 py-3 text-sm text-gray-700"
          colSpan={node.attrs?.colspan || 1}
          rowSpan={node.attrs?.rowspan || 1}
        >
          {node.content?.map((child, i) => {
            if (child.type === 'paragraph') return <span key={i}>{renderInline(child.content)}</span>;
            return renderNode(child, i);
          })}
        </td>
      );

    case 'iframe':
    case 'youtube': {
      const src = node.attrs?.src || '';
      if (!src) return null;
      return (
        <div key={index} className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl mb-4">
          <iframe
            src={src}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      );
    }

    default:
      // Fallback: try to render children if present
      if (node.content && Array.isArray(node.content)) {
        return (
          <div key={index}>
            {node.content.map((child, i) => renderNode(child, i))}
          </div>
        );
      }
      return null;
  }
}

/**
 * TiptapRenderer — Main component.
 * Renders a Tiptap JSON document to styled React elements.
 *
 * @param {{ content: object }} props
 */
export default function TiptapRenderer({ content }) {
  if (!content || !content.content || !Array.isArray(content.content)) {
    return null;
  }

  return (
    <div className="prose-custom">
      {content.content.map((node, i) => renderNode(node, i))}
    </div>
  );
}
