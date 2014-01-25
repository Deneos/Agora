var Mist = function()
{
    this.background = new Image();
    this.background.src = "medias/images/decor_line.jpg";
    this.drawBackground = function()
    {
        context.drawImage(this.background,0,0,3508,2480,0,0,canvasWidth,canvasHeight);       
    }
    this.render = function()
    {       

        context.fillStyle = "rgba(175,170,240,"+(game.player.assurance/100)+")";
        context.fillRect(0,0,canvasWidth,canvasHeight);
    }
}