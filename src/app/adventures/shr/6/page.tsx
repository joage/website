import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Donner Party (SHR Day 6)"
    date="July 26, 2024"
    prev="/adventures/shr/5"
    next="/adventures/shr/7"
    stravaID="12000224779"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/6/4.jpeg",
          caption: "Day 6, Banner Peak from Thousand Island Lake",
        },
      ]}
    />
    Today we woke up covered in water. Moisture from the valley we camped in had
    condensed as the temperatures dropped, so all of our sleeping bags and tents
    got soaked. I left early to find a sunny spot for breakfast and to dry our
    stuff.
    <ImageGroup
      images={[
        {
          path: "/images/shr/6/1.jpeg",
          caption: "Things that grow in Lyell Canyon",
        },
      ]}
      thinner
    />
    Since we were still at lower elevation, I was able to admire the plants and
    mushrooms in Lyell canyon that are not found in the high country.
    <p>
      As I climbed higher toward Donahue Pass, I became very very fatigued. The
      bonk had set in, and I made a rookie mistake. Instead of pacing myself, I
      charged ahead. The last few hundred feet felt terrible and I collapsed at
      the top of Donahue Pass, feeling rather unmotivated to keep going.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/6/3.jpeg",
          caption: "Donahue Pass, 11,000 ft",
        },
      ]}
      thinner
    />
    At the pass I cooked a lasagna meal which Isabel gifted me, and rifled
    through the contents of my bear can. As I contemplated the situation, my
    thoughts spiraled into hunger and despair. Why hadn't I brought more food?
    With my current amount, I almost had no desire to continue on the high route
    to see the Minarets like we planned. When Isabel and Emma arrived at the
    pass a while later, I told them I was thinking of splitting up from the
    group and just hiking into Mammoth via the JMT while they did the high
    route.
    <ImageGroup
      images={[
        {
          path: "/images/shr/6/2.jpeg",
          caption: "Marmot friend",
        },
      ]}
      thinner
    />
    <p>
      It was a case of the high route blues and hangryness, but luckily my
      friends convinced me to keep going. As we descended together, we passed
      many many PCT hikers, including a large trail family of 8. I was slow and
      lethargic, and the JMT felt rather boring compared to our previous days
      romping cross country.
    </p>
    We climbed up a small hill, then split off from the trail to take a shortcut
    to Thousand Island Lake. It wouldn't be a day on the high route without a
    little off-trail excitement.
    <ImageGroup
      images={[
        {
          path: "/images/shr/6/0.jpeg",
          caption: "Thousand Island Lake, an iconic JMT location",
        },
      ]}
    />
    <p>
      Finally we made it to camp! I was exhausted, but our scheduled lake swim
      replenished some life points. We waded through the squishy lake bed to one
      of the islands for some pictures.
    </p>
    <p>
      Today was rough. I felt pretty desperate at Donahue Pass, but my mood
      slowly improved as night fell. We were in a beautiful place, why not enjoy
      it! As we discussed our plans for the next day, I became more optimistic
      about making it to Mammoth without going hungry, but it would all depend
      on how the first pass of the day went.
    </p>
    I promised myself to bring more food the next time I did something like
    this, in order to avoid roping my friends into another Donner Party
    situation.
    <p>Lyell Canyon to Thousand Island Lake - 12.3 mi and 3530 ft gained.</p>
  </Post>
);

export default Page;
