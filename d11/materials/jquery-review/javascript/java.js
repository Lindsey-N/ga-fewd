$("div.box").css("background", "orange"); // turns bg blue

// insert html into something which has no html
$(".change").append("<p>This is a paragraph</p>");

//change size of box by clicking it
// $(".change").click(function() {
//   $("div.change").css("height", "500px");
//   $("div.change").css("width", "500px");
// });

// $(".other").click(function() {
//   $("div.other").css("height", "500px");
//   $("div.other").css("width", "500px");
// });

//change size of box by clicking on it WITHOUT relying on ids/classes
// $("div").click(function() {
//   $(this).css("height", "500px");
//   $(this).css("width", "500px");
// }); // 'this' is a selector which means "thing I am hovering over
//     // specifically right now. I think you still need the "div"

//instructor did a neato thing with making the box shrink again,
// look in solutions in materials to see it

//Now we're changing the box size every time it's clicked!
