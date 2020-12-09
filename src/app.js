import express from "express";
import { join } from "path";
import morgan from "morgan";
import events from "./events";
import socketController from "./socketController";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "public")));
app.use(morgan("dev"));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

export default app;
