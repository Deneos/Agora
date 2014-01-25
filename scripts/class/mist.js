var Mist = function()
{
    this.background = new Image();
    this.background.src = "medias/images/decor.png";
    this.init = function()
    {
        var grd = contextBuffer.createRadialGradient(canvasWidth/2,canvasHeight/2,5,90,60,canvasWidth);
        grd.addColorStop(0,"#7a7a5f");
        grd.addColorStop(1,"#bbbbc7");

        // Fill with gradient
        contextBuffer.fillStyle=grd;
        contextBuffer.fillRect(0,0,canvasWidth,canvasHeight);
    }
    this.drawBackground = function()
    {
        context.drawImage(this.background,0,0);       
    }
    this.render = function()
    {       
        context.globalAlpha = game.player.assurance/100;
        context.drawImage(canvasBuffer,0,0);
        context.globalAlpha = 1;
       // context.fillStyle = "rgba(175,170,240,"+(game.player.assurance/100)+")";
       // context.fillRect(0,0,canvasWidth,canvasHeight);
    }
}