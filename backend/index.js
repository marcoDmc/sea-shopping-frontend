require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT | 3333;
const app = express();
const routes = require("./routes/routes");
const db = require("./data/db");


app.use(cors());
app.use(routes);
app.use(express.json())
app.listen(port, () => console.info(`server on in port ${port}`));
