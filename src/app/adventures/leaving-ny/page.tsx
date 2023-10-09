import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Leaving = () => (
  <Post
    title="Leaving New York"
    date="June 26, 2023"
    prev="/adventures/shasta"
    next="/adventures/tmb-1"
  >
    <ImageGroup
      images={[
        { path: "/images/IMG_3810.jpeg", caption: "Goodbye, Brooklyn." },
      ]}
    />

    <p>
      In June I quit my job in California and decided to travel for a bit this
      summer.
    </p>

    <p>
      During a week of catching up with old friends in NYC, I made this website
      to document my hikes and the places i’ll be going to in Europe. In a few
      days I’ll be walking the Tour du Mont Blanc, and later in July I want to
      do the GR 10 in the south of France.
    </p>

    <p>
      I'm leaving my laptop with my sister here in NY, so the trip reports that
      follow in the next few months will be written solely on my phone’s notes
      app and uploaded using github mobile when I reach wifi. So we'll see if
      they are any good! Here I go!
    </p>
  </Post>
);

export default Leaving;
