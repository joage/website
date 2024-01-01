import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Parzan (HRP Day 22)"
    date="August 1, 2023"
    prev="/adventures/gr-10/21"
    next="/adventures/gr-10/23"
    stravaID="10448633185"
  >
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5330.jpeg",
          caption: "A two burger day in Parzan",
        },
      ]}
    />
    Today was a short day. I got up late and crossed the border at Port de
    Barroude, 2534m.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5318.jpeg",
          caption: "Waking up at Lacs de Barroude",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5322.jpeg",
          caption: "Unique terrain at the col, the flattest I've seen",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5329.jpeg",
          caption: "The valley leading to Parzan",
        },
      ]}
    />
    After I reached the col, I walked the 8km to a road. It took a while to get
    a ride but eventually I was able to hitch the remaining 5km into Parzan. My
    knee had started to hurt after the 1500m descent, so I decided to stay here
    for the night even though it was only 1pm.
    <p>
      Parzan had two restaurants, a big supermarket, and a hotel. It was my
      first night spent in a private room (not counting my tent) this trip!
    </p>
    I ate two big meals, resupplied on food, and planned my route for the next
    few days.
    <p>Lacs de Barroude to Parzan - 12km and 212m gained, 1199m descended.</p>
  </Post>
);

export default GR;
