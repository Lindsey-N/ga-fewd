var far = "test"
var C = 0

$("button").on("click", function() {

cel = $("input").val();
C =parseInt(far);
F = C * 5 / 9 + 32;

$("span").text(F);
});

// Now add a dropdown that lets you choose which way to go! C -> F, or F -> C!
// also try the lifetime-supply lab

// The actual lab was jquery-city, say in issue that originally tried to use 
// .text with span, but after you were pointed in the right direction
// (.attr) it went super fast.