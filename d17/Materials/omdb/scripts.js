var movies = []; // this is an array. We're gonna dump info in here!

$("button.search").on("click", function() {
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) { // this function is a portal. Monkey is the keyword to mean "this set of data from this api"
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li); //means "add in this li to the html at the ul class search history"

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"]
    }// this var will disappear unless we put it in the array, which exists outside of this function.

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
  }); // this needs to be here because we need to listen to the lis. but they DON'T EXIST when the page loads. This lets us listen to things that don't yet exist
})    // this essentially calles a parent, which also calls all it's children (not positive what this means...)



$("button.filter").on("click", function() {
  $("ul").children().remove();
  //this is shortcut
  movies.forEach(function(aSingleMovie) { // ForEach means "array, iterate through yourself and run this code on you"
    var scoreAsInt= parseInt(aSingleMovie["score"])
    if( scoreAsInt >50) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  })
});

$("button.return").on("click", function() {
  $("ul").children().remove();
  movies.forEach(function(aSingleMovie) {
    var li = $("<li>" + aSingleMovie["title"] + "</li>");
    $("ul.search-history").append(li);
  });
});


//  Long way 

//   var index = 0;

//   while (index < movies.length) { // movies.length gives me # of parts in the movies array. we want less than b/c index starts counting at 0, and movies.length starts at 1
//     var scoreAsInt = parseInt(movies[index]["score"]);
//     if ( scoreAsInt > 50) {
//       var li = $("<li>" + movies[index]["title"] + "</li>");
//       $("ul.search-history").append(li);
//     }
//     index = index + 1;
//   }
  // get rid of all the bad movies
  //  -search through array
  //  -for each movie that meets criteria
  //  -insert into DOM
//})

// we are not going to cross reference the li and the array. what we're instead going to do is 
// get rid of the list, and remake it with new parameters. this means we don't have to cross reference anything