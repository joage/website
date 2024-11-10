import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Rocktober in Bishop!"
    date="October 12-23, 2024"
    prev="/adventures/sur"
    next="/adventures/north-fork"
  >
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/3.jpeg",
          caption: "Birthday Boulder, Buttermilks",
        },
      ]}
    />
    Back in September I got laid off from my tech job, which meant I had plenty
    of free time. Thus began a series of jaunts in the Eastern Sierra during the
    month of October. I ran, hiked, climbed, and soaked in hot springs in the
    Bishop area for two weeks, all while car camping for free.
    <p>
      I had been to Bishop many times before, but never went climbing. This time
      I brought 2 crashpads, rope, and my shoes. I wanted to see what all the
      hype was about, and Bishop (and Red Rocks) did not disappoint!
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/2.jpeg",
          caption: "Hero Roof",
        },
        {
          path: "/images/rocktober/7.jpg",
          caption: "Iron Man Crack",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/12.JPG",
          caption: "David approaching the Happys",
        },
        {
          path: "/images/rocktober/9.JPG",
          caption: "Happy Boulders",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/0.jpeg",
          caption: "Celestial Trail, Happys",
        },
      ]}
      thinner
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/8.JPG",
          caption: "Owens River Gorge!",
        },
        {
          path: "/images/rocktober/11.JPG",
          caption: "Margot on the Pub Wall",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/5.JPG",
          caption: "Slab climbing in Pine Creek Canyon",
        },
        {
          path: "/images/rocktober/4.JPG",
          caption: "With Alex and Boyu at the third belay of The Big Deal",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/14.JPG",
          caption: "Britt on Big Bad Wolf, Red Rocks NV",
        },
        {
          path: "/images/rocktober/6.jpg",
          caption: "Perfect Poser",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/10.JPG",
          caption:
            "Tuolumne Meadows. Thought I was on The Scoop, but turns out it was something else",
        },
      ]}
    />
    <p className="font-bold">Partial tick list (not to be result oriented):</p>
    <div className="flex">
      <div className="w-1/2">
        <p className="pb-1">Buttermilk Boulders</p>
        <p>- Hero Roof, V0</p>
        <p>- Robinson's Rubber Tester, V0</p>
        <p>- Birthday Left, V1</p>
        <p>- Inner Sanctum, V1</p>
        <p>- Iron Man Crack, V1</p>
        <p>- Birthing Experience, V1</p>
        <p>- Funky Tut, V3</p>
      </div>
      <div className="w-1/2">
        <p className="pb-1">Happy Boulders</p>
        <p>- Elephant Graveyard, V0</p>
        <p>- Celestial Trail, V0</p>
        <p>- Monkey Hang, V3</p>
        <div className="pt-5">
          <p className="pb-1">Tuolumne Meadows</p>
          <p>- Creek Arete #1, V0</p>
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="w-1/2">
        <p className="pb-1">Owens River Gorge</p>
        <p>- Not too Stout, 5.7 Lead</p>
        <p>- Abitafun, 5.9 Lead</p>
        <p>- Cult Classic, 5.9 Lead</p>
        <p>- Director's Cut, 5.10a Lead</p>
        <p>- Featured Attraction, 5.10b Lead</p>
      </div>
      <div className="w-1/2">
        <p className="pb-1">Pine Creek Canyon</p>
        <p>- The Big Deal, 5.9 (4 pitches trad, follow)</p>
        <div className="pt-5">
          <p className="pb-1">Red Rocks, Nevada</p>
          <p>- Perfect Poser, V1</p>
          <p>- Big Bad Wolf, 5.9 (4 pitches, lead)</p>
        </div>
      </div>
    </div>
    I wanted to climb everything I saw, there was so much stuff to do! Was lucky
    to run into friendly strangers at the boulders, and to meet up with friends
    who were down to rope up for some routes. The climbing is magical here and
    I've been thoroughly inspired. I want to come back again once I'm stronger
    and more confident in my climbing!
    <ImageGroup
      images={[
        {
          path: "/images/rocktober/13.JPG",
          caption: "",
        },
        {
          path: "/images/rocktober/1.JPG",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
