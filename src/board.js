import { Card } from './memory';

export function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function createBoard() {
  var board = [];
  var unshuffledArray = [1, 1, 2, 2, 3, 3, 4, 4];
  var shuffledArray = shuffle(unshuffledArray);
  var trackIndex = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 2; j++) {
      var newCard = new Card(i, j, shuffledArray[trackIndex]);
      board.push(newCard);
      ++trackIndex;
    }
  }
  return board;
}
