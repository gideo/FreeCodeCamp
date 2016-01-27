$(document).ready(function() {
  var values = [], str = "";
  var disp = $("#disp");

  //Functions
  function clearDisplay() {
    disp.val("0");
  }

  //jQuery event handlers
  $(".num").on("click", function() {
    //alert($(this).text());
    if(disp.val() == 0) { disp.val("")}
    if(disp.val().length <= 15) {
      disp.val(disp.val() + $(this).val());
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

  $("#clean").on("click", function() {
    disp.val("");
  });

  $("#decimal").on("click", function() {
    if(disp.val().length <= 15 && disp.val().indexOf(".") === -1) {
      disp.val(disp.val() + ".");
    }
  })

  $("#eval").on("click", function() {
    values.push(disp.val());
    if(values.length > 2) {
      disp.val("");
      var txt = eval(val.join("")).toString();
      alert(txt);
    }
    alert(values);
    values = [];
  });

  $("#negpos").on("click", function() {
    //values.push(disp.val()*-1);
    $("#disp").val(disp.val() * -1);
  });

  $(".btn1").on("click", function() {
    values.push(disp.val());
    values.push($(this).text());
    disp.val("");
  })
});