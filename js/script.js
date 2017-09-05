

/*
this is a list of quotes, an array of objects including properties 'quote', 'source' and 'citation'
*/

var quotes = [
  {quote :'I don’t want to die without any scars.', source :'Chuck Palahniuk', citation :'Fight Club'},
  {quote :'It is sometimes an appropriate response to reality to go insane.' , source :'Philip K. Dick', citation :'Valis'},
  {quote :'There’s No One Thing That’s True. It’s All True.', source :'Ernest Hemingway', citation :'For Whom The Bell Tolls'},
  {quote :'Not all those who wander are lost.', source :'J.R.R. Tolkien', citation : 'The Fellowship of the Ring'},
  {quote :'Well-behaved women seldom make history.', source :'Laurel Thatcher Ulrich', citation :'Well-Behaved Women Seldom Make History'},
  {quote :'Generosity is giving more than you can, and pride is taking less than you need.', source :'Kahlil Gibran', citation :'Sand and Foam'},
  {quote :'I am not afraid of storms, for I am learning how to sail my ship.', source :'Louisa May Alcott', citation : 'Little Women'},
  {quote :'When we strive to become better than we are, everything around us becomes better, too.', source :'Paulo Coelho', citation : 'The Alchemist'}
];

//create an empty array where seen quotes are stored
var viewedQuotes = [];

/* this function selects a random quote, and stores it in a variable.
Using splice method to get rid of duplicate quotes.
Using if statement to check when all quotes have been used and start over from the original array 'quotes'.
return spliceQuote for the printQuote function.
*/
function getRandomQuote() {
  var selectQuote = quotes[Math.floor(Math.random()* quotes.length)];
  var spliceQuote = quotes.splice(selectQuote, 1)[0];
  viewedQuotes.push(spliceQuote);
  if (quotes.length == 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  }
  return spliceQuote;
}

//this function calls the getRandomQuote function and restores the spliceQuote object in a variable and prints it on the page
function printQuote(){
  var randomQuote = getRandomQuote();
    html = '<p class="quote">' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span></p>';
    document.getElementById('quote-box').innerHTML = html;
}

// calls the function printQuote to show a random quote when opening the page
printQuote();

//using event listener to show a new random quote when the button 'Show another quote' is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
