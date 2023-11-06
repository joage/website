import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Skyline to the Sea Trail"
    date="July 2019"
    prev="/adventures/lost-coast"
    next="/adventures/whitney"
  >
    <iframe
      height="450"
      src="https://www.youtube.com/embed/0oXk8kpDpS4?si=wjaPv3HbJDEUQze_"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
    <p>
      Skyline to the Sea is a classic Bay Area trail that traditionally starts
      from Castle Rock State Park and ends by the Pacific Ocean at Waddell
      Beach. Nithin and I added a day by starting from my parents' home in
      Saratoga to make it and a 4 day trip in total, around 40 miles.
    </p>
  </Post>
);

export default Page;
