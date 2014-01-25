//Objet global game qui gere tout les objets d'une session de jeu.
var Game = function()
{
    this.player = new Player();
    this.crowd = new Crowd();
    this.mist = new Mist();


    
    this.update = function()
    {
        this.crowd.update();
    }
    this.render = function()
    {
        this.mist.drawBackground();
        this.crowd.render();
        this.mist.render();
    }
    return this;
}

