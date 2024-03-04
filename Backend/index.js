require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/", require("./routes/stockscan"));

//routing
app.get("/", (req, res)=>{
    res.send("Server is running")
})

app.listen(PORT, ()=>{
    console.log(`Backend is listening ${PORT}`);
})