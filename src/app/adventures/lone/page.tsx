import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Lone Pine Peak (12,949 ft)"
    date="Nov 11, 2023"
    prev="/adventures/gr-10/48"
    next="/adventures/shr"
  >
    <p>
      Every year I try to do at least one big hike in the Eastern Sierra of
      California. I hadn't gone yet this year, but as the weather got colder,
      the window of opportunity was getting smaller and smaller. So, Veterans
      Day weekend, I called up some friends for an adventure before a forecasted
      snowstorm would end our hiking season.
    </p>
    On Friday, Fischer, Kari and I drove from SF down to Lone Pine, CA to meet
    up with Emma and David coming from SoCal. We checked three different
    campsites and countless dispersed spots in Alabama Hills before finally
    finding a site. It was a struggle, surprising for this time of year.
    <ImageGroup
      images={[
        {
          path: "/images/lone/macos.jpeg",
          caption:
            "Lone Pine Peak (12,949 ft) happens to be the Mac OS Sierra default desktop (image credit: Apple).",
        },
      ]}
    />
    Having visited Lone Pine a few times for other hikes, I've always wondered
    what it would be like to climb its namesake peak, which often gets mistaken
    for Mt Whitney from town.
    <p>
      After a poor night of sleep, we arrived at the Meysan Lakes trailhead by
      Whitney Portal around 6:30 am to begin the hike in the early morning
      light.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/lone/10.jpeg",
          caption: "Beginning the hike on the Meysan Lakes trail",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/lone/2.jpeg",
          caption:
            "Grass lake, (11,000 ft). We left the trail here to go cross-country",
        },
      ]}
    />
    After Grass Lake the trail ended and the scramble began. A traverse across
    easy slabby terrain led us to the other side of the lake and over a talus
    ridge.
    <ImageGroup
      images={[
        {
          path: "/images/lone/7.jpeg",
          caption: "Starting the scramble",
        },
        {
          path: "/images/lone/8.jpeg",
          caption: "Halfway up the chute",
        },
      ]}
    />
    We located the chute which looked way too steep from afar, but it turned
    into the obvious way up when we got closer to it. Loose sand and rocks of
    all sizes stood in our way as we ascended the steep slope. Walking on this
    mixture was much harder than I expected.
    <ImageGroup
      images={[
        {
          path: "/images/lone/5.jpeg",
          caption: "Getting tired",
        },
        {
          path: "/images/lone/3.jpeg",
          caption: "Top of the chute at 12,000 ft.",
        },
      ]}
    />
    Finally we crested the ridge and collapsed from fatigue on the flat bit at
    the top of the chute. Since David had hiked much faster, he went on to the
    summit, another 500+ feet up. The rest of us were too tired so we waited at
    the windless col, enjoying the views until David came back.
    <ImageGroup
      images={[
        {
          path: "/images/lone/6.jpeg",
          caption: "Back at Grass Lake",
        },
        {
          path: "/images/lone/4.jpeg",
          caption: "Frozen",
        },
      ]}
    />
    Sliding down the scree chute felt much easier than going up but I started to
    hit a wall after being on tricky terrain for so long.
    <ImageGroup
      images={[
        {
          path: "/images/lone/1.jpeg",
          caption:
            "Sunset illuminating the mountains across the Owens Valley on our hike out",
        },
      ]}
    />
    The rest of the hike down to the car went smoothly, although part of it was
    in the dark. It had been a cold cold weekend and we all felt the effects of
    the weather. However we were lucky to have no wind at all and the trail all
    to ourselves except one other group. On Sunday we stopped in Bishop and some
    hot springs on our way back to San Francisco.
    <ImageGroup
      images={[
        {
          path: "/images/lone/11.jpeg",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
