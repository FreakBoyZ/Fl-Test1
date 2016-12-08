// a cross reference of area names to text to be shown for each area

function rgb2hex(rgb) {
    if (  rgb.search("rgb") == -1 ) {
        return rgb;
    } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}

var lastid;

function changebackColor(cclr) {
    //document.getElementById(lastid).style.backgroundColor = cclr;
    $("#" + lastid).css("background-color",cclr);
    $("#para" + lastid).text(cclr);
}

function chbg(id) {
    lastid = id;
    //alert("#" + id)
    //var color = $(this.id).closest("div").css("background-color");
    var color = $("#" + id).closest("div").css("background-color");
    var hexcolor = rgb2hex(color);
    //alert(hexcolor)
    if (hexcolor == "#ff0000") {
        $("#" + id).css("background-color","#00FF00");
    } else {
        $("#" + id).css("background-color","#FF0000");
    }

    $("#para" + id).text(rgb2hex(color));
}

function updateSlider(id,slideAmount) {
    var display = document.getElementById("chosen" + id);
    display.innerHTML=slideAmount;
}