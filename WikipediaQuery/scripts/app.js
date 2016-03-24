$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQ");

  query.on("submit", function() {
    alert(search.val());

  })
})