console.log("HELLOOOOOO")

$("button").on("click", function() {
  console.log("I WAS CLICKED!");
  $("p.cool").text("Hey! You clicked a button! Rad!");
});


// Write code such that when a user enters text in the input
// and presses the button, That text appears as the H1

// my solution

$("button").on("click", function() {

  var UserText = $("input[type=text]").val();
  $("h1").text(UserText);

});

// Jeff's solution
// step 1, literally write out step by step, what you need to do in english. it helps
// can be called pseudo code

$("button").on("click", function() {
//thing to do: test EACH PART before moving on. This means you don't get stuck b/c 1 of your 50 steps doesn't work
  var UserText = $("input").val();
  $("h1").text(UserText);
}); // he ended up with the same answer as me just had way more intervening test steps, which I should totally do

$("p.cool").css("color", "blue");