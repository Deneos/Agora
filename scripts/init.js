var canvas, context, canvasBuffer, contextBuffer;
var canvasWidth = 1280, canvasHeight = 720;
var game = null;

$(function() {
    function init () {
        //declarer le canvas
        canvas                     =       document.getElementById("canvas");
        context                    =       canvas.getContext('2d');
        canvas.width               =       canvasWidth;
        canvas.height              =       canvasHeight;
        //buffer
        canvasBuffer               =       document.createElement("canvas");
        contextBuffer              =       canvasBuffer.getContext('2d');
        canvasBuffer.width         =       canvasWidth;
        canvasBuffer.height        =       canvasHeight;
        game                       =       new Game();
        
        canvas.addEventListener('mousemove', mouseManager.eMousemove, false);
        canvas.addEventListener('click', mouseManager.eOnclick, false);
        gameloop();

        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot1, nature : 'bad', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot2, nature : 'nice', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot3, nature : 'bad', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot4, nature : 'bad', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot5, nature : 'nice', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot6, nature : 'nice', speed : 3}));
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot7, nature : 'nice', speed : 3}));


    }
    init();
});


