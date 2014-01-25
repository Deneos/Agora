var Mist = function()
{
    this.background0 = new Image();
    this.background1 = new Image();
    this.background2 = new Image();

    
    this.init = function()
    {
        var grd = contextBuffer.createRadialGradient(canvasWidth/2,canvasHeight/2,5,90,60,canvasWidth);
        grd.addColorStop(0,"#7a7a5f");
        grd.addColorStop(1,"#bbbbc7");

        // Fill with gradient
        contextBuffer.fillStyle=grd;
        contextBuffer.fillRect(0,0,canvasWidth,canvasHeight);

        this.image1alpha = 0;
        this.image2alpha = 0;

        if(game.player.gender==="male")
        {
            this.background0.src = "medias/images/homme0.png";
            this.background1.src = "medias/images/homme1.png";
            this.background2.src = "medias/images/homme2.png";
        }
        if(game.player.gender==="female")
        {
            this.background0.src = "medias/images/femme0.png";
            this.background1.src = "medias/images/femme1.png";
            this.background2.src = "medias/images/femme2.png";
        }
    }
    this.drawBackground = function()
    {
        if(game.player.assurance<50)
        {
            this.image2alpha = (game.player.assurance/100)*2;
            this.image1alpha = 0;
        }
        if(game.player.assurance>50)
        {
            this.image1alpha = 1-((game.player.assurance/100)*2);
            this.image2alpha = 0;
        }
        context.globalAlpha = 1;
        context.drawImage(this.background1,0,0);
        context.globalAlpha = this.image1alpha;
        context.drawImage(this.background0,0,0);
        context.globalAlpha = this.image2alpha;
        context.drawImage(this.background2,0,0);   
        context.globalAlpha = 1;        
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