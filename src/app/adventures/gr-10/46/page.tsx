import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const GR = () => (
  <Post title="Le Perthus (HRP Day 46)" date="August 25, 2023" prev="/adventures/gr-10/45" next="/adventures/gr-10/47">

    <ImageGroup images={[{path: "/images/gr-10/IMG_5761.jpeg", caption: "Where I woke up"}]} />


    <ImageGroup images={[{path: "/images/gr-10/IMG_5804.jpeg", caption: "Interesting peaks above second lake"}, {path: "/images/gr-10/IMG_5805.jpeg", caption: "Lots of boulders to traverse"}]} />

<p>Border marker 564 to Pic des Quatre Termes - 27.18km and 1263m gained</p>
  </Post>
);

export default GR;
