import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa6'

/**
 * TeamCard — Leadership card with portrait, name, role, bio, LinkedIn icon
 * @param {string} name
 * @param {string} role
 * @param {string} bio
 * @param {string} image — Image path
 * @param {string} linkedin — LinkedIn URL
 */
export default function TeamCard({ name, role, bio, image, linkedin, className = '' }) {
  return (
    <div className={`card overflow-hidden group ${className}`}>
      {/* Image */}
      <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-50 flex items-center justify-center">
            <span className="text-[56px] font-700 text-primary/20">
              {name?.charAt(0)}
            </span>
          </div>
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[17px] font-600 text-gray-900 mb-0.5">{name}</h3>
            <p className="text-[13px] font-600 text-orange">{role}</p>
          </div>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 shrink-0"
            >
              <FaLinkedinIn size={14} />
            </a>
          )}
        </div>
        {bio && <p className="text-[13px] text-gray-500 leading-relaxed mt-3">{bio}</p>}
      </div>
    </div>
  )
}
