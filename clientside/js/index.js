const API="http://localhost:3000";
async function getHome(){
    try {
        const token=sessionStorage.getItem("token")
        console.log(token);
        
        const res= await fetch(API+"/api/home",{
            method:"GET",
            headers:{"authorization":`Bearer ${token}`}
        })
        console.log(res);
        
        if(res.status==200){
           
            const data=await res.json();
            const  {username}=data
            console.log(username);
            document.getElementById("usname").textContent=`Hii ${username}..`;
        }
        else{
            const {msg}=await res.json();
                alert(msg);
                window.location.href="../pages/login.html"
        }
    } catch (error) {
        console.log(error);
        
    }
}
getHome()


async function getMovies(){
    try {
        const res = await fetch(API + "/api/getmovies");
        if (res.status !== 200) {
            throw new Error("Failed to get movies");
        }
        const movies = await res.json();
        console.log(movies);
        
        let str = "";
        movies.forEach((movie) => {
            // console.log(movie._id);
            
            str += `
            <a href="../pages/movie.html?id=${movie._id}">
            <div class="card" id="card">
                <div class="movie">
                    <img src="${movie.moviespic[0]}" alt="${movie.name}">
                </div>
                <div class="moviename">
                    <h3>${movie.name}</h3>
                    <h5>${movie.genres}</h5>
                </div>
            </div>
            </a>
            `;
        });
        document.getElementById("card").innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}
getMovies();

