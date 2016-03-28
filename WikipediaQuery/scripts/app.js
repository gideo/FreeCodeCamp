$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  var api = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var cb = "&callback=JSON_CALLBACK";
  var json;
  
  query.on("submit", function() {
    if(!search.val()) {
      alert("Empty!");
      return;
    }
    result.empty();
    //alert(search.val());
    result.append("<div class='result-box result-font'>"+ search.val() + "</div>")
    
    json = (function() {
      json = null;
      $.ajax({
        'async': true,
        'global': false,
        'url': api+search.val()+cb,
        'success': function(data) {
          alert("sucess");
          json = data;
        }
      });
      return json;
    })(); 
  })
  
})