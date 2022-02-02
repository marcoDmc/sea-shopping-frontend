const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/crud");

routes.get("/", controllers.index);
routes.post("/", controllers.create);
routes.post("/update/:_id", controllers.update);
routes.delete("/delete/:_id", controllers.delete);
routes.post("/edit/:_id", controllers.edit);

module.exports = routes;
