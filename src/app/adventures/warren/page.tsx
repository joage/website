import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post
    title="Mount Warren (12,350ft)"
    date="October 23, 2024"
    prev="/adventures/north-fork"
    next="/adventures/rr"
    stravaID="12735228031"
  >
    <ImageGroup
      images={[
        {
          path: "/images/warren/5.JPG",
          caption: "Anthony and I on Mt Warren",
        },
        {
          path: "/images/warren/0.JPG",
          caption: "Up the gully",
        },
      ]}
    />
    On my last day in Bishop, I met up with my buddy Anthony to do a hike. I had
    not seen him in a few years so it was great to catch up while trudging up
    the pile of rocks that is Mount Warren.
    <p>
      There was no trail after the first mile, but finding the right canyon to
      go up was not too difficult.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/warren/6.JPG",
          caption: "Last 100 ft",
        },
      ]}
    />
    From the summit we could see Bridgeport, Mono Lake, and the Inyos across the
    valley. This was Anthony's 90th SPS peak, and my third.
    <ImageGroup
      images={[
        {
          path: "/images/warren/4.JPG",
          caption: "Mono Lake from the summit",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/warren/2.JPG",
          caption: "Looking north",
        },
      ]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/warren/3.JPG",
          caption: "The descent",
        },
      ]}
    />
    We got back to the cars on Tioga Road around 3:30 pm, and I drove into
    Tuolumne to do some bouldering while Anthony continued north toward Tahoe
    for the weekend.
  </Post>
);

export default Page;
