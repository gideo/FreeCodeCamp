$(document).ready(function() {
  var query = $("#query")
  query.on("submit", function() {
    alert($("#searchInput").val());
  })
})