'use client';

import { useState } from 'react';
import Image from 'next/image';

// Load the third-party player only after an explicit play request.
export default function VideoPreview({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  if (playing) return (
    <iframe
      className="absolute inset-0 h-full w-full border-0"
      src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-slate-900 text-white cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-orange-400"
    >
      <Image src="/images/home/ctiddp-herosection-bg-image.png" alt="" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover opacity-40" />
      <span aria-hidden="true" className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-2xl">▶</span>
      <span className="relative px-5 text-center font-semibold">{title}</span>
    </button>
  );
}
