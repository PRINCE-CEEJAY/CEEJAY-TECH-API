import express from "express";
import {
  portController,
  routesController,
  homeController,
} from "./controller.js";

const app = express();
const PORT = "3000";

app.get("/", (req, res) => {
  res.send("WELCOME TO PRINCE CEEJAY'S API");
});

//dynamic route
app.get("/:username", routesController);

app.listen(PORT, portController);
