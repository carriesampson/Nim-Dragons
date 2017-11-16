# Project-1: Nim Dragons
Nim Dragons: 2-player Logic-based Game: 
Created by Carrie Sampson


HIGH LEVEL PAGE SETUP & FUNCTIONALITY
————————————————————————————————————-

HEADER

    — game title 
            - CSS/Flexbox
            - Generally applied CSS
            - Google Font Library

    — cloud animation
            - CSS animation attributes & @keyframes
            - custom created cloud assets

INSTRUCTIONS

    - on click expand/collapse functionality
            - CSS/Flexbox
            - Generally applied CSS
            - JQuery toggle();
            - JQuery hide();
    
GAMEPLAY

    - Player columns (x2) and game board execution
        - CSS/Flexbox
        - Generally applied CSS
        - CSS/Transform execution
        - HTML
        - Javascript
        - JQuery
        - Custom created avatar assets

WIN & RESET SCENARIO

    - Player win state
        - CSS/Flexbox
        - Generally applied CSS

    - Player reset 
        - CSS/Flexbox
        - CSS animation attributes & @keyframes
        - Generally applied CSS

FOOTER

    — game credits
        - CSS/Flexbox
        - Generally applied CSS

    - cloud animation
        - CSS animation attributes & @keyframes (unique from header execution)
        - custom created cloud assets (repurposed from header execution)


IDEALIZED GAMEPLAY LOGIC
————————————————————————

- User clicks Play

- startGame();

- getBoard();

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


RELEASED GAMEPLAY LOGIC
———————————————————————

- startGame();

- Valid click events must be limited to specific rows
    - Rows outside of that selected become disabled on each player's turn for rules enforcement

- Starting state
    - P1 = currentPlayer
    - P2 = nextPlayer

- Play State
    - currentPlayer clicks bubble(s)

        - If click selection is valid
            - User click button to submit selection for removal
            - Check count of remainingBubbles

                - If remainingBubbles > 0 
                    - nextPlayer turn

                - If remainingBubbles === 0
                    -currentPlayer Wins

            -win scenario and game reset

        - If nextPlayer becomes currentPlayer
            - repeat logic until remaining bubbles ===0
            - winning player is last to move, clearing board to zero

- Win State
    - invoke last move win state for winner player
    - load button for replay


FUTURE ENHANCEMENTS
———————————————————
- Apply player lives as idealized
- Apply more dynamic/interactive avatar functionality including animation (requires asset redesign)
- Add dynamics to levels with custom level creation using 'bubbles' to create shapes (sword, helmet, fire, etc.)
- Allow for facebook integration
- Apply in-game purchase possibilities
- Apply relevant social API integrations for player engagement

