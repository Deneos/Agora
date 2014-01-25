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
        
        canvas.addEventListener('mousemove', mouseManager.eMousemove, false);
        canvas.addEventListener('click', mouseManager.eOnclick, false);
        game.level                 =       new Level();
        game.level.init();
        game.mist.init();
        gameloop();


        var params = {
           url      : config.female.head.good.sound[0],
           autoplay : config.howlerSounds.Agora_OST_01.autoplay,
           loop     : config.howlerSounds.Agora_OST_01.loop,
           volume   : config.howlerSounds.Agora_OST_01.volume,
           buffer   : config.howlerSounds.Agora_OST_01.buffer
        }

        soundManager(params);

    }
    init();
});


