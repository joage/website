import Link from 'next/link';

import Nav from '@/components/Nav';

export default function Adventures() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <div className="flex flex-col gap-6 max-w-3xl pt-8 text-sm">
        <p>Trip reports from my hikes and travels. Newest first!</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/tmb-1">Tour du Mont Blanc Part 1</Link>
          </li>
          <li>
            <Link href="/adventures/leaving-ny">Leaving New York</Link>
          </li>
          <li>
            <Link href="/adventures/shasta">Shasta</Link>
          </li>
          <li>
            <Link href="/adventures/pat">Patagonia</Link>
          </li>
          <li>
            <Link href="/adventures/utah-2">Slot Canyons (Utah Part 2)</Link>
          </li>
          <li>
            <Link href="/adventures/utah-1">Coyote Gulch (Utah Part 1)</Link>
          </li>
        </ul>
        <p>Will slowly add older trips when I find the time</p>
      </div>
    </main>
  )
};