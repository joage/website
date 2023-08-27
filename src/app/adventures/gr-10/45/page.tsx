import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const GR = () => (
  <Post title="Night hike (HRP Day 45)" date="August 24, 2023" prev="/adventures/gr-10/44" next="/adventures/gr-10/46">

    <ImageGroup images={[{path: "/images/gr-10/IMG_6091.jpeg", caption: "Making eggs for breakfast"}]} />

    <ImageGroup images={[{path: "/images/gr-10/IMG_6094.jpeg", caption: "Climbing to Roc de Frausa"}]} />

    <ImageGroup images={[{path: "/images/gr-10/IMG_2205.jpeg", caption: "Roc de Frausa, 1421m"}]} />

    <ImageGroup images={[{path: "/images/gr-10/IMG_6101.jpeg", caption: "Forest walk. This is the last time the HRP crosses into Spain/Catalonia!"}]} />

    <ImageGroup images={[{path: "/images/gr-10/IMG_6105.jpeg", caption: "Lunch at Hostal dels Trabucayres"}]} />

    <ImageGroup images={[{path: "/images/gr-10/IMG_2234.jpeg", caption: "Starting the night hike at 10pm"}]} />

<p>Mas de la Fargassa to Border marker 564 - 26.19km and 1169m gained</p>
  </Post>
);

export default GR;
