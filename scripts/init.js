var canvas, context, canvasBuffer, contextBuffer;
var canvasWidth = 1280, canvasHeight = 720;
var game = null;
var mouseClick = false;
var posMouse = {
    x : 0,
    y : 0
}
var backgroundSound, footstepFemale_1;

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

        soundCharging();
    }
    init();
});

function begin(sex)
{      
    backgroundSound.fadeOut(0,3000, function()
    {
        backgroundSound.unload();
        var gameSound = new Howl({
          urls: [config.howlerSounds.game.source],
            autoplay: config.howlerSounds.game.autoplay,
              loop: config.howlerSounds.game.loop,
              volume: config.howlerSounds.game.volume,
              buffer: config.howlerSounds.game.buffer
        });
        gameSound.fadeIn(1, 2000);
    });

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

function soundCharging()
{
    backgroundSound = new Howl({
      urls: [config.howlerSounds.interface.source],
        autoplay: config.howlerSounds.interface.autoplay,
          loop: config.howlerSounds.interface.loop,
          volume: config.howlerSounds.interface.volume,
          buffer: config.howlerSounds.interface.buffer
    });
}