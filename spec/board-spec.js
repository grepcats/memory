import { Card } from '../src/memory';
import { createBoard } from '../src/board';

describe('createBoard', function() {
  it('should create cards with correct positioning', function() {
    var board = createBoard();
    expect(board[0].xPos).toEqual(0);
    expect(board[0].yPos).toEqual(0);
    expect(board[0].xPos).not.toEqual(5);
  });

});
