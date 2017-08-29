$(document).ready(function () {
	var apiUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&key=999999&lang=en&jsonp=?",
      tweetUrl = "https://twitter.com/intent/tweet?text=",
      $quote = $(".quote"),
      $author = $(".author"),
      $tweet = $(".tweet-btn");

	function getQuote(res) {
		$quote.text('"' + res.quoteText + '"');
		$author.text("- " + (res.quoteAuthor || "Unknown"));
		$tweet.attr("href", tweetUrl + res.quoteText + " " + res.quoteAuthor);
	}

	function onclick() {
		$.getJSON(apiUrl, getQuote);
	}

	$("#new-quote").on("click", onclick);
	$.getJSON(apiUrl, getQuote);
});