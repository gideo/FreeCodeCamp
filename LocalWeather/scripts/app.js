$(document).ready(function() {
  var x = $("#writeMe");
  var longitude, latitude;
  (function(){
    if(navigator.geolocation){
      x.text("Geolocation success.");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.text("Geolocation is not supported by this browser.");
    }

  })();

  function showPosition(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude
    $("#long").text("Latitude: " + longitude)
    $("#lati").text("Longitude: " + latitude);
  }

//   if(navigator.geolocation) {
//     //alert("SUCCESS");
//     navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
//   } else {
//     locationError("Your browser doesn't support Geolocation!");
//   }

  function requestApi() {
    var weatherApi = "http://http://api.openweathermap.org/data/2.5/weather?lat="
  }

});