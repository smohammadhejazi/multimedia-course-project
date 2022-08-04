MOVIE_NAME = "The Dark Knight";
DIRECTOR_NAME = "Christopher Nolan";
IMBD_SCORE = 9.0;
SUMMARY = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
MOVIE_ID = 3


const initMediaPlayer = (movieTrailer) => {
    const url = "https://mohammadhejazi.arvanvod.com/BOv1MlLgJ9/mOknVD85XQ/h_,144_200,240_400,360_800,480_1469,k.mp4.list/manifest.mpd";
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