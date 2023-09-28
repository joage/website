import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Swimming (HRP Day 27)"
    date="August 6, 2023"
    prev="/adventures/gr-10/26"
    next="/adventures/gr-10/28"
  >
    I only had one goal in mind for today-to swim in a lake. My body needed a
    break from the past few days of high cols and difficult hiking, so I kept
    the mileage short in order to relax.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5434.jpeg", caption: "The morning descent" },
      ]}
    />
    By the road in Espitau de Vielha, I ran into Dan and Benjamin, two HRP
    hikers who had done the same itinerary as me yesterday. They shared my
    desire to bathe in cold water today.
    <p>
      After I ate a big lunch, I climbed a gentle slope following the GR 11. It
      was not a difficult trail but I still felt tired from yesterday.
    </p>
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5435.jpeg", caption: "Back on the GR 11" },
      ]}
    />
    I reached the Lake Rius by mid-afternoon, so I had plenty of time to swim
    and lay in the sun. I may have stayed a bit too long because the next day I
    felt a slight sunburn on my chest.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5436.jpeg", caption: "Lac de Rius" }]}
    />
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5437.jpeg", caption: "Swim spot" }]}
    />
    For the final part of the day, I descended 7 km along the GR 11 and climbed
    a short but steep hill to my destination, Refugi Restanca by a dammed lake.
    Here I ran into Benjamin and Dan again, so we had a drink. They left to
    bivouac somewhere, and I decided to stay in the refuge. I spent the rest of
    the day cooking all of my food and eating way too much mashed potatoes.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5445.jpeg", caption: "Dinner" },
        {
          path: "/images/gr-10/IMG_5448.jpeg",
          caption: "He wanted some cheese",
        },
      ]}
    />
    Tomorrow I will be in Salardú, a town and resupply point!
    <p>Refugi Mulleres to Refugi Restanca - 17.0km and 1045m gained.</p>
  </Post>
);

export default GR;
