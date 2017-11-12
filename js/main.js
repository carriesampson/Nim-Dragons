$( () => {
//------------------------------------------------------

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


//GAMEPLAY

  let $player1Lives = $(["#life1", "#life2", "#life3", "life4"]);
  let p1LifeCount = $player1Lives.length;

  if (p1LifeCount === 4) {
    let $bubbleBlue = $(".bubbles");
    let changeBlue = () => {
      const blue = $(event.currentTarget).css("color", "blue");
    };
    $bubbleBlue.on("click", changeBlue);
  } else {
    let $bubbleRed = $(".bubbles");
      let changeRed = () => {
        const red = $(event.currentTarget).css("color", "red");
      }
      $bubbleRed.on("click",changeRed);
    };

  // let $player2Lives = {
  //   $p2Lives: $(["#life5", "#life6", "#life7", "#life8"])
  // };








startGame();
loadBoard();
// loadPlayer1();

//------------------------------------------------------
});
