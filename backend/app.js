const express = require("express");
const cors = require("cors");
const emissionsController = require("./controllers/emissionsController")


const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Reduce ya bloodclit Footprint");
});

app.use("/log", emissionsController);


app.get("*", (req,res)=>{
    res.status(404).send("Page Not Found")
})




module.exports=app;