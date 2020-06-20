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
    letter: "S",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/6af76ce2-2f57-4ed0-82d8-42652f0eddbe.usdz",
    name: "Fox",
    letter: "F",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/9d589ec2-8230-43d1-b167-da05f8dde3c8.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/6bbebac8-57d6-4bf1-8d82-e2f2ee992f25.usdz",
    name: "Apple",
    letter: "A",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/b2d264b2-b932-4580-988c-1a44b2a9b13f.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d1564af7-9db9-441a-850c-25e4f1640db6.usdz",
    name: "Basketball",
    letter: "B",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/cff43987-5cfc-4824-be21-f79163d2932f.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/8781b47b-6082-4c31-91b1-f770243b42f7.usdz",
    name: "Cat",
    letter: "C",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d6239259-bf96-4883-b139-c9ddc004bac9.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/00172d72-b03e-4849-b1a8-318a933c56e0.usdz",
    name: "Dog",
    letter: "D",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/80aa0107-0da1-413f-9925-1b11482d4ed2.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d352a708-a744-4608-869c-8483938b9838.usdz",
    name: "Elephant",
    letter: "E",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/93cbf9f9-614f-4a3a-9703-dd68f9a0a214.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/8350bd0d-7950-4b49-9079-6e6546397058.usdz",
    name: "Giraffe",
    letter: "G",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/aedccc02-73f2-477f-b4f4-fab8e0a69c9d.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/60f3d3c2-0beb-43af-8f46-304e9b175144.usdz",
    name: "House",
    letter: "H",
  },
];

app.get("/", function (req, res) {
  var object = objects[Math.floor(Math.random() * objects.length + 1) - 1];
  res.render("template.html", {
    root: __dirname,
    name: object.name,
    link1: object.link1,
    link2: object.link2,
    letter: object.letter,
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
