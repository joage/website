import Link from "next/link";

import Nav from "@/components/Nav";

export default function Adventures() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <div className="flex flex-col gap-6 max-w-3xl pt-8 text-sm">
        <p>Reports from my hiking trips. Newest first!</p>
        <div>
          <p>Haute Route Pyrénéenne (Jul-Aug 2023):</p>
          <ul className="list-disc text-cyan-600 mx-4">
            <li>
              <Link href="/adventures/gr-10/48">
                HRP Recap - My Long Walk in the Pyrenees
              </Link>
            </li>
            <details>
              <summary className="cursor-pointer text-gray-500">
                See individual days
              </summary>
              <li>
                <Link href="/adventures/gr-10/47">HRP Day 47 - Sunrise</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/46">HRP Day 46 - Gourmet</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/45">HRP Day 45 - Night hike</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/44">HRP Day 44 - Far gassed</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/43">HRP Day 43 - Hot</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/42">HRP Day 42 - Canigou</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/41">HRP Day 41 - Epic ridge</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/40">HRP Day 40 - Eyne</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/39">HRP Day 39 - Tired</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/38">
                  HRP Day 38 - Mérens and Ax
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/37">
                  HRP Day 37 - Leaving Andorra
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/36">HRP Day 36 - Oval</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/35">HRP Day 35 - La Massana</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/34">HRP Day 34 - Andorra</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/33">
                  HRP Day 33 - Val Ferrera
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/32">
                  HRP Day 32 - Wonton soup
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/31">HRP Day 31 - Red rock</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/30">HRP Day 30 - Boulders</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/28">HRP Day 28-29 - Arties</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/27">HRP Day 27 - Swimming</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/26">
                  HRP Day 26 - One day, two cols
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/25">HRP Day 25 - Snowstorm</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/24">HRP Day 24 - Fog</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/23">
                  HRP Day 23 - On the GR 11
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/22">HRP Day 22 - Parzan</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/21">
                  HRP Day 21 - Barroude Lakes
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/20">HRP Day 20 - Héas</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/19">
                  HRP Day 19 - Gavarnie 'Rest' Day
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/18">
                  HRP Day 18 - Storm and summit!
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/17">HRP Day 17 - Gaube</Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/16">
                  HRP Day 16 - Getting lost
                </Link>
              </li>
              <li>
                <Link href="/adventures/gr-10/15">
                  HRP Day 15 - Reaching new heights
                </Link>
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
                <Link href="/adventures/gr-10/9">
                  HRP Day 9 - Leaving Basque Country
                </Link>
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
            </details>
          </ul>
        </div>
        <div>
          <p>Tour du Mont Blanc (July 2023):</p>
          <ul className="list-disc text-cyan-600 mx-4">
            <li>
              <Link href="/adventures/tmb-6">Wine Tour du Mont Blanc</Link>
            </li>
            <details>
              <summary className="cursor-pointer text-gray-500">
                See individual days
              </summary>
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
            </details>
          </ul>
        </div>
        <div>
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
        </div>
        <div>
          <p>2022:</p>
          <ul className="list-disc text-cyan-600 mx-4">
            <li>
              <Link href="/adventures/utah-2">Slot Canyons (Utah Part 2)</Link>
            </li>
            <li>
              <Link href="/adventures/utah-1">Coyote Gulch (Utah Part 1)</Link>
            </li>
          </ul>
        </div>
        <p>Older trips coming soon!</p>
      </div>
    </main>
  );
}
