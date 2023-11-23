import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const GR = () => (
  <Post
    title="My long walk in the Pyrenees (HRP Recap)"
    date="September 5, 2023"
    prev="/adventures/gr-10/47"
    next="/adventures/lone"
  >
    <p>
      This summer I walked from the Atlantic Ocean to the Mediterranean Sea,
      traversing the Pyrenees mountain range in 47 days with my backpack and
      tent.{" "}
      <span className="text-gray-500">
        Click any photo below to see that day's post!
      </span>
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4607.jpeg",
          caption: "Day 2",
          link: "/adventures/gr-10/2",
        },
        {
          path: "/images/gr-10/IMG_4615.jpeg",
          caption: "Day 4",
          link: "/adventures/gr-10/4",
        },
        {
          path: "/images/gr-10/IMG_4741.jpeg",
          caption: "Day 8",
          link: "/adventures/gr-10/8",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4959.jpeg",
          caption: "Day 14",
          link: "/adventures/gr-10/14",
        },
        {
          path: "/images/IMG_5031.jpeg",
          caption: "Day 15",
          link: "/adventures/gr-10/15",
        },
        {
          path: "/images/gr-10/IMG_5164.jpeg",
          caption: "Day 18",
          link: "/adventures/gr-10/18",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5299.jpeg",
          caption: "Day 21",
          link: "/adventures/gr-10/21",
        },
        {
          path: "/images/gr-10/IMG_5761.jpeg",
          caption: "Day 37",
          link: "/adventures/gr-10/37",
        },
        {
          path: "/images/gr-10/IMG_5874.jpeg",
          caption: "Day 40",
          link: "/adventures/gr-10/40",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6376.jpeg",
          caption:
            "The HRP follows the border of Spain and France through countryside, wilderness, national parks, and some of Europe's most remote sheep pastures.",
        },
      ]}
    />
    <p>
      I got the idea to hike the Pyrenees after browsing the internet for long
      hikes in Europe. Somehow traversing this mountain range seemed special
      because it starts and ends with a swim in the ocean. You start at the
      Atlantic coast in Hendaye, France and end at the Mediterranean at
      Banyuls-sur-Mer, crossing the entire European continent at its narrowest
      part. 800 km in about 50 days seemed doable, but I was not prepared for
      the amount of altitude change on the HRP
      {" ("}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Haute_Randonn%C3%A9e_Pyr%C3%A9n%C3%A9enne"
      >
        Haute Route Pyrénéene
      </Link>
      {"). "}
      With 48,000m of total gain, this trek almost never stayed on flat land; it
      was always climbing or descending along the rugged ridgeline of the
      Pyrenees.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5148.jpeg",
          caption: "Day 18",
          link: "/adventures/gr-10/18",
        },
        {
          path: "/images/gr-10/IMG_5184.jpeg",
          caption: "Day 19",
          link: "/adventures/gr-10/19",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5213.jpeg",
          caption: "Day 20",
          link: "/adventures/gr-10/20",
        },
        {
          path: "/images/gr-10/IMG_5579.jpeg",
          caption: "Day 31",
          link: "/adventures/gr-10/31",
        },
      ]}
    />
    <p>
      Following the{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://whiteburnswanderings.wordpress.com/2018/06/04/the-hrp-a-pocket-guide/"
      >
        Paul Whiteburn pocket guide
      </Link>{" "}
      (a pdf downloaded on my phone) and{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://mapy.cz/"
      >
        Mapy.cz
      </Link>{" "}
      (a free offline map app with topo lines), I navigated the mountains in
      weeklong sections. At the end of each section was a town, where I could
      buy more groceries for the next section. The abundance of alternate routes
      also made the HRP kind of a choose-your-own-adventure, so nobody I
      encountered did exactly the same hike as me.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5318.jpeg",
          caption: "Best campsite",
          link: "/adventures/gr-10/22",
        },
        {
          path: "/images/gr-10/IMG_5425.jpeg",
          caption: "Highest altitude (3010m)",
          link: "/adventures/gr-10/26",
        },
      ]}
    />
    I ate calorie dense foods that did not spoil easily. In France, this meant
    cheese. In Spain, it was cured meats. Every once in a while I'd buy a
    tremendous meal at a restaurant.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5630.jpeg",
          caption: 'Tortilla "pizza"',
        },
        {
          path: "/images/gr-10/IMG_5455.jpeg",
          caption: "Real pizza (rare find)",
        },
        {
          path: "/images/gr-10/IMG_5934.jpeg",
          caption: "Couscous, a staple",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4860.jpeg",
          caption: "Second best meal",
          link: "/adventures/gr-10/11",
        },
        {
          path: "/images/gr-10/IMG_5885.jpeg",
          caption: "Best meal",
          link: "/adventures/gr-10/40",
        },
      ]}
    />
    <p>
      My journey took me to 3 countries, Spain, France and Andorra, although it
      felt like 5. Basque country was unique to itself, with its own language,
      food and culture, same with Catalonia.
    </p>
    <p>
      My favorite section is hard to say. Basque Country was wet, but I made
      friends. Lescun to Gavarnie was magnificent and popular. Gavarnie to
      Salardu was the most epic and difficult. Salardu to L’Hospitalet was wild
      and lonely. L’Hospitalet to Banyuls was surprisingly beautiful, and hot
      towards the end. Weather ranged from rain to alpine snowstorms to intense
      Mediterranean heat, but most days this summer it was sunny and nice.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_5396.jpeg",
          caption: "Bad weather",
          link: "/adventures/gr-10/25",
        },
        {
          path: "/images/gr-10/8cf1fb5c-92df-4e86-b0d3-70684506ea66.jpeg",
          caption: "Good weather",
          link: "/adventures/gr-10/34",
        },
      ]}
    />
    My french has gotten better. Talking to strangers was sometimes a necessity
    in the mountains, so I improved faster than I ever did in a classroom.
    However I never learned spanish or catalan, so when I needed help in Spain I
    used a combination of broken spanish, accidental french, and hand gestures
    to communicate. People in the Pyrenees were often multilingual and very
    forgiving.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4730.jpeg",
          caption: "Day 8",
          link: "/adventures/gr-10/8",
        },
        {
          path: "/images/gr-10/IMG_6020.jpeg",
          caption: "Day 42",
          link: "/adventures/gr-10/42",
        },
      ]}
    />
    Most of the time I walked alone, but some days were too technical or too
    boring for me to tackle solo. Whenever I did get to walk alongside someone,
    it was always a special time. These amazing people kept me safe and sane on
    the trail. Thank you for sharing a part of this adventure with me!
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_0284.jpeg", caption: "Tania, Tristan" },
        {
          path: "/images/gr-10/CD434F41-8F0F-40EB-AF7A-5E9C37DF5335.jpeg",
          caption: "Leo, Camille",
        },
        { path: "/images/IMG_5024.jpeg", caption: "Jacques" },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_5424.jpeg", caption: "Thivo, Jade" },
        { path: "/images/gr-10/IMG_5462.jpeg", caption: "Benjamin, Dan" },
        { path: "/images/gr-10/IMG_5687.jpeg", caption: "Pavol" },
      ]}
    />
    <p>
      It felt like so long ago when I started walking from Hendaye on the
      Atlantic coast. I had originally intended to do an easier trail (the{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://en.wikipedia.org/wiki/GR_10"
      >
        GR 10
      </Link>
      ), and I remember talking to a crazy German guy when we got off the train
      from Paris. He told me that he was going to hike the{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Haute_Randonn%C3%A9e_Pyr%C3%A9n%C3%A9enne"
      >
        Haute Route Pyrénéene
      </Link>{" "}
      (HRP), which runs parallel to the GR 10 at a higher elevation. As he sped
      off, leaving me in his dust, I thought to myself that the HRP would be way
      too difficult for my experience level. However only a week later on the
      trail, I met Tristan and Tania. They took me off the GR to walk a section
      of the HRP. From that point onwards I was hooked on the beauty of the
      Haute Route. I never came back to the GR 10, except where the two trails
      collided. Reaching the Mediterranean 47 days later and thinking back to
      this interaction, I feel a sense of accomplishment that was hard to
      imagine after each long day of hiking, each grueling climb.
    </p>
    The HRP was my first long trek, and my first time camping by myself. After
    the TMB and the HRP, I was done hiking for the time being. I continued to
    travel Spain and France for a bit longer, except I took the bus and train
    instead of walking. I have left the mountains to return to city life, but I
    know I will be back soon. The adventure continues! 💠
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4472.jpeg",
          caption: "Day 1 Start",
          link: "/adventures/gr-10/1",
        },
        {
          path: "/images/gr-10/IMG_6230.jpeg",
          caption: "Day 47 End",
          link: "/adventures/gr-10/47",
        },
      ]}
    />
    HRP totals:
    <div>
      <p>Days hiked: 45 + 2 rest days</p>
      <p>Nights camped (free): 24</p>
      <p>Nights camped in a paid campground: 11</p>
      <p>Nights slept in a refuge/gite: 10</p>
      <p>Nights slept in a hotel: 2</p>
    </div>
    <p>
      Total distance: 834km (518 mi), equivalent to crossing the Golden Gate
      Bridge 305 times
    </p>
    <p>
      Total elevation ascended: 48704m (159790 ft), equivalent to climbing the
      Eiffel Tower 162 times
    </p>
    <div>
      <p>Times hitchhiked (to go off route): 5</p>
      <p>Amount of cheese carried and eaten: 3kg</p>
      <p>Favorite cheese: Tomme de brebis</p>
      <p>Favorite peak: Canigou</p>
    </div>
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_6116.jpeg",
        },
        {
          path: "/images/gr-10/IMG_4948.jpeg",
        },
        {
          path: "/images/gr-10/IMG_4879.jpeg",
        },
      ]}
    />
  </Post>
);

export default GR;
