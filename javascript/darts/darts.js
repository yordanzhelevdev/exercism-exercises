export const solve = (x = 0, y = 0, points = 0) => {

  //Check if x and y are numbers
  if (isNaN(x) && isNaN(y)) {
    //Get the biggest radius value
    let biggestRadius = x >= y ? x : y;
    
    if (biggestRadius <= 10 && biggestRadius >= 6) {
      points = 1;
    }

    else if (biggestRadius <= 5 && biggestRadius > 1) {
      points = 5;
    }

    else {
      points = 10;
    }

    return points;
  }
  else {
    return points;
  }
};

