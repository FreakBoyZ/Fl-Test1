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

function clickna(id) {
    //var color = $('#' + id).attr('style');
    var color = $('#' + id).css('fill');
    debugger;

    if(typeof color == "undefined"){

        $('#' + id).css({ fill: "#ffffff" });

    }else{

        var hexcolor = rgb2hex(color);
        if (hexcolor == "#ffffff") {
            $('#' + id).css({ fill: "#ff0000" });
        } else {
            $('#' + id).css({ fill: "#ffffff" });
        }

    }
}