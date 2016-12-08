<!DOCTYPE html>
<meta http-equiv="Content-Language" content="th" >
<head>
    <link type="text/css" rel="stylesheet" href="css/css_layout.css">
    <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
    <script type="text/javascript" src="js/mappingvplan.js"></script>

    <title>Villgage Plan</title>

</head>
<body>

<div id="all">
    <div id="header" onclick="chbg(this.id)" >
        <p id="paraheader">Header</p>
    </div>
    <div id="left" onclick="chbg(this.id)" >
        <p id="paraleft">Left</p>
    </div>
    <div id="content" onclick="chbg(this.id)" >
        <p id="paracontent">Content</p>
    </div>
    <div id="right" onclick="chbg(this.id)" >
        <p id="pararight">right</p>
    </div>
    <div id="footer" onclick="chbg(this.id)">
        <p id="parafooter">footer</p>
    </div>
    <div id="button">
        <button type="button" onclick="changebackColor('red')">red</button>
        <button type="button" onclick="changebackColor('green')">green</button>
        <button type="button" onclick="changebackColor('blue')">blue</button>
    </div>
    <div id="sliderall">
        <div id="chosenslider">100</div>
        <div id="slider">
            0 <input id="slider" type="range"
                      min="0" max="255" step="1" value="100"
                      onchange="updateSlider(this.id,this.value)" />
            255
        </div>
        <div id="chosenslider2">100</div>
        <div id="slider2">
            0 <input id="slider2" type="range"
                      min="0" max="255" step="1" value="100"
                      onchange="updateSlider(this.id,this.value)" />
            255
        </div>
    </div>
</div>
</body>

