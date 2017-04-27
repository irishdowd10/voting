$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#over-18').show();
  } else if (age === 18) {
    alert("Welcome new voter!");
    $('#over-18').show();
  } else {
    $('#under-18').show();
  }
});
