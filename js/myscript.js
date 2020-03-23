var theButton = document.getElementById("helloButton");
theButton.onclick = function () {
  var theName = document.getElementById("yourName").value;
  document.getElementById("viewName").innerHTML = theName;
}