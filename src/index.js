import "./styles.css";

const text = document.getElementById('input-show');
const button = document.getElementById('submit-data');
const list_body = document.getElementById('list-body');

document.body.addEventListener('click', (event) => {
  if (event.target === button) {
    const name = text.value;
    getMovies(name);
  }
});

async function getMovies(movieName) {
    const url = "https://api.tvmaze.com/search/shows?q=" + movieName;
    const usersPromise = await fetch(url);
    const userJSON = await usersPromise.json();
    console.log(userJSON);

    userJSON.forEach((movie) => {
      let newMovie = document.createElement('div');
      let image = document.createElement('img');
      let show_info = document.createElement('div');
      let title = document.createElement('h1');
      let summary = movie.show.summary;
      newMovie.setAttribute('class','show-data');
      show_info.setAttribute('class','show-info');
      title.innerHTML = movie.show.name;
      show_info.appendChild(title);
      show_info.innerHTML += summary;
      if (movie.show.image != null) {
        image.src = movie.show.image.medium;

      }
      newMovie.appendChild(image);
      newMovie.appendChild(show_info);
      list_body.appendChild(newMovie)
    });
}

const main_div = document.createElement('div');
const img = document.createElement('img');
const inner_div = document.createElement('div');
const title = document.createElement('h1')
