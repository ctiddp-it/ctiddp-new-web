import Client from "./Client"

export const metadata = {
  title: "Last-Mile Delivery in India | CTIDDP",
  description:
    "Reliable last-mile DDP delivery across India from port or airport to your warehouse with scheduled dispatch and delivery coordination.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/last-mile-delivery",
  },
}

export default function Page() {
  return <Client />
}

