import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const TMB = () => (
  <Post title="Courmayeur (TMB Part 1)" date="July 1, 2023" prev="/adventures/leaving-ny">
    <ImageGroup images={[{path: "/images/IMG_3911.jpeg", caption: "Bike ride in Geneva"}]} />

    <p>In June I quit my job in California and decided to travel for a bit this summer.</p>

  </Post>
);

export default TMB;
