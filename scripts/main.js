window.requestAnimFrame =   (
    function(){
        return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback, element){
            window.setTimeout(callback, 1000 / 5);
        };
    }
)();

function gameloop()
{
    if(game!=null && game.pause===false)
    {
        context.clearRect(0,0,canvasWidth,canvasHeight);
        shootEnnemy();
        mouseClick = false;
        game.update();
        game.render();
    }
    if(game!=null && game.end!=null)
    {
        game.end.draw();
    }
    requestAnimationFrame(gameloop);
}