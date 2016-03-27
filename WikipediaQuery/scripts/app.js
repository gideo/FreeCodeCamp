$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  
  query.on("submit", function() {
    if(!search.val()) {
      alert("Empty!");
      return;
    }
    result.empty();
    alert(search.val());
    result.append("<div class='result-box result-font'>"+ search.val() + "</div>")
  })
})