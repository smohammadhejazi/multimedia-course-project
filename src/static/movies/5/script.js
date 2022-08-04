MOVIE_NAME = "12 Angry Men";
DIRECTOR_NAME = "Sidney Lumet";
IMBD_SCORE = 9.0;
SUMMARY = "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."
MOVIE_ID = 5


const initMediaPlayer = (movieTrailer) => {
    const url = "https://mohammadhejazi.arvanvod.com/BOv1MlLgJ9/MPvAnyO3ex/h_,144_200,240_400,360_800,480_1500,k.mp4.list/master.m3u8";
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(movieTrailer);
    }
    else if (movieTrailer.canPlayType('application/vnd.apple.mpegurl')) {
        movieTrailer.src = url;
    }
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