import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const Page = () => (
  <Post
    title="North Fork of Big Pine Creek"
    date="October 16, 2024"
    prev="/adventures/rocktober"
    next="/adventures/warren"
    stravaID="12673394015"
  >
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/01.JPG",
          caption: "Sam Mack Meadow, 11,000 ft",
        },
      ]}
    />
    <p>
      The North Fork of Big Pine Creek is a popular backpacking route in the
      summertime, but now in the fall there was almost nobody on the trail. I
      did it as a run, hoping to make it to Sam Mack Meadow and at least 3 of
      the 7 lakes.
    </p>
    <p>
      Not far from the trailhead, the trail splits into South Fork and North
      Fork. I'd been up South Fork{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="/adventures/sill"
      >
        a couple of times
      </Link>{" "}
      , but this was my first time going to North Fork and I was excited.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/1.JPG",
          caption: "Turning on to the North Fork",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/2.JPG",
          caption: "Temple Crag from 1st (or 2nd?) Lake",
        },
      ]}
      thinner
    />
    I made it up to Third Lake after a couple hours, and turned onto the Glacier
    trail toward Sam Mack Meadow. Another few hundred feet of climbing led me to
    the meadow, which was beautiful but very windy.
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/01.JPG",
          caption: "Sam Mack Meadow, 11,000 ft",
        },
      ]}
      thinner
    />
    <p>
      I filled up my water bottle here and retraced my steps back to 3rd lake.
      Since it was still early in the day and I felt pretty good, I continued on
      toward Fourth, Fifth Lakes, and Black Lake before making a loop and
      heading back to the trailhead.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/4.JPG",
          caption: "Fifth Lake",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/5.JPG",
          caption: "Stream dip, only went in halfway it was cold",
        },
      ]}
      thinner
    />
    I have been working on my cardio this year and it was nice to see that pay
    off here. Normally the high elevation would have destroyed me but this run
    felt okay!
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/6.JPG",
          caption: "",
        },
        {
          path: "/images/north-fork/7.JPG",
          caption: "",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/north-fork/8.JPG",
          caption: "I love fall in the Sierra",
        },
      ]}
    />
  </Post>
);

export default Page;
