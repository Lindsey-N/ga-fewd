// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #big to correspond to image that was clicked

$("#first").click(function() {
  $("img#big").attr("src", "img/1.jpg");
});

$("#second").click(function() {
  $("img#big").attr("src", "img/2.jpg");
});

$("#third").click(function() {
  $("img#big").attr("src", "img/3.jpg");
});

$("#fourth").click(function() {
  $("img#big").attr("src", "img/4.jpg");
});