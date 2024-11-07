import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mammoth (SHR Day 8)"
    date="July 28, 2024"
    prev="/adventures/shr/7"
    // next="/adventures/shr/9"
    stravaID="12007805121"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/8/1.jpeg",
          caption:
            "Minaret Lake. Will have to come back here with climbing gear",
        },
      ]}
    />

    <p>Minaret Lake to Devils Postpile - 7.1 mi and 610 ft gained.</p>
  </Post>
);

export default Page;
