import ImageGroup from "@/components/ImageGroup";
import Post from "@/components/Post";

const Page = () => (
  <Post title="Red Rocks" date="December 2024" prev="/adventures/warren">
    <p className="italic">
      It's my third time climbing at Red Rocks (Nevada) this year, which is hard
      to believe. In January I was really new to outdoor bouldering, doing V1s
      and V2s, and in October I led my first multipitch. Both trips felt short,
      especially the October one but it was also too hot then. Now with the
      winter season getting into full swing, Margot invited me and Aaron on a
      trip with some of her friends. I packed my car and drove to Vegas, with
      the intention of camping at least a week, and meeting/finding partners on
      site once my friends left. The following is a sort of ongoing journal of
      my climbing, sorted by newest entries first. Enjoy!
    </p>
    <p className="font-bold text-lg">Day 6 - 12/9</p>
    <p>
      Actual rest day, forced myself not to climb and found a cool spot (Cafe
      Mong) to do some remote consulting work. Ate Hawaiian food from the
      restaurant Antidote next door.
    </p>
    <p className="font-bold text-lg">Day 5 - 12/8</p>
    <p>
      Supposed to be a rest day, but I got distracted by bouldering. Pulled up
      to Red Spring after sleeping in and eating a big breakfast. Met some cool
      folks trying Monkey Wrench (V7), and I watched them crimp in agony. John
      let me borrow his guidebook. Tried Cherry Garcia (V3) few times but was
      too scared to throw for the big jug. Ryan and Lily were working Turtle on
      a Half Shell (V5-) and my curiosity overrode my desire to rest my fingers.
      It didn't help that 5 more people showed up and flashed it using our pads.
      I gave that problem a good 8-9 burns and it finally went after using a
      weird toe hook beta. Just as the sun set! It was my first V5. Ate dinner,
      grocery shopped, found a nice parking lot, called my friends and went to
      bed.
    </p>
    <p className="font-bold text-lg">Day 4 - 12/7</p>
    <p>
      Everyone I know is leaving, so I'll be on my own after today. Alex and I
      found a chill crag called Moderate Mecca where I could practice placing
      some trad gear. As usual, we missed the direct approach path to the upper
      tier and found ourselves going the roundabout way. But at least it was
      still only 30 minutes. Alex led Crackers in my Soup (5.4) and set up a
      gear anchor up top. I led the same pitch after he came down. Then Alex led
      Valentine's Day (5.8+) and I top-roped it. Fun right hand jams! We ended
      the day with Ace of Hearts, a tricky 5.10d we both top-roped using the
      anchor of Valentine's Day. Alex onsighted, I fell once at the crux. The
      desert sandstone continues to deliver! I think i'm starting to get used to
      the types of holds here, and the trad lead was not as scary as I imagined.
      At night I met up with Aaron right before he flew back to the bay. Sounded
      like he had a successful crag day as well!
    </p>
    <p className="font-bold text-lg">Day 3 - 12/6</p>
    <p>
      Today was a pumpfest. Alex and I woke up before sunrise to get into the
      Red Rock Scenic Loop as it opened at 6am. Our objective was Unimpeachable
      Groping, a 7-pitch sport route on Ginger Buttress. You could see the top
      of the Buttress from afar and it looked like a great line, bolted by Jorge
      Urioste. The approach took us 2 hours, getting lost a few times on the
      way. I thought we would be first at the base, but Alex correctly predicted
      otherwise. There were two parties ahead of us. At 11am we finally started
      pitch 1, which Alex led without using the tree at the bottom. I led pitch
      2-3 linked up, which felt pretty hard for me at 5.10. I took once on pitch
      2. At the belay ledge of pitch 4 we had a great view of the area, and it
      was really fun climbing but getting late in the day. We decided to forgo
      the Blade Runner 2-pitch extension that we planned to do, and just make it
      to the top of pitch 7, rappel down. Alex was a beast on pitches 4-6, I led
      the last pitch and we made it to the top for a gorgeous sunset. Rapping
      down in the dark was an adventure. At one station, I made the mistake of
      leaving a stopper knot in the rope before pulling. Luckily we caught it
      early and retrieved the rope end while still attached to the anchor. We
      made it to the ground at 7:45, and back to the car at 10pm. What a day,
      the climbing was so sustained, my forearms never felt so pumped in my
      life.
    </p>
    <p className="font-bold text-lg">Day 2 - 12/5</p>
    <p>
      Did Disclosure with Aaron and Margot. We started on a trail from Kraft
      parking lot, navigated up a wash to Midway Ledge. Aaron led the first
      pitch with Margot belaying. The joy of climbing in a team of 3 was
      realized this day. Sharing belay ledges, taking abundant photos and
      generally having a great time on the wall, we cruised to the top of Tank
      Peak in 5 pitches. Margot led the super scenic last pitch. After signing
      the register, we followed a bunch of day hikers down the wrong side of the
      mountain. In fact the real descent path was a class 3 gully back to Midway
      Ledge where we started. We retraced our steps, and with Aaron leading the
      way on the correct path now, we made it back to the car at sunset. Later,
      I met up with my buddy Alex who drove up from LA today, in order to scheme
      up some plans for the coming days.
    </p>
    <p className="font-bold text-lg">Day 1 - 12/4</p>
    <p>
      Drove to Vegas from SF, took way too long packing and left at 1:30. Made
      it to LV at 10:30, linked up with Margot, Aaron and friends who flew in.
      Slept in car outside their Airbnb.
    </p>
    <ImageGroup
      images={[
        {
          path: "/images/rr/",
          caption: "",
        },
      ]}
    />
  </Post>
);

export default Page;
