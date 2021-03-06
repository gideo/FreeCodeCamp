$(document).ready(function() { 
  var intervalTimer, flickerTimer, blinkRepeat = 0;
  var audio = new Audio("https://www.dropbox.com/s/npqbf3yw7fag8e8/202029__hykenfreak__notification-chime.wav?dl=1");
  var setTime = [...$("#time").text().split(":")].reduce( (a,b) => parseInt(a * 60) + parseInt(b));
  
  function alterTime() { 
    var getMinutes = (parseInt(setTime/60).toString().length < 2) ? "0" + parseInt(setTime/60): parseInt(setTime/60);
    var getSeconds = ((setTime % 60).toString().length < 2) ? "0" + (setTime % 60): (setTime % 60);
    $("#time").text(getMinutes + ":" + getSeconds);
  }
  
  function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
      diff = duration - (((Date.now() - start) / 1000) | 0);
      
      minutes = (diff / 60 ) | 0;
      seconds = (diff % 60 ) | 0;
      
      minutes = (minutes < 10 ) ? "0" + minutes : minutes;
      seconds = (seconds < 10 ) ? "0" + seconds : seconds;
        
      display.text(minutes + ":" + seconds);
      
      if(diff <= 0) {
        audio.play();
        clearInterval(intervalTimer);
        flickerTimer = setInterval(flicker, 500);
      }
    };
    timer();
    intervalTimer = setInterval(timer, 1000);
  };
  
  function flicker() {
    $(".timer span").toggleClass("blink");
    if(++blinkRepeat === 7){
      clearInterval(flickerTimer);
      $(".timer span").removeClass("blink");
      blinkRepeat = 0;
    }
  }
  
  $(".start").on("click", function() {
    var display = $("#time");
    startTimer(setTime, display);
  });
  
  $(".add").on("click", function() {
    clearInterval(intervalTimer);
    setTime += 60;
    alterTime();
  });
  
  $(".sub").on("click", function() {
    clearInterval(intervalTimer);
    if(setTime > 60){
      setTime -= 60;  
    }
    alterTime();
  });
  
  $(".reset").on("click", function() {
    clearInterval(intervalTimer);
    setTime = 1500;
    alterTime();
  });
});