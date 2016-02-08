$(document).ready(function() {
  var setTime = [...$("#time").text().split(":")].reduce( (a,b) => parseInt(a * 60) + parseInt(b));
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
        start = Date.now() + 1000;
      }
    };
    timer();
    setInterval(timer, 1000);
  };

  $(".start").on("click", function() {
    var display = $("#time");
    startTimer(setTime, display);
  });

  $(".add").on("click", function() {

  });

  $(".reset").on("click", function() {
    alert(setTime);
  });
});