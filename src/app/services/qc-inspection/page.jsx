import Client from "./Client"

export const metadata = {
  title: "QC and Pre-Shipment Inspection in China | CTIDDP",
  description:
    "On-ground quality control and pre-shipment inspection in China with photo/video reports, defect classification, and packaging checks.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/qc-inspection",
  },
}

export default function Page() {
  return <Client />
}

