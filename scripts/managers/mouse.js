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
    shootEnnemy(e);
  },
  eMouseDown : function() {
      mouseClick = true;
  },

  eMouseUp : function() {
      mouseClick = false
  },
  eOnclick : function() {
   // soundClick();
  }
}

function shootEnnemy(mouse)
{
    for(var i = 0; i < game.crowd.tabPeople.length; i++)
    {
      var distance = getDistance(game.crowd.tabPeople[i], mouse);

      if(distance < 10 && mouseClick)
      {
         if(game.crowd.tabPeople[i].nature === "bad" )
            game.crowd.tabPeople[i].nature = "neutral";

         if(game.crowd.tabPeople[i].nature === "neutral" && game.crowd.tabPeople[i].type === "neutral")
            game.crowd.tabPeople[i].nature = "nice";
      }
    }
}