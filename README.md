Welcome to the Marvel Movie Dashboard!

This single page application built with React utilizes a public API to fetch and display detailed information about released and unreleased Marvel movies.

## Installation

Fork and clone the repo and in the root directory of this repo, run:

```bash
npm install
```

which will install all the dependencies, then run:

```bash
npm start
```

to start the application.

### App Walkthrough

After start, the app will retrieve data regarding Marvel movies from a public API and render the information on the page.

1. One the top of the page, there is a search bar which allows users to search for a MCU movie by its name. The debounce technique has been implemented so that the app only sends out request to the server if user stops typing for more than 500 ms to avoid flooding the server with too many requests.

2. Underneath the search bar, on the left side, there is a drop down menu with options of "All phases, phase I to IV", after choosing one specific phase, the page will be re-rendered to only show movies belong to that phase.

3. Below search bar, there is another dropdown menu with a button, letting user sort the movies by release data or box office. The default way is to sort ascendingly, but once user clicks the Sort Ascending button, the text will change to Sort Descending, which upon click, will sort the movies Descendingly by the property selected.

4. Below the above-mentioned elements, there is the main area of the page: each movie is rendered individually inside a card, with movie's poster, title, box office, and release date.

5. Clicking on the poster of each movie will bring user to the detail page of selected movie. On the detail page, user will find more information about the movie: on the left side of the page, the same information from the movie card will be shown. On the right side, there are the movie's trailer on the top part, and the movie's overview on the bottom.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)