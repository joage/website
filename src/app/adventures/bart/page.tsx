import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Virginia Creek (SHR Day 2)"
    date="July 21, 2024"
    prev="/adventures/shr/1"
    next="/adventures/shr/3"
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
      On July 19th, Emma Isabel and I drove from the bay to Twin Lakes, CA. We
      had invited our friends out to a camping weekend at the northern terminus
      of the route. Dodging bouts of summer rain, we indulged in lake swims and
      shared meals by the campfire in order to prep for for the two weeks that
      laid ahead. We packed two full bear cans of backpacking food to be stashed
      in Tuolumne Meadows, and shuttled Isabel's car to Mammoth Lakes where we
      planned our second resupply.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_9097.jpg",
          caption: "Eating one last salad before two weeks of dried food",
        },
      ]}
    />
    <p>
      After eating lunch by the lake on Sunday, we said goodbye to our friends
      who had work the next day. The weather had dampened our campsite but not
      our spirits. It was finally time to begin!
    </p>
    Thankfully there was a trail for the first 2 miles. As we followed it we
    watched the boats and RVs of Twin Lakes get smaller and smaller the higher
    we climbed. Several switchbacks later the steep hillside eased into a gentle
    valley where we got our first glimpse of the high sierra. The tall peaks
    looked magnificent and the air still smelled earthy from rain.
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
      afternoon storm started coming down. Not too much talus yet. It was a
      short but tiring first day!
    </p>
  </Post>
);

export default Page;
