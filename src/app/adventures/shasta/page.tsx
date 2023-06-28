import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Shasta = () => (
  <Post title="Shasta" date="May 2023" prev="/adventures/pat" next="/adventures/leaving-ny">
    <ImageGroup images={[{path: "/images/frey.jpg", caption: "Jagged peaks above Refugio Frey"}]} />

    <p>Earlier this year I was given a somewhat unexpected opportunity to travel to Argentina for work. Knowing that the south of the country possessed beautiful mountains, I took up this offer excitedly in hopes of exploring them.</p>

    <p>After a week of brutal late summer heat in Buenos Aires, Ayla and I stashed our laptops with a kind coworker and boarded a plane to chilly Bariloche. There was rain forecasted the entire time we were going to be there. As soon as we arrived, Ayla discovered she had gotten severe food poisoning. This set our hiking plans back one day, during which I sampled some local delicacies while she rested and made a miraculous recovery.</p>

    Undeterred by this delay, we set off the next morning for the town of Villa Catedral. A missed bus ride and 10 km of road walking later, we arrived at the trailhead. The trail to Refugio Frey itself was very pretty. It carried us up the rolling hillsides, into a rainforest, and finally over the rocky ledges to Laguna Toncek. My pack felt noticeably lighter than what I was used to while backpacking in the states, because instead of carrying a tent we would sleep in refugios, alpine huts along the way.

    <ImageGroup images={[{path: "/images/IMG_5864_Original.jpeg", caption: "Hiking up to Frey"}]} />
    
    <p>At the refugio we met some nice Brazilians and a solo Argentinian hiker/musician whom we’d continue to run into over the next couple of days.</p>

    Day two was when the real climbing began. Topping out the first pass, we were treated with a stunning view of the surrounding area and an equally good view of the descent, which looked incredibly steep.

    <ImageGroup images={[{path: "/images/IMG_5909_Original.jpeg", caption: "Refugio Frey"}, {path: "/images/IMG_9946.jpeg", caption: "Alpine lake above Frey"}]} />

    A dip into the valley below only meant that we had to regain the elevation in the afternoon, but at least we found a friend while stopping for a lunch break.
  
    <ImageGroup images={[{path: "/images/lookingpass.jpeg", caption: "Top of the first pass"}, {path: "/images/IMG_5970_Original.jpeg", caption: "A crested caracara"}]} />
    
    <ImageGroup images={[{path: "/images/valley.jpg", caption: "Climbing above treeline on the second pass of the day"}]} />

    By the time we made it up to the next pass, we could see our destination, a tiny house by the lake far below us.

    <ImageGroup images={[{path: "/images/descending.jpg", caption: "On the descent to Laguna Jakob"}, {path: "/images/boulders.jpg", caption: "Slow going down a soul-crushing boulder field"}]} />

    Many scree-sliding steps later, day 2 ended at Refugio Jakob with a warning from the host. There was a storm coming in tomorrow, and the next section of trail, which was already difficult in good weather, may be impassable in the rain.

    <ImageGroup images={[{path: "/images/jakob.jpg", caption: "Laguna Jakob"}]} />


    Waking up the next morning feeling rather spooked by the conditions and tired from the endless up-and-down the day before, we decided to hike down into town instead of continuing on to the next refugio. This turned out to be the right decision, because we had also underestimated how much food to bring on the trip. By the end of the third day we had no more snacks left and stumbled into town hungry for empanadas.
    
    <ImageGroup images={[{path: "/images/descent.jpg", caption: "Lush valley on the hike out"}]} />
    <ImageGroup images={[{path: "/images/waterfall.jpg", caption: ""}]} />
    
    To our surprise, outside the empanada shop a group of (North) Americans spotted our Osprey gear and greeted us in English. After confirming they were not about to kidnap us, we hopped into their van and got a ride to our campsite for the night. As it turned out, we had just met the guy who established most of the sport climbing routes in the area. Dylan and his friends took us out climbing the following day at Lago Gutierrez.

    <ImageGroup images={[{path: "/images/holeyclimb.jpeg", caption: "My first outdoor top-rope!"}, {path: "/images/IMG_6067.jpeg", caption: "Russell leading 5.11a"}]} />
    
    After all, this overcast weather made for a moody but extremely epic trip in the mountains of Patagonia. I was surprised at how varied the landscapes were, and how kindly we were treated by strangers. Bariloche is a special place and I definitely want to come back to revisit the area someday.
  </Post>
);

export default Shasta;
