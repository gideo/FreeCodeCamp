$(document).ready(function() {
  var x = $("#writeMe");

  (function(){
    if(navigator.geolocation){
      x.text("Geolocation success.");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.text("Geolocation is not supported by this browser.");
    }
  })();

  function requestApi() {
    var weatherApi = "http://http://api.openweathermap.org/data/2.5/weather?lat="
  }

});