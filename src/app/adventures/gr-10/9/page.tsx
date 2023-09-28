import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Leaving Basque Country (HRP Day 9)"
    date="July 19, 2023"
    prev="/adventures/gr-10/8"
    next="/adventures/gr-10/10"
  >
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4766.jpeg", caption: "Staying high up" },
      ]}
    />
    <p>
      Today we continued on the HRP. It was a day of bipolar weather, walking
      along the ridge, or crête, which formed the border between France and
      Spain. Each time we entered Spain it was sunny and hot, but when we
      crossed back into France, the sun disappeared, we cooled down and had no
      visibility.
    </p>
    The HRP continued to be spectacular. Rising above the clouds this morning we
    could see the mountains all around us, and the Pic d’Orhi from yesterday in
    the background.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4757.jpeg",
          caption: "Tania climbs out of the clouds, with Pic d'Orhi behind her",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4771.jpeg",
          caption: "Dont know the name of this peak",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4772.jpeg",
          caption:
            "Clouds from France spill over into Spain. Weather changes rapidly here",
        },
      ]}
    />
    After a good climb and descent, we had a snack in the Refugio Belagua. On
    Tania’s recommendation I tried chistorra, a Navarre/Basque sausage.
    <p>
      In the afternoon, we road walked the last 10km of the day. It was a bit
      sad to say goodbye to Basque Country, but we were now entering the
      High/Haute Pyrénées!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4778.jpeg",
          caption: "Limestone karst scenery during the road walk",
        },
      ]}
    />
    Before arriving in Refuge Jeandel in La Pierre Saint Martin, a ski resort, I
    met some hikers who were a day ahead of us on the GR 10. By taking the high
    route, we had skipped one day of the GR 10 so new faces were abundant
    tonight. I had dinner in the refuge, and pitched my tent in the front yard.
    <p>
      Tomorrow will be a big day, I’m planning to tag the Pic d’Anie (2500m) on
      the way to Lescun if the weather holds.
    </p>
    Cabane d'Ardane to Refuge Jeandel - 22.40km and 1070m gained.
  </Post>
);

export default GR;
