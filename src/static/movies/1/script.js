MOVIE_NAME = "The Shawshank Redemption";
DIRECTOR_NAME = "Frank Darabont";
IMBD_SCORE = 9.3;
SUMMARY = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
MOVIE_ID = 1


const initMediaPlayer = (movieTrailer) => {
    const url = "/static/dash/" + MOVIE_ID + "/" + MOVIE_ID + ".mpd";
    const player = dashjs.MediaPlayer().create();
    player.initialize(movieTrailer, url, true);
}


const app = () => {
    const moviesContainer = document.getElementById('movies-container');

    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const movieName = document.createElement("p");
    movieName.innerHTML = MOVIE_NAME;

    const movieScore = document.createElement("p");
    movieScore.innerHTML = "IMBD Score: " + IMBD_SCORE + "/10";

    const moviePoster = document.createElement("img");
    moviePoster.className = "movie-poster";
    moviePoster.src = "./poster.jpg";

    const movieTrailer = document.createElement("video");
    movieTrailer.id = "movie-trailer"
    movieTrailer.controls = "controls";
    
    const movieDirector = document.createElement("p");
    movieDirector.innerHTML = "Director: " + DIRECTOR_NAME

    const movieSummary = document.createElement("p");
    movieSummary.innerHTML = "Summary:<br>" + SUMMARY;


    movieCard.appendChild(movieName);  
    movieCard.appendChild(movieScore);
    movieCard.appendChild(movieDirector);        
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTrailer);
    movieCard.appendChild(movieSummary);

    moviesContainer.appendChild(movieCard);

    initMediaPlayer(movieTrailer);
}

app();