const mongoose  = require('mongoose');
const {model} = require('mongoose')
  const connection  = mongoose.connect("mongodb://127.0.0.1:27017/IMDB");
const MovieSchema = new mongoose.Schema({
    title:{type:String,required:true},
    rating:{type:Number,required:true},
    releaseDate:{type:Date,required:true},
    earnings:{type:Number,default:"5645756",min:0,max:18978994329,required:true},
    cast:{type:[String]},
    language:{type:String,
    enum:["English","Hindi","bhojpuri"]
    }
},{
    versionKey:false,
    timestamp:true,
});
const Movie = model("movie",MovieSchema);
module.exports ={Movie,connection}

// const main =async ()=>{
//     const conn =await connection;
//     const movie = new Movie({
//         title:"Thor the tabhai ",
//         rating:4,
//         releaseDate:02/01/2017,
//         earnings:123456,
//         cast:["pawan ","Yadav"],
//         language:"bhojpuri"
//     })
//     await movie.save();
//     const movies = await Movie.find({});
//     console.log(movies)
//     console.log(" connection established");
//     conn.disconnect();
// }
// main();