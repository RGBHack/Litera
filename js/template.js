iframe = document.getElementById("iframe")
function getElementByXpath(path) {
	return iframe.contentDocument.evaluate(path, iframe.contentDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function myFunction () {
getElementByXpath("/html/body/model-viewer/button").click()
}

//document.getElementById("iframe").onload = function() {setTimeout(myFunction,1000)};