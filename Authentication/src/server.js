const app = require('./index');
const connect =require('./configs/db');
const PORT =process.env.PORT ||8080
app.listen(PORT, async (req, res) => {
    await connect();
    console.log("server is listening on port"+PORT);
})