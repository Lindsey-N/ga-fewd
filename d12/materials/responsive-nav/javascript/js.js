var show = 0


$ ("#symbol").click(function() {
  if (show===0) {
    $("#menu").show();
    show = 1;
  } else {
    $("#menu").hide();
    show = 0; // apparently there's another "on.click" function that I've 
              // totally forgotten about. look it up to ensure I don't
              // forget again.
  }
});



$(window).resize(function() {
  if ($(window).width() < 500) {
    $("#menu").hide();
    $("#symbol").show();


    $("#menu").css("top", "100%");
    $("#menu").css("height", "280%");
    $("#menu").css("width", "100%");
    $("#menu").css("right", "0");

    $("#menu a").css("display", "block");
    $("#menu a").css("text-align", "center");
    $("#menu a").css("margin-top", "4%");
  } else {

    $("#menu").show();
    $("#symbol").hide();

    $("#menu a").css("margin-top", "0");
    $("#menu a").css("text-align", "initial");
    $("#menu a").css("display", "inline");

    $("#menu").css("top", "40%");
    $("#menu").css("right", "3%");
    $("#menu").css("height", "60%");
    $("#menu").css("width", "15%");
  }


}); // here go things to change the 2 menu styles between one another.