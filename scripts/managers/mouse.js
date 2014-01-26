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
                ennemie.attack();
                return;
              }

              if(ennemie.nature === "bad"){
                ennemie.nature = "withoutFaceNeutral"; 
                ennemie.attack();
                return;
              }
          }
    }
}

function distanceSound(e)
{   
  var limitDistance = 30;
    for(var i = 0; i < game.crowd.tabPeople.length; i++)
    {
      var distance = Math.round(Math.sqrt(Math.pow(game.crowd.tabPeople[i].x-e.x , 2) + Math.pow(game.crowd.tabPeople[i].y-e.y , 2)));
      if(distance < limitDistance){
        var valueVolume = (limitDistance - distance ) / 30;
        game.crowd.tabPeople[i].sound.volume(valueVolume);

        game.crowd.tabPeople[i].attack();
      }
      else{
          var valueVolume = 0;
          game.crowd.tabPeople[i].sound.volume(valueVolume);
      }
    }

}
