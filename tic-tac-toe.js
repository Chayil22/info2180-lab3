window.addEventListener("DOMContentLoaded", () => {
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const squares = Array.from(board.querySelectorAll("#board > div"));

    squares.forEach(sq => sq.classList.add("square"));

    let currentPlayer = "X";
    let state = Array(9).fill("");

    const wins = [
        [0,1,2],[3,4,5],[6,7,8],   // rows
        [0,3,6],[1,4,7],[2,5,8],   // colums
        [0,4,8],[2,4,6]            // diagonals
    ];

    function checkWinner() {
        for (const [a,b,c] of wins) {
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    //base styling clas for each cell
    squares.forEach((sq, idx) => {
        //hover visuals for empty cells
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

            const winner = checkWinner();
            if (winner) {
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
