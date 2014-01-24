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
    context.clearRect(0,0,canvasWidth,canvasHeight);
    context.drawImage(canvasBuffer,0,0);
    if(game!=null)
    {
        game.update();
        game.render();
    }
    requestAnimationFrame(gameloop);
}