import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Death Valley New Year"
    date="January 2-4, 2021"
    prev="/adventures/wonderland"
    next="/adventures/catalina"
  >
    <ImageGroup
      images={[
        {
          path: "/images/dv/37.jpeg",
          caption: "",
        },
      ]}
    />
    Elaine and I went on a desert car camping trip to kick off 2021. We planned
    to visit some of my favorite spots in Eastern California - Panamint Dunes in
    Death Valley and the Alabama Hills near Lone Pine.
    <p>
      Day 1 was a long drive from San Jose to Death Valley. As the sun set, we
      pulled off the road near Panamint Dunes to cook dinner and sleep in the
      car. After it got dark, we were woken up by a guy waving a phone
      flashlight. He was lost in the desert and looking for his car. He looked
      pretty desperate so we drove him to his vehicle and helped him reunite
      with his friends who were also lost. The crazy part about being in Death
      Valley is that you have miles of visibility in each direction but you will
      still get lost easily because of how immense, flat, and featureless the
      desert can be. Kenophobes should not come here!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/dv/01.jpeg",
          caption: "",
        },
        {
          path: "/images/dv/33.jpeg",
          caption: "",
        },
      ]}
    />
    Day 2 we started off with a hike in Panamint Dunes, one of my absolute
    favorite places in California. Hiking in Death Valley is simple even though
    there are no trails. You can see your destination from the start, but it
    will still be 4 miles away. We kept our feet pointed at the dunes, and
    walked up the gentle sandy slope until the dunes got larger and larger. 2
    hours later we were on top of them.
    <ImageGroup
      images={[
        {
          path: "/images/dv/58.jpeg",
          caption: "Panamint Dunes in Death Valley",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/dv/52.jpeg",
          caption: "",
        },
        {
          path: "/images/dv/54.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/dv/35.jpeg",
          caption: "Panamint Dunes in the background",
        },
        {
          path: "/images/dv/04.jpeg",
          caption: "Darwin Falls",
        },
      ]}
    />
    On the way back down, the challenge was to locate our car in the desert. We
    could finally understand the struggle that the guys we picked up yesterday
    faced. Eventually a tiny glint of sunlight reflecting off my car's
    windshield led us back. We drove along a dirt path littered with rusty
    abandoned cars, and back to the main road. Before it got dark we had time
    for another quick hike to Darwin Falls, a rare water source in Death Valley.
    <ImageGroup
      images={[
        {
          path: "/images/dv/63.jpeg",
          caption: "",
        },
        {
          path: "/images/dv/90.jpeg",
          caption: "",
        },
      ]}
    />
    The next and final day we drove to the town of Lone Pine. We stopped for a
    quick hike in Alabama Hills, featuring crazy stone formations and views of
    high peaks rising out of the desert.
    <ImageGroup
      images={[
        {
          path: "/images/dv/13.jpeg",
          caption: "Alabama Hills",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/dv/14.jpeg",
          caption: "",
        },
        {
          path: "/images/dv/25.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/dv/34.jpeg",
          caption: "Elaine jumping over Lone Pine Peak and Mt Whitney",
        },
      ]}
    />
    After we got something to eat at the Mcdonalds in Lone Pine, we began the 7
    hour drive home.
  </Post>
);

export default Page;
