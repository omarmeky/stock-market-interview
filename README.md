# Stock Market Web App (Interview Question)

### Background

A leading financial institution has hired you to develop a web application that displays the latest price for a given stock. The application will also show if this is a good stock to invest in right now.

### Requirements

Build an angular application with a stock ticker search field. After the user enters the desired symbol, he or she clicks a "Search" button or presses the Enter key to trigger a search. While the search is happening, display a loader so the user knows to wait. When the search is complete, display the stock's latest price. Also, visually indicate if this stock is in the green (positive change) or red (negative change).

Your application will use the following API call to lookup information about a stock:

`http://cors-anywhere-eu.herokuapp.com/http://dev.markitondemand.com/Api/v2/Quote/json`

The endpoint expects a query parameter called `symbol` which takes the stock's ticker. For example, to look up quotes for Apple, you would pass in the value `aapl`.

To minimize requests to the server, cache the result of each search. If the user searches for the same symbol within the hour, display the cached resultset instead of making another network request.

Although this is a very simple application, please organize it as you would an enterprise level one.

### Submission

Please fork this repository and submit your solution as a pull request. Modify the README with instructions on how to run the application. The application should run with a single command (either `grunt` or `gulp`).

Good Luck! :smiley:
