window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = Array.from(board.querySelectorAll("#board > div"));

  //base styling class for each cell
  squares.forEach(sq => sq.classList.add("square"));
});