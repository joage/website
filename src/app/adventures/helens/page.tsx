import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Helens = () => (
  <Post
    title="Mount Saint Helens (8365 ft)"
    date="August 28, 2021"
    prev="/adventures/jade"
    next="/adventures/crete"
  >
    <p>
      The drive to this trailhead was the most packed my car has ever been for a
      hiking trip, mostly with unnecessary items. I had all my clothes, a desk,
      monitor, and office equipment with me because I was moving back to
      California after living in Seattle for two months. Luckily for me (unlucky
      for him), my roommate Anton was also in the car. Instead of taking a plane
      from Seattle, he had kindly agreed to accompany me on this adventure to
      climb Mount St Helens, and then take turns driving all the way back to San
      Francisco in the same day.
    </p>
    <p>
      We woke up super early in a motel somewhere along the I-5 in Southern
      Washington. Anton and I were both still tired from moving out the day
      before, but we hopped in the car and began the drive through Gifford
      Pinchot Natl Forest to a trailhead known as Climbers' Bivouac. Since the
      sun had not risen yet we strapped on headlamps to start the 5 mile, 4500
      vertical ft hike to the crater rim.
    </p>
    A couple miles in, we started to feel the fatigue, yet the sky was still
    dark. Anton decided that he didn't want to continue, so we parted ways. He
    went back down to the car for a nap, and I didn't blame him for not wanting
    to be awake at this hour. I kept going for what felt like forever along a
    rocky ridge until finally a sliver of light appeared on the horizon.
    <ImageGroup
      images={[
        {
          path: "/images/helens/0303.jpeg",
          caption:
            "The soft morning light outlined other peaks in the distance.",
        },
      ]}
    />
    The best part about climbing Cascades volcanos is the feeling that nothing
    else is around you, and you are the highest person for miles and miles.
    <ImageGroup
      images={[
        {
          path: "/images/helens/0312.jpeg",
          caption: "Steep ashy slopes on the upper mountain",
        },
      ]}
    />
    The trail was faint, but the forest service had erected tall poles at
    intervals along the route to guide climbers up the slope. As I got higher up
    the hill, the ground turned softer with volcanic ash and fine dirt.
    <ImageGroup
      images={[
        {
          path: "/images/helens/0307.jpeg",
          caption: "Weather station looks like a different planet",
        },
        {
          path: "/images/helens/0319.jpeg",
          caption: "Crater rim, 8365 ft",
        },
      ]}
    />
    As the sun rose I passed a weather station and some boulder fields,
    eventually cresting the final few hills to the crater rim. At the last
    hundred feet of the climb, my feet kept sliding down the ash and loose
    crumbs. Each step took more effort than usual.
    <ImageGroup
      images={[
        {
          path: "/images/helens/0322.jpeg",
          caption: "",
        },
      ]}
    />
    At the crater rim I spotted smoking fumaroles down below. In 1980 the
    volcano had erupted in the same direction I was looking, so I could see a
    huge path of destruction stretching far and wide from the summit. Clear
    skies revealed many peaks including Rainier, Adams, Baker, and Hood in the
    distance. Technically the real summit was another few hundred feet to the
    left of where I stood, but I was too tired to keep going for essentially the
    same view.
    <p>
      I ate my sandwich and descended down, skiing and sliding down the loose
      gravel to the car. We stopped for lunch at Nong's in Portland for some of
      the best chicken and rice I've had. Anton was a legend for helping me
      drive and stay awake for the rest of the journey down to the Bay Area.
    </p>
  </Post>
);

export default Helens;
