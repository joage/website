import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const GR = () => (
  <Post title="Bidarray (GR 10 Day 3)" date="July 13, 2023" prev="/adventures/gr-10/2" next="/adventures/gr-10/4">
    <ImageGroup images={[{path: "/images/gr-10/IMG_4575.jpeg", caption: "Farm life"}]} />

    Day 3 began with an easy traverse to Col des Veaux where I planned to eat lunch at a restaurant in Spain right across the border. Low hanging clouds obscured the views during my walk.

    <ImageGroup images={[{path: "/images/gr-10/IMG_4564.jpeg", caption: "Foresty morning walk"}]} />

    Arriving at the restaurant Venta Burkaitz, I found out they didnt open until noon and I was an hour early. Not keen on waiting, I continued on and ate my own lunch, my last can of Danish fish with some bread, at the next Col.

    <ImageGroup images={[{path: "/images/gr-10/IMG_4570".jpeg", caption: "Lunch at Mehatseko Lepoa"}]} />
  </Post>
);

export default GR;
