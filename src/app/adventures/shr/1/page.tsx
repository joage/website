import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="The adventure begins (SHR Day 1)"
    date="July 21, 2024"
    prev="/adventures/shr"
    next="/adventures/shr/2"
    stravaID="12000225729"
  >
    <p>
      On July 19th, Emma Isabel and I drove from the bay to Twin Lakes, CA. We
      had invited our friends out to a camping weekend at the northern terminus
      of the Sierra High Route. Dodging bouts of summer rain, we indulged in
      lake swims and shared meals by the campfire in order to prep for for the
      two weeks that laid ahead. We packed two full bear cans of backpacking
      food to be stashed in Tuolumne Meadows, and shuttled Isabel's car to
      Mammoth Lakes where we planned our second resupply.
    </p>
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
      After eating lunch by the lake on Sunday, we said goodbye to our friends
      who had work the next day. The weather had dampened our campsite but not
      our spirits. It was finally time to start walking!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_9097.jpg",
          caption: "Eating one last salad before two weeks of dried food",
        },
      ]}
    />
    Thankfully there was a trail for the first 2 miles. As we followed it we
    watched the boats and RVs of Twin Lakes get smaller and smaller the higher
    we climbed. Several switchbacks later the steep hillside eased into a gentle
    valley where we got our first glimpse of the high sierra. The tall peaks
    looked magnificent and the air still smelled earthy from rain.
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_0000.jpeg",
          caption: "Crossing boulder fields in Horse Creek Canyon.",
        },
      ]}
    />
    <p>
      A few hours later we selected a camp spot at about 9,200 ft just as the
      first drops of afternoon storm started coming down. Not too much talus
      yet. It was a short but tiring first day!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_4519.jpeg",
          caption: "Clouds lifted to reveal the first sunset of the trip",
        },
      ]}
    />
    <p>
      Mono Village to Horse Creek Canyon (9200ft) - 3.71 mi and 2087 ft gained.
    </p>
  </Post>
);

export default Page;
