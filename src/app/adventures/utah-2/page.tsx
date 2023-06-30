import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Canyon = () => (
  <Post title="Spooky and Peekaboo Canyons (Utah Part 2)" date="November 2022" prev="/adventures/utah-1" next="/adventures/pat">
    
    A collection of images from our walk through Spooky and Peekaboo Canyon, the day after completing Coyote Gulch (see previous post)!
    <ImageGroup images={[{path: "/images/PXL_20221123_185423308.MP_Original.jpeg", caption: ""}, {path: "/images/PXL_20221123_190113622.MP_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/IMG_7702_Original.jpeg", caption: ""}, {path: "/images/IMG_7725_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/PXL_20221123_202531125.MP_Original.jpeg", caption: ""}, {path: "/images/IMG_7705_Original.jpeg", caption: ""}]} />

    <ImageGroup images={[{path: "/images/PXL_20221123_214147315_Original.jpeg", caption: ""}]} />
  </Post>
);

export default Canyon;
