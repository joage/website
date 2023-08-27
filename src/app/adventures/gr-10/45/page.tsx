import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const GR = () => (
  <Post title="Leaving Andorra (HRP Day 37)" date="August 16, 2023" prev="/adventures/gr-10/36" next="/adventures/gr-10/38">

    <ImageGroup images={[{path: "/images/gr-10/IMG_5761.jpeg", caption: "Where I woke up"}]} />


    <ImageGroup images={[{path: "/images/gr-10/IMG_5804.jpeg", caption: "Interesting peaks above second lake"}, {path: "/images/gr-10/IMG_5805.jpeg", caption: "Lots of boulders to traverse"}]} />

<p>Coms de Jan to L'Hospitalet-près-l'Andorre - 21.37km and 1369m gained, 1984m lost</p>
  </Post>
);

export default GR;
