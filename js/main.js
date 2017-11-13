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

//PLAYER LIVES/TURNS
  let $player1Lives = $(["#life1", "#life2", "#life3", "life4"]);
  let p1LifeCount = $player1Lives.length;
  let $player2Lives = $(["#life5", "#life6", "#life7", "life8"]);
  let p2LifeCount = $player2Lives.length;
  let $bubbleCount = $(".bubbles").length;
  console.log($player1Lives.length);
  console.log($player2Lives.length);
  console.log($bubbleCount);

//PLAYER MOVES
  const $p1Button = $("#p1Done")
  const $p2Button = $("#p2Done")

  if (p1LifeCount >= 4) {
    let $bubbleBlue = $(".bubbles");
    let changeBlue = () => {
      const $blue = $(event.currentTarget).addClass("p1Selected").css("color", "blue");
    };
    $bubbleBlue.on("click", changeBlue);
  };

  let $p1Click = $("#p1Done");
  let removeBubble = () => {
    const $removeBlue = $(".p1Selected").remove();
  };
  $p1Click.on("click", removeBubble);


  // const removeBlue = () => {
  //   let removeBlue = $(".p1Selected").remove();
  //   $p1Button.on("click", removeBlue);
  // };

    //$bubbleRemove.on("click", removeBlue);

  // } else {
  //   let $bubbleRed = $(".bubbles");
  //     let changeRed = () => {
  //       const red = $(event.currentTarget).css("color", "red");
  //     }
  //     $bubbleRed.on("click",changeRed);
  //   };


// loadPlayer1();

//------------------------------------------------------
});
