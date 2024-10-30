import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const Page = () => (
  <Post
    title="Sierra High Route"
    date="Jul-Aug 2024"
    prev="/adventures/lone"
    next="/adventures/shr/1"
  >
    <p>
      In 2024 I moved to San Francisco for an in-person job. It was a nice
      change from the remote work I had been doing for the past two years, but
      it also limited my time in the mountains. As summer approached, I itched
      for a grand adventure. Having secured two weeks of time off, I began
      scheming with my friends Emma and Isabel. We set our sights on Steve
      Roper's Sierra High Route, a 195 mile long off-trail hike, a "best of" the
      high sierra of California. We all had some experience going cross country
      and route-finding at high elevation, but this was going be a challenge for
      everyone involved.
    </p>
    <p>
      The High Route begins in Roads End, Kings Canyon NP and ends at Twin Lakes
      Mono Village. For logistical reasons, we decided to reverse the route and
      start at Twin Lakes instead. This gave us the option to bail out early,
      using the many trails in the Bishop area, if we didn't finish on schedule.
      In the weeks leading up to the hike, I{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://caltopo.com/m/5GFEC"
      >
        drew out the line
      </Link>
      , referencing Andrew Skurka's maps and other online resources.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_0001.jpg",
          caption: "The rough line",
        },
      ]}
    />
  </Post>
);

export default Page;
