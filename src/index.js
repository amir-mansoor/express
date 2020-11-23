const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const app = express();
const port = 8000
// app.use(bodyParser.urlencoded({ extended: true }))

// const staticPath = path.join(__dirname, "../views");

app.set("view engine", "hbs");

// app.use(express.static(staticPath))
app.get("/", (req, res) => {
    res.render("index")
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

