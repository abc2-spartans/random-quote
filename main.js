$(document).ready(function () {
  $("#quote").text("Live live king size.");
  $("#author").text("- Gaurav");
  const fetchQuote = () => {
    $("#quote").text("Loading..");
    $("#author").text("- Unknown");
    // Way 1 - Send a GET request to the server using XHR
    /**
    console.log("Sending a GET request using XMLHttpRequest...");
    // Early web development approach(before AJAX 2000s)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/quotes", true);

    // Set the request headers (if needed)
    // xhr.setRequestHeader("Content-Type", "application/json");

    // Define a callback function to handle the response
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log("Response:", xhr.responseText); // Log the response
        const data = JSON.parse(xhr.responseText); // Parse the JSON response
        const totalQuote = data.quotes.length;
        const randomNumber = Math.random(); // Get a random number between 0 and 1
        const randomNumAndQuoteLength = randomNumber * totalQuote; // Multiply by the total number of quotes
        const randomWholeNumber = Math.floor(randomNumAndQuoteLength); // Get a random whole number

        console.log({
          totalQuote,
          randomNumber,
          randomNumAndQuoteLength,
          randomWholeNumber,
        });

        const randomQuote = data.quotes[randomWholeNumber];
        console.log({ randomQuote });
        $("#quote").text(`${randomQuote.quote}`); // Update the quote
        $("#author").text(`- ${randomQuote.author}`); // Update the author
      } else {
        alert(`Request failed! ${xhr.responseText}`);
        console.error("Error:", xhr.status, xhr.statusText);
      }
    };

    // Handle errors during the request
    xhr.onerror = function (err) {
      console.error("Error fetching quote:", err);
      alert(err);
      $("#quote").text("Oops! Couldn't fetch a quote. Try again.");
      $("#author").text("- Unknown");
    };

    xhr.send();
    */

    // Way 2 - Send a Get request to the server using jQuery AJAX
    // Web development approach(after AJAX 2000s and before Fetch API ES6 in 2015s)
    // $.ajax({
    //   url: "https://dummyjson.com/quotes", // Third-party random quote API
    //   method: "GET",
    // })
    //   .done((data) => {
    //     const totalQuote = data.quotes.length;
    //     const randomNumber = Math.random(); // Get a random number between 0 and 1
    //     const randomNumAndQuoteLength = randomNumber * totalQuote; // Multiply by the total number of quotes
    //     const randomWholeNumber = Math.floor(randomNumAndQuoteLength); // Get a random whole number

    //     console.log({
    //       totalQuote,
    //       randomNumber,
    //       randomNumAndQuoteLength,
    //       randomWholeNumber,
    //     });

    //     const randomQuote = data.quotes[randomWholeNumber];
    //     console.log({ randomQuote });
    //     $("#quote").text(`${randomQuote.quote}`); // Update the quote
    //     $("#author").text(`- ${randomQuote.author}`); // Update the author
    //   })
    //   .fail((err) => {
    //     console.error("Error fetching quote:", err);
    //     alert(err);
    //     $("#quote").text("Oops! Couldn't fetch a quote. Try again.");
    //     $("#author").text("");
    //   });

    // Way 3 - Send a POST request using modern Fetch API
    //   console.log("Sending a GET request using Fetch API...");
    //   fetch("https://dummyjson.com/quotes", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       // console.log("Response received:", response);
    //       return response.json();
    //     })
    //     .then((data) => {
    //       const totalQuote = data.quotes.length;
    //       const randomNumber = Math.random(); // Get a random number between 0 and 1
    //       const randomNumAndQuoteLength = randomNumber * totalQuote; // Multiply by the total number of quotes
    //       const randomWholeNumber = Math.floor(randomNumAndQuoteLength); // Get a random whole number
    //       console.log({
    //         totalQuote,
    //         randomNumber,
    //         randomNumAndQuoteLength,
    //         randomWholeNumber,
    //       });

    //       const randomQuote = data.quotes[randomWholeNumber];
    //       console.log({ randomQuote });
    //       $("#quote").text(`${randomQuote.quote}`); // Update the quote
    //       $("#author").text(`- ${randomQuote.author}`); // Update the author
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //       $("#quote").text("Oops! Couldn't fetch a quote. Try again.");
    //       $("#author").text("- Unknown");
    //     });
  };

  // Fetch a new quote when the button is clicked
  $("#new-quote").click(() => {
    fetchQuote();
  });

  // Fetch a quote on page load
  // fetchQuote();
});
