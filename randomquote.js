//API to get quote data in json type
// url = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"; 
url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"; 
//function to process quote data
var getQuote = function(data) {                
  //set quotetext to id=quote-text
  $("#quote-text").text(data.quoteText);
  //set quoteauthor to id= attribution
  $("#attribution").text(data.quoteAuthor);
  //check author val is valid or not
  if (data.quoteAuthor === "") {
    data.quoteAuthor = "Unknown";              
  }
var twquote = "https://twitter.com/intent/tweet?text=" + data.quoteText + "..." + data.quoteAuthor; // API to quote data to twitter
 $(".twitter-share-button").attr("href", twquote);  //swap twitter button's href
};

$(document).ready(function () {
  //initial quote data in webpage
  $.getJSON(url, getQuote, "jsonp");
            
});
//when click generate quote button
$(document).ready(function () {
  $("#getQuote").click(function () {           
  $.getJSON(url, getQuote, "jsonp");
  });
});