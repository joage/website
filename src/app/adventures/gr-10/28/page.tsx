import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Arties (HRP Day 28-29)"
    date="August 7, 2023"
    prev="/adventures/gr-10/27"
    next="/adventures/gr-10/30"
    stravaID="10448633358"
  >
    Today I took a direct path down a road to Arties, where I pitched my tent at
    a campground. Here I wanted to spend two nights to rest before the next
    section of the HRP.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5452.jpeg", caption: "Arties, Spain" },
      ]}
    />
    Arties is located in between Salardú and Vielha, so I could easily hitchhike
    or take a bus between the three towns. Here are some pics from my rest days.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5455.jpeg", caption: "" }]}
    />
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5458.jpeg", caption: "" }]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5462.jpeg",
          caption: "I had dinner with Benjamin and Dan.",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5464.jpeg",
          caption: "We had a second dinner because we were still hungry.",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5470.jpeg",
          caption:
            "I hitched to Vielha the next day. Got groceries and a haircut.",
        },
      ]}
    />
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5473.jpeg", caption: "Apple tart" }]}
    />
    Refugi Restanca to Arties - 10.01km and 864m descended.
  </Post>
);

export default GR;
