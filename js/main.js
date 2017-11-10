$( () => {
//------------------------------------------------------

  let $board = $("#gameBoard");
  let $bubbleStart = $("<h2>").addClass("bubbleStart").text("O");

  for (let i = 0; i <5; i++) {
    let $bubbleStart = $("<h2>").attr("id", "row1").addClass("bubbleStart").text("O");
    $board.append($bubbleStart);
  };










//------------------------------------------------------
});
