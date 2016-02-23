$(document).ready(function() {
  var x = $("#writeMe");
  var appid = "3bbd55527ee1ad0e5f326312904163d3";
  var longitude, latitude, weatherApi;
  var json;
  (function(){
    if(navigator.geolocation){
      x.text("Geolocation success.");
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      x.text("Geolocation is not supported by this browser.");
    }

  })();

  function getPosition(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude
    $("#long").text("Latitude: " + latitude)
    $("#lati").text("Longitude: " + longitude);
    weatherApi = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+appid;

    x.text(weatherApi);
    // $.getJSON(weatherApi, function (data) {
    //   console.log(JSON.stringify(data))
    // });
    json = (function() {
      var json = null;
      $.ajax({
        'async': false;
        'global': false;
        'url': weatherApi;
        'success': function(data) {
          json = data;
        }
      });
      return json;
    })();
    $("#weatherApi").text(JSON.stringify(json));
  }

  function requestApi() {
    var weatherApi = "http://http://api.openweathermap.org/data/2.5/weather?lat="
  }
});