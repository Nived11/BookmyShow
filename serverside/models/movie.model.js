import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    name:{type:String,require:true},
    rating:{type:String,require:true},
    screen:{type:String,require:true},
    language:{type:String,require:true},
    duration:{type:String,require:true},
    certified:{type:String,require:true},
    genres:{type:String,require:true},
    moviespic:{type:Array,require:true}
})



export default mongoose.model.Movielist||mongoose.model("Movielist",movieSchema)
