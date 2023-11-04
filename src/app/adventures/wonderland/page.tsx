import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Wonderland Trail"
    date="Sep 26 - Oct 4, 2020"
    prev="/adventures/langley"
    next="/adventures/dv"
  >
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/1906.jpeg",
          caption: "Rainier in fall",
        },
      ]}
    />
    The Wonderland Trail is a majestic 90 mile loop around Mount Rainier in
    Washington state. Because of covid, we got lucky with permits-Angela managed
    to snag some last minute for us to join her group of 8 friends on this 9 day
    adventure.
    <p>
      Fischer and I drove up to Seattle from Berkeley, and the next day we were
      on the trail! Rain and fog hit us on day 1, but the rest of the trip had
      only beautiful weather. Fall was the perfect time to be in Rainier Natl
      Park.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/1593.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/1614.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/3031.jpeg",
          caption: "",
        },
        {
          path: "/images/wonderland/1713.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/3659.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/3028.jpeg",
          caption: "",
        },
        {
          path: "/images/wonderland/3521.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/0942.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/wonderland/8338.jpeg",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
