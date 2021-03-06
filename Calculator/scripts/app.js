$(document).ready(function() {
  var values = [], str = "";
  var disp = $("#disp");

  //Functions
  function clearDisplay() {
    disp.val("0");
  }

  //jQuery event handlers
  $(".num").on("click", function() {
    if(disp.val() == 0) { disp.val("")}
    if(disp.val().length <= 15) {
      disp.val(disp.val() + $(this).val());
    }
  });

  //Highlight
  $("button").on("click", function() {
    $(".highlight").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $("#clear").on("click", function() {
    disp.val("0");
    values = [];
  })

  $("#clean").on("click", function() {
    disp.val("0");
  });

  $("#decimal").on("click", function() {
    if(disp.val().length <= 15 && disp.val().indexOf(".") === -1) {
      disp.val(disp.val() + ".");
    }
  });

  $(".equal").on("click", function() {
    values.push(disp.val());
    var txt = eval(values.join(""));
    disp.val(txt);

  });

  $("#sign").on("click", function() {
    disp.val(disp.val() * -1);
  });

  $(".operator").on("click", function() {
    values.push(disp.val());
    values.push($(this).val());
    disp.val("");
  });
});