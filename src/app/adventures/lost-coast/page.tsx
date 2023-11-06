import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Northern Lost Coast Trail"
    date="May 2019"
    // prev="/adventures/"
    next="/adventures/skyline"
  >
    <iframe
      height="450"
      src="https://www.youtube.com/embed/5yWDAKizYXw?si=12W6ek2-yMIlNojC"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
    <p>
      The week before finals, Fischer, Emma, Daniel and I went to the Lost Coast
      of California for a destressing backpacking trip. We ate mussels, watched
      seals, took naps by the beach, listened to Ocean Man.
    </p>
  </Post>
);

export default Page;
