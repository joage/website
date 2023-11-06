import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mount Langley (14,032 ft)"
    date="July 4, 2020"
    prev="/adventures/whitney"
    next="/adventures/wonderland"
  >
    <ImageGroup
      images={[
        {
          path: "/images/langley/3223.jpeg",
          caption: "Mount Langley (14,032 ft)",
        },
      ]}
    />
    Langley was my second California 14er. It was also the longest day hike I
    had ever done up to that point. We started in the dark, ended in the dark,
    but enjoyed some very special sights in between.
    <ImageGroup
      images={[
        {
          path: "/images/langley/8009.jpeg",
          caption: "Ascending Old Army Pass",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/langley/8038.jpeg",
          caption: "Christina at the summit",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/langley/1064.jpeg",
          caption: "Old Army Pass was not fun on the way down",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/langley/8057.jpeg",
          caption: "One of 6 Cottonwood Lakes on the trail",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/langley/8078.jpeg",
          caption: "We drove past Manzanar Internment Camp on the way home.",
        },
      ]}
    />
  </Post>
);

export default Page;
