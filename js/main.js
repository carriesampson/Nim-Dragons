$( () => {
//------------------------------------------------------

//GAMEBOARD ROWS
  const $row1 = $("#gameBoardRow1");
  const $row2 = $("#gameBoardRow2");
  const $row3 = $("#gameBoardRow3");
  const $row4 = $("#gameBoardRow4");
  const $row5 = $("#gameBoardRow5");
  const $row6 = $("#gameBoardRow6");

//GAMEBOARD ROW CREATION (X6 ROWS OF 5 BUBBLES)
  for (let i = 0; i < 5; i++) {
    let $bubbles1 = $("<h2>").addClass("bubbles").text("O");
    let $bubbles2 = $("<h2>").addClass("bubbles").text("O");
    let $bubbles3 = $("<h2>").addClass("bubbles").text("O");
    let $bubbles4 = $("<h2>").addClass("bubbles").text("O");
    let $bubbles5 = $("<h2>").addClass("bubbles").text("O");
    let $bubbles6 = $("<h2>").addClass("bubbles").text("O");
    $row1.append($bubbles1);
    $row2.append($bubbles2);
    $row3.append($bubbles3);
    $row4.append($bubbles4);
    $row5.append($bubbles5);
    $row6.append($bubbles6);
  };

//CHANGE BUBBLE COLORS
  const $bubbleRed = $(".bubbles");
  let changeRed = () => {
    const red = $(event.currentTarget).css("color", "red");
  }
  $bubbleRed.on("click", changeRed);

  const $bubbleBlue = $(".bubbles");
  let changeBlue = () => {
    const blue = $(event.currentTarget).css("color", "blue");
  }
  $bubbleBlue.on("click", changeBlue);














//------------------------------------------------------
});
