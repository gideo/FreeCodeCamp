'use strict';

$(document).ready(function() {
  var time = 12;
  const maxTime = 60;
  const maxHour = 12;

  $(".count").on("click", function() {
    alert($(this).val() + ".count is working.");
  });
  $(".reset").on("click", function() {
    alert($(this).val() + ".reset is working.");
  });

  $(".add").on("click", function() {
    alert($(this).val() + ".add is working.");
  })
});