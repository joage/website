import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Trans Catalina Trail"
    date="February 19-22, 2021"
    prev="/adventures/dv"
    next="/adventures/mojave"
  >
    Eight friends from Berkeley, San Francisco, and Los Angeles descended on
    Santa Catalina Island for a 4 day backpacking trip. They ate prickly pear
    cactus fruit, admired 360 degree ocean views, and almost got gored by a
    bison!
    <p>
      Itinerary: Two Harbors → Parsons Landing → Little Harbor → Black Jack →
      Avalon
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/catalina/1234.jpeg",
          caption: "Two Harbors",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/8792.jpeg",
          caption: "Fischer on rock at Parson's Landing",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/0830.jpeg",
          caption: "",
        },
        {
          path: "/images/catalina/4526.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/0833.jpeg",
          caption: "Ridge walking to Little Harbor",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/8811.jpeg",
          caption: "Little Harbor",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/5985.jpeg",
          caption: "",
        },
        {
          path: "/images/catalina/0875.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/5960.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/2044.jpeg",
          caption: "Covid 💀",
        },
        {
          path: "/images/catalina/1950.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/7009.jpeg",
          caption: "Seeing the prickly pear",
        },
        {
          path: "/images/catalina/2022.jpeg",
          caption: "Eating the prickly pear",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/0738.jpeg",
          caption: "Bison warning sign",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/catalina/bison.png",
          caption: "Pictures taken one second before disaster",
        },
      ]}
    />
  </Post>
);

export default Page;
