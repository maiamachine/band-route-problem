import getPoints40 from "./data/points40";
import getPoints200 from "./data/points200";
import getPoints500 from "./data/points500";

import shuffleArray from "./shuffleArray";
import formatData from "./formatData";
import createGraph from "./createGraph";
import calculateDistance from "./calculateDistance";

var currentPoints = getPoints40();
var shortestRouteDistance = null;
var counter = 0;

const createNewRoute = function(arr, callTracker) {

  if(callTracker > 0) {
    counter += 1;
  }

  const randomRoute = shuffleArray(arr);
  const formattedData = formatData(randomRoute);

  const totalDistance = calculateDistance(formattedData);
  const routeCounterElem = document.getElementById("routeCounterMessage").getElementsByTagName('span')[0];
  routeCounterElem.innerHTML = `${counter}`;

  if(!shortestRouteDistance || totalDistance < shortestRouteDistance) {
    shortestRouteDistance = totalDistance;
    const routeMapElem = document.getElementById("routeMap").getElementsByTagName('svg')[0];
    const distanceElem =  document.getElementById("distanceMessage");
    distanceElem.innerHTML = "";

    createGraph(formattedData);

    const h3Elem = document.createElement("h3");
    h3Elem.innerHTML = `Total Distance: ${totalDistance} miles`;
    document.getElementById("distanceMessage").appendChild(h3Elem);
  } else {
     if(counter < 100000) {
        setTimeout(() => {createNewRoute(currentPoints, 1)}, 0);
        document.getElementById("statusMessage").style.display = "block";
      }
  }
}

document.getElementById("get40CitiesBtn").addEventListener("click", function(){
  currentPoints = getPoints40();
  counter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get200CitiesBtn").addEventListener("click", function(){
  currentPoints = getPoints200();
  counter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get500CitiesBtn").addEventListener("click", function(){
  currentPoints = getPoints500();
  counter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("createRouteBtn").addEventListener("click", function(){
  createNewRoute(currentPoints);
})

createNewRoute(currentPoints);
