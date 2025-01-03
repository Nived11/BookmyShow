import movieSchema from "../models/movie.model.js";
// import {fileURLToPath} from "url";

export async function addMovie(req, res) {
    const { name,rating,screen,language,duration,certified,genres ,moviespic} = req.body;
    // console.log(name,rating,screen,language,duration,certified,genres,moviespic);
    await movieSchema.create({name,rating,screen,language,duration,certified,genres,moviespic}).then(()=>{
        res.status(200).send({msg:"successfully created"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
}



export async function getMovies(req, res) {
    try {
        const movies = await movieSchema.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(400).send({ error });
    }
}

export async function getSecMovie(req, res) {
    const {_id } = req.params;
    try {
        const data = await movieSchema.findById(_id);
        // console.log(data);
        
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ error });
    }
}