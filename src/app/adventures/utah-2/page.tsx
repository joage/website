import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Canyon = () => (
  <Post title="Spooky abd Peekaboo Canyons (Utah Part 2)" date="November 2022" prev="/adventures/utah-1" next="/adventures/pat">
    <ImageGroup images={[{path: "/images/PXL_20221122_231312330_Original.jpeg", caption: "Looking up at Jacob Hamblin Arch"}]} />

  </Post>
);

export default Canyon;
