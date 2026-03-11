const express = require("express");
var cors = require('cors')
const userRoutes = require("./Routes/userRoutes");

const app = express();
app.use(cors())

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"))

app.use("/api/users", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});