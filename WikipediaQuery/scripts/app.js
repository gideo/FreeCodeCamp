var app = angular.module('MainApp', ['ngAnimate']);

$(document).ready(function() {
  var query = $("#query");
  var search = $("#searchQuery");
  var result = $("#result");
  var api = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var cb = "&prop=revisions&rvprop=content&callback=?";
  var json;
  function emptyResult() {
    result.empty();
  }
  
  query.on("submit", function() {
    emptyResult();
    let query = search.val();
    if(!query) {
      alert("Empty!");
      return;
    }
    result.append("<div class='result-box result-font'>"+ query + "</div>")
    $.getJSON(api+query+cb ,function(data) {
    json = data.query.pages;
    $(".result-box").append("<div class='result-font'>"+ JSON.stringify(json,null, 4) + "</div>")
    alert(JSON.stringify(json, null, 4));
    });
  })
})