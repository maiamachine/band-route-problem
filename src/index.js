import getPoints40 from "./data/points40";
import getPoints200 from "./data/points200";
import getPoints500 from "./data/points500";

import shuffleArray from "./shuffleArray";
import formatData from "./formatData";
import createGraph from "./createGraph";
import calculateDistance from "./calculateDistance";
import setButtonActive from "./setButtonActive";

var currentPoints = getPoints40();
var shortestRouteDistance = null;
var routeCounter = 0;

const createNewRoute = function(arr) {

  const randomRoute = shuffleArray(arr);
  const formattedData = formatData(randomRoute);
  const totalDistance = calculateDistance(formattedData);

  const routeCounterElem = document.getElementById("routeCounterMessage").getElementsByTagName('span')[0];
  const distanceElem =  document.getElementById("distanceMessage");

  routeCounter += 1;
  routeCounterElem.innerHTML = `${routeCounter}`;

  if(!shortestRouteDistance || totalDistance < shortestRouteDistance) {
    
    shortestRouteDistance = totalDistance;
    distanceElem.innerHTML = "";

    createGraph(formattedData);

    const h3Elem = document.createElement("h3");
    h3Elem.innerHTML = `Total Distance: ${totalDistance} miles`;
    distanceMessage.appendChild(h3Elem);

  } else {
     if(routeCounter < 1000) {
        setTimeout(() => {createNewRoute(currentPoints)}, 100);
      }
  }
}

document.getElementById("get40CitiesBtn").addEventListener("click", function(){

  if(this.classList.contains("active")) {
    return;
  }
  
  setButtonActive(this);
  currentPoints = getPoints40();
  routeCounter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get200CitiesBtn").addEventListener("click", function(){

  if(this.classList.contains("active")) {
    return;
  }

  setButtonActive(this);
  currentPoints = getPoints200();
  routeCounter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get500CitiesBtn").addEventListener("click", function(){

  if(this.classList.contains("active")) {
    return;
  }

  setButtonActive(this);
  currentPoints = getPoints500();
  routeCounter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("createRouteBtn").addEventListener("click", function(){
  createNewRoute(currentPoints);
})

createNewRoute(currentPoints);
