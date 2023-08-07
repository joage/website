import Link from 'next/link';

import Nav from '@/components/Nav';

export default function Adventures() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <div className="flex flex-col gap-6 max-w-3xl pt-8 text-sm">
        <p>Trip reports from my hikes and travels. Newest first!</p>
        <p>Haute Route Pyrénéenne (2023 Ongoing!):</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/gr-10/15">HRP Day 15 - Reaching new heights</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/14">HRP Day 14 - Pombie</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/13">HRP Day 13 - Candanchu</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/12">HRP Day 12 - Arlet</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/11">HRP Day 11 - Lescun</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/10">HRP Day 10 - Pic d'Anie</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/9">HRP Day 9 - Leaving Basque Country</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/8">HRP Day 8 - Pic d'Orhi</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/7">GR 10 Day 7 - Cheese</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/6">GR 10 Day 6 - Easy day</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/5">GR 10 Day 5 - Saint Jean</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/4">GR 10 Day 4 - Ridge walk</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/3">GR 10 Day 3 - Bidarray</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/2">GR 10 Day 2 - Ainhoa</Link>
          </li>
          <li>
            <Link href="/adventures/gr-10/1">GR 10 Day 1 - Rain!</Link>
          </li>
        </ul>
        <p>Tour du Mont Blanc (July 2023):</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/tmb-6">Wine Tour du Mont Blanc</Link>
          </li>
          <li>
            <Link href="/adventures/tmb-5">Tour du Mont Blanc Day 5</Link>
          </li>
          <li>
            <Link href="/adventures/tmb-4">Tour du Mont Blanc Day 4</Link>
          </li>
          <li>
            <Link href="/adventures/tmb-3">Tour du Mont Blanc Day 3</Link>
          </li>
          <li>
            <Link href="/adventures/tmb-2">Tour du Mont Blanc Day 2</Link>
          </li>
          <li>
            <Link href="/adventures/tmb-1">Tour du Mont Blanc Day 1</Link>
          </li>
        </ul>
        <p>Earlier 2023:</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/leaving-ny">Leaving New York</Link>
          </li>
          <li>
            <Link href="/adventures/shasta">Shasta</Link>
          </li>
          <li>
            <Link href="/adventures/pat">Patagonia</Link>
          </li>
        </ul>
        <p>2022:</p>
        <ul className="list-disc text-cyan-600 mx-4">
          <li>
            <Link href="/adventures/utah-2">Slot Canyons (Utah Part 2)</Link>
          </li>
          <li>
            <Link href="/adventures/utah-1">Coyote Gulch (Utah Part 1)</Link>
          </li>
        </ul>
        <p>Older trips coming soon!</p>
      </div>
    </main>
  )
};