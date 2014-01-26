var mouseManager = {
  eMousemove: function(e) {
    var totalOffsetX = 0,
    totalOffsetY = 0;
    var currentElement = this;
    var event = e || window.e;
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    e.x = event.pageX;
    e.y = event.pageY;
    distanceSound(e)
  },
  eMouseDown : function() {
      mouseClick = true;
  },

  eMouseUp : function(e) {
    var totalOffsetX = 0,
    totalOffsetY = 0;
    var currentElement = this;
    var event = e || window.e;
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    e.x = event.pageX;
    e.y = event.pageY;
    posMouse.x = e.x;
    posMouse.y = e.y;
    mouseClick = true;
  },
  eOnclick : function() {
 }
}

var ennemieY = [];
function shootEnnemy()
{
    for(var i = 0; i < game.crowd.tabPeople.length; i++)
    {
      var ennemie = game.crowd.tabPeople[i];

      var minSquareX = Math.round(ennemie.x - ennemie.width/2);
      var maxSquareX = Math.round(ennemie.x + ennemie.width/2);
      var minSquareY = Math.round(ennemie.y - ennemie.height/2);
      var maxSquareY = Math.round(ennemie.y + ennemie.height/2);

        if(minSquareX < posMouse.x && maxSquareX > posMouse.x && minSquareY < posMouse.y 
        && maxSquareY > posMouse.y && mouseClick && !ennemie.priority)
          ennemie.priority = true;
        
           if(ennemie.priority){
             if(ennemie.nature === "neutral"){
                ennemie.nature = "nice"; 
                ennemie.cliked();
                return;
              }

              if(ennemie.nature === "bad"){
                ennemie.nature = "withoutFaceNeutral"; 
                ennemie.cliked();
                return;
              }
          }
    }
}

function distanceSound(e)
{   
    for(var i = 0; i < game.crowd.tabPeople.length; i++)
    {
      var ennemie = game.crowd.tabPeople[i];

      var minSquareX = Math.round(ennemie.x - ennemie.width/2);
      var maxSquareX = Math.round(ennemie.x + ennemie.width/2);
      var minSquareY = Math.round(ennemie.y - ennemie.height/2);
      var maxSquareY = Math.round(ennemie.y + ennemie.height/2);
      var centerEnnemy = Math.round(ennemie.width/2);
      console.log(game.crowd.tabPeople[i].playedWalk)
      if((minSquareX-10) < e.x && (maxSquareX+10) > e.x && (minSquareY-10) < e.y && (maxSquareY +10) > e.y
       && game.crowd.tabPeople[i].playedWalk =! undefined)
      {
        if(game.crowd.tabPeople[i].sound != undefined)
          game.crowd.tabPeople[i].sound.fadeIn(1, 5000);
        game.crowd.tabPeople[i].message();
        game.crowd.tabPeople[i].playedWalk = false;
      }
      else{
        if( game.crowd.tabPeople[i].sound != undefined)
        game.crowd.tabPeople[i].sound.fadeOut(0, 5000, function(){
          game.crowd.tabPeople[i].playedWalk = true;
        });
      }
      /*
      var distance = Math.round(Math.sqrt(Math.pow(game.crowd.tabPeople[i].x-e.x , 2) + Math.pow(game.crowd.tabPeople[i].y-e.y , 2)));
      if(distance < limitDistance){
        var valueVolume = (limitDistance - distance ) / 50;s
        game.crowd.tabPeople[i].female01.volume(valueVolume);
        game.crowd.tabPeople[i].message();
      }
      else{
          var valueVolume = 0;
          game.crowd.tabPeople[i].female01.volume(valueVolume);
      }*/
    }
}
