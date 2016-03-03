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
  
  //Get location name
  function setLocation(json) {
    $("#location").text(json.name);
  }
  
  //Temperature Conversion
  $("#temperature").on("click", function() {
    var t = $("#temperature"), d = json.main.temp;
    var len = t.text().length-1;
    t.text()[len] === "F" ? t.text(kelvinToC(d)) :
                                          t.text(kelvinToF(d));
  });
  
  //Get user location and request weathe data
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
    weather = json["weather"][0]["main"];
    
    //$("#location").text(location);
    setLocation(json);
    $("#temperature").text(kelvinToF(temp));
  }
  
  function kelvinToF(num){
    return (((num-273.15)*9/5)+32).toFixed(1) + "°F";
  }
  function kelvinToC(num){
    return ((num-273.15).toFixed(1)) + "°C";
  }
  
  
});