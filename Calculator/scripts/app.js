$(document).ready(function() {
  var values = [], str = "";
  var disp = $("#disp");

  $(".num").on("click", function() {
    //alert($(this).text());
    if($("#disp").val().length <= 15) {
      $("#disp").val($("#disp").val() + $(this).text());
    }
  });

  $("button").on("click", function() {
    $(".highlight").removeClass("highlight");
    $(this).addClass("highlight");
  });
  $("#add").on("click", function() {
    values.push("+");
    clearDisplay();
  });
  $("#minus").on("click", function() {
    values.push("-");
    clearDisplay();
  });

  $("#clear").on("click", function() {
    disp.val("");
    values = [];
  })

  $("#eval").on("click", function() {
    values.push(disp.val());
    if(values.length > 2) {
      disp.val("txt");
      var txt = eval(val.join("")).toString();
      alert(txt);
    }
    alert(values);
    values = [];
  });

  $("#negpos").on("click", function() {
    //values.push(disp.val()*-1);
    $("#disp").val("Hef");
  });

  $(".btn1").on("click", function() {
    values.push(disp.val());
    values.push($(this).text());
    disp.val("");
  })

  function clearDisplay() {
    disp.val("0");
  }
});