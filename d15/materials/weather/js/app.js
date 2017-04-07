// tasks for lab: 1) show current temp, 2) figure out how to display weather
//icon, 3) Tell us the forecast for 24 hours from now

var city = "stand-in"
var webpage ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9ed97022dfa9cc477a27a12bf980882e"

$("button").on("click", function() {
  city = $("input").val();
  webpage = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9ed97022dfa9cc477a27a12bf980882e"
  $.getJSON(webpage, function(data) {
    temp = (data["main"]["temp"]);
    console.log(temp);
    $("span.temperature").text(temp);
  }); // this data is ONLY available until this function is closed. So you need to do everything here INSIDE the function
});


// 2nd part of lab, flesh out wireframe