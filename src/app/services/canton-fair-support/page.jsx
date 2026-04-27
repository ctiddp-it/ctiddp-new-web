import Client from "./Client"

export const metadata = {
  title: "Canton Fair Support Services | CTIDDP",
  description:
    "On-ground Canton Fair support for supplier selection, negotiation, verification, and integrated DDP shipping planning.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/canton-fair-support",
  },
}

export default function Page() {
  return <Client />
}
