import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Virginia Creek (SHR Day 2)"
    date="July 21, 2024"
    prev="/adventures/shr/1"
    next="/adventures/shr/3"
    stravaID="12000224992"
  >
    <p>
      Today was all off-trail. Our goal was to go over two passes: Horse Creek
      Pass (class 2) and Stanton Pass (class 3). It would be the first test of
      our ability to navigate tough terrain without getting lost.
    </p>
    We continued up the drainage we were following yesterday, until we reached a
    high meadow. From here we bore right towards a pile of reddish talus.
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/1.jpeg",
          caption: "Highest meadow in Horse Creek Canyon",
        },
        {
          path: "/images/shr/2/IMG_0111.jpeg",
          caption: "Reddish rock section",
        },
      ]}
    />
    We paced quickly this morning, mostly worried about making it to the planned
    destination for the day. However the constant change from reddish rock,
    green grass and football field sized snowfields made this pass really
    interesting in retrospect. We encountered a false pass before the real Horse
    Creek Pass at 10,700 ft.
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/2.jpg",
          caption: "Ascending to the false pass",
        },
        {
          path: "/images/shr/2/3.jpg",
          caption: "Horse Creek Pass, center notch (10,700ft)",
        },
      ]}
    />
    The final section of the pass traversed a steep snow slope. Since it was mid
    season and none of us brought ice axes, we were careful to use our poles on
    the traverse. At one point, Emma misstepped and slid a few feet over a small
    lip onto a boulder. It ended up being a short distance and she was okay, but
    we began to take snowfields more seriously from that point on. (Emma would
    have her chance to redeem herself on day 5.)
    <p>
      Topping out the pass and looking over to the other side rewarded us with
      new scenery. Spiller canyon looked insanely beautiful with its bowl-like
      shape, and hillsides full of alpine wildflowers.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/4.jpg",
          caption: "Spiller Canyon on the other side of Horse Creek Pass",
        },
        {
          path: "/images/shr/2/5.jpeg",
          caption: "Our favorite part of the day, meadow walking",
        },
      ]}
    />
    We stopped for a quick lunch break, during which marmots came to visit. They
    liked Isabel, probably because she had brought the best food. This would be
    a recurring theme for the rest of the trip.
    <p>
      The high route followed Spiller Canyon down to an undefined point, at
      which we began traversing the left side hill. We aimed for a bunch of
      trees that we believed would lead us up a class 2-3 slab toward Stanton
      Pass.
    </p>
    This group of trees ended up being the correct waypoint, and soon we were
    faced with another loose climb up a pile of scree. Unexpectedly, the rock
    became more solid the higher we went. We aimed right of the lowest point on
    the pass, and traversed back left at the very top. The final crux felt epic
    because it led straight to the summit with a sharp drop-off on the other
    side.
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/8.jpeg",
          caption: "Emma climbing up Stanton Pass",
        },
        {
          path: "/images/shr/2/IMG_0112.jpg",
          caption: "Class 3 crux on Stanton Pass (11,200ft)",
        },
      ]}
    />
    Stanton Pass was a knife-edge, so we descended a little before having
    another snack break. Now we could see the next canyon as well as our target
    for the next day, Sky Pilot Col. It looked really high and far away.
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/7.jpg",
          caption: "Other side of Stanton pass",
        },
        {
          path: "/images/shr/2/IMG_4638.jpeg",
          caption: "Windy lake swim time",
        },
      ]}
    />
    After some initial fuckery on the steep, bouldery descent of Stanton pass,
    the afternoon eased into a very pleasant cross-country walk through a
    granite landscape dotted with lakes. We were making good time.
    <p>
      At Soldier Lake, it was decided that we had time for a swim! Isabel and I
      jumped into the crisp blue water. There was even a rock shaped perfectly
      as a bench, and another rock that slid into the water which was great for
      doing my laundry.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/IMG_1259.jpg",
          caption: "Soldier Lake",
        },
      ]}
    />
    Renewed by the refreshing dip, we continued down some large slabs into the
    forest below. On the way down we passed one lone hiker coming the other way,
    about 200 to our right on the slab. He waved but did not stop to chat. High
    route hikers are really a different breed, I thought, as I watched him
    continue up the slope.
    <p>
      Soon we reached the treeline and entered a lush wooded area with tall
      shrubbery. The steep slope finally gave way to a flat section.
      Bushwhacking, we knew we must be close to a trail, and eventually we found
      it. We stepped right over it, for continuing along it would be useless for
      us. After a bit of searching we found a nice campsite on some ledges above
      a slow moving stream to call it a day.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/IMG_8622.jpg",
          caption: "Wading through tall grass in Virginia Canyon",
        },
        {
          path: "/images/shr/2/9.jpg",
          caption: "A beautiful second sunset",
        },
      ]}
    />
    <p>
      After a full day of walking/scrambling on varied terrain, I felt grateful
      to have such reliable and fun hiking partners. We were evenly matched in
      pace and I gained a lot more confidence that we could complete the trek
      after this day.
    </p>
    <p>
      Horse Creek Canyon to Return Creek (Virginia Canyon) - 7 mi and 3406 ft
      gained.
    </p>
  </Post>
);

export default Page;
