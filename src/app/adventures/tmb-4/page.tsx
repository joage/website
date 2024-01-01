import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const TMB = () => (
  <Post
    title="Cabin on a glacier (TMB Day 4)"
    date="July 5, 2023"
    prev="/adventures/tmb-3"
    next="/adventures/tmb-5"
    stravaID="10454121689"
  >
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4273.jpeg",
          caption: "Climbing up to Albert Premier Refuge",
        },
      ]}
    />
    Today was one long climb. Emma and I were both excited for the refuge we
    booked for the night on top of a glacier, but first we had to do some
    route-finding to get out of Finhaut.
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4170.jpeg",
          caption: "View from Gîte La Casita where we slept",
        },
      ]}
    />
    Since todays route was not on the official Tour du Mont Blanc, we had to
    find our own way through the extensive network of trails up to the Col de
    Balme. Even though it was steep, I enjoyed the relative emptiness of this
    section compared to the highway that was the TMB.
    <ImageGroup images={[{ path: "/images/tmb/IMG_4185.jpeg", caption: "" }]} />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4220.jpeg",
          caption: "Highlights from our own route",
        },
      ]}
    />
    Upon reaching Col de Balme, I had the most amazing omelette in the refuge—we
    were now in France!
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4227.jpeg",
          caption: "Col de Balme, border of Switzerland and France",
        },
      ]}
    />
    After lunch we had some more climbing to do, luckily the thunderstorm
    warnings went away. The last section of trail crossed boulder fields and
    patches of snow to reach Refuge Albert Premier.
    <ImageGroup images={[{ path: "/images/tmb/IMG_4249.jpeg", caption: "" }]} />
    <ImageGroup images={[{ path: "/images/tmb/IMG_4262.jpeg", caption: "" }]} />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4278.jpeg",
          caption: "The refuge sits above a glacier",
        },
      ]}
    />
    This was the first time we reached our destination relatively early, so we
    had plenty of time we didn’t know what to do with. Thankfully there were
    other people at the hut in the same boat so we talked to a hiker doing the
    Haute Route, some Belgian mountaineers, and a couple on their honeymoon.
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4963_Original.jpeg",
          caption: "View from inside the hut. Those are not paintings!",
        },
      ]}
    />
    Super cool hut, really fun hike today. Day 4 ended with 13km and 1668m of
    elevation gained.
  </Post>
);

export default TMB;
