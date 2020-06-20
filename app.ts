import { Response, Request, Express } from "express";
import express from "express";
import { renderFile } from "ejs";
import { Server } from "http";
import { models, model } from "./models";

var app: Express = express();

var serv: Server = new Server(app);

app.engine("html", renderFile);


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

app.use("/js", express.static("./js"));

app.use("/css", express.static("./css"));

app.use("/img", express.static("./img"));

serv.listen(process.env.PORT || 3000);