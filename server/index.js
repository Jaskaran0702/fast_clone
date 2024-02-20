const express = require("express");
const cors = require("cors");
const fastrouter = require("./routes/route.js")
const app = express();

app.use(cors());

app.listen(5000, () => {
    console.log("server running on port 5000");
})

app.use('/',fastrouter);