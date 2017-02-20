// Function to get random phrase

$(document).ready(function(){
  var myObj = JSON.parse($("#quotes_json").html());
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var jsonLength = Object.keys(myObj).length;
  var randomNumber = getRndInteger(0, jsonLength);
  $("#test").text(myObj[randomNumber].phrase);
})

// Function to refresh page by clicking on a button
$("button").click(function() {
  location.reload();
});