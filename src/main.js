import { Card } from '../src/memory';
import { createBoard } from '../src/board';



$(document).ready(function() {
  var thisBoard = createBoard();
  thisBoard.forEach(function(element) {
    $(".game-board").append("<div>" + element.xPos + element.yPos + element.num + "</p>");
  });

  var fakeCard = new Card(1, 1, 10);
  $(".game-board").append("<p>" + fakeCard.xPos + "</p>");
});
