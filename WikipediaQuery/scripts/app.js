$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  var apix = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var api = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=";
  var cb = "&prop=revisions&rvprop=content&callback=?";
  var json;
  
  query.on("submit", function() {
    if(!search.val()) {
      alert("Empty!");
      return;
    }
    result.empty();
    result.append("<div class='result-box result-font'>"+ search.val() + "</div>")
    $.getJSON(api+search.val()+cb ,function(data) {
      json = data.query.pages;
      alert(JSON.stringify(json, null, 4));
    });
  })
  
  /*
  json = (function() {
      json = null;
      $.ajax({
        'async': true,
        'global': false,
        'url': api+search.val(),
        'success': function(data) {
          alert("sucess");
          json = data.query.pages;
        }
      });
      return json;
    })(); 
  */
})