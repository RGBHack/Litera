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
    name: "Skyscraper",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.usdz",
    name: "Fox",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/9d589ec2-8230-43d1-b167-da05f8dde3c8.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/6bbebac8-57d6-4bf1-8d82-e2f2ee992f25.usdz",
    name: "Apple",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/b2d264b2-b932-4580-988c-1a44b2a9b13f.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d1564af7-9db9-441a-850c-25e4f1640db6.usdz",
    name: "Basketball",
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
