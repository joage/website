import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mount Whitney (14,505 ft)"
    date="November 9-10, 2019"
    prev="/adventures/skyline"
    next="/adventures/langley"
  >
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0410.jpeg",
          caption: "Needles from summit of Whitney",
        },
      ]}
    />
    On Veterans Day weekend, Angela, Emma, Fischer, Mason and I joined a big
    group from our school's hiking club to climb Mount Whitney!
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0326.jpeg",
          caption: "",
        },
        {
          path: "/images/whitney/0347.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0382.jpeg",
          caption: "Mount Muir (left) and Mount Whitney (right)",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0415.jpeg",
          caption: "Summit cabin",
        },
        {
          path: "/images/whitney/0391.jpeg",
          caption: "Bird at the top",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0406.jpeg",
          caption: "Iceberg Lake",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/whitney/0404.jpeg",
          caption: "",
        },
        {
          path: "/images/whitney/7396.jpeg",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
