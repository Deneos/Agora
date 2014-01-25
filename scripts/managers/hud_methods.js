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