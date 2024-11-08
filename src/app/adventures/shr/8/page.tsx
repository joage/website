import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mammoth (SHR Day 8)"
    date="July 28, 2024"
    prev="/adventures/shr/7"
    next="/adventures/shr/9"
    stravaID="12007805121"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/8/1.jpeg",
          caption:
            "Minaret Lake. Will have to come back here with climbing gear",
        },
      ]}
    />
    Today was a town day to resupply on food at the Vons in Mammoth! We woke up
    at Minaret Lake to begin the hike down. Not much to report from this section
    of hiking, it was dusty and full of mosquitos.
    <p>
      A couple hours later we reached Devil's Postpile to catch a shuttle into
      town.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/8/IMG_1570.jpg",
          caption:
            "Devils Postpile. Emma and Isabel had been here before but it was my first time!",
        },
        {
          path: "/images/shr/8/IMG_8795.jpeg",
          caption: "Shuttle into the town of Mammoth Lakes",
        },
      ]}
    />
    The shuttle dropped us off near the ski lifts at Mammoth Lakes, where we had
    stashed Isabel's car. When we arrived at the car, we were greeted with an
    appalling scene. The driver side window had been smashed, the door peeled
    back, and all of our dried food in the trunk gone.
    <p>
      A bear had broken in, climbed to the trunk and dragged our entire gear bag
      out some time during the last week. We discovered the shredded remains of
      our food in the pine needles a little ways up a hill from the parking
      spot. We all knew that leaving food in the car was a bad idea in Mammoth,
      but we hadn't taken the warnings seriously.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/8/IMG_5367.jpeg",
          caption: "Bear broke into Isabel's car :(",
        },
      ]}
      thinner
    />
    As we cleaned up the glass shards, we discussed our options. The car was
    thankfully drivable, so we could still go to town that day. Unfortunately,
    this meant the end of the trip for Isabel since Mammoth didn't have any good
    mechanics who could fix her window.
    <p>
      After we ate two big meals in town, we checked into an airbnb and taped up
      the broken window so Isabel could drive home in the morning. It was a
      shame she had to leave, for it had been such a great week together in the
      mountains!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/8/3.jpeg",
          caption: "BYE ISABEL :'(",
        },
      ]}
      thinner
    />
    <p>Minaret Lake to Devils Postpile - 7.1 mi and 610 ft gained.</p>
  </Post>
);

export default Page;
