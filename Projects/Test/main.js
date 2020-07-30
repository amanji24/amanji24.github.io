var canvas = null;
var c = null;
Player player = new Player();

function setup() {
    canvas = document.getElementById("myCanvas");
    c = canvas.getContext("2d");
    c.fillStyle = "black";
    redraw();
}

function redraw() {

    c.fillRect(player.x,10,70,45);
    
    redraw();
    
}