const API="http://localhost:3000";

async function getMovies(){
    try {
        const res = await fetch(API+"/api/getmovies");
        if (res.status !== 200) {
            throw new Error("Failed to get movies");
        }
        const movies = await res.json();
        console.log(movies)
        
        let str = "";
        movies.map((movie) => {
            str += `
            <div class="moviediv" style="background: linear-gradient(90deg, rgba(26, 26, 26, 0.992) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), 
                url(${movie.moviespic[0]}) no-repeat; background-size: cover;">
                <div class="movie-det-div">
                    <div class="card">
                        <div class="img">
                        <img src="${movie.moviespic[0]}" alt="${movie.name}">
                        </div>
                        <div class="h4">
                            <h4>In cinemas</h4>
                        </div>
                    </div>
                    <div class="details-div">
                        <h1>${movie.name}</h1>
                        <div class="rating-div">
                            <img src="../assets/star-icon.png " alt="">
                            <h4> ${movie.rating}</h4>
                            <button class="ratenow"> Rate now</button>
                        </div>
                        <div class="screen-div">
                            <p>${movie.screen}</p>
                        </div>
                        <div class="language-div">
                            <p>${movie.language}</p>
                        </div>
                        <div class="duration">
                            <p>${movie.duration} </p>
                        </div>
                        <button class="bookticket"> Book tickets </button>
                    </div>
                    <div class="sharebutton">
                      <img src="../assets/share.png" alt="aa">
                      <p>Share</p>
                    </div>
                </div>
            </div>
            `;
        });
        document.getElementById("moviepage").innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}
getMovies()
