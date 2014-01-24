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
    //Game.ctx.drawImage(Game.buffer, 0, 0, Game.canvas.width, Game.canvas.height);
    requestAnimationFrame(gameloop);
}