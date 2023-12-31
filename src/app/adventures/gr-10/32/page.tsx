import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Wonton soup (HRP Day 32)"
    date="August 11, 2023"
    prev="/adventures/gr-10/31"
    next="/adventures/gr-10/33"
    stravaID="10448572456"
  >
    Last night I slept outside my tent under the stars for the first half of the
    night to watch the Perseid meteor shower. I think I saw 5 shooting stars
    before falling asleep.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5603.jpeg", caption: "Noarre" }]}
    />
    <p>
      In the morning I descended down to the tiny village of Noarre. As I ate my
      breakfast the sun started to get hot, and I dreaded the climb up the next
      valley.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5598.jpeg",
          caption: "Descending to Noarre",
        },
        {
          path: "/images/gr-10/IMG_5601.jpeg",
          caption: "Breakfast stop in a wood",
        },
      ]}
    />
    There was plenty of water along the way, so I never had to carry too much in
    my bottle. At the highest lake, I stopped for a quick swim to cool off.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5608.jpeg",
          caption: "I took a dip here and continued the climb",
        },
      ]}
    />
    The final 200m to the col followed an easy trail, and soon I was looking
    down on yet another lake, Estany de Certascan.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5609.jpeg",
          caption: "Col de Certascan, 2589m",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5612.jpeg",
          caption:
            "Estany de Certascan in the distance. Walking through more red rocks ",
        },
      ]}
    />
    I made my way down the steep descent quickly and arrived at the Refuge de
    Certascan. I got a big plate of pasta, and checked the weather forecast for
    the next few days. Since there was a storm the following day, I made a
    reservation at the next refuge for tomorrow.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5613.jpeg", caption: "Estany de Certascan" },
      ]}
    />
    My day did not end there. I decided to keep going and camp at the bottom of
    the valley to save myself some time tomorrow. The descent was just as hot as
    the ascent, even though I waited until 5pm to start hiking again.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5615.jpeg",
          caption:
            "The waterfalls created by a dammed lake are still pretty cool, although manmade",
        },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5616.jpeg", caption: "A hot descent" },
      ]}
    />
    When I arrived at the Pla de Boavi, I set up my tent under a tree. Tonight’s
    edition of dinner consisted of tortellini pasta, pepperoni slices, and a
    packet of soy sauce ramen noodles. After I cooked all the components
    separately, I decided to mix everything together just to see if it would
    still taste good.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5623.jpeg", caption: "Wonton soup" }]}
    />
    As it turned out, it did taste good! The tortellini in the ramen mixture
    reminded me of wonton soup, and the pepperoni simply added some subtle spice
    to the broth! This is definitely a combo I will try again in the future.
    <p>
      After dinner there was dessert, and I also made myself a packed lunch for
      tomorrow. Tortillas can be very versatile.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5630.jpeg",
          caption: "'Pizza' for lunch tomorrow",
        },
        {
          path: "/images/gr-10/IMG_5634.jpeg",
          caption: "Nutella 'crêpe' with dried fruits",
        },
      ]}
    />
    <p>Estany de Llavera to Pla de Boavi - 21.89km and 1120m gained.</p>
    Wonton soup recipe:
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5624.jpeg", caption: "Tortellini pasta" },
        {
          path: "/images/gr-10/IMG_5626.jpeg",
          caption: "Soy sauce instant ramen",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5625.jpeg",
          caption:
            "Pepperoni (chorizo) for some heat. Chili oil is hard to find in the Pyrenees.",
        },
      ]}
    />
  </Post>
);

export default GR;
