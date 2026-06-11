/**
 * StepTimeline — Horizontal numbered steps with icons and connecting lines
 * @param {Array} steps — Array of { number, icon, title, description }
 * @param {string} className
 */
export default function StepTimeline({ steps = [], className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex md:flex-col items-start md:items-center flex-1 relative group">
            {/* Connecting line (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[2px] border-t-2 border-dashed border-gray-200 z-0" />
            )}

            {/* Icon circle */}
            <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
              {step.icon ? (
                <span className="text-[22px]">{step.icon}</span>
              ) : (
                <span className="text-[15px] font-700">{step.number || String(i + 1).padStart(2, '0')}</span>
              )}
            </div>

            {/* Mobile connecting line */}
            {i < steps.length - 1 && (
              <div className="md:hidden w-[2px] h-8 border-l-2 border-dashed border-gray-200 ml-[25px] -my-1" />
            )}

            {/* Text */}
            <div className="md:text-center mt-0 md:mt-3.5 ml-4 md:ml-0 flex-1 md:px-2">
              <div className="text-[10px] font-700 text-primary tracking-wider uppercase mb-1">
                Step {step.number || String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="text-[14px] font-600 text-gray-800 leading-tight mb-1">{step.title}</h4>
              {step.description && (
                <p className="text-[12px] text-gray-500 leading-relaxed">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
