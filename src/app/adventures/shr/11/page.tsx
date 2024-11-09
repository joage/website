import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Beach Day (SHR Day 11)"
    date="July 31, 2024"
    prev="/adventures/shr/10"
    next="/adventures/shr/12"
    stravaID="12047586000"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/12.jpeg",
          caption: "Lake Italy",
        },
      ]}
    />
    This was one of my favorite days on the route!
    <p>
      Like yesterday, we began by hiking up a steep forest, avoiding fallen
      trees and shrubbery. It was going to be a long climb up to Gabbot Pass.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/3.jpeg",
          caption: "Starting in a forest",
        },
      ]}
      thinner
    />
    At each lake we passed, we took a small break but the landscape just kept
    getting more impressive the higher we climbed. At Lower Mills Lake, we found
    a top tier campsite but it was way too early in the day.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/4.jpeg",
          caption:
            "Lower Mills lake. Another one to revisit in the future, great camping here.",
        },
      ]}
    />
    Once we could see the pass, a deep notch in between Mt Gabb and Mt Abbott,
    we climbed up a cascade and stayed left of the river and Upper Mills lake.
    We found a nice overhanging boulder to have lunch in the shade - more
    tortilla, cheese and summer sausage.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/1.jpeg",
          caption: "Above Lower Mills lake.",
        },
      ]}
    />
    Here we chose a path over some rounded hillocks instead of the gully to the
    left.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/0.jpeg",
          caption: "Nearing the pass",
        },
      ]}
    />
    The terrain shifted from large boulders, to packed dirt, and finally snow
    toward the top.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/7.jpeg",
          caption: "Last snowfield before the notch",
        },
        {
          path: "/images/shr/11/6.jpeg",
          caption: "Glacial lake at the top of Gabbot Pass",
        },
      ]}
    />
    Finally we reached Gabbot Pass, the highest we've been so far at 12,200 ft!
    The glacial melt had even formed a crystal blue lake at the top of the pass.
    Our next objective was Lake Italy. Grassy ledges created nice ledges to walk
    on, and pretty soon we arrived at the lake.
    <p></p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/8.jpeg",
          caption: "Beaches on the east side of Lake Italy",
        },
      ]}
      thinner
    />
    The guidebook describes this area as uninspiring, but we found it to be the
    opposite! Neither of us had ever seen a sandy beach at such a high elevation
    before, and I had probably the best swim of the entire trip here.
    <p>
      The lake stretched on far to the west, so we traversed its north shore
      until reaching the outlet.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/9.jpeg",
          caption: "Lake Italy outlet",
        },
      ]}
    />
    There was supposed to be a trail here, but we could only follow it for a
    short distance. At about 10,950 ft we veered left into a different drainage,
    and suddenly Brown Bear Lake appeared before us.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/10.jpeg",
          caption: "Brown Bear Lake",
        },
      ]}
      thinner
    />
    We assumed that there'd be good campsites here, and we were right! The lake
    was a perfect bowl surrounded by steep walls, and we chose a ledge
    overlooking the water. The wall to the southern side, which we'd be going up
    tomorrow, looked incredibly vertical. As the sun set, an orange rim appeared
    on the peaks all around us.
    <ImageGroup
      images={[
        {
          path: "/images/shr/11/11.jpeg",
          caption: "Epic spot, favorite campsite so far!",
        },
      ]}
    />
    Dinner was a protein mac and cheese I got in Mammoth (mid), and some oatmeal
    with summer sausage oatmeal to top off. We slept with rain fly half off to
    enjoy the stars!
    <p>Second Recess to Brown Bear Lake - 9.56 mi and 3720 ft gained.</p>
  </Post>
);

export default Page;
