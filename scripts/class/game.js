//Objet global game qui gere tout les objets d'une session de jeu.
var Game = function()
{
    this.player = new Player();
    this.crowd = null;
    this.mist = new Mist();
    
    this.update = function()
    {
        
    }
    this.render = function()
    {
        this.mist.render();
    }
    return this;
}

