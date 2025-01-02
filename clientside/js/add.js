
let API="http://localhost:3000/api";
let moviespic=[];
document.getElementById("moviespic").addEventListener('change',async(e)=>{
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const base64 = await convertBase64(files[i]);
        moviespic.push(base64);
        // console.log(moviespic[i]);
    }
    console.log(moviespic);
    document.getElementById("imag1").src=moviespic[0];
    document.getElementById("imag2").src=moviespic[1];
    document.getElementById("imag3").src=moviespic[2];
    document.getElementById("imag4").src=moviespic[3];



})

document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("form");

   
    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const screen = document.getElementById("screen").value;
        const language = document.getElementById("language").value;
        const duration = document.getElementById("duration").value;
        const certified = document.getElementById("certified").value;
        const genres = document.getElementById("genres").value;

        
        console.log(name,rating,screen,language,duration,certified,genres,moviespic);
        
        try {
            
            const res = await fetch (API+"/addmovie",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,rating,screen,language,duration,certified,genres,moviespic})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                
                
                
                window.location.href="../index.html"
            }else{
                alert("not added")
            }
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
});


function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result);
        }
        fileReader.onerror=(error)=>{
            reject(error);
        }
    })
}