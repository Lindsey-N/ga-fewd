var movies = []; 

$("button.search").on("click", function() {
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) { 
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li); 

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"],
      rating: monkey["Rated"] 
    }

    movies.push(stashedMovie);
  });
});

$("ul").on("click", function(event) {
  var title = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  }); 
})   


$("input.filter").on("click", function() {
  if(this.checked) {
    $("ul").children().remove();
    movies.forEach(function(aSingleMovie) {
    var scoreAsInt= parseInt(aSingleMovie["score"])
    if( scoreAsInt >50) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  })
  } else {
    $("ul").children().remove();
    movies.forEach(function(aSingleMovie) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    });
  }
});

$("input.adult").on("click", function() {
  if(this.checked) {
    $("ul").children().remove();
    movies.forEach(function(aSingleMovie) {
      var coolForKids = aSingleMovie["Rating"];
      if( coolForKids !== "R") {
        var li = $("<li>" + aSingleMovie["title"] + "</li>");
        $("ul.search-history").append(li);
      }
    })
  } else {
    $("ul").children().remove();
    movies.forEach(function(aSingleMovie) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    })
  }
}); // oh boy something is wrong. and Idk what.


// when checkbox is clicked
// - remove ui list
// - search through array
// - for each movie that meets criteria
// - insert into DOM

// I found the bug. If we run this second checkbox, we need to make sure the first one is still in play.
// ok this is a bonus. make them run separately first.

// lab, bring in final project to workshop