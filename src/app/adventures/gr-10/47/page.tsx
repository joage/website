import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const GR = () => (
  <Post title="Sunrise (HRP Day 47)" date="August 26, 2023" prev="/adventures/gr-10/46">

    <ImageGroup images={[{path: "/images/gr-10/IMG_5761.jpeg", caption: "Where I woke up"}]} />


    <ImageGroup images={[{path: "/images/gr-10/IMG_5804.jpeg", caption: "Interesting peaks above second lake"}, {path: "/images/gr-10/IMG_5805.jpeg", caption: "Lots of boulders to traverse"}]} />

<p>Pic des Quatre Termes to Banyuls Plage - 14.61km and 147m gained, 1257m lost</p>
  </Post>
);

export default GR;
