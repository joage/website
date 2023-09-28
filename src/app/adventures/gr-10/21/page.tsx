import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Barroude Lakes (HRP Day 21)"
    date="July 31, 2023"
    prev="/adventures/gr-10/20"
    next="/adventures/gr-10/22"
  >
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5299.jpeg", caption: "Lacs de Barroude" },
      ]}
    />
    I began my day with a big breakfast of tortillas, fromage de brebis, and
    cereal bars. I intended to take a shorter day than suggested by the
    guidebooks, and camp at some lacs (lakes) recommended by somebody at the
    campground.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5238.jpeg", caption: "Breakfast in Héas" },
      ]}
    />
    Even though it was a smaller distance, the elevation gain still surpassed
    1000m. Most of the day was spent climbing, and with no shade.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5243.jpeg", caption: "The morning climb" },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5254.jpeg",
          caption:
            "The glaciated peak in the back is Vignemale, which I passed on day 17!",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5293.jpeg",
          caption: "Hourquette de Héas, 2608m",
        },
      ]}
    />
    After a small but steep downhill, the trail traversed a few rocky hillsides
    to reach the Lacs de Barroude.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5295.jpeg", caption: "Traverse" }]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5297.jpeg",
          caption: "Approaching the lakes",
        },
      ]}
    />
    When I arrived at the lakes, it was 2:30 and Camille was just getting ready
    to hike onwards to Parzan. We said goodbye here, since the lakes were so
    beautiful and I wanted to stay the night.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5310.jpeg",
          caption: "Sheep came to visit during lunch",
        },
      ]}
    />
    I spent the rest of the day cooking lots of polenta, lounging, and swimming.
    Two meals later, it was time for bed!
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5311.jpeg", caption: "Camp site" }]}
    />
    Héas to Lacs de Barroude - 14.07km and 1559m gained.
  </Post>
);

export default GR;
