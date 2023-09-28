import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const GR = () => (
  <Post
    title="Cheese (GR 10 Day 7)"
    date="July 17, 2023"
    prev="/adventures/gr-10/6"
    next="/adventures/gr-10/8"
  >
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_0248.jpeg",
          caption: "Berger's hut at Col d'Irau",
        },
      ]}
    />
    Today’s highlight was meeting a shepherd (berger) at Col d’Irau.
    <p>
      From my bivy site I started the morning’s climb without eating much
      breakfast, so by the time I made it to Col d’Irau I was pretty hungry. I
      saw a cheese shop on my map earlier, and here in front of me a large sign
      with a sheep on it confirmed this.
    </p>
    Following the sign, I ran into a couple doing the GR 10 whom I’d met 2 days
    earlier, so I asked them if they were interested in my plans to get cheese.
    We approached the little house together, and rang the bell. Out came
    Charles, the shepherd who was a bit surprised to see us. Apparently he had
    not gotten too many visitors this summer.
    <ImageGroup
      images={[
        {
          path: "/images/gr-10/IMG_4701.jpeg",
          caption: "Charles the shepherd and his flock",
        },
      ]}
    />
    <p>
      Luckily Tristan and Tania were with me because I could not understand a
      word of the shepherd’s Basque-accented French. We tasted and bought some
      of his sheep’s cheese, which was one of the best I’ve had.
    </p>
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4700.jpeg", caption: "Fromage de Brebis" },
        { path: "/images/gr-10/IMG_4708.jpeg", caption: "Farm life" },
      ]}
    />
    The shepherd then invited us into his kitchen for some coffee, and we
    obliged.
    <p>
      The rest of the day’s hike was rather uninteresting, but I was already
      super satisfied with the morning’s events. At the Pic d’Occabé I parted
      ways with Tristan and Tania and went on ahead towards Iraty.
    </p>
    <ImageGroup
      images={[
        { path: "/images/gr-10/IMG_4715.jpeg", caption: "Approaching Occabé" },
      ]}
    />
    On this way to Iraty I passed through a forest where people were picnicking
    and looking for mushrooms. I discovered that camping options were not ideal,
    so I called the Chalets d’Iraty to book a stay inside the gîte for 15 euro.
    I had a meal in the restaurant with some fellow hikers, my first sit down
    dinner of the trip so far!
    <p>Bivy after Kaskoleta to Chalets d'Iraty - 15.02km and 1051m gained.</p>
  </Post>
);

export default GR;
