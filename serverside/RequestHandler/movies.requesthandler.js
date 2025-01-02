// import movieSchema from "../models/movie.model.js";
// import {fileURLToPath} from "url";
// export async function addMovie(req, res) {
//     const { name,rating,screen,language,duration,certified,genres } = req.body;
//     console.log(name,rating,screen,language,duration,certified,genres);
//     await movieSchema.create({name,rating,screen,language,duration,certified,genres}).then(()=>{
//         res.status(200).send({msg:"successfully created"})
//     }).catch((error)=>{
//         res.status(500).send({error})
//     })
// }


// // export async function Home(req,res){
// //     try{
// //         console.log("end point");

// //         console.log(req.movie);
// //         const movie=await movieSchema.findOne({_id});
// //         res.status(200).send({username:user.username})  
// //     }catch(error){
// //         res.status(400).send({error})
// //     }
// // }