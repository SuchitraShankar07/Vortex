const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

app.use(express.json());
app.use("/api", routes);

mongoose.connect("mongodb+srv://SuchitraShankar07:test123@vortex.4xwne.mongodb.net/?retryWrites=true&w=majority&appName=Vortex", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database");
}).catch(err => {
    console.error("Error connecting to the database:", err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
