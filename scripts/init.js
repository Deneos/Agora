var canvas, context, canvasBuffer, contextBuffer;
var canvasWidth = 1280, canvasHeight = 720;
var game = null;

$(function() {
    function init () {
        //declarer le canvas
        canvas                     =       document.getElementById("canvas");
        context                    =       canvas.getContext('2d');
        canvas.width               =       canvasWidth;
        canvas.height              =       canvasHeight;
        //buffer
        canvasBuffer               =       document.createElement("canvas");
        contextBuffer              =       canvasBuffer.getContext('2d');
        canvasBuffer.width         =       canvasWidth;
        canvasBuffer.height        =       canvasHeight;
        game                       =       new Game();
        
        canvas.addEventListener('mousemove', eMousemove, false);
        gameloop();
    }
    init();
});


