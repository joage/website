import Link from 'next/link';

import Nav from '@/components/Nav';

export default function Adventures() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <div className="flex flex-col gap-6 max-w-3xl pt-8 text-sm">
        <p>Trip Reports from my adventures. More to come!</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/pat">Patagonia 2023</Link>
          </li>
        </ul>
      </div>
    </main>
  )
};