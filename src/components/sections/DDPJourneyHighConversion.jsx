import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaShip,
  FaTruck,
  FaClipboardCheck,
  FaBoxes,
  FaFileImport,
  FaArrowRight,
} from "react-icons/fa";

const DDPJourneyHighConversion = () => {
  const steps = [
    {
      number: "01",
      title: "Supplier Coordination & Factory QC",
      description:
        "Vendor sourcing, negotiation, quality inspection at Foshan before goods move.",
      tag: "FOSHAN · CHINA",
      tagType: "location",
      icon: <FaClipboardCheck />,
    },
    {
      number: "02",
      title: "Cargo Consolidation & Export Preparation",
      description:
        "Multi-vendor consolidation at Guangzhou. HS code check, packing list, commercial invoice.",
      tag: "GUANGZHOU",
      tagType: "location",
      icon: <FaBoxes />,
    },
    {
      number: "03",
      title: "China Export Customs · 48 hrs",
      description:
        "Export declaration, LEO clearance, EGM verification - all within 48 hours.",
      tag: "48 HOURS",
      tagType: "time",
      icon: <FaFileImport />,
    },
    {
      number: "04",
      title: "International Sea / Air Transit",
      description:
        "Full DDP Incoterms 2020. Freight, insurance, all risk on us throughout transit.",
      tag: "18–25 DAYS SEA / 7–9 DAYS AIR",
      tagType: "time",
      icon: <FaShip />,
    },
    {
      number: "05",
      title: "Customs + Last-Mile Delivery",
      description:
        "BE filing, BCD+IGST paid, OOC, Our warehouse, Last mile + POD.",
      tag: "9–15 DAYS CLEARANCE",
      tagType: "time",
      icon: <FaTruck />,
    },
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-12"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div
                className="inline-block px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-widest mb-8"
                style={{
                  border: "1px solid rgba(11,42,107,0.15)",
                  color: "#1F2937",
                }}
              >
                The DDP Journey
              </div>

              <h2
                className="text-5xl md:text-6xl font-bold leading-none mb-4"
                style={{ color: "#0B2A6B" }}
              >
                <span style={{ color: "#FE5101" }}>One</span> Contract
              </h2>

              <h2
                className="text-5xl md:text-6xl font-bold italic leading-none mb-6"
                style={{ color: "#0B2A6B" }}
              >
                <span style={{ color: "#FE5101" }}>Zero</span> Worry.
              </h2>

              <p
                className="text-base mb-10"
                style={{ color: "#1F2937" }}
              >
                Every step &amp; every cost — from supplier to your door.
              </p>

              <div
                className="flex items-center gap-3 px-5 py-4 rounded-md mb-10"
                style={{
                  border: "1px solid rgba(11,42,107,0.1)",
                  backgroundColor: "#F8FAFC",
                }}
              >
                <FaClock
                  style={{
                    color: "#003DA5",
                    flexShrink: 0,
                  }}
                />

                <p
                  className="text-sm"
                  style={{ color: "#1F2937" }}
                >
                  Typical total:{" "}
                  <span
                    className="font-bold"
                    style={{ color: "#003DA5" }}
                  >
                    38–50 days
                  </span>{" "}
                  factory pickup → Warehouse (including customs)
                </p>
              </div>

              <button
                className="inline-flex items-center gap-3 px-7 py-4 rounded-md text-sm font-semibold uppercase tracking-wider"
                style={{
                  border: "1px solid #FE5101",
                  color: "#FFFFFF",
                  backgroundColor: "#FE5101",
                  letterSpacing: "0.08em",
                }}
              >
                SEE FULL PROCESS <FaArrowRight />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 space-y-0">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex items-start gap-5 py-7"
                style={{
                  borderBottom: "1px solid rgba(11,42,107,0.08)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    border: "1px solid rgba(0,61,165,0.2)",
                    color: "#003DA5",
                    backgroundColor: "rgba(0,61,165,0.05)",
                  }}
                >
                  {step.number}
                </div>

                <div className="flex-1 pt-1">
                  <h3
                    className="font-semibold text-base md:text-lg mb-1.5"
                    style={{ color: "#0B2A6B" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "#1F2937" }}
                  >
                    {step.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      border: "1px solid rgba(0,61,165,0.15)",
                      color: "#003DA5",
                      backgroundColor: "rgba(0,61,165,0.04)",
                    }}
                  >
                    {step.tagType === "location" ? (
                      <FaMapMarkerAlt
                        style={{
                          fontSize: "10px",
                          color: "#003DA5",
                        }}
                      />
                    ) : (
                      <FaClock
                        style={{
                          fontSize: "10px",
                          color: "#003DA5",
                        }}
                      />
                    )}

                    {step.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDPJourneyHighConversion;