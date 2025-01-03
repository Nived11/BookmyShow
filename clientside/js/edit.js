const API="http://localhost:3000";

const movieId =  new URLSearchParams(window.location.search).get('id');
console.log(movieId);

async function update(_id){
    try {
    const res=await fetch(API+`/api/getsecmovie/${_id}`,{method:"GET"});
    console.log(res);
    const data=await res.json();
    console.log(data);

    let str = "";
    str += `
     <form action="" method="post" id="form">
            <div class="head">
                <h3>EDIT MOVIES</h3>
            </div>
          
          <div class="bodydiv">
            <div class="leftform">
                <div class="divs">
                    <label for="name">Name  </label>
                    <input type="text" value=${data.name} id="name" name="name" required placeholder="Marco">
                </div>
                <div class="divs">
                    <label for="name">Rating </label>
                    <select name="" id="rating">
                        <option >${data.rating}</option>
                        <option >1/10</option>
                        <option >2/10</option>
                        <option >3/10</option>
                        <option >4/10</option>
                        <option >5/10</option>
                        <option >6/10</option>
                        <option >7/10</option>
                        <option >8/10</option>
                        <option >9/10</option>
                        <option >10/10</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Screen</label>
                    <select name="" id="screen">
                        <option >${data.screen}</option>
                        <option >2D</option>
                        <option >3D</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Language</label>
                    <select name="" id="language">
                        <option >${data.language}</option>
                        <option >English</option>
                        <option >Malayalam</option>
                        <option >Hindi</option>
                        <option >Telugu</option>
                        <option >Tamil</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Duration </label>
                    <input type="text" value=${data.duration} id="duration" name="duration" required placeholder="1h 58m">
                
                </div>
                <div class="divs">
                    <label for="name">Certified</label>
                    <select name="" id="certified">
                        <option >${data.certified}</option>
                        <option >A</option>
                        <option >U</option>
                        <option >U/A</option>
                    </select>
                </div>
                <div class="divs">
                    <label for="name">Genre </label>
                    <input type="text" value=${data.genres} id="genres" name="genres" required placeholder="Adventure, Animation,Drama">
                </div>
           
            </div>
            <div class="rgtform">
                <div class="file">
                    <input type="file" id="moviespic" multiple >
                </div>
                <div class="picsdiv">
                    <div class="box" id="img1"  >
                        <img id="imag1" src="${data.moviespic[0]}" alt="Thumbnail">
                    </div>
                    <div class="box" id="img2">
                        <img id="imag2" src="${data.moviespic[1]}" alt="coverpic">
                    </div>
                    <!-- <div class="box">
                        <img id="imag3" src="" alt="">
                    </div>
                    <div class="box">
                        <img id="imag4" src="" alt="">
                    </div> -->

                </div>
            </div>
          </div>
          <div class="footer">
            <button>Save</button>
          </div>
        </form>
    `;
    document.getElementById("container").innerHTML = str;
    }catch (error) {
        console.error(error);
    }
    
}
update(movieId);