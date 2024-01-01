import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Héas (HRP Day 20)"
    date="July 30, 2023"
    prev="/adventures/gr-10/19"
    next="/adventures/gr-10/21"
    stravaID="10448633229"
  >
    When I woke up the scene in the Gavarnie campground reminded me of a Basque
    village. Fog had arrived during the night, and I couldn’t see anything.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5208.jpeg", caption: "Leaving Gavarnie" },
      ]}
    />
    <p>
      Today I was leaving Gavarnie and entering a new section of the HRP. I was
      mentally ready to hike onwards but my legs felt heavier than normal this
      morning. My bag weighed more than usual from the resupply of food, which
      included 1/2 a kilo of cheese. It was a slow, lazy start.
    </p>
    Halfway up the ascent to Hourquette d’Alan, there was a magical moment where
    the mountains around me suddenly dissolved into view. I had climbed out of
    the clouds!
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5209.jpeg",
          caption: "The outline of the mountain suddenly appeared",
        },
      ]}
    />
    After a short break to soak in the sun at Refuge d’Espuguettes, I continued
    on up with renewed motivation.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5213.jpeg", caption: "Espuguettes" }]}
    />
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5220.jpeg", caption: "Almost at the col" },
      ]}
    />
    The day started to heat up, but after I crested the col, a blast of wind
    cooled me down.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5221.jpeg",
          caption: "Houquette d'Alan, 2430m",
        },
      ]}
    />
    The following descent began steeply, then took me through a cute little
    valley with a river running through it.
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_5229.jpeg", caption: "Lunch spot" }]}
    />
    At the end of the valley stood a lake and a dam.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5231.jpeg", caption: "Barrage (dam)" },
      ]}
    />
    Once I made it to this point, all that was left was a 5 km road walk to the
    tiny hamlet of Héas, where I would camp next to the Auberge de la Munia.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5237.jpeg", caption: "Church at Héas" },
      ]}
    />
    I had heard good things about this place, and it did live up to the hype. I
    took a hot shower after I pitched my tent. Camille arrived a bit later, and
    we had a drink with a Dutch HRP hiker named Bart. The auberge served one of
    the best meals I’ve had so far, featuring duck confit and garbure, a type of
    soup from the region. We even had a small campfire, although the wood was a
    bit smoky from being wet.
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5235.jpeg", caption: "Auberge de la Munia" },
      ]}
    />
    Gavarnie to Héas - 18.94m and 1226m gained.
  </Post>
);

export default GR;
