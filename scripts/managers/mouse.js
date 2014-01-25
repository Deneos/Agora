function eMousemove(e) {
  var totalOffsetX = 0,
  totalOffsetY = 0;

  //calculating the position on the canvas
  var currentElement = this;
  var event = e || window.e;
  totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
  totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  //update of the mouse attributes
  e.x = event.pageX;
  e.y = event.pageY;
}

