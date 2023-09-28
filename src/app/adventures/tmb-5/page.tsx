import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const TMB = () => (
  <Post
    title="Goats and Lakes (TMB Day 5)"
    date="July 6, 2023"
    prev="/adventures/tmb-4"
    next="/adventures/tmb-6"
  >
    <ImageGroup
      images={[{ path: "/images/tmb/IMG_4382.jpeg", caption: "Goat!" }]}
    />
    Today was special because we could see our destination from the start.
    Across the Chamonix valley from Refuge Albert Premier, I barely made out the
    speck of a cabin in the distance. It would take the entire day to reach it,
    going all the way down and all the way back up.
    <ImageGroup
      images={[{ path: "/images/tmb/IMG_4300.jpeg", caption: "Goat" }]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4988_Original.jpeg",
          caption: "Today had better weather!",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_5003_Original.jpeg",
          caption:
            "To save our knees we cheated and took a ski lift down part of the descent instead of walking.",
        },
      ]}
    />
    At Argentière we resupplied on food and continued up towards Lac Blanc. It
    was our final climb of the trip!
    <ImageGroup images={[{ path: "/images/tmb/IMG_4318.jpeg", caption: "" }]} />
    At a junction we decided to take a longer route to see the Lacs de Cheserys,
    which was so worth it! Not sure why, but nobody really came to these lakes
    and I found them to be just as nice if not better than Lac Blanc.
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4327.jpeg",
          caption: "One of the Lacs de Cheserys",
        },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/tmb/IMG_4351.jpeg", caption: "" },
        { path: "/images/tmb/IMG_4352.jpeg", caption: "" },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_5036_Original.jpeg",
          caption: "Lake where I went for a swim. It was cold",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/tmb/IMG_4369.jpeg",
          caption: "These guys have impressive horns",
        },
      ]}
    />
    <ImageGroup
      images={[{ path: "/images/tmb/IMG_4378.jpeg", caption: "Lac Blanx" }]}
    />
    Finally, we made our way down to Refuge La Flegère to another 3 course
    french meal. These huts make hiking so nice in Europe, its not fair.
    Tomorrow we hike out, and say goodbye to Chamonix!
    <ImageGroup
      images={[
        { path: "/images/tmb/IMG_4391.jpeg", caption: "Nearing La Flegère" },
      ]}
    />
    Day 5 ended up being 18km and 1140m of elev. gain, 1530m of elev. loss.
  </Post>
);

export default TMB;
