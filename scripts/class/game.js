//Objet global game qui gere tout les objets d'une session de jeu.
var Game = function(sex)
{
    this.player = new Player(sex);
    this.crowd = new Crowd();
    this.mist = new Mist();
    this.pause = false;
    this.end = false;

    
    this.update = function()
    {
        this.crowd.update();
        this.level.motor();
        this.player.update();
        //perdu
        if(this.player.assurance<=0)
        {
            this.pause = true;
        }
        //gagne
        if(this.player.assurance>=100)
        {
            this.pause = true;
        }
    }
    this.render = function()
    {
        this.mist.drawBackground();
        this.crowd.render();
        this.mist.render();
    }
    return this;
}

