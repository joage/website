import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Crete = () => (
  <Post
    title="Eight Cretan Sunsets"
    date="July 2022"
    prev="/adventures/helens"
    next="/adventures/sill"
  >
    <p>
      One sunset for each night of the week Ayla and I spent on the island of
      Crete 🇬🇷
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/crete/1669.jpeg",
          caption: "Aspri Limni",
        },
        {
          path: "/images/crete/1743.jpeg",
          caption: "Kedrodasos",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/crete/1792.jpeg",
          caption: "Chania",
        },
        {
          path: "/images/crete/1858.jpeg",
          caption: "Lera Cave",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/crete/1904.jpeg",
          caption: "Hora Sfakion",
        },
        {
          path: "/images/crete/1965.jpeg",
          caption: "Frangokastello",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/crete/1979.jpeg",
          caption: "Rethymno",
        },
        {
          path: "/images/crete/2015.jpeg",
          caption: "Heraklion",
        },
      ]}
    />
  </Post>
);

export default Crete;
