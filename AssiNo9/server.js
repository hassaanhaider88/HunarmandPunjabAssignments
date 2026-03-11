const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");


const app = express();

app.use(express.json());
app.use(cors()); 

// Local DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Database Error:", err);
    });

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/users", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});