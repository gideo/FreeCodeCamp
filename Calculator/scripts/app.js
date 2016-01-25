$(document).ready(function() {
  var values = [], str = "";
  var disp = $("#disp");

  $(".num").on("click", function() {
    //alert($(this).text());
    if($("#disp").val().length <= 15) {
      $("#disp").val($("#disp").val() + $(this).text());
    }
    $(".highlight").removeClass("highlight");
    $(this).addClass("highlight");
  });
  $("#add").on("click", function() {
    values.push(disp.val());
    clearDisplay();
  });
  $("#minus").on("click", function() {
    values.push(disp.val());
    clearDisplay();
  });

  $("#clear").on("click", function() {
    clearDisplay();
  })

  $("#eval").on("click", function() {
    //alert("Equals!");
    values.push(disp.val());
    calculate(values);
  });


  $(".btn1").on("click", function() {
    values.push(disp.val());
    values.push($(this).text());
    disp.val("");
  })

  function calculate(val) {
    //alert(eval(val.join("")));
    disp.val("");
    var txt = eval(val.join("")).toString();
    return txt;
  }

});