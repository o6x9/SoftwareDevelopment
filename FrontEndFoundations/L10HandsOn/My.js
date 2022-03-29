let newRepo = new XMLHttpRequest();
newRepo.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    for (var i = 0; i < myObj.length; i++) {
      addRepo(myObj[i].name);
    }
  }
};

newRepo.open("GET", "https://github.com/o6x9", true);
newRepo.send();

function addRepo(name) {
  var node = document.createElement("li");
  var textNode = document.createTextNode(name);
  node.appendChild(textNode);
  document.getElementById("gitRepo").appendChild(node);
}

$(document).ready(function () {
  $(".hover").hover(
    function () {
      $(this).animate({ height: "75px", width: "75px" });
    },
    function () {
      $(this).animate({ height: "34px", width: "34px" });
    }
  );
});
