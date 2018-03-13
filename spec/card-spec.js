import { Card } from '../src/memory';

describe('Card', function() {
  it('should test whether a card has positioning and a number', function() {
    var newCard = new Card(0, 0, 3);
    expect(newCard.xPos).toEqual(0);
    expect(newCard.yPos).toEqual(0);
    expect(newCard.num).toEqual(3);
    expect(newCard.num).not.toEqual(5);
  });

});
