MOVIE_NAME = "Schindler's List";
DIRECTOR_NAME = "Steven Spielberg";
IMBD_SCORE = 9.0;
SUMMARY = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
MOVIE_ID = 6


const initMediaPlayer = (movieTrailer) => {
    const url = "https://mohammadhejazi.arvanvod.com/BOv1MlLgJ9/w07GNej5Ld/h_,144_200,240_400,360_800,480_1458,k.mp4.list/master.m3u8";
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