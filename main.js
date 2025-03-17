$(document).ready(function () {
  const fetchQuote = () => {
    $.ajax({
      url: "https://dummyjson.com/quotes", // Third-party random quote API
      method: "GET",
    })
      .done((data) => {
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)]; // Get a random quote
        console.log({ randomQuote });
        $("#quote").text(`${randomQuote.quote}`); // Update the quote
        $("#author").text(`- ${randomQuote.author}`); // Update the author
      })
      .fail((err) => {
        console.error(err);
        $("#quote").text("Oops! Couldn't fetch a quote. Try again.");
        $("#author").text("");
      });
  };

  // Fetch a new quote when the button is clicked
  $("#new-quote").click(() => {
    fetchQuote();
  });

  // Fetch a quote on page load
  fetchQuote();
});
