import ImageGroup from '@/components/ImageGroup';
import Post from '@/components/Post';

const TMB = () => (
  <Post title="Courmayeur (TMB Day 1)" date="July 2, 2023" prev="/adventures/leaving-ny" next="/adventures/tmb-2">
    <ImageGroup images={[{path: "/images/tmb/IMG_3993.jpeg", caption: "High point of the day!"}]} />

    <p>On July 1st my friend Emma and I met up in Geneva. From here we boarded a bus to Courmayeur, Italy to begin our Tour du Mont Blanc half circuit. Over the next 5 days we would traverse alpine terrain across 3 countries, staying in huts and hostels along the way, before arriving in Chamonix, France. Manifesting good weather, food, and company, we both had high hopes for an epic European adventure.</p>

    <ImageGroup images={[{path: "/images/tmb/IMG_3947.jpeg", caption: "Leaving Courmayeur"}]} />

    <p>Day 1 began with a 1300 meter climb. We left Courmayeur around 8am, fueled by pizza from the night before and excitement to be in the mountains.</p>

    <ImageGroup images={[{path: "/images/tmb/IMG_3955.jpeg", caption: "Rifugio Bertone"}]} />

    After passing Rifugio Bertone, we decided to take the alternate route up Mont de la Saxe, since we were making good time so far. This route follows a ridge line up to 2500m before dipping down to Col Sapin. We met an older French couple who was following the same path as us; we’d end up having dinner with them later.

    <ImageGroup images={[{path: "/images/tmb/IMG_4002.jpeg", caption: "The descent from Col Sapin"}]} />
    
    <ImageGroup images={[{path: "/images/tmb/IMG_4007.jpeg", caption: "High route was worth it"}]} />

    The alternate route joined back up with the TMB at Rifugio Bonatti, a super scenic hut against the backdrop of the Mont Blanc Massif. We continued on, traversing some melting snow fields and passing by old ruins of former alpine lodgings. 

    <ImageGroup images={[{path: "/images/tmb/IMG_4020.jpeg", caption: "Approaching Bonatti, clouds lifted so we could see the Mont Blanc Massif"}]} />

    At the end of the final ascent, I thought we still had more to go but Emma informed me we had arrived at our destination, Rifugio Elena. Great timing because I was exhausted at this point and we made it just in time for dinner at the refuge!

    <ImageGroup images={[{path: "/images/tmb/IMG_4039.jpeg", caption: "Seeing cows means that we are getting close to a hut"}]} />

    Day 1 ended with 2000m of elevation gain and 23km traveled. The scenery today set the bar high for the next four days to come!

    <ImageGroup images={[{path: "/images/tmb/IMG_4008.jpeg", caption: ""}, {path: "/images/tmb/IMG_4033.jpeg", caption: ""}]} />
    <ImageGroup images={[{path: "/images/tmb/IMG_3976.jpeg", caption: ""}]} />
  </Post>
);

export default TMB;
