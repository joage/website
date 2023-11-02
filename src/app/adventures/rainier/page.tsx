import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Revisiting Rainier"
    date="July-August, 2021"
    prev="/adventures/rocky"
    next="/adventures/jade"
  >
    Mount Rainier quickly became my favorite National Park after doing the
    Wonderland Trail in 2020. This summer I had the chance to return to Rainier
    a couple times while I was living in Seattle. I did two day hikes starting
    from Paradise (south side) and Sunrise (north side) parking areas.
    <ImageGroup
      images={[
        {
          path: "/images/rainier/0077.jpeg",
          caption: "Mt Rainier from Paradise use area",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rainier/0128.jpeg",
          caption: "Marmot relaxing on the trail",
        },
        {
          path: "/images/rainier/0079.jpeg",
          caption: "Caterpillar",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rainier/0146.jpeg",
          caption: "Another marmot on a rock",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rainier/0089.jpeg",
          caption: "Muir Snowfield",
        },
        {
          path: "/images/rainier/0091.jpeg",
          caption: "Almost at Camp Muir",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rainier/9868.jpeg",
          caption: "Mt Rainier from Third Burroughs (Sunrise)",
        },
      ]}
    />
  </Post>
);

export default Page;
