import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Tuolumne (SHR Day 5)"
    date="July 25, 2024"
    prev="/adventures/shr/4"
    // next="/adventures/shr/6"
    stravaID="12000227229"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/1.jpeg",
          caption: "Entering Yosemite!",
        },
      ]}
    />
    Today was going to be a mostly trail day. We were excited to reach Tuolumne
    and resupply on food!
    <p>
      It had been a windy night and the wind did not subside even as the sun
      came up. We quickly packed up our flapping tents and made our way down a
      short path to Gaylor lake, where we had breakfast. From there it was all
      easy downhill and 8 miles of walking to Tuolumne meadows.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/2.jpeg",
          caption: "Lower Gaylor lake",
        },
        {
          path: "/images/shr/5/3.jpeg",
          caption: "A high Yosemite meadow",
        },
      ]}
    />
    A couple hours later we crossed Tioga Road (Hwy 120), the first road we'd
    seen in 4 days! People started appearing everywhere, hikers, backpackers,
    and horseback riders.
    <p>
      Since the trail was super easy here we split up to give each other some
      alone time. I enjoyed some solo contemplation while listening to the
      rushing river and occasional cars passing by on the road.
    </p>
    Around midday we reached Tuolumne Meadows and located the bear box we had
    placed our resupply food in 5 days ago.
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/4.jpeg",
          caption: "Tuolumne Meadows, 8600 ft",
        },
        {
          path: "/images/shr/5/5.jpeg",
          caption: "Our resupply food box",
        },
      ]}
    />
    Upon opening the box, Emma and I were slightly disappointed at how little
    food we had packed. We'd underestimated the amount of food we'd eat, and if
    we kept going at the current pace, we likely wouldn't make it to Mammoth
    without going hungry.
    <p>
      Since the Tuolumne store was closed this season, we had to make a
      decision. I considered hitching into Lee Vining to buy some snacks there,
      but ultimately Isabel, who was better prepared, kindly offered me one of
      her dinners. We also decided to cut off a portion of the high route and go
      on the John Muir Trail for about 20 miles, in order to make it to Mammoth
      by Monday.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/6.jpeg",
          caption: "Continuing on the JMT",
        },
        {
          path: "/images/shr/5/7.jpeg",
          caption: "Lyell canyon",
        },
      ]}
    />
    A little whle later, we put on our newly heavy bags and set off again. It
    was super slow and tiring for some reason. We walked halfway up Lyell Canyon
    until we found a camp spot at around 9000 ft. Several other groups had
    camped near us since Tuolumne's campground was closed and there was a four
    mile ban on camping from the meadows.
    <ImageGroup
      images={[
        {
          path: "/images/shr/5/8.jpeg",
          caption: "Dinner",
        },
        {
          path: "/images/shr/5/IMG_5014.jpeg",
          caption: "...and a cold river plunge",
        },
      ]}
    />
    It had been a change of pace from previous days, really low in elevation but
    we enjoyed a lot of mileage in each other's company. We took a dip in the
    chilly river before dinner!
    <p>Great Sierra Mine to Lyell Canyon - 15.3 mi and 955 ft gained.</p>
  </Post>
);

export default Page;
