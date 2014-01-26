function credits()
{
    $("#play").fadeOut();
    $("#credit").fadeOut();
    $("#GC").fadeIn(500);
    $("#GD").fadeIn(1000);
    $("#GA").fadeIn(1500);
    $("#GD").fadeIn(2000);
    $("#DEV").fadeIn(2500);
    $("#SD").fadeIn(3000);
    $("#return").fadeIn();
}
function returnToMenu()
{
    $("#play").fadeIn();
    $("#credit").fadeIn();
    $("#return").fadeOut();
    $("#GC").fadeOut();
    $("#GD").fadeOut();
    $("#GA").fadeOut();
    $("#GD").fadeOut();
    $("#DEV").fadeOut();
    $("#SD").fadeOut();
}
function hideHUD()
{
    $("#HUD").fadeOut();
    $("#logo").fadeOut();
    $("#male").fadeOut();
    $("#female").fadeOut();
}

function playButton()
{
    $("#play").fadeOut();
    $("#credit").fadeOut();
    $("#male").fadeIn();
    $("#female").fadeIn();
}
var TextEffect = function(x,y,color,value)
{
    this.x = x;
    this.y = y;
    this.color = color;
    this.value = value;
    this.speed = 1;
    this.alive = true;
    this.clicOpacity = 1;
    this.effect = function()
    {
        this.clicOpacity-=0.005;
        this.y -= this.speed;
        if(this.clicOpacity<=0)
        {
            this.clicOpacity = 0;
            this.alive = false;
        }
    }
    this.draw = function()
    {
        context.beginPath();
        context.font = '24px "neuropol"';
        context.lineWidth = 2;
        //context.strokeStyle = "#43618F";
        context.fillStyle = this.color;
        context.globalAlpha = this.clicOpacity;
        context.fillText(this.value, this.x, this.y);
        //context.strokeText(this.value, this.x, this.y);
        context.globalAlpha = 1;
        context.closePath();
    }
}
