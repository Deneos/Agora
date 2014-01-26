var canvas, context, canvasBuffer, contextBuffer;
var canvasWidth = 1280, canvasHeight = 720;
var game = null;
var mouseClick = false;
var posMouse = {
    x : 0,
    y : 0
}
var backgroundSound, footstepFemale_1;
var slowMist, middleMist, hardMist;

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

    middleMist = new Howl({
    urls: [config.howlerSounds.middleAmbianceSound.source][0],
      autoplay: config.howlerSounds.middleAmbianceSound.autoplay,
        loop: config.howlerSounds.middleAmbianceSound.loop,
        volume: config.howlerSounds.middleAmbianceSound.volume,
        buffer: config.howlerSounds.middleAmbianceSound.buffer
  });


    hardMist = new Howl({
    urls: [config.howlerSounds.badAmbianceSound.source][0],
      autoplay: config.howlerSounds.badAmbianceSound.autoplay,
        loop: config.howlerSounds.badAmbianceSound.loop,
        volume: config.howlerSounds.badAmbianceSound.volume,
        buffer: config.howlerSounds.badAmbianceSound.buffer
  });

    slowMist = new Howl({
    urls: [config.howlerSounds.slowAmbianceSound.source][0],
      autoplay: config.howlerSounds.slowAmbianceSound.autoplay,
        loop: config.howlerSounds.slowAmbianceSound.loop,
        volume: config.howlerSounds.slowAmbianceSound.volume,
        buffer: config.howlerSounds.slowAmbianceSound.buffer
  });

    hearthbeat = new Howl({
        urls: [config.howlerSounds.hearthbeath.source][0],
          autoplay: config.howlerSounds.hearthbeath.autoplay,
            loop: config.howlerSounds.hearthbeath.loop,
            volume: config.howlerSounds.hearthbeath.volume,
            buffer: config.howlerSounds.hearthbeath.buffer
      });

    hearthbeatHard = new Howl({
        urls: [config.howlerSounds.hearthbeatHard.source][0],
          autoplay: config.howlerSounds.hearthbeatHard.autoplay,
            loop: config.howlerSounds.hearthbeatHard.loop,
            volume: config.howlerSounds.hearthbeatHard.volume,
            buffer: config.howlerSounds.hearthbeatHard.buffer
      });
}