import { Response } from "express";
import { models, model } from "./models";

var express = require("express");
var app = express();

var serv = require("http").Server(app);

app.engine("html", require("ejs").renderFile);


app.get("/", function (req: Request, res: Response) {
  var object: model = models[Math.floor(Math.random() * models.length + 1) - 1];
  res.render("template.html", {
    root: __dirname,
    name: object.name,
    link1: object.link1,
    link2: object.link2,
    letter: object.letter,
  });
});

app.get("/login", function (req: Request, res: Response) {
  res.render("login.html", { root: __dirname });
});

app.get("/signup", function (req: Request, res: Response) {
  res.render("signup.html", { root: __dirname });
});

app.use("/js", express.static("./js", { root: __dirname }));

app.use("/css", express.static("./css", { root: __dirname }));

app.use("/img", express.static("./img", { root: __dirname }));

serv.listen(process.env.PORT || 3000);
