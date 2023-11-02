import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Cloud = () => (
  <Post
    title="Clouds Rest and Lundy Canyon"
    date="October 8-9, 2022"
    prev="/adventures/sill"
    next="/adventures/utah-1"
  >
    <ImageGroup
      images={[
        {
          path: "/images/clouds/yose_2553.jpeg",
          caption: "Lundy Canyon. Fall does exist in California!",
        },
      ]}
    />
    <p>
      Emma and I wanted to see some fall colors in the Sierra Nevada before the
      snows came in this winter. We picked out a few hikes including Clouds
      Rest, a prominent peak overlooking Yosemite Valley.
    </p>
    We left San Jose on a Friday night to get as close to Yosemite as we could
    without entering the park. Around midnight we pulled off a quiet National
    Forest road to sleep in the car.
    <p>
      The next day we managed to drive past the national park border without
      being stopped for payment. Our morning luck continued as we reached the
      Tenaya lake parking lot before the crowds showed up. We began our day hike
      at 7am.{" "}
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/clouds/yose_2404.jpeg",
          caption: "High country in Yosemite",
        },
      ]}
    />
    <p>
      For the first hour we climbed into a rolling granite landscape sparsely
      dotted with evergreens. The October sun was hotter than we expected but it
      felt nice to be out in this crisp Sierra air. At 10 am we reached the
      summit ridge and clambered over some easy flat boulders to get to the top.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/clouds/yose_2419.jpeg",
          caption:
            "Half dome and the reverse tunnel view from the summit of Clouds Rest",
        },
      ]}
    />
    <p>
      On the way down I was slow because my feet began to hurt from the new
      shoes I brought. Towards the end Emma kindly offered to switch shoes with
      me and we made it down to the trailhead. We ate lunch at the lake and
      planned our next move.
    </p>
    <ImageGroup
      images={[
        { path: "/images/clouds/yose_2430.jpeg", caption: "Tenaya Lake" },
      ]}
    />
    Since I didn't want to further injure my feet we decided to drive down to
    the eastern side of the sierra, chill for a bit at Mono lake, and
    dispersed-camp along Hwy 120.
    <ImageGroup
      images={[{ path: "/images/clouds/yose_2464.jpeg", caption: "Mono Lake" }]}
    />
    <ImageGroup
      images={[{ path: "/images/clouds/yose_2472.jpeg", caption: "Camp" }]}
    />
    <p>
      On Sunday morning we drove another hour to to Lundy Canyon, which was an
      area recommended to us by a ranger at the Mono Basin visitor center. The
      gently ascending canyon turned out to a beautiful fall hike. Highlights
      included a beaver dam on a reflective lake, thousands of aspens, and 3
      waterfalls. Because of my injury I stopped after the first waterfall but
      Emma made it to the top of the second.
    </p>
    <ImageGroup
      images={[{ path: "/images/clouds/yose_2543.jpeg", caption: "" }]}
    />
    <ImageGroup
      images={[
        { path: "/images/clouds/yose_2483.jpeg", caption: "" },
        { path: "/images/clouds/yose_1619.jpeg", caption: "" },
        { path: "/images/clouds/yose_2510.jpeg", caption: "" },
      ]}
    />
    <ImageGroup
      images={[{ path: "/images/clouds/yose_2549.jpeg", caption: "" }]}
    />
    <ImageGroup
      images={[
        {
          path: "/images/clouds/yose_2566.jpeg",
          caption: "Beaver dam in Lundy Canyon",
        },
      ]}
    />
    <p>
      On the way down I paused many times to chill, journal, and take in the
      scenery. We regrouped at the trailhead around 2pm to begin the drive home.
    </p>
    <ImageGroup
      images={[
        { path: "/images/clouds/yose_2429.jpeg", caption: "" },
        { path: "/images/clouds/yose_2446.jpeg", caption: "" },
        { path: "/images/clouds/yose_2471.jpeg", caption: "" },
      ]}
    />
  </Post>
);

export default Cloud;
