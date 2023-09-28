import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Easy day (GR 10 Day 6)"
    date="July 16, 2023"
    prev="/adventures/gr-10/5"
    next="/adventures/gr-10/7"
  >
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4683.jpeg", caption: "Clouds and cows" },
      ]}
    />
    My gite was noisy this morning. Not only in my room, but it seemed like
    everyone in all rooms awoke on cue and started shuffling around at 7 am to
    do the Camino. After they departed I slept for another couple hours until I
    was the only one left. I felt bad for eating breakfast while the dining room
    was being cleaned, but soon I was back on my way into the hills.
    <p>
      Today would be an easy day, with the destination being Kaskoleta, a rural
      gîte on a hill.
    </p>
    Everything went according to plan, and the walk was so pleasant and chill
    that I made it to Kaskoleta after only 4 hours including lunch.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4685.jpeg",
          caption: "Lunch at Esterençuby",
        },
      ]}
    />
    While relaxing at Kaskoleta, some of my friends were discussing pushing on
    forward, and after a quick research into bivouac sites, I decided to hike
    on. Five km later, I found a nice little spot near some streams to plant my
    tent.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4691.jpeg",
          caption: "Black slugs are common here",
        },
      ]}
    />
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_4692.jpeg", caption: "Camp" }]}
    />
    Tomorrow is going to be a long day with lots of up, so I’m glad I got myself
    a little further than planned today!
    <ImageGroup
      images={[{ path: "/images/gr-10/IMG_4693.jpeg", caption: "Dinner" }]}
    />
    St-Jean-Pied-de-Port to Kaskoleta to bivy site — 22.3km and 1134m of
    elevation gained
  </Post>
);

export default GR;
