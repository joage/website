import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Test = () => (
  <Post title="Test" date="June 2023" prev="/adventures/pat">
    <ImageGroup images={[{path: "/images/IMG_3810.jpeg", caption: "Jagged peaks above Refugio Frey"}]} />

    This is a trst commit from george iphone's

  </Post>
);

export default Test;
