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
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/5.jpeg",
          caption: "Day 2",
          link: "/adventures/shr/2",
        },
        {
          path: "/images/shr/4/8.jpeg",
          caption: "Day 4",
          link: "/adventures/shr/4",
        },
        {
          path: "/images/shr/11/7.jpeg",
          caption: "Day 11",
          link: "/adventures/shr/11",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/7.jpeg",
          caption: "Day 5",
          link: "/adventures/shr/5",
        },
        {
          path: "/images/shr/3/3.jpeg",
          caption: "Day 3",
          link: "/adventures/shr/3",
        },
        {
          path: "/images/shr/6/2.jpeg",
          caption: "Day 6",
          link: "/adventures/shr/6",
        },
      ]}
    />
    <p>
      In early 2024 I moved to San Francisco for an in-person job. It was a nice
      change from the remote work I had been doing for the past two years, but
      it also limited my time in the mountains. As summer approached, I itched
      for a grand adventure. Having secured two weeks of time off, I began
      scheming with my friends Emma and Isabel. We set our sights on Steve
      Roper's Sierra High Route, a 195 mile long off-trail hike, a "best of" the
      high sierra of California. We all had some experience going cross country
      and route-finding at high elevation, but this was going be a challenge for
      everyone involved.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/IMG_0001.jpg",
          caption: "The line",
        },
      ]}
      thinner
    />
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
      , referencing Steve Roper's book, Andrew Skurka's maps and other online
      resources.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/1001.jpeg",
          caption: "The crew",
        },
      ]}
      thinner
    />
    <p>
      The day-by-day writeups that follow are only told from my point of view!
      See Emma's perspective{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://youtu.be/I-Me9gM-OnQ?si=H_I8kbZT4DPi6TFD"
      >
        here
      </Link>{" "}
      and Isabel's perspective{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/p/C-EU6twyTkQ/"
      >
        here.
      </Link>
    </p>
    Click "next" to begin the journey with us!
  </Post>
);

export default Page;
