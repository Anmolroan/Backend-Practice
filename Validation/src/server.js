const app =require("./index");
const connect = require("./configs/db");
const PORT =process.env.PORT ||8080
app.listen(PORT,async()=>{
    await connect();
    console.log("server listening on "+PORT);
})