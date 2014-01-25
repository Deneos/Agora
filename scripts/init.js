var canvas, context, canvasBuffer, contextBuffer;
var canvasWidth = 1280, canvasHeight = 720;
var game = null;
var mouseClick = false;
var posMouse = {
    x : 0,
    y : 0
}

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

        /*var background = new Image();
        background.src = "medias/images/femme1.png";
        context.drawImage(background,0,0);*/
        
        
        var params = {
           url      : config.howlerSounds.Agora_OST_01.source,
           autoplay : config.howlerSounds.Agora_OST_01.autoplay,
           loop     : config.howlerSounds.Agora_OST_01.loop,
           volume   : config.howlerSounds.Agora_OST_01.volume,
           buffer   : config.howlerSounds.Agora_OST_01.buffer
        };
        soundManager(params);
    }
    init();
});
function begin(sex)
{
    var sex = sex;
    hideHUD();
    game                       =       new Game(sex);

    canvas.addEventListener('mousemove', mouseManager.eMousemove, false);
    canvas.addEventListener('mouseup',   mouseManager.eMouseUp, false);
    canvas.addEventListener('mousedown', mouseManager.eMouseDown, false);
    canvas.addEventListener('click',     mouseManager.eOnclick, false);
    game.level                 =       new Level();
    game.level.init();
    game.mist.init();
    gameloop();

}

