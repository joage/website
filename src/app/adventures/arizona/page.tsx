import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const Arizona = () => (
  <Post
    title="Arizona and Utah"
    date="November 2025"
    prev="/adventures/tuolumne"
    next="/adventures/taiwan"
  >
    <ImageGroup
      images={[
        {
          path: "/images/arizona/12.jpeg",
          caption: "Prescott, AZ",
        },
      ]}
      thinner
    />
    Back to the desert. Emma and I managed to find 2 weeks in November to go on
    a roadtrip to Arizona and New Mexico. Having done little to no planning, we
    kind of let the desert, Mountain Project, and BLM land show us where to go.
    We never made it to New Mexico but we did get to explore Utah instead.
    <ImageGroup
      images={[
        {
          path: "/images/arizona/2.jpeg",
          caption: "Canyon de Chelly",
        },
      ]}
      thinner
    />
    <ImageGroup
      images={[
        {
          path: "/images/arizona/14.jpeg",
          caption: "Owl Rock, Arches NP",
        },
        {
          path: "/images/arizona/4.jpeg",
          caption: "South Sixshooter Tower",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/arizona/13.jpeg",
          caption: "Indian Creek",
        },
      ]}
      thinner
    />
    <ImageGroup
      images={[
        {
          path: "/images/arizona/15.jpeg",
          caption: "Ding and Dang Canyons, San Rafael Swell",
        },
      ]}
      thinner
    />
    <p>
      One spot that I really liked was the San Rafael Swell. I had never heard
      of it before and we didn't see many people. Finding a place to camp in the
      area was not hard. The slot canyons and formations reminded us of our last{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        href="/adventures/utah-2"
      >
        trip to Utah
      </Link>{" "}
      three years ago.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/arizona/10.jpg",
        },
        {
          path: "/images/arizona/8.jpg",
        },
        {
          path: "/images/arizona/9.jpg",
        },
      ]}
    />
    About 10 days in, rain starting coming down so we started heading in the
    direction of home. The weather allowed for a hot spring soak and one more
    day of sport climbing at New Jack City on our way back to California.
    <ImageGroup
      images={[
        {
          path: "/images/arizona/0.jpeg",
        },
        {
          path: "/images/arizona/5.jpeg",
        },
        {
          path: "/images/arizona/1.jpeg",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/arizona/7.jpeg",
        },
        {
          path: "/images/arizona/3.jpeg",
        },
        {
          path: "/images/arizona/6.jpeg",
        },
      ]}
    />
  </Post>
);

export default Arizona;
