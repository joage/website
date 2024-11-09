import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Timber Top (Big Sur)"
    date="October 5-6, 2024"
    prev="/adventures/shr/13"
    next="/adventures/north-fork"
    stravaID="12592496683"
  >
    <ImageGroup
      images={[
        {
          path: "/images/sur/8.JPG",
          caption: "Big Sur!",
        },
      ]}
    />
    I am known for only eating mac and cheese while backpacking, but this time I
    tried something different. Kari, Kathy and I feasted on Timber Top!
    <ImageGroup
      images={[
        {
          path: "/images/sur/2.JPG",
          caption: "Started at Boronda Trailhead",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/sur/3.JPG",
          caption: "Wine bottle not ultralight",
        },
        {
          path: "/images/sur/4.JPG",
          caption: "Really hot afternoon",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/sur/1.JPG",
          caption: "Sunset at Timber Top",
        },
      ]}
      thinner
    />
    <ImageGroup
      images={[
        {
          path: "/images/sur/6.JPG",
          caption: "Cooking",
        },
        {
          path: "/images/sur/10.JPG",
          caption: "Dinner: Steak, peppers, onions, rice (not pictured)",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/sur/7.JPG",
          caption: "Cowboy camped and watched the sun rise.",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/sur/9.JPG",
          caption: "",
        },
      ]}
      thinner
    />
  </Post>
);

export default Page;
