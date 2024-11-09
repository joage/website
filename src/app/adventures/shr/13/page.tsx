import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";
import Link from "next/link";

const Page = () => (
  <Post
    title="Bishop (SHR Day 13)"
    date="August 2, 2024"
    prev="/adventures/shr/12"
    // next="/adventures/"
    stravaID="12047589523"
  >
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/1.jpeg",
          caption: "Last pass of our high route!",
        },
      ]}
      thinner
    />
    Today was the last day of our journey! When we woke up we discussed
    continuing on the high route but we both felt satisfied with the passes we'd
    done, and with Emma's ankle, it would be safest to just hike out on the
    Piute Pass trail into North Lake.
    <p>A short but steep descent took us down to French Canyon.</p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/0.jpeg",
          caption: "Reached the trail",
        },
      ]}
    />
    As the clouds rolled in, we began the last climb. A steady grade took us
    slowly up the canyon until we broke free of the trees. We had a great view
    of Mt Humphreys, a magnificent 13er that can be seen from Bishop.
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/3.jpeg",
          caption: "Mt Humphreys",
        },
      ]}
    />
    Across the valley to the south stood a towering ridge of peaks, the Glacier
    Divide. If we had continued the high route, we'd be crossing this massive
    divide via Snow Tongue Pass. I would remember this view as we returned to
    the city, and I knew we'd be back to complete the high route some other
    year.
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/4.jpeg",
          caption:
            "Peaks of the Glacier Divide, the next part of the high route.",
        },
      ]}
    />
    Since Emma was going a bit slower because of her ankle, we decided that I
    would hike out first and try to hitchhike to our car. We parked my car at
    South Lake, but we were exiting at North Lake.
    <p>
      Pretty soon, I made it to Piute Pass, and from there it was all downhill
      to the car. Rain started coming down just as I reached the road and stuck
      out my thumb.
    </p>
    I was picked up almost instantly by a pair of hikers who had also just
    finished a trek. They took me to the fork of the road leading to South Lake,
    and from there it took about 30 minutes to get my second ride, a family of 5
    from LA on a fishing trip.
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/5.jpeg",
          caption: "Two hitchhikes later, made it to the car.",
        },
      ]}
      thinner
    />
    I was relieved to see that the car was intact, and no bears had broken in. I
    drove back to North Lake just as Emma reached the trailhead. We headed into
    town for a meal, and to prepare for the long drive home.
    <ImageGroup
      images={[
        {
          path: "/images/shr/13/6.jpeg",
          caption: "Celebratory beer in Bishop",
        },
        {
          path: "/images/shr/13/2.jpeg",
          caption: "New shoe vs my shoe",
        },
      ]}
    />
    <p>Merriam Lake to North Lake trailhead - 15.53 mi and 2198 ft gained.</p>
    <p className="font-bold pt-5">SHR Totals:</p>
    <div>
      <p>Days hiked: 13</p>
      <p>Passes climbed: 17</p>
      <p>Total distance: 120 miles</p>
      <p>Total elevation gained: 34,000 ft</p>
    </div>
    <div>
      <p>Times hitchhiked: 2</p>
      <p>Amount of Annie's mac and cheese eaten: 10 boxes</p>
      <p>Hardest pass: Sky Pilot Col</p>
      <p>Bears seen: 0</p>
      <p>Lakes swam in: many</p>
    </div>
    <p>
      This trip report was only told from my point of view! See Emma's
      perspective{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://youtu.be/I-Me9gM-OnQ?si=H_I8kbZT4DPi6TFD"
      >
        here
      </Link>{" "}
      and Isabel's perspective{" "}
      <Link
        className="text-cyan-600"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/p/C-EU6twyTkQ/"
      >
        here.
      </Link>
    </p>
    <p className="font-bold pt-5">Closing thoughts</p>
    <p className="italic">
      What a mind blowing two weeks it has been! Our first off-trail route was a
      big success, and it only made me want to spend more time in these
      mountains.
    </p>
    <p className="italic">
      Every single day tested our skills in the backcountry, and rewarded us
      with landscapes and encounters like no other trip had offered me before.
      Each pass we climbed revealed to us the scale of this mountain range,
      making us feel small and our actions insignificant under the grandness of
      the Sierra Nevada.
    </p>
    <p className="italic">A life time of exploring awaits!</p>
    <ImageGroup
      images={[
        {
          path: "/images/shr/2/5.jpeg",
          caption: "",
        },
        {
          path: "/images/shr/3/3.jpeg",
          caption: "",
        },
        {
          path: "/images/shr/11/7.jpeg",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
