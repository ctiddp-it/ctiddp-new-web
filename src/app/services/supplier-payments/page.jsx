// pages/index.js
import { 
  FaShieldAlt, 
  FaHandshake, 
  FaClipboardCheck, 
  FaUserCheck, 
  FaMoneyBillWave, 
  FaGlobe, 
  FaBoxOpen, 
  FaShip, 
  FaBuilding, 
  FaFileInvoice, 
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';
import { BsShieldCheck, BsArrowRight } from 'react-icons/bs';
import { Fragment } from 'react';

const SectionHeader = ({ eyebrow, title, highlight, description }) => (
  <div className="flex flex-col items-center text-center mb-12 md:mb-16">
    <div className="flex items-center gap-2 mb-4">
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
      <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
        {eyebrow}
      </span>
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
    </div>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
      {title} <span style={{ color: '#FE5101' }}>{highlight}</span>
    </h2>
    
    <div className="flex h-[3.5px] rounded-full overflow-hidden mb-5" style={{ width: '72px' }}>
      <div className="flex-1" style={{ background: '#0B2A6B' }} />
      <div className="flex-1" style={{ background: '#FE5101' }} />
    </div>

    <p className="text-lg md:text-md text-gray-700 max-w-3xl mx-auto">
      {description}
    </p>
  </div>
);

// Hero section features data
const heroFeatures = [
  { icon: <FaShieldAlt className="text-[#0181EA]" size={20} />, title: 'DDP Compliance', subtitle: 'Full tax & duty prepaid' },
  { icon: <FaHandshake className="text-[#0181EA]" size={20} />, title: 'Trusted Carriers', subtitle: 'Reliable logistics partners' },
  { icon: <FaClipboardCheck className="text-[#0181EA]" size={20} />, title: 'Real-Time Tracking', subtitle: 'End-to-end visibility' },
  { icon: <FaHeadset className="text-[#0181EA]" size={20} />, title: 'Dedicated Support', subtitle: 'Personal account manager' }
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    {/* Responsive Background */}
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width:1024px)" srcSet="/images/quote/quo.png" />
        <img src="/images/quote/quo-mob.png" alt="Global Logistics" className="h-full w-full object-cover object-center" />
      </picture>
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/20 lg:via-[#041c4a]/85" />

    {/* Optional pattern */}
    <div className="absolute inset-0 opacity-[0.06]" />

    {/* Content */}
    <div className="relative z-10 h-full">
      <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              CROSS-BORDER PAYMENT MANAGEMENT
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Secure Supplier
            <br />
            <span className="text-[#36A0F7]">Payments in China</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Pay your China suppliers with confidence and control through a managed payment process aligned with your shipment execution.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="https://www.ctiddp.com/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/25 hover:shadow-[#FE5101]/50 transition-shadow duration-300"
            >
              Get Free Quote
            </a>
          </div>

          {/* Desktop only features */}
          <div className="hidden lg:grid mt-10 grid-cols-4 gap-x-8 gap-y-5">
            {heroFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                  <div className="text-xs text-white/70">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ChallengeSection = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>THE CHALLENGE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#0B2A6B' }}>
            What is Supplier Payment Management for Imports?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Supplier payment management ensures your funds reach the right supplier, through the right channel, with full documentation and compliance.
          </p>
        </div>

        {/* Right Column */}
        <div className="border border-slate-200 rounded-xl p-6 md:p-8 bg-slate-50/50">
          <p className="text-gray-800 font-semibold mb-4">When sourcing from China, payments typically involve:</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'International bank transfers',
              'Currency conversion (INR to USD/CNY)',
              'Supplier verification',
              'Transaction documentation',
              'Payment tracking'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#FE5101] text-xl leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-[#0B2A6B]/5 border-l-4 border-[#FE5101] rounded-r">
            <p className="text-gray-800 font-medium">
              📦 CTIDDP simplifies this entire process into a structured, secure workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SolutionPillars = () => {
  const cards = [
    {
      icon: <FaUserCheck className="text-[#003DA5]" size={32} />,
      title: 'Supplier Verification',
      description: 'Supplier account and documentation checks before funds are initiated. Ensure you\'re paying the right entity.'
    },
    {
      icon: <FaMoneyBillWave className="text-[#003DA5]" size={32} />,
      title: 'Cross-Border Payment Handling',
      description: 'Structured payment processing from India to China with currency conversion support (INR → USD/CNY).'
    },
    {
      icon: <FaClipboardCheck className="text-[#003DA5]" size={32} />,
      title: 'Documentation and Tracking',
      description: 'Invoice validation, payment records, and dispatch-aligned transaction visibility from start to finish.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="END-TO-END SOLUTION"
          title="CTIDDP Supplier Payment"
          highlight="Solution"
          description="What we handle - from verification to dispatch coordination"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0B2A6B' }}>{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    'You finalise supplier and order details',
    'CTIDDP verifies supplier credentials',
    'Invoice and payment terms are reviewed',
    'Payment is processed via secure channels',
    'Supplier confirms receipt',
    'Production or dispatch is initiated'
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="STEP BY STEP"
          title="Payment"
          highlight="Workflow"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE5101] text-white font-bold flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <p className="text-gray-800 font-medium leading-tight pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      title: 'Verified supplier payment flow',
      desc: 'Every transaction starts with supplier confirmation'
    },
    {
      title: 'Structured documentation support',
      desc: 'Invoices, receipts, and logs maintained'
    },
    {
      title: 'Cross-Border transaction handling',
      desc: 'Seamless INR to CNY/USD processing'
    },
    {
      title: 'Integrated with logistics execution',
      desc: 'Payments trigger shipment readiness'
    },
    {
      title: 'Real-time coordination',
      desc: 'Supplier updates and tracking visibility'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="BUILT FOR IMPORTERS"
          title="Key"
          highlight="Features"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg border border-slate-100">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#003DA5] mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-[#0B2A6B] mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentMethods = () => {
  const methods = [
    { type: 'Bank Transfer (TT)', use: 'Standard supplier payments' },
    { type: 'Advance Payments', use: 'Production initiation' },
    { type: 'Balance Payments', use: 'Before shipment dispatch' },
    { type: 'Multi-Supplier Payments', use: 'Bulk sourcing / consolidation' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="FLEXIBLE OPTIONS"
          title="Payment Methods We"
          highlight="Support"
          description="Structured payment processing for every stage of procurement"
        />
        <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0B2A6B]">Payment Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0B2A6B]">Use Case</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0B2A6B]">Handled By CTIDDP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {methods.map((method) => (
                <tr key={method.type} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{method.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{method.use}</td>
                  <td className="px-6 py-4 text-sm text-[#003DA5]">
                    <span className="flex items-center gap-1">
                      <HiCheckBadge size={18} /> ✓
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const RiskIntegration = () => {
  const checklist = [
    'Correct supplier identification',
    'Accurate invoice validation',
    'Currency exchange handling',
    'Documentation alignment with shipment',
    'Payment confirmation before dispatch'
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>RISK MITIGATION</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#0B2A6B' }}>Why Supplier Payments Need Structured Handling</h3>
          <ul className="space-y-3 text-gray-700 mb-6">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#003DA5] mt-1 flex-shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-800 font-medium bg-white p-4 rounded-lg border border-slate-200">
            CTIDDP ensures all these steps are handled within a controlled and transparent system.
          </p>
        </div>

        {/* Right */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>SEAMLESS INTEGRATION</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#0B2A6B' }}>Integrated with DDP Shipping</h3>
          <p className="text-gray-600 mb-6">One Flow - Payment to Delivery</p>
          <div className="flex flex-wrap items-center gap-3 mb-6 bg-white p-5 rounded-lg border border-slate-200">
            {['Payment', 'Production', 'Pickup', 'Shipping', 'Delivery'].map((stage, idx) => (
              <Fragment key={stage}>
                <span className="font-medium text-gray-800">{stage}</span>
                {idx < 4 && <BsArrowRight className="text-[#FE5101]" />}
              </Fragment>
            ))}
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#003DA5]" size={14} /> Faster shipment readiness</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#003DA5]" size={14} /> Better coordination with suppliers</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#003DA5]" size={14} /> Smooth transition into shipping process</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const UseCasesCompliance = () => {
  const useCases = [
    'Importers sourcing from multiple suppliers',
    'Businesses attending Canton Fair',
    'Bulk product buyers',
    'First-time importers from China',
    'Growing businesses scaling procurement'
  ];
  const compliance = [
    'Invoice validation',
    'Payment confirmation records',
    'Supplier coordination logs',
    'Alignment with shipping documentation'
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>PERFECT FIT</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#0B2A6B' }}>Ideal for These Use Cases</h3>
          <ul className="space-y-3">
            {useCases.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#FE5101] text-xl leading-none">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>FULL COMPLIANCE</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#0B2A6B' }}>Documentation & Compliance Support</h3>
          <p className="text-gray-600 mb-5">Included with every payment:</p>
          <ul className="space-y-3">
            {compliance.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-[#003DA5] mt-1 flex-shrink-0" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  const points = [
    { title: 'One Partner', desc: 'One partner for payment + shipping - no middlemen' },
    { title: 'Cross-Border Expertise', desc: 'Structured cross-border transaction process' },
    { title: 'Supplier Coordination', desc: 'Supplier coordination handled professionally' },
    { title: 'Reduced Effort', desc: 'Reduced operational effort for your team' },
    { title: 'Seamless Transition', desc: 'Seamless transition to DDP shipping' },
    { title: 'Cost Predictability', desc: 'Transparent pricing with no hidden fees' }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="TRUSTED PARTNER"
          title="Why Choose CTIDDP for Supplier"
          highlight="Payments"
          description=""
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div key={point.title} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold mb-2" style={{ color: '#0B2A6B' }}>{point.title}</h4>
              <p className="text-gray-600 text-sm">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Simplify Your Supplier Payments Today
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Handle payments and shipping under one structured system. One partner. One workflow. Complete peace of mind.
      </p>
      <a
        href="https://www.ctiddp.com/quote"
        className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/30 hover:shadow-[#FE5101]/50 transition-all duration-300"
      >
        GET STARTED WITH CTIDDP
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <ChallengeSection />
      <SolutionPillars />
      <WorkflowSection />
      <KeyFeatures />
      <PaymentMethods />
      <RiskIntegration />
      <UseCasesCompliance />
      <ValueProps />
      <FinalCTA />
    </main>
  );
}