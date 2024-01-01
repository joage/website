import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Ridge walk (GR 10 Day 4)"
    date="July 14, 2023"
    prev="/adventures/gr-10/3"
    next="/adventures/gr-10/5"
    stravaID="10454107731"
  >
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4615.jpeg", caption: "Crête d'Iparla" },
      ]}
    />
    <p>
      Last night from my campsite I could hear the village down below partying
      until 4am, quite the surreal experience being 800m above on a ridge.
    </p>
    Today was a day of extreme weather. Strong winds in the morning made it
    super difficult to walk—I tried to compensate but suddenly a gust in the
    other direction would mess me up. Nonetheless the skies were stunningly
    clear and the higher I got on the ridge the further I could see. Catching a
    glimpse of the high Pyrénées peaks far in the distance gave me a rush of
    adrenaline-I would be arriving there in a week!
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4618.jpeg",
          caption: "Pic d'Iparla, first 1000m peak of the trail",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4629.jpeg",
          caption: "Moment of shade after being exposed on the ridge",
        },
      ]}
    />
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4640.jpeg", caption: "Pic Buztanzelai" },
      ]}
    />
    The descent into Saint-Étienne felt like slowly entering an oven. As the
    winds died, the heat became unbearable and it got up to 97 degrees in the
    valley. I tried to go as fast as possible, because there was no shade of
    course.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4641.jpeg",
          caption: "Such a clear day, but hot",
        },
      ]}
    />
    Making it into town I searched for the nearest cold glass of soda. At the
    café, everyone around me was having a steak frites, so I got one as well.
    Everything else in town was closed due to the holiday so there really was
    nothing to do, and it was also too hot to hike onward. Lying down at a park
    later to cook down, I met a Dutch backpacker who walked all the way from
    Holland, taking 3 whole months, yet she still had one more month to go in
    her trek to Santiago.
    <p>
      As i debated whether to keep going today, I saw people jumping into the
      river. That seemed like a much more suitable activity than hiking in the
      intense heat, so I decided to end my day here, camp in the town
      campground, and go for a swim.
    </p>
    The evening ended with a thunderstorm and a rainbow, and finally it was cool
    enough to sleep. Tomorrow should be a chill day as well. I booked a hostel
    in Saint Jean Pied de Port, so I’m excited to chill out, not camp, and take
    my first shower since Paris!
    <p>
      Crête d'Iparla to Saint-Étienne-de-Baïgorry - 17.48km and 730m gained.
      Happy Bastille Day!
    </p>
  </Post>
);

export default GR;
