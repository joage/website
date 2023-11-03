import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Longs Peak attempt (Rocky Mountain NP)"
    date="June 19, 2021"
    prev="/adventures/mojave"
    next="/adventures/rainier"
  >
    <ImageGroup
      images={[
        {
          path: "/images/rocky/9596.jpeg",
          caption: "Sunrise in Colorado",
        },
      ]}
    />
    Sam and Chenyu invited me to visit them in Boulder for a weekend. We decided
    to try and day hike Longs Peak (14,259 ft) in Rocky Mountain National Park.
    Operating on no sleep, I didn't make it anywhere near the summit but it was
    still a pretty cool trail for my first time in Colorado.
    <ImageGroup
      images={[
        {
          path: "/images/rocky/9608.jpeg",
          caption: "Longs Peak, 14259 ft (right)",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocky/9605.jpeg",
          caption: "",
        },
        {
          path: "/images/rocky/9607.jpeg",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocky/9609.jpeg",
          caption: "Chasm Lake, 11760 ft",
        },
      ]}
    />
    I stopped at Chasm Lake, still frozen, before heading back to the parking
    lot. Sam and Chenyu got a little further up but didn't summit.
    <p>
      A couple days later I went on a short hike in the Flatirons near Boulder.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/rocky/9637.jpeg",
          caption: "One of the Flatirons",
        },
      ]}
    />
  </Post>
);

export default Page;
