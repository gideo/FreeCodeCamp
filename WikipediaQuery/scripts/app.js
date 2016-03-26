$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  
  query.on("submit", function() {
    result.empty();
    alert(search.val());
    result.append("<div class='result-box result-font'>"+ search.val() + "</div>")
  })
})