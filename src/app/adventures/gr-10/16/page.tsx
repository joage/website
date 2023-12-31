import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Getting Lost (HRP Day 16)"
    date="July 26, 2023"
    prev="/adventures/gr-10/15"
    next="/adventures/gr-10/17"
    stravaID="10448633231"
  >
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5079.jpeg",
          caption: "Another high point reached today! Col de Cambalès, 2700m",
        },
      ]}
    />
    Today’s feature was the Col de Cambalès at 2700m. Just like yesterday, we
    started our day at 7am.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5057.jpeg",
          caption: "Descending a beautiful valley",
        },
      ]}
    />
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5058.jpeg", caption: "Breakfast" }]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5064.jpeg",
          caption: "Beginning the ascent to Col de Cambalès",
        },
      ]}
    />
    I have been experimenting with different foods and sugar intake in the
    mornings to find out how to best fuel the 1000+ meter climbs of the HRP.
    Today I felt energized for the first 300m and started to crash afterwards.
    Many snack breaks were needed.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5069.jpeg",
          caption: "Every day we face a bigger boulder field",
        },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5071.jpeg", caption: "Climbing higher" },
      ]}
    />
    Each going at our own paces, my friends and I got split up about 300m from
    the Col. Left to navigate the boulders on my own, I followed some stone
    cairns up a wrong path for about 100 meters of gain before checking my map.
    Not a costly mistake, but had I kept going I would have gone over the wrong
    Col! Later I would learn that Jacques had in fact followed this false path
    all the way into Spain.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5074.jpeg", caption: "The wrong way!" },
      ]}
    />
    After fixing my route and losing some time, I made it over the correct col.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5079.jpeg",
          caption:
            "Col de Cambalès! 2700 meters and high point of the trip so far.",
        },
      ]}
    />
    In the next valley I had a quick swim in the Lac de Cambalès.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5087.jpeg",
          caption: "She was blocking the path",
        },
      ]}
    />
    I made it to the bivouac area outside Refuge Wallon around 5. Camille was
    already there, but Jacques was nowhere to be seen, even though he had been
    somewhere between Camille and me. It was not until 6:30 that he showed up.
    Miraculously, without a GPS he had talked to some Spaniards and found his
    way back to France via an alternate route after getting lost. Thankfully he
    was okay and we had a beer to celebrate the day.
    <p>Today’s lesson learned is to trust the map, not the cairns!</p>
    Refuge de Larribet to Refuge de Wallon - 19.73km and 1277m gained.
  </Post>
);

export default GR;
