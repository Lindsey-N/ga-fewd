$("a").on("click", function() {
  //console.log("This button was clicked")
  var red = $("input#red").val();
  var green = $("input#green").val();
  var blue = $("input#blue").val();

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  $("div#wrapper").css("background", color);
}); // YES IT WORKS

//time to randomize!

  var red = $("input#red").val();
  var green = $("input#green").val();
  var blue = $("input#blue").val();

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  $("div#wrapper").css("background", color);

  // last 2 lines should still work. it's just making the vars random btwn 0 and 255