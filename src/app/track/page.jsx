import TrackClient from './TrackClient'

export const metadata = {
  title: 'Track Your DDP Shipment — CTIDDP Live Tracker',
  description:
    'Track your China to India DDP shipment in real time. Live milestone updates — factory pickup, vessel departure, India customs clearance, and last-mile delivery with POD.',
  openGraph: {
    title: 'Live Shipment Tracker — CTIDDP',
    description: 'Real-time milestone updates for your China to India DDP shipment.',
    url: 'https://ctiddp.com/track',
  },
  alternates: { canonical: 'https://ctiddp.com/track' },
}

export default function TrackPage() {
  return <TrackClient />
}