import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Far gassed (HRP Day 44)"
    date="August 23, 2023"
    prev="/adventures/gr-10/43"
    next="/adventures/gr-10/45"
    stravaID="10448571915"
  >
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6084.jpeg",
          caption: "Far gassed at Fargassa",
        },
      ]}
    />
    We were gassed today. It was so hot, even at 6am when we started the climb
    out of Arles.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6075.jpeg",
          caption: "Dan and I left Arles after visiting the bakery",
        },
      ]}
    />
    The 600m climb led us over a small col. We sweated profusely. While we
    stopped for a break, Dan and I decided to take a short day and end at the
    Mas de la Fargassa. It was simply too hot to keep going during the daytime.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6078.jpeg",
          caption: "Crossing the Ribera del Terme on a wobbly bridge",
        },
      ]}
    />
    We reached a road which took us along the river to a place called Mas de la
    Fargassa, an "ecogîte" run by a Dutch family. They informed us it was Indian
    food night, so we eagerly set up our tents here.
    <p>
      We spent the rest of the hot day swimming in the river and taking naps.
      Dinner was insanely good. This was a magical place.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6089.jpeg",
          caption: "Swimming hole with a diving rock",
        },
      ]}
    />
    <p>Arles-sur-Tech to Mas de la Fargassa - 9.84km and 673m gained</p>
  </Post>
);

export default GR;
