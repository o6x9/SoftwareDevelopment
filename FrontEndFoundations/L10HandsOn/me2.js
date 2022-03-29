let newRepo = new XMLHttpRequest();
newRepo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for (var i = 0; i < myObj.length; i++) {
            document.getElementById("btn btn-default btn-lg").innerHTML = myObj[i].full_name;
        }
    }
};

newRepo.open("GET", "https://api.github.com/users/o6x9/repos", true);
newRepo.send();



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
