const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const articleRoute = require("./routes/articleRoute");

const app = express();

require("dotenv").config();
connectDb();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(articleRoute);

app.listen(4001, () => {
    console.log("server is running on port 4000!");
});
