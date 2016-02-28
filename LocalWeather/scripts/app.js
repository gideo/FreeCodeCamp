$(document).ready(function() {
  var x = $("#writeMe");
  var json, temp, location, weather;
  (function(){
    if(navigator.geolocation){
      x.text("Geolocation pending!");
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      x.text("Geolocation is not supported by this browser.");
    }
    
  })();
  
  function getPosition(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var appid = "3bbd55527ee1ad0e5f326312904163d3";
    
    $("#long").text("Latitude: " + latitude) 
    $("#lati").text("Longitude: " + longitude);
    var weatherApi = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+appid;
    
    x.text(weatherApi);
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
    
    temp = json["main"]["temp"];
    location = json["name"];
    weather = json["weather"][0]["main"];
    
    $("#location").text(location);
    $("#temperature").text(kelvinToF(temp));
  }
  
  function kelvinToF(num){
    return (((num-273.15)*9/5)+32).toFixed(1) + "°F";
  }
  function kelvinToC(num){
    return ((num-273.15).toFixed(1)) + "°C";
  }
  
  $("#btnLoc").on("click", function() {
    $("#location").text(json["name"]);
  });
  
  $("#temperature").on("click", function() {
    var t = $("#temperature");
    if(t.text()[t.text().length-1] === "F"){
      t.text(kelvinToC(json["main"]["temp"]));
    } else {
      t.text(kelvinToF(json["main"]["temp"]));
    }
  })
});