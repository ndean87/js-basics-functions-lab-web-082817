// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  if (streetNum > 42) {
    return streetNum - 42;
  } else if (streetNum < 42) {
    return 42 - streetNum;
  } else {
    return 0;
  }
}

function distanceFromHqInFeet(streetNum) {
  numOfBlocks = distanceFromHqInBlocks(streetNum);
  return numOfBlocks * 264
}


function distanceTravelledInFeet (start, finish) {
  if (start < finish) {
    return (finish - start) * 264;
  } else {
    return (start - finish) * 264;
  }
}

function calculatesFarePrice (start, finish) {
  const distance = distanceTravelledInFeet(start, finish);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
