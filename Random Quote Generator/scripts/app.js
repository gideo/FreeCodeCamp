$(document).ready(function() {
  function generateQuote() {
    var bartlett = [
      [ "Dr. Seuss", "Don't cry because it's over, smile because it happened."],
      [ "Oscar Wilde", "Be yourself, everyone else is already taken."],
      [ "Robert Frost", "In three words I can sum up everything I've learned about life: it goes on."],
      [ "Maya Angelou", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."],
      [ "David Allen", "You can do anything, but not everything."],
      [ "Martin Luther", "There comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because his conscience tells him it is right...."],
      [ "Karl Marx", "Society does not consist of individuals but expresses the sum of interrelations, the relations within which these individuals stand."], 
      [ "William Shakespeare" , "This life, which had been the tomb of his virtue and of his honour, is but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more: it is a tale told by an idiot, full of sound and fury, signifying nothing."], 
      [ "Benjamin Franklin" , "Without continual growth and progress, such words as improvement, achievement, and success have no meaning."], 
      [ "Abraham Lincoln" , "In the end, it's not the years in your life that count. It's the life in your years." ], 
      [ "Mark Twain" , "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded."], 
      [ "Martin Luther King, Jr." , "Human progress is neither automatic nor inevitable... Every step toward the goal of justice requires sacrifice, suffering, and struggle, the tireless exertions and passionate concern of dedicated individuals."], 
      [ "Douglas Adams" , "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."], 
      [ "Arthur C. Clarke" , "The only way to discover the limits of the possible is to go beyond them into the impossible."], 
      [ "Kurt Vonnegut", "Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning up to do afterward."], 
      [ "Fyodor Dostoyevsky" , "Much unhappiness has come into the world because of bewilderment and things left unsaid."], 
      [ "Erich Maria Remarque" , "Life did not intend to make us perfect. Whoever is perfect belongs in a museum. "], 
      [ "Franz Kafka" , "Youth is happy because it has the ability to see beauty. Anyone who keeps that ability to see beauty never grows old."], 
      [ "Jane Austen", "Friendship is certainly the finest balm for the pangs of disappointed love."]
    ];
    var rand = Math.floor(Math.random() * bartlett.length);
    var quote = 'https://twitter.com/intent/tweet?text=' + '"' + bartlett[rand][1] + '" -' + bartlett[rand][0];
    $("#quote").text(bartlett[rand][1]);
    $("#author").text(bartlett[rand][0]);
    $(".twitter-share-button").attr("href", quote);
  }
  
  
  $(".generate").on("click", function() {
    generateQuote();
  });  
});