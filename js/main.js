$( () => {
//------------------------------------------------------
//CREATE GAMEBOARD
    const $row1 = $("#gameBoardRow1");
    const $row2 = $("#gameBoardRow2");
    const $row3 = $("#gameBoardRow3");
    const $row4 = $("#gameBoardRow4");
    const $row5 = $("#gameBoardRow5");
      for (let i = 0; i < 5; i++) {
        let $bubbles1 = $("<h2>").addClass("bubbles").text("O");
        let $bubbles2 = $("<h2>").addClass("bubbles").text("O");
        let $bubbles3 = $("<h2>").addClass("bubbles").text("O");
        let $bubbles4 = $("<h2>").addClass("bubbles").text("O");
        let $bubbles5 = $("<h2>").addClass("bubbles").text("O");
        $row1.append($bubbles1);
        $row2.append($bubbles2);
        $row3.append($bubbles3);
        $row4.append($bubbles4);
        $row5.append($bubbles5);
      };
//------------------------------------------------------
//GLOBAL VARIABLES
  let $boardCount1 = $(".bubbles").length;
  let $boardCount2 = $(".bubbles").length;
  let $p1Click = $("#p1Done");
  let $pClick2 = $("#p2Done");
//------------------------------------------------------
//START GAME
  const startGame = () => {
    player1Turn();
  }
//------------------------------------------------------
// PLAYER 1 TURN FUNCTION
  const player1Turn = () => {
    if ($boardCount1 >= 1) {
      let $bubbleBlue = $(".bubbles");
      let changeBlue = () => {
        const $blue = $(event.currentTarget).addClass("p1Selected").css("color", "blue");
      };
      $bubbleBlue.on("click", changeBlue);
      } else {
        console.log("Player 2 Wins!");
    };
  };
//------------------------------------------------------
// PLAYER 1 REMOVE BUBBLES
  let removeBubble1 = () => {
    const $removeBlue = $(".p1Selected").remove();
    let $remainingBubbles1 = $(".bubbles").length
    console.log($remainingBubbles1);
    player2Turn();
  };
  $p1Click.on("click", removeBubble1);
//------------------------------------------------------
//PLAYER 2 TURN FUNCTION
  const player2Turn = () => {
    if ($boardCount2 >= 1) {
      let $bubbleRed = $(".bubbles");
      let changeRed = () => {
        const $red = $(event.currentTarget).addClass("p2Selected").css("color", "red");
      };
      $bubbleRed.on("click", changeRed);
      } else {
        console.log("Player 1 Wins!");
    };
  };
//------------------------------------------------------
//PLAYER 2 REMOVE BUBBLES
  let $p2Click = $("#p2Done");
  let removeBubble2 = () => {
    const $removeRed = $(".p2Selected").remove();
    let $remainingBubbles1 = $(".bubbles").length
    console.log($remainingBubbles1);
    player1Turn();
  };
  $p2Click.on("click", removeBubble2);
//------------------------------------------------------

  startGame();

});
