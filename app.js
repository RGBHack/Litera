var express = require("express");
var app = express();

var serv = require("http").Server(app);

app.engine("html", require("ejs").renderFile);

var objects = [
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.usdz",
    name: "skyscraper",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.usdz",
    name: "fox",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d318ff9d-c85f-4e4a-9616-bf4a1ae350f7.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/bf7f45a5-c195-41bd-93ba-7691a149d856.usdz",
    name: "apple",
  },
];

app.get("/", function (req, res) {
  var object = objects[Math.floor(Math.random() * objects.length + 1) - 1];
  res.render("template.html", {
    root: __dirname,
    name: object.name,
    link1: object.link1,
    link2: object.link2,
  });
});

app.get("/login", function (req, res) {
  res.render("login.html", { root: __dirname });
});

app.get("/signup", function (req, res) {
  res.render("signup.html", { root: __dirname });
});

app.use("/js", express.static("./js", { root: __dirname }));

app.use("/css", express.static("./css", { root: __dirname }));

app.use("/img", express.static("./img", { root: __dirname }));

serv.listen(process.env.PORT || 3000);
