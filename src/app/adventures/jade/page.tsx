import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Jade and Marmot Lakes"
    date="July 30 - August 1, 2021"
    prev="/adventures/rainier"
    next="/adventures/helens"
  >
    A weekend backpacking trip in Washington's Alpine Lakes Wilderness while
    Emma was in town. Too hot, too many mosquitos, but Jade Lake was stunning.
    <ImageGroup
      images={[
        { path: "/images/jade/0349.jpeg", caption: "Jade Lake, 5442 ft" },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/jade/9906.jpeg", caption: "" },
        { path: "/images/jade/0333.jpeg", caption: "" },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/jade/9914.jpeg", caption: "Marmot Lake, 4900 ft" },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/jade/9917.jpeg", caption: "Approaching Jade Lake" },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/jade/9936.jpeg",
          caption: "Standing over the source at Jade Lake",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/jade/9927.jpeg",
          caption: "Dip Top Gap",
        },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/jade/9929.jpeg", caption: "" },
        { path: "/images/jade/0339.jpeg", caption: "" },
      ]}
    />
  </Post>
);

export default Page;
