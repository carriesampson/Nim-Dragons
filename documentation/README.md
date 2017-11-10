# Project-1
Nim Dragons: 2-player Logic-based Game

————————————————————————————————————

HIGH LEVEL PAGE SETUP

- Header
    — game title
    — cloud CSS animation
    — non-functional

- Instructions
    — default state = expanded
    — button for collapse/expand by user	
    — on expand display non-functional game content

- Play 
    — default state = collapsed
    — button for collapse/expand by user        
    — on-click = expand = startGame();
    — on-click = collapse = endGame();

- Options
    — default state = collapsed
    — button for collapse/expand by user
    — on expand display non-functional game content	

- About
    — default state = collapsed
    — button for collapse/expand by user
    — on expand display non-functional game content	

- Footer
    — game credits
    — cloud CSS animation
    — non-functional

————————————————————————————————————

BOARD & GAMEPLAY LOGIC

- User clicks Play

- startGame();

- getBoard() for loop perhaps not possible given row restriction (RESEARCH THIS - for loop 	  applied to class for all rows? How to differentiate between bubbles?)

- Valid click events must be limited to specific rows
    - if diagonal click-selection attempted
        - Display modal “Must choose in rows”
        - Return false on click-selection
    -If row and column click-selection attempted
        -Display modal “Must choose in rows”
        -Return false on click-selection

- startRound();
    - Starting state
        - P1 = currentPlayer
        - P2 = nextPlayer
    - currentPlayer clicks bubble(s)
        - If click selection is valid
            - On-click bubbles disappear
            - Check count of remainingBubbles
                - If remainingBubbles > 0 
                    - nextPlayer becomes currentPlayer
                - If remainingBubbles === 0
                - Check count of nextPlayerLives
                    - If nextPlayerLives > 0
                        - nextPlayer -1 life
                        - nextPlayer becomes currentPlayer

- If nextPlayer becomes currentPlayer
    - Count of round +1
    - getBoard();

- If nextPlayerLives === 0
    - currentPlayer WIN
    - get currentPlayer attributes
    - invoke currentPlayer win state
    - button for replay

————————————————————————————————————

GAMEPLAY VISUAL CUES 

- User clicks Play

- getBoard()
// Display Round #

- startRound();
- Starting state
// Animation up/down hover on currentPlayer avatar to indicate player turn

- currentPlayer clicks bubble(s) 
    - On-click bubbles disappear
    // Icon swap for fire for all clicked bubbles
    // Fade on fire removes elements

- nextPlayer looses round/life
// Icon swap for gray heart

- invoke currentPlayer win state
//Animation intended here (NEEDS EXPLORATION)

————————————————————————————————————


