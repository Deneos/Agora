var mouseManager = {
  eMousemove: function() {
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
   // soundClick();
  }
}

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
        && maxSquareY > posMouse.y && mouseClick)
        {
           if(ennemie.nature === "normalNeutral")
              ennemie.nature = "good"; 

            if(ennemie.nature === "bad")
              ennemie.nature = "withoutFaceNeutral"; 
        }
    }
}
