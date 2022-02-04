require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const routes = require("./routes/routes");
const db = require("./data/db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(port, () => console.info(`server on in port ${port}`));
