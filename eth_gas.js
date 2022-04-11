

var x = new XMLHttpRequest();
x.open("GET", "https://etherscan.io/gastracker", true);
x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200)
  {
    var doc = x.responseXML;
    // …
  }
};
x.send(null);
var gas = doc.getElementsByTagName("spanAvgPrice")[0].textContent;
