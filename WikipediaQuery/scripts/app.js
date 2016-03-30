$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  var apix = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var api = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=";
  var cb = "&prop=revisions&rvprop=content&callback=?";
  var json;

  function emptyResult() {
    result.empty();
    if(!search.val()) {
        alert("Empty!");
    }
  }

  query.on("submit", function() {
    emptyResult();
    result.append("<div class='result-box result-font'>"+ search.val() + "</div>")
    $.getJSON(api+search.val()+cb ,function(data) {
      json = data.query.pages;
      $(".result-box").append("<div class='result-font'>" + JSON.stringify(json, null, 4)
        + "</div>");
      alert(JSON.stringify(json, null, 4));
    });
  })


  //Obslete asynchronous request

  // json = (function() {
  //     json = null;
  //     $.ajax({
  //       'async': true,
  //       'global': false,
  //       'url': api+search.val(),
  //       'success': function(data) {
  //         alert("sucess");
  //         json = data.query.pages;
  //       }
  //     });
  //     return json;
  //   })();

})