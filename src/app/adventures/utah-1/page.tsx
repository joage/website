import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const Coyote = () => (
  <Post title="Coyote Gulch (Utah Part 1)" date="November 2022" next="/adventures/pat">
    <ImageGroup images={[{path: "/images/PXL_20221122_231312330_Original.jpeg", caption: "Looking up at Jacob Hamblin Arch"}]} />

    <p>This year Fischer invited me, Chloe, and Emma over to his family home for Thanksgiving. I had never been to Utah before, so I was ready to experience red rocks and snowy peaks while catching up with some college friends.</p>

    <p>On Saturday morning I drove up to SF to pick up Fischer and Chloe. The plan was to meet Emma at Barstow and drive directly to southern Utah, where we’d spend 3 nights car-camping and one night backpacking Coyote Gulch, all before having thanksgiving dinner in Fischers hometown.</p>

    <p>Needless to say, these trips hardly ever go to plan and we got quickly sidetracked in one Nevada town along the way.</p>

    <ImageGroup images={[{path: "/images/vegas.jpeg", caption: "Booo, this isnt hiking!"}]} />
    
    Luckily Fischer and Chloe found us a friend’s floor to crash on after our night out so we wouldn’t have to camp. The next morning, craving some more natural scenery, we drove off to our first stop at Bryce Canyon Natl Park. 

    <ImageGroup images={[{path: "/images/IMG_2811.jpeg", caption: "Bryce Canyon"}]} />

    <p>Continuing on after a quick hike, we arrived at the town of Escalante, UT where everything was closed. We turned off the main road on to a dirt track where we pitched tents and spent our first cold night in the desert.</p>

    <ImageGroup images={[{path: "/images/IMG_7625_Original.jpeg", caption: "The Gulch near Crack in the Wall"}]} />

    <p>Coyote gulch is a stretch of the Escalante River with steep red rock walls, not narrow enough to be a slot canyon but still requires wading through knee deep sections of icy cold water. Notable arches, natural bridges, and mars-like landscapes made this an ideal “best of” southern Utah destination, according to Fischer who did all the planning this trip.</p>

    <ImageGroup images={[{path: "/images/IMG_2829.jpeg", caption: "Crack in the Wall"}, {path: "/images/IMG_2820.jpeg", caption: "Packs don't fit in the crack"}]} />

    <p>In order to access the gulch, we had to continue driving down this dirt track, park, and hike out to a point known as Crack in the Wall. Here we descended a narrow slit, while Fischer lowered our bags by rope over the rim of the canyon.</p>

    <ImageGroup images={[{path: "/images/IMG_2827.jpeg", caption: "Chloe after surviving the crack"}]} />

    Hiking inside the gulch felt more like a game of not getting our socks and shoes wet. The four of us each chose different strategies at stream crossings - barefoot wading, risky long jumps with shoes on, or a combo of both. Fortunately it had not rained in a while so water levels were okay. We soon made it to a nice cave that we’d call home for the night.

    tent spot - caption coyotes

    Day two in the gulch was even more spectacular than the first, with the highlights being Jacob Hamblin Arch and spotting petroglyphs high up on the canyon walls.

    At Jacob Hamblin, we once again made use of Fischer’s rope in order to exit the Gulch. Although no particular move was difficult, having the security of a rope in hand made the slabby exit a lot more fun. 

    Once out of the gulch, we enjoyed a mind blowing sunset across a martian landscape. We thought we were close to being back in the car, but the last stretch of route-finding in the dark was our final challenge. Luckily we figured it out and with the backpacking trip completed, we were free the next day to explore some bonus slot canyons before heading back to civilization.
  </Post>
);

export default Coyote;
