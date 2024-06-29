require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { PORT, URI, PUBLIC_DIR } = process.env;
const app = express();
const { taskRouter } = require("./routers/task");
const cors = require("cors")
const path = require("path");


app.use(cors())
// app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)))
app.use(express.json())
app.use(express.static("public/dist"))
app.use(express.urlencoded())
app.use(morgan("common"))
app.use("/api/task", taskRouter)


const main = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected")

}
main().catch(err => {
    console.log(err);
});



app.listen(PORT, (req, res) => {
    console.log("Server Started");
})



