import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Test = () => (
  <Post title="Test" date="June 2023" prev="/adventures/pat">
    <ImageGroup images={[{path: "/images/IMG_3810.jpg", caption: "Jagged peaks above Refugio Frey"}]} />

    This is a trst commit from george iphone's
    

    <ImageGroup images={[{path: "/images/valley.jpg", caption: "Climbing above treeline on the second pass of the day"}]} />

    <ImageGroup images={[{path: "/images/descending.jpg", caption: "On the descent to Laguna Jakob"}, {path: "/images/boulders.jpg", caption: "Slow going down a soul-crushing boulder field"}]} />

    <ImageGroup images={[{path: "/images/jakob.jpg", caption: "Laguna Jakob"}]} />

    <ImageGroup images={[{path: "/images/descent.jpg", caption: "Lush valley on the hike out"}]} />

    <ImageGroup images={[{path: "/images/waterfall.jpg", caption: ""}]} />

  </Post>
);

export default Test;
