import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Patagonia = () => (
  <Post title="Patagonia" date="March 2023" next="/adventures/test">
    <ImageGroup images={[{path: "/images/frey.jpg", caption: "Jagged peaks above Refugio Frey"}]} />

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. I
    d semper risus in hendrerit gravida rutrum quisque non. Purus semper e
    get duis at tellus at urna. Fringilla phasellus faucibus scelerisque eleifend
    . Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Vita
    e tempus quam pellentesque nec nam aliquam sem et. A pellentesque sit amet
    porttitor eget. Diam ut venenatis tellus in metus. Cursus sit amet dictum
    sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
    Nisi vitae suscipit tellus mauris a diam maecenas sed. Nisi lacus
    sed viverra tellus.
    

    <ImageGroup images={[{path: "/images/valley.jpg", caption: "Climbing above treeline on the second pass of the day"}]} />

    <ImageGroup images={[{path: "/images/descending.jpg", caption: "On the descent to Laguna Jakob"}, {path: "/images/boulders.jpg", caption: "Slow going down a soul-crushing boulder field"}]} />

    <ImageGroup images={[{path: "/images/jakob.jpg", caption: "Laguna Jakob"}]} />

    <ImageGroup images={[{path: "/images/descent.jpg", caption: "Lush valley on the hike out"}]} />

    <ImageGroup images={[{path: "/images/waterfall.jpg", caption: ""}]} />

  </Post>
);

export default Patagonia;
