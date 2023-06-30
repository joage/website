import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Canyon = () => (
  <Post title="Spooky and Peekaboo Canyons (Utah Part 2)" date="November 2022" prev="/adventures/utah-1" next="/adventures/pat">
    
    A collection of images from our walk through Spooky and Peekaboo Canyon, the day after completing Coyote Gulch (see previous post)!
    <ImageGroup images={[{path: "/images/PXL_20221123_185423308.MP_Original.jpeg", caption: ""}, {path: "/images/PXL_20221123_190113622.MP_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/IMG_7702_Original.jpeg", caption: ""}, {path: "/images/IMG_7725_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/IMG_7705_Original.jpeg", caption: ""}, {path: "/images/PXL_20221123_202531125.MP_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/PXL_20221123_204050247_Original.jpeg", caption: ""}, {path: "public/images/PXL_20221123_204517817_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/PXL_20221127_175135918_Original.jpeg", caption: ""}]} />

    Hot springs and back to CA, the days after thanksgiving

    <ImageGroup images={[{path: "/images/IMG_2882.jpeg", caption: ""}, {path: "images/IMG_2901_Original.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/PXL_20221127_175135918_Original.jpeg", caption: ""}]} />

    Most of the pictures featured here aren't mine and are actually taken by Fischer, Emma, and Chloe! The Heimburgers were awesome hosts, thanks for an amazing thanksgiving dinner!"
  </Post>
);

export default Canyon;
