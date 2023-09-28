import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Pombie (HRP Day 14)"
    date="July 24, 2023"
    prev="/adventures/gr-10/13"
    next="/adventures/gr-10/15"
  >
    <p>
      During the night there was a dry thunderstorm with lightning. I
      experienced some of the strongest winds I’d ever felt while camping. One
      gust was so powerful that it snapped the end of my hiking pole and my tent
      collapsed!
    </p>
    I spent half of the night sleeping under a collapsed tent, because the winds
    were too strong for me to go outside and try to repitch it. Around 4 or 5 am
    a period of calmness arrived so I hacked together a new way to prop up my
    tent despite the broken pole. Finally I could get some proper sleep.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4959.jpeg",
          caption: "Crazy windy campsite",
        },
      ]}
    />
    Luckily today was a short day, and I had booked a stay inside Refuge de
    Pombie. The reservation included dinner, which I was pretty excited about. I
    began the day’s trek with a short climb to a col, which offered a great view
    of the famous Pic du Midi d’Ossau. This col was also the border and I
    reentered France soon after.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4960.jpeg",
          caption: "Col des Moines, 2168m",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4965.jpeg",
          caption: "Epic view of Pic du Midi d'Ossau, a Pyrenean icon",
        },
      ]}
    />
    Continuing the descent into some clouds, I met a Scottish family while
    trying to navigate in poor visibility. When I found the trail it was time to
    ascend again.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4967.jpeg",
          caption: "Wayfinding in the clouds",
        },
      ]}
    />
    Halfway up to Col de Peyreget, I caught up to Camille, who had stayed at
    Refuge Ayous the previous night! She was with Jacques, a section hiker whom
    I’d also met previously.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4970.jpeg",
          caption: "Closer look at the Pic du Midi d'Ossau",
        },
      ]}
    />
    The three of us continued the climb to the col, crossing a section of large
    boulders.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4972.jpeg",
          caption: "Climbing up to Col de Peyreget",
        },
      ]}
    />
    At the col we stopped to have lunch. Since we could already see the refuge
    from here, we were in no rush.
    <p>
      Not interested in descending down into more clouds, Camille and I stopped
      to chill at a lake. I went for a swim and tried to read a french book I
      picked up a few days ago.
    </p>
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_4974.jpeg", caption: "Lake swim" }]}
    />
    The final descent to Pombie took us into the mist, which would linger for
    the rest of the day and night. the refuge was small, but dinner was great
    and the company was interesting. I met one Hungarian guy who was trying to
    complete the HRP in 25 days.
    <p>
      The misty weather would continue into tomorrow, but at least I could sleep
      under a roof tonight!
    </p>
    Ibon de Escalar to Refuge de Pombie - 9.2km and 728m gained.
  </Post>
);

export default GR;
