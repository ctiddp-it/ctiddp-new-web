import { HiOutlinePhone, HiOutlineClock, HiOutlineEnvelope } from 'react-icons/hi2'

/**
 * OfficeCard - Office location card with flag dot, contact info
 * @param {string} city - City name
 * @param {string} officeName - Full office name
 * @param {string} address - Address text
 * @param {string} phone - Phone number
 * @param {string} email - Email address
 * @param {string} hours - Business hours
 * @param {'india'|'china'} country - Country (for dot color)
 * @param {boolean} featured - Highlighted card
 * @param {string} className
 */
export default function OfficeCard({
  city,
  officeName,
  address,
  phone,
  email,
  hours,
  country = 'india',
  featured = false,
  className = '',
}) {
  const dotColor = country === 'china' ? 'bg-red-500' : 'bg-orange'

  return (
    <div
      className={`card p-5 sm:p-6 ${featured ? 'border-primary/30 bg-primary-50/30' : ''} ${className}`}
    >
      {/* City header */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor} shrink-0`} />
        <h3 className="text-[15px] font-600 text-gray-900">{city}</h3>
      </div>

      {/* Office name */}
      {officeName && (
        <p className="text-[13px] font-500 text-primary mb-1">{officeName}</p>
      )}

      {/* Address */}
      {address && (
        <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{address}</p>
      )}

      {/* Contact details */}
      <div className="flex flex-col gap-2">
        {phone && (
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[12px] text-gray-600 hover:text-primary transition-colors no-underline">
            <HiOutlinePhone size={14} className="text-primary shrink-0" />
            {phone}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-[12px] text-primary hover:underline no-underline">
            <HiOutlineEnvelope size={14} className="shrink-0" />
            {email}
          </a>
        )}
        {hours && (
          <div className="flex items-center gap-2 text-[12px] text-gray-500">
            <HiOutlineClock size={14} className="text-primary shrink-0" />
            {hours}
          </div>
        )}
      </div>
    </div>
  )
}
