$(document).ready(function() {
  $("button").on("click", function() {
    $(".highlight").removeClass("highlight");
    $(this).addClass("highlight");
  });
});