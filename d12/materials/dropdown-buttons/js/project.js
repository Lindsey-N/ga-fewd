$("#file").click(function() {
  $("#dropdownF").show();
});

$("#edit").click(function() {
  $("#dropdownE").css("display", "block");
});

$("#file").focusout(function() {
  $("#dropdownF").css("display", "none");
});

$("#edit").focusout(function() {
  $("#dropdownE").css("display", "none");
});