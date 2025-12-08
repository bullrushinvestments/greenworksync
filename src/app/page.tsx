import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenWorkSync',
  description: 'A SaaS platform that integrates climate tech solutions with AI productivity tools specifically for small businesses. It helps companies reduce their carbon footprint while boosting operational efficiency.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenWorkSync</h1>
      <p className="mt-4 text-lg">A SaaS platform that integrates climate tech solutions with AI productivity tools specifically for small businesses. It helps companies reduce their carbon footprint while boosting operational efficiency.</p>
    </main>
  )
}
