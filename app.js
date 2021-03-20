const express = require("express")
const app = express();
const axios = require("axios");

//Static Files;
app.use(express.static("public"))
// app.use("/css",express.static(__dirname+"public/css"))
// app.use("/img",express.static(__dirname+"public/img"))
// app.use("/js",express.static(__dirname+"public/js"))

//Templating Engine;
// app.set("views",path.join(__dirname,"views"));
app.set("views", __dirname+"/src/views");
app.set("view engine", "ejs");

//express
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Routes
const newsRouter = require("./src/routes/news");
app.use(newsRouter);

// Listning on Port 8000;
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})

