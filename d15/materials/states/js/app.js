var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}

$("button#ct").on("click", function() {
  $("h1").text(ct["name"]);
  $("span.capital").text(ct["capital"]);
  $("span.governor").text(ct["governor"]);
  $("li#first-senator").text(ct["usSenators"][0]);
  $("li#second-senator").text(ct["usSenators"][1]);
});

$("button#ny").on("click", function() {
  $("h1").text(ny["name"]);
  $("span.capital").text(ny["capital"]);
  $("span.governor").text(ny["governor"]);
  $("li#first-senator").text(ny["usSenators"][0]);
  $("li#second-senator").text(ny["usSenators"][1]);
});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=imperial&appid=9ed97022dfa9cc477a27a12bf980882e", function(data) {
  console.log(data);
});// THIS with the API key has put this info in OUR javascript! we just got info from another server!