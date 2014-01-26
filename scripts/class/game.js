//Objet global game qui gere tout les objets d'une session de jeu.
var Game = function(sex)
{
    this.player = new Player(sex);
    this.crowd = new Crowd();
    this.mist = new Mist();
    this.pause = false;
    this.end = null;

    this.effect = [];

    
    this.update = function()
    {
        this.crowd.update();
        this.level.motor();
        this.player.update();
        //perdu
        if(this.player.assurance<=0 && this.end == null)
        {
            this.effect = [];
            this.pause = true;
            this.end = new End("medias/images/Good_game.png");
        }
        //gagne
        if(this.player.assurance>=100 && this.end == null)
        {
            this.effect = [];
            this.pause = true;
            this.end = new End("medias/images/game-over.png");
        }

    }
    this.render = function()
    {
        this.mist.drawBackground();
        this.crowd.render();
        this.mist.render();

        for(var i = 0; i < this.effect.length;i++)
        {
            this.effect[i].effect();
            this.effect[i].draw();
            if(this.effect[i].alive==false)
                this.effect.splice(i,1);
        }
    }
    return this;
}

var End = function(image)
{
    this.img = new Image();
    this.img.src = image;
    this.opacity = 0;
    $("#menu").fadeIn(2500);

    this.draw = function()
    {
        context.globalAlpha = this.opacity;
        context.drawImage(this.img,0,0);
        context.globalAlpha = 1;
        if(this.opacity<1)
            this.opacity += 0.0005;
    }
}