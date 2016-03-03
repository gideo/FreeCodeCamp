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
    t.text()[len] === "F" ? t.text(kelvinToC(d)) : t.text(kelvinToF(d));
  });
  
  function kelvinToF(num){
    return (((num-273.15)*9/5)+32).toFixed(1) + "°F";
  }
  function kelvinToC(num){
    return ((num-273.15).toFixed(1)) + "°C";
  }
  
  //set icons
  function setIcon(json) {
    var weather = json.weather[0].id;
    var icon = "wi-day-sunny";
    //wi-night-sleet-storm
    console.log(weather);
    switch(true) {
      case (weather >= 200 && weather <= 299):
        icon = "wi-thunderstorm";
        break;
      case (weather >= 300 && weather <= 399):
        icon = "wi-raindrops";
        break;
      case (weather >= 500 && weather <= 599):
        icon = "wi-rain";
        break;
      case (weather >= 700 && weather <= 799):
        icon = "wi-fog";
        break;
      case (weather == 800):
        icon = "wi-day-sunny";
        break;
      case (weather >= 800 && weather <= 899):
        icon = "wi-cloudy";
        break;
      default:
        icon = "wi-night-sleet-storm";
    }
    
    $("#weatherIcon").append('<i class="icons wi ' + icon + '"></i>');
  }
  
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
    
    var temp = json.main.temp;
    setLocation(json);
    setIcon(json);
    $("#temperature").text(kelvinToF(temp));    
  }  
});