//Objet global game qui gere tout les objets d'une session de jeu.
var Game = function(sex)
{
    this.player = new Player(sex);
    this.crowd = new Crowd();
    this.mist = new Mist();
    this.pause = false;
    this.end = false;

    this.effect = [];

    
    this.update = function()
    {
        this.crowd.update();
        this.level.motor();
        this.player.update();
        //perdu
        if(this.player.assurance<=0)
        {
            this.effect = [];
            this.pause = true;
        }
        //gagne
        if(this.player.assurance>=100)
        {
            this.effect = [];
            this.pause = true;
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

