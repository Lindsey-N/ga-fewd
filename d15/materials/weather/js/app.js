// tasks for lab: 1) show current temp, 2) figure out how to display weather
//icon, 3) Tell us the forecast for 24 hours from now

var city = "stand-in";
var webpage ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9ed97022dfa9cc477a27a12bf980882e";
var temp = 0;
var icon = "string"

$("button").on("click", function() {
  city = $("input").val();
  webpage = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9ed97022dfa9cc477a27a12bf980882e";
  $.getJSON(webpage, function(data) {
    temp = (data["main"]["temp"]);
    $("span.temperature").text(temp);

    console.log(data["weather"]["icon"]);// why is this giving me undefined?

    icon = (data["weather"]["icon"]); // still giving me undefined...what is wrong?
    // I can see the icon on the api, why can't I get it here? I tried as a string, a number won't work
    console.log(icon);

    //$(".icon").attr("src", ["weather"]["icon"]);
      //this seems to be the right syntax now? I still don't know how to do this

    //I also still have no idea what to DO with this icon information...
    // I can tell you that what I want to do is have a string that will connect to the src in
    // the img.icon, where I input the icon that the data gives me into the correct place to
    // get the image I want. But I don't know what I need to do for that.


    // found the problem! I didn't see that it was in array format! that means I need to put the array number ([0]) AFTER weather!

  }); // this data is ONLY available until this function is closed. So you need to do everything here INSIDE the function
});


// 2nd part of lab, flesh out wireframe