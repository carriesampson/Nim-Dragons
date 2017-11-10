$( () => {
//------------------------------------------------------

//GAMEBOARD ROW VARIABLES
  let $row1 = $("#gameBoardRow1");
  let $row2 = $("#gameBoardRow2");
  let $row3 = $("#gameBoardRow3");
  let $row4 = $("#gameBoardRow4");
  let $row5 = $("#gameBoardRow5");
  let $row6 = $("#gameBoardRow6");

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




//------------------------------------------------------
});
