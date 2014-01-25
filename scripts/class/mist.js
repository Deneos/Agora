var Mist = function()
{
    this.render = function()
    {
        context.fillStyle = "rgba(175,170,240"+(game.player.assurance/100)+")";
        context.fillRect(0,0,canvasWidth,canvasHeight);
    }
}