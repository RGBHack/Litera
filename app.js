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
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/5a3207c8-1629-4633-8639-11237a309437.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/7be0eff8-5833-428b-96cd-87b67f21e9c5.usdz",
    name: "Igloo",
    letter: "I",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d0ad9e5f-eadc-41d6-824f-3cdff629f9aa.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/ba908a28-5fe5-4d57-a439-3d4cd2fa11be.usdz",
    name: "Kite",
    letter: "K",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/52a14608-994a-4d4c-b925-f4ef838fa535.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/ba19fc72-f06d-49c4-8f9e-710fdcd11984.usdz",
    name: "Jar",
    letter: "J",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/3e8ad01b-0290-4014-9a94-43e7fa1a6b25.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/e659399c-73a4-4764-9c2b-9adfb01e7a5a.usdz",
    name: "Leaf",
    letter: "L",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/bea535bb-995b-493e-bf14-a9f0f9f95de5.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/0edf0a47-3f94-4ffd-81b0-5094412b5ab2.usdz",
    name: "Moon",
    letter: "M",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/aa6e6203-fe15-4d41-9424-484908e7a5df.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/db952d32-7195-4f16-afda-38e2f05dd29b.usdz",
    name: "Notebook",
    letter: "N",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/85649f64-31c7-42a7-bf4f-b6383ddbac11.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/55319a00-d9fe-4605-b335-9c9b32536e54.usdz",
    name: "Orange",
    letter: "O",
  },
  {
    link1:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/ba679ef7-6938-4a9b-82a7-c488899afc10.glb",
    link2:
      "https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/d7acf0d4-a510-45ce-84f6-049e768d93d7.usdz",
    name: "Penguin",
    letter: "P",
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
