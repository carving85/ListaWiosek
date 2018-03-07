javascript:
    CopyCoor();


function CopyCoor() {
    var aTr = document.getElementById("villages_list").getElementsByTagName("tr");

    var coords = "";
    for (var b = 0; b < aTr.length; b++) {

        var aTags = aTr[b].getElementsByTagName("td")
        if (aTags.length == 5) {
            for (var i = 3; i < aTags.length; i = i + 3) {


                coords = coords + " " + aTags[i].textContent;
            }
        } else if (aTags.length == 6) {
            console.log(aTags);
            for (var i = 4; i < aTags.length; i = i + 5) {
                coords = coords + " " + aTags[i].textContent;
            }
        }

    }

    var text = document.createElement("textarea");
    text.style.width = "100%";
    text.value = coords;
    var table = document.getElementById("villages_list");
    table.parentNode.insertBefore(text, table);
}