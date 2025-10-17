window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = Array.from(board.querySelectorAll("#board > div"));

    squares.forEach(sq => sq.classList.add("square"));

    let currentPlayer = "X";
    let state = Array(9).fill("");

    //base styling class for each cell
    squares.forEach((sq, idx) => {
        // hover visuals for empty cells
        sq.addEventListener("mouseenter", () => {
            if (!state[idx]) sq.classList.add("hover");
        });
        sq.addEventListener("mouseleave", () => {
            sq.classList.remove("hover");
        });

        sq.addEventListener("click", () => {
            if (state[idx]) return;
            state[idx] = currentPlayer;
            sq.textContent = currentPlayer;
            sq.classList.add(currentPlayer);
            sq.classList.remove("hover");
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
});
