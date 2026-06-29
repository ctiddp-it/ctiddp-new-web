'use client';

import { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaWhatsapp,
  FaCheck
} from 'react-icons/fa';

/**
 * ShareButtons — Client component for social sharing.
 * Copy link requires client-side navigator.clipboard.
 */
export default function ShareButtons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const socials = [
    {
      icon: <FaFacebookF size={14} />,
      bg: '#1877F2',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      icon: <FaLinkedinIn size={14} />,
      bg: '#0A66C2',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      icon: <FaTwitter size={14} />,
      bg: '#1DA1F2',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: <FaWhatsapp size={14} />,
      bg: '#25D366',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-600">Share:</span>
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
          style={{ background: s.bg }}
        >
          {s.icon}
        </a>
      ))}
      <div className="relative">
        <button
          onClick={copyLink}
          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-gray-500 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors cursor-pointer"
          aria-label="Copy link"
        >
          {copied ? <FaCheck size={12} /> : <FaLink size={13} />}
        </button>

        {copied && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs text-white shadow-lg">
            Link copied!
          </div>
        )}
      </div>
    </div>
  );
}
