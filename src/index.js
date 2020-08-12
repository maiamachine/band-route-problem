import shuffleArray from './shuffleArray';
import formatData from './formatData';
import createPath from './createPath';
import createCircles from './createCircles';
import calculateDistance from './calculateDistance';

var points = [{"x":150,"y":172},{"x":822,"y":244},{"x":619,"y":220},{"x":243,"y":433},{"x":9,"y":48},{"x":541,"y":402},{"x":540,"y":212},{"x":479,"y":646},{"x":545,"y":90},{"x":811,"y":355},{"x":314,"y":325},{"x":337,"y":487},{"x":675,"y":76},{"x":629,"y":375},{"x":809,"y":105},{"x":269,"y":135},{"x":423,"y":592},{"x":558,"y":288},{"x":622,"y":70},{"x":740,"y":495},{"x":508,"y":79},{"x":40,"y":236},{"x":818,"y":252},{"x":811,"y":480},{"x":458,"y":220},{"x":293,"y":220},{"x":582,"y":275},{"x":188,"y":542},{"x":300,"y":235},{"x":690,"y":649},{"x":166,"y":565},{"x":400,"y":80},{"x":121,"y":498},{"x":603,"y":587},{"x":729,"y":89},{"x":723,"y":23},{"x":171,"y":609},{"x":523,"y":449},{"x":668,"y":102},{"x":328,"y":531},{"x":468,"y":588},{"x":600,"y":239},{"x":312,"y":636},{"x":344,"y":112},{"x":267,"y":184},{"x":292,"y":615},{"x":21,"y":401},{"x":650,"y":266},{"x":535,"y":393},{"x":796,"y":598},{"x":29,"y":412},{"x":528,"y":363},{"x":344,"y":152},{"x":314,"y":35},{"x":138,"y":191},{"x":643,"y":341},{"x":350,"y":423},{"x":319,"y":542},{"x":797,"y":659},{"x":66,"y":296},{"x":761,"y":574},{"x":26,"y":270},{"x":129,"y":509},{"x":24,"y":312},{"x":89,"y":635},{"x":454,"y":34},{"x":717,"y":189},{"x":476,"y":457},{"x":471,"y":212},{"x":74,"y":457},{"x":406,"y":221},{"x":701,"y":313},{"x":719,"y":642},{"x":573,"y":424},{"x":250,"y":231},{"x":748,"y":334},{"x":318,"y":453},{"x":815,"y":92},{"x":198,"y":47},{"x":79,"y":451},{"x":502,"y":582},{"x":471,"y":355},{"x":509,"y":257},{"x":727,"y":290},{"x":476,"y":281},{"x":609,"y":576},{"x":772,"y":72},{"x":263,"y":156},{"x":411,"y":203},{"x":100,"y":254},{"x":29,"y":208},{"x":625,"y":349},{"x":789,"y":163},{"x":300,"y":224},{"x":637,"y":57},{"x":789,"y":153},{"x":429,"y":427},{"x":571,"y":355},{"x":426,"y":348},{"x":620,"y":545},{"x":601,"y":322},{"x":600,"y":441},{"x":519,"y":357},{"x":59,"y":262},{"x":878,"y":621},{"x":712,"y":592},{"x":202,"y":341},{"x":300,"y":41},{"x":87,"y":647},{"x":735,"y":60},{"x":289,"y":110},{"x":126,"y":133},{"x":375,"y":584},{"x":421,"y":469},{"x":775,"y":341},{"x":656,"y":534},{"x":225,"y":634},{"x":520,"y":339},{"x":865,"y":515},{"x":457,"y":378},{"x":293,"y":141},{"x":202,"y":293},{"x":347,"y":423},{"x":186,"y":284},{"x":572,"y":600},{"x":319,"y":412},{"x":685,"y":73},{"x":845,"y":248},{"x":834,"y":339},{"x":391,"y":571},{"x":139,"y":346},{"x":635,"y":352},{"x":401,"y":117},{"x":381,"y":281},{"x":471,"y":552},{"x":793,"y":585},{"x":279,"y":520},{"x":783,"y":520},{"x":374,"y":38},{"x":458,"y":479},{"x":869,"y":15},{"x":626,"y":216},{"x":148,"y":604},{"x":560,"y":109},{"x":342,"y":141},{"x":426,"y":536},{"x":697,"y":414},{"x":283,"y":18},{"x":172,"y":181},{"x":206,"y":227},{"x":763,"y":291},{"x":439,"y":124},{"x":523,"y":388},{"x":338,"y":211},{"x":30,"y":593},{"x":187,"y":498},{"x":126,"y":86},{"x":4,"y":58},{"x":566,"y":329},{"x":524,"y":486},{"x":788,"y":334},{"x":346,"y":194},{"x":506,"y":231},{"x":135,"y":190},{"x":288,"y":406},{"x":200,"y":515},{"x":739,"y":91},{"x":300,"y":439},{"x":725,"y":420},{"x":83,"y":612},{"x":665,"y":336},{"x":848,"y":246},{"x":865,"y":521},{"x":3,"y":406},{"x":187,"y":431},{"x":462,"y":564},{"x":530,"y":648},{"x":708,"y":173},{"x":325,"y":96},{"x":4,"y":480},{"x":530,"y":512},{"x":780,"y":126},{"x":614,"y":610},{"x":359,"y":431},{"x":343,"y":640},{"x":453,"y":182},{"x":648,"y":477},{"x":447,"y":258},{"x":23,"y":465},{"x":455,"y":215},{"x":534,"y":396},{"x":869,"y":337},{"x":511,"y":290},{"x":683,"y":291},{"x":328,"y":370},{"x":160,"y":497},{"x":144,"y":203},{"x":717,"y":222},{"x":31,"y":376},{"x":452,"y":600}];

var shortestRouteDistance = null;



const createNewRoute = function(arr) {

  const randomRoute = shuffleArray(arr);
  const formattedData = formatData(randomRoute);
  const totalDistance = calculateDistance(formattedData);

  if(!shortestRouteDistance || totalDistance < shortestRouteDistance) {
    shortestRouteDistance = totalDistance;
    createPath(formattedData);
    createCircles(formattedData);

    const h2Elem = document.createElement("h2");
    h2Elem.innerHTML = `Total Distance: ${totalDistance}`;
    document.getElementById("distance").appendChild(h2Elem);
  } else {
    setTimeout(() => createNewRoute(points), 0);
  }
}

document.getElementById("createRouteBtn").addEventListener("click", function(){
  const routeMapElem = document.getElementById("routeMap").getElementsByTagName('svg')[0];
  const distanceElem =  document.getElementById("distance");
  distanceElem.innerHTML = "";
  routeMapElem.innerHTML = "";
  createNewRoute(points);
})

createNewRoute(points);
