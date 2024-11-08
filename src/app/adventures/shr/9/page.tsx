import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Trail Miles (SHR Day 9)"
    date="July 29, 2024"
    prev="/adventures/shr/8"
    next="/adventures/shr/10"
    stravaID="12047586086"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/7.jpeg",
          caption: "Climbing up to Izaak Walton Lake",
        },
      ]}
    />
    Back to the high route! With our bags packed heavy with 5 more days of food,
    Emma and I rode the free trolley from Mammoth to Lake Mary to begin week 2.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/0.jpeg",
          caption: "Riding the free trolley",
        },
      ]}
      thinner
    />
    At Cold Water Campground, I ate my lox bagel and salad. Then we began the
    hike following a trail up to Duck Pass. We paced ourselves well despite all
    the food weight we were carrying.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/1.jpeg",
          caption: "Looking back toward Mammoth from Duck Pass",
        },
      ]}
    />
    People were really friendly on this trail compared with other ones we'd been
    on. We made it up to the pass relatively quickly, a sign that we had been
    well acclimatized and perhaps gotten stronger over the last week.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/2.jpeg",
          caption: "Purple Lake from Duck Pass",
        },
      ]}
    />
    Once over the pass we planned out some more of the route for the next few
    days. If we could get to Lake Italy by Wednesday night, we'd be in good
    shape.
    <p>
      The following section followed the JMT, once again on trail. We passed
      many groups of hikers, including a ranger who checked our permits, and
      some familiar faces we'd seen near Yosemite a few days ago.
    </p>
    Trail miles felt repetitive but we made really good time. Soon we arrived at
    Virginia Lake.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/3.jpeg",
          caption: "Virginia Lake",
        },
      ]}
    />
    Since it was still early, we decided to rinse off in the lake and keep
    going, rather than camp for the night. On the descent to an area called
    Tully Hole, we could finally see some taller mountains in the distance.
    Today had been relatively low altitude.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/4.jpeg",
          caption: "Peaks of the Silver Divide, which we would cross tomorrow",
        },
      ]}
    />
    Tully Hole had a ton of mosquitos and it wasn't a great place to camp. Even
    though it was close to 7pm, we decided to keep going yet again. We crossed a
    stream and followed an overgrown trail up a canyon until reaching a meadow
    like area.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/5.jpeg",
          caption: "The bog-meadow",
        },
      ]}
    />
    As it turned out, we walked right into a bog. Still seeing no good camp
    spots, we skirted around the edge of the bog-meadow up onto some higher
    ledges. The sun started to set but we pushed on through brushy, unpleasant
    terrain.
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/6.jpeg",
          caption: "Bushwhacking up a steep forested hillside",
        },
      ]}
      thinner
    />
    Finally, the forest gave way to bare granite slabs and our spirited lifted
    instantly. After 14 miles of trail today, this was the type of terrain we
    had signed up to do the high route for!
    <p>
      As we reached Izaak Walton Lake, the sunset cast a beautiful alpenglow on
      the surrounding peaks. We were excited to see some more high route hikers
      camping up here! They gave us some beta for the next two passes.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/9/8.jpeg",
          caption: "Izaak Walton Lake, 10,200 ft",
        },
      ]}
      thinner
    />
    We found a sweet camp spot elevated a little above the lake's meadow with no
    mosquitos at all! We were so relieved to be able to finally eat dinner, for
    the day felt like it kept on getting extended.
    <p>
      Lake Mary (Mammoth) to Izaak Walton Lake - 14.7 mi and 3800 ft gained.
    </p>
  </Post>
);

export default Page;
