var on = 1;

var run = 0

var xend = prompt("What is the ending X coordinate?");

var yend = prompt("And the Y coordinate?");

var x = ("What is the dwarf's starting X coordinate?");

var y =("And the starting Y coordinate, please?");

alert("thank you for your patience. Now please watch as the dwarf navigates the maze!");

if (g.at(x + 1, y) = 0) {
  d.orient ("right");
  run = 1;
} else if (g.at(x - 1, y) = 0) {
  d.orient ("left");
  run = 2;
} else if (g.at(x, y + 1) = 0) {
  d.orient ("down");
  run = 3;
} else {
  d.orient ("up");
  run = 4;
}

while (on = 1) {
  if (run = 1) {
    d.orient("right")
    d.move();
    x = x + 1;
    if (g.at (x + 1, y) = "color grey") { // I know there's a way to do if returns true or if returns false, but I can't find it atm
    
    } else {
      if (g.at(x, y + 1) = 0) {
        run = 3;
      } else if (g.at(x, y - 1) = 0) {
        run = 4;
      } else {
        run = 2;
      }
    }
  }

  else if (run = 2) {
    d.orient("left")
    d.move();
    x = x - 1;
    if (g.at (x - 1, y) = "color grey") { // I know there's a way to do if returns true or if returns false, but I can't find it atm
    
    } else {
      if (g.at(x, y + 1) = 0) {
        run = 3;
      } else if (g.at(x, y - 1) = 0) {
        run = 4;
      } else {
        run = 1;
      }
    }
  }

  else if (run = 3) {
    d.orient("down")
    d.move();
    y = y + 1;
    if (g.at (x, y + 1) = "color grey") { // I know there's a way to do if returns true or if returns false, but I can't find it atm
    
    } else {
      if (g.at(x + 1, y) = 0) {
        run = 1;
      } else if (g.at(x -1, y) = 0) {
        run = 2;
      } else {
        run = 4;
      }
    }
  }

  else if (run = 4) {
    d.orient("up")
    d.move();
    y = y - 1;
    if (g.at (x, y - 1) = "color grey") { // I know there's a way to do if returns true or if returns false, but I can't find it atm
    
    } else {
      if (g.at(x + 1, y) = 0) {
        run = 1;
      } else if (g.at(x -1, y) = 0) {
        run = 2;
      } else {
        run = 3;
      }
    }
  } else {
    alert("If you are recieving this prompt, it means that something has gone horribly wrong. I'm just putting this here to have a final else statement")
  }

  if (x = xend && y = yend) {
    on = 0;
  }

}

alert("Hooray! The dwarf got to the end of the path! Thank you for playing!");
