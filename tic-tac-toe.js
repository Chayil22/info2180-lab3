window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = Array.from(board.querySelectorAll("#board > div"));

    squares.forEach(sq => sq.classList.add("square"));

    let currentPlayer = "X";
    let state = Array(9).fill("");

    //base styling class for each cell
    squares.forEach((sq, idx) => {
        sq.addEventListener("click", () => {
            if (state[idx]) return;              
            state[idx] = currentPlayer;
            sq.textContent = currentPlayer;
            sq.classList.add(currentPlayer);     
            currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });
});
