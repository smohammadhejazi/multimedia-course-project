MOVIE_NAME = "The Godfather Part II";
DIRECTOR_NAME = "Francis Ford Coppola";
IMBD_SCORE = 9.0;
SUMMARY = "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
MOVIE_ID = 4


const initMediaPlayer = (movieTrailer) => {
    const url = "https://mohammadhejazi.arvanvod.com/BOv1MlLgJ9/8nVpGL561K/h_,144_200,240_400,360_800,480_1500,k.mp4.list/manifest.mpd";
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