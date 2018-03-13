## specs
  * Program should generate a grid of 8 cards
    * Input: Enter game
    * Output: see grid of 8 cards 4x4. Create Card class with xpos/ypos/num (to start) and method to generate gameboard.
  * Program should have 2 of each number represented in card grid
    * Input: numbers 1-4
    * Output: 8 cards with two of each number 1-4 represented
  * Program should allow user to click a card and have the card flip
    * Input: user click on a position
    * Output: card flips
  * Program should allow second flip and linger functionality for different cards
    * Input: user clicks second card and they are different
    * Output: Cards should linger for 2 seconds and then both flip.
  * Program should recognize when two of the same cards are flipped
    * Input: user clicks second card and they are the same
    * Output: cards stay flipped
  * Program should track the number of attempted flips and remember the low score
    * Input: click pairs
    * Output: increment and save top/low score.
  * Program should recognize when all cards have been flipped and report to user their score
    * Input: all flipped Cards
    * Output: you win
