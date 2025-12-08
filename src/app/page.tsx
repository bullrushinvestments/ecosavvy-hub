import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoSavvy Hub',
  description: 'A one-stop SaaS platform that combines sustainable e-commerce and educational technology to empower small businesses with the tools they need to adopt green practices, all while educating them on sustainability trends.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoSavvy Hub</h1>
      <p className="mt-4 text-lg">A one-stop SaaS platform that combines sustainable e-commerce and educational technology to empower small businesses with the tools they need to adopt green practices, all while educating them on sustainability trends.</p>
    </main>
  )
}
