const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/routes.js");


const app = express();
app.use(express.json());

app.use("/api", routes);


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });
