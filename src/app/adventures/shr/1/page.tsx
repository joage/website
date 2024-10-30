import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Horse Creek Canyon (SHR Day 1)"
    date="July 21, 2024"
    prev="/adventures/shr"
    // next=""
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/040.jpg",
          caption: "The night before we started walking",
        },
        {
          path: "/images/shr/IMG_9092.jpg",
          caption: "Packing food into bear cans",
        },
      ]}
    />
    <p>
      On July 20th, Emma Isabel and I drove from the bay to Twin Lakes, CA. We
      had invited our friends out to a camping weekend at the northern terminus
      of the route. Dodging bouts of summer rain, we indulged in lake swims and
      shared meals by the campfire in order to prep for for the two weeks that
      laid ahead. We packed two full bear cans of backpacking food to be stashed
      in Tuolumne Meadows, and shuttled Isabel's car to Mammoth Lakes where we
      planned our second resupply. The weather had dampened our campsite but not
      our spirits, and all three of us were excited to begin the hike Sunday
      afternoon.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_9097.jpg",
          caption: "Eating one last salad before two weeks of dried food",
        },
      ]}
    />
    Thankfully there was a trail for the first 2 miles of the day. As we
    followed it we watched the boats and RVs of Twin Lakes get smaller and
    smaller the higher we climbed. Several switchbacks later the steep hillside
    eased into a gentle valley where we got our first glimpse of the high
    sierra. The peaks looked magnificent and the air still smelled earthy from
    the rains.
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_0000.jpeg",
          caption: "Climbing above treeline in Horse Creek Canyon.",
        },
      ]}
    />
    <p>
      A few hours later we selected a camp spot just as the first drops of
      afternoon storm started coming down. Not too much talus yet. A short but
      tiring first day!
    </p>
  </Post>
);

export default Page;
