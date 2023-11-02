import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Shasta = () => (
  <Post
    title="Mt Shasta (14,180 ft)"
    date="May 13, 2023"
    prev="/adventures/pat"
    next="/adventures/leaving-ny"
  >
    <ImageGroup images={[{ path: "/images/IMG_1741.jpeg", caption: "" }]} />
    <p>
      Mount Shasta is one of my favorite mountains. Rising tall above the
      surrounding northern CA plains, you can see it from 2 hours away on the
      approach from Hwy 5. I didn’t take many photos on this trip because of how
      tired I was the entire time, but here’s the story of David and I summiting
      this 14,000 ft active volcano.
    </p>
    <p>
      One year ago, my coworker David flew up to SF to climb Shasta but we had
      to cancel the trip due to bad weather. This year he booked a more last
      minute flight, and in the days leading up to our planned outing we watched
      in anticipation as the forecast cleared up for an ideal summit attempt.
    </p>
    We got up in San Jose at around 5am to begin the 5 hr drive to the
    trailhead. This was a record snow year, and in our packs we had a bit more
    gear than usual. Avalanche danger was low, but we still decided to pick up
    some safety equipment from a shop in Mt Shasta City before making our way to
    Bunny Flat trailhead at 6,900ft.
    <ImageGroup
      images={[
        {
          path: "/images/IMG_3653.jpeg",
          caption: "David going up Avalanche Gulch",
        },
      ]}
    />
    As expected, the snow at the trailhead was so high that it completely
    covered the National Forest sign. We strapped on our snowshoes here and
    started the trek to Helen Lake following a steady conga line of climbers and
    skiers, who were easily visible against the pillowy slopes of Avalanche
    Gulch.
    <ImageGroup
      images={[
        { path: "/images/IMG_1717.jpeg", caption: "Camp spot at Helen lake" },
      ]}
    />
    <p>
      We made it into camp at 10,000 ft, just as the heat started to get
      unbearable. Settling into a tent site already dug out by some skiers the
      day before, we gathered snow in bags to melt for water. The rest of the
      day was uneventful as we cooked dinner, watched an epic sunset, and zipped
      into our sleeping bags by 8pm.
    </p>
    At 2 in the morning on Mothers day we woke up to start our climb in the
    dark. I slept poorly not because it was cold, but because the wind was so
    loud and the tent flapping kept me awake. Shuffling past some guided groups
    on the way up, we made it up the Red Banks, the steepest part of the climb
    about an hour after sunrise. The views here could not have been better, and
    we could see the shadow of the mountain far in the distance.
    <ImageGroup
      images={[
        {
          path: "/images/IMG_1727.jpeg",
          caption: "Taking a break at Red Banks",
        },
        {
          path: "/images/IMG_3670.jpeg",
          caption: "View of Shastina from Misery Hill",
        },
      ]}
    />
    <p>
      I really started feeling the altitude at around 12000 ft, and the going
      got slower. I decided to drop my pack at the base of Misery Hill and
      continue to the summit on crampons, one trekking pole and ice axe only.
    </p>
    David was a bit further ahead but we could now see the summit. Here is also
    when I realized I left my fruit snacks in the pack, and for the rest of the
    way up I thought about the sugar rush i was missing out on now but would be
    a nice treat later on during the descent.
    <ImageGroup
      images={[
        {
          path: "/images/IMG_3672.jpeg",
          caption: "Last push to the summit block",
        },
      ]}
    />
    At 8 am, we crested the final hill and all that was left was the last couple
    hundred feet of the summit block. 30 minutes later, we were on top. We had
    done it!
    <ImageGroup images={[{ path: "/images/IMG_1731.jpeg", caption: "" }]} />
    <ImageGroup
      images={[{ path: "/images/IMG_3683.jpeg", caption: "View from the top" }]}
    />
    The descent started slowly, and i was pretty exhausted by the time we got
    back to Red Banks. Some people started glissading (sliding on butt) down the
    steep slope to save energy, so we did the same. Not only was this super fun
    and fast, I was able to get some extra practice with my self-arrest
    technique.
    <ImageGroup
      images={[
        {
          path: "/images/IMG_3692.jpeg",
          caption: "Walking all the way back down",
        },
      ]}
    />
    At Helen lake I took a nap before packing up our stuff to continue down the
    mountain. This was easily the worst part of the trip, with all the skiers
    zooming past us while we post-holed down the melting hillside even with
    snowshoes on. I made a mental note to bring skis up to Helen lake for the
    descent if I ever did this again. David had more gas left in the tank than
    me, so he was far ahead but waited patiently close to the end so we could
    finish it together. Incredibly tired and blistered, we returned to the car
    at 5pm, just as the rental shop was about to close. What a climb!
  </Post>
);

export default Shasta;
