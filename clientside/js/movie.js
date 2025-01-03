const API="http://localhost:3000";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
console.log(movieId);



async function getMovieDetails(_id){
    try {
        const res = await fetch(API +`/api/getsecmovie/${_id}`,{method:"GET"});
        console.log(res);
        if (res.status !== 200) {
            throw new Error("Failed to get movies");
        }
        const data = await res.json();
        console.log(data);
        
        let str = "";
        str += `
         <div class="moviediv" style="background: linear-gradient(90deg, rgba(26, 26, 26, 0.992) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), 
            url(${data.moviespic[1]}) no-repeat; background-size: cover;">
            <div class="movie-det-div">
                <div class="card">
                    <div class="img">
                    <img src="${data.moviespic[0]}" alt="${data.name}">
                    </div>
                    <div class="h4">
                        <h4>In cinemas</h4>
                    </div>
                </div>
                <div class="details-div">
                    <h1>${data.name}</h1>
                    <div class="rating-div">
                        <img src="../assets/star-icon.png " alt="">
                        <h4> ${data.rating}</h4>
                        <button class="ratenow"> Rate now</button>
                    </div>
                    <div class="screen-div">
                        <p>${data.screen}</p>
                    </div>
                    <div class="language-div">
                        <p>${data.language}</p>
                    </div>
                    <div class="duration">
                        <p>${data.duration} • ${data.genres} • ${data.certified} </p>
                    </div>
                    <button class="bookticket"> Book tickets </button>
                </div>
                 <a href="../pages/edit.html?id=${data._id}">
                    <div class="editbutton" id="editbutton" >
                        <img src="../assets/editicon.png" alt="aa">
                        <p>Edit</p>
                    </div>
                </a>
                 <div class="deletebutton" onclick="deleteMovies('${movieId}')">
                  <img src="../assets/delete.png" alt="aa">
                  <p>Delete</p>
                </div>
                <div class="sharebutton">
                  <img src="../assets/share.png" alt="aa">
                  <p>Share</p>
                </div>
            </div>
        </div>
        `;
        document.getElementById("moviepage").innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}
getMovieDetails(movieId);



async function deleteMovies(_id) {
    try{
        const res = await fetch(API +`/api/deletemovie/${_id}`,
            {
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
            });
        console.log(res);
        alert("successfully deleted")
        window.location.href="../index.html";
    }catch(error){
        console.error(error);
    }
}