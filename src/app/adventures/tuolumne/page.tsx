import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const Tuolumne = () => (
  <Post
    title="Tuolumne Meadows"
    date="Summer 2025"
    prev="/adventures/rr"
    next="/adventures/arizona"
  >
    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/06.jpeg",
        },
      ]}
    />
    <p>
      This summer, I worked at a restaurant in Tuolumne Meadows, the high
      country of Yosemite.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/5.jpeg",
        },
        {
          path: "/images/tuolumne/9.jpeg",
        },
      ]}
    />
    <p>
      I wanted to get better at trad climbing, and Tuolumne offered many nice
      granite domes to play on.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/2.jpeg",
          caption: "Cathedral peak",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/1.jpeg",
          caption: "The Backbone",
        },
        {
          path: "/images/tuolumne/8.jpeg",
          caption: "Harlequin Dome",
        },
      ]}
    />
    <p>
      Life unfolded at a different pace in the meadows. With no phone signal, we
      spent many afternoons fishing by the lake and evenings circled around the
      campfire. I loved how the pine needles would filter the morning sunlight,
      creating patterns on my tent as I woke up.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/33.jpeg",
          caption: "Gaylor Lakes",
        },
        {
          path: "/images/tuolumne/4.jpeg",
          caption: "Tioga Lake",
        },
      ]}
    />
    <p>
      Last year, I had only passed through this place on the{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        href="/adventures/shr"
      >
        High Route
      </Link>{" "}
      . To be able to spend a whole 3 months here felt incredibly special.
    </p>

    <ImageGroup
      images={[
        {
          path: "/images/tuolumne/0.JPEG",
          caption: "East Cottage Dome",
        },
      ]}
    />
    <p>
      Scenes not pictured but honorable mention: Friends playing hacky sack in
      front of the Grill, gas station concerts, climbing by moonlight, cold
      water, cooking inside for work, cooking outside for fun, yoga on granite
      slabs, crafting with rangers, pct trail names, dancing in the forest at
      night, laps on machine world, Lembert dome sunsets.
    </p>
  </Post>
);

export default Tuolumne;
