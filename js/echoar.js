function httpGetCleanup(key, timestamp, directory) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(
      "GET",
      "https://console.echoar.xyz/cleanup?key=" +
        key +
        "&timestamp=" +
        timestamp +
        "&directory=" +
        directory,
      false
    );
    // false for synchronous request
    xmlHttp.send(null);
  }
  window.addEventListener("beforeunload", function (event) {
    httpGetCleanup("polished-math-8279", "1592521104541", "webar-chrome");
  });