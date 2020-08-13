import getPoints40 from "./data/points40";
import getPoints200 from "./data/points200";
import getPoints500 from "./data/points500";

import shuffleArray from "./shuffleArray";
import formatData from "./formatData";
import createGraph from "./createGraph";
import calculateDistance from "./calculateDistance";

var currentPoints = getPoints40();
var shortestRouteDistance = null;
var routeCounter = 0;

const createNewRoute = function(arr, recursive) {

  const randomRoute = shuffleArray(arr);
  const formattedData = formatData(randomRoute);
  const totalDistance = calculateDistance(formattedData);
  const routeCounterElem = document.getElementById("routeCounterMessage").getElementsByTagName('span')[0];
  const distanceElem =  document.getElementById("distanceMessage");
  const statusMessage = document.getElementById("statusMessage");

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
     if(routeCounter < 100000) {
        setTimeout(() => {createNewRoute(currentPoints, true)}, 100);
        statusMessage.style.display = "block";
      }
  }
}

document.getElementById("get40CitiesBtn").addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  currentPoints = getPoints40();
  routeCounter = 1;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get200CitiesBtn").addEventListener("click", function(){
  const activeBtns = document.querySelectorAll(".active");
  activeBtns.forEach(button => button.classList.remove('active'));
  this.className += " active";
  currentPoints = getPoints200();
  routeCounter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("get500CitiesBtn").addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  currentPoints = getPoints500();
  routeCounter = 0;
  shortestRouteDistance = null;
  createNewRoute(currentPoints);
})

document.getElementById("createRouteBtn").addEventListener("click", function(){
  createNewRoute(currentPoints);
})

createNewRoute(currentPoints);
