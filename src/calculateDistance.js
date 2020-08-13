import {distance} from 'mathjs';

export default function(data) {

  const reducer = (accumulator, currentVal, index, arr) => {

    let nextIndex = index + 1;

    if (arr[nextIndex]) {
      let currentDistance = distance(arr[index], arr[nextIndex]);
      return accumulator + currentDistance;
    }
     return accumulator;
  }

  return Math.round(data.reduce(reducer, 0));
}
