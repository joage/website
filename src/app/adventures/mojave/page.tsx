import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mojave National Preserve"
    date="February 23-26, 2021"
    prev="/adventures/catalina"
    next="/adventures/rocky"
  >
    <ImageGroup
      images={[
        {
          path: "/images/mojave/1842.jpeg",
          caption: "",
        },
      ]}
    />
    On the same day I got off the ferry in LA after finishing the Trans Catalina
    Trail, I had another backpacking trip planned. My new job was starting in a
    week, so I had to make the most out of my free time.
    <p>
      I picked up my dear friend Ashley from the airport and we drove to Orange
      County to meet up with Alex, my former roommate. After staying the night
      at Alex's house, we drove two cars to a remote corner of California called
      the Mojave National Preserve, which I had never heard of before.
    </p>
    <p>
      Our first task was to cache two big jugs of water in the desert by a small
      road, which would be the mid point of our trek. We'd be doing a point to
      point route and shuttling cars to the start and end point before we began
      the hike.
    </p>
    I don't remember many place names for this trip because Alex did all the
    route-finding and the locations are too remote to appear on google maps. All
    I know is that we started from Hole-in-the-Wall and ended up at Kelso Dunes.
    We faced fatigue, strong winds, and sharp spiky things that are only found
    in the desert, but somehow we made it to the car after 3 days.
    <ImageGroup
      images={[
        {
          path: "/images/mojave/5338.jpeg",
          caption: "Hole-in-the-Wall",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/6225.jpeg",
          caption: "Scrambling around the rock formations at Hole-in-the-Wall",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/5918.jpeg",
          caption: "We followed cattle trails down into a canyon",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/3317.jpeg",
          caption: "Downclimbing a dry fall",
        },
        {
          path: "/images/mojave/8858.jpeg",
          caption: "Barrel cacti",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/1722.jpeg",
          caption: "Walking in a dry riverbed",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/0149.jpeg",
          caption: "So dry...",
        },
        {
          path: "/images/mojave/0116.jpeg",
          caption: "Nap time",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/0448.jpeg",
          caption: "A weird desert sunrise",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/2721.jpeg",
          caption: "Kelso Dunes in the distance",
        },
        {
          path: "/images/mojave/4237.jpeg",
          caption: "Reached the end!",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/mojave/8850.jpeg",
          caption: "Ashley",
        },
        {
          path: "/images/mojave/6278.jpeg",
          caption: "Alex",
        },
      ]}
    />
  </Post>
);

export default Page;
