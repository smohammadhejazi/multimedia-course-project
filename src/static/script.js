NUMBER_OF_MOVIES = 6
MOVIES_NAME = [
    "The Shawshank Redemption", "The Godfather", "The Dark Knight",
    "The Godfather Part II", "12 Angry Men", "Schindler's List"
]

const app = () => {
    const moviesContainer = document.getElementById('movies-container');

    for (let i = 0; i < NUMBER_OF_MOVIES; i++){
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        const movieName = document.createElement("p");
        movieName.innerHTML = MOVIES_NAME[i];

        const moviePoster = document.createElement("img");
        moviePoster.className = "movie-poster";
        moviePoster.src = "/static/movies/" + (i + 1) + "/poster.jpg";
        moviePoster.addEventListener("click", () => {
            document.location.href = "/static/movies/" + (i + 1) + "/index.html";
        })

        movieCard.appendChild(movieName);        
        movieCard.appendChild(moviePoster);

        moviesContainer.appendChild(movieCard);
    }
}

app();