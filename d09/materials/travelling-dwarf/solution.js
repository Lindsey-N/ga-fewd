console.log("WRITE YOUR SOLUTION IN HERE!");

// first, write out step by step, then write in loop

// d.move(); moves the dwarf "forward"
// d.orient("up down left or right"); changes what forward is

// step by step
var dwarf = 0;

d.orient("right");

while (dwarf < 4) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("down");

while (dwarf < 16) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("right");

while (dwarf < 6) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("up");

while (dwarf < 11) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("right");

while (dwarf < 6) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("down");

while (dwarf < 9) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
d.orient("right");

while (dwarf = 2) {
  d.move();
  dwarf = dwarf +1;
}

dwarf = 0;
//loop