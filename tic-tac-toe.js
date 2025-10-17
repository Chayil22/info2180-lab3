window.addEventListener("DOMContentLoaded", () => {
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const squares = Array.from(board.querySelectorAll("#board > div"));
    const newGameBtn = document.querySelector(".btn");

    squares.forEach(sq => sq.classList.add("square"));

    const defaultStatus =
        "Move your mouse over a square and click to play an X or an O.";

    let currentPlayer = "X";
    let gameOver = false;
    let state = Array(9).fill("");

    const wins = [
        [0,1,2],[3,4,5],[6,7,8],    //rows
        [0,3,6],[1,4,7],[2,5,8],    //columns
        [0,4,8],[2,4,6]             //diagonals
    ];

    function checkWinner() {
        for (const [a,b,c] of wins) {
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    function endGame(winner) {
        gameOver = true;
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add("you-won");
    }

    //base styling class for each cell
    squares.forEach((sq, idx) => {

        //hover visuals for each cell
        sq.addEventListener("mouseenter", () => {
            if (!gameOver && !state[idx]) sq.classList.add("hover");
        });
        sq.addEventListener("mouseleave", () => {
            sq.classList.remove("hover");
        });

        sq.addEventListener("click", () => {
            if (gameOver || state[idx]) return;  //prevents overwrites

            state[idx] = currentPlayer;
            sq.textContent = currentPlayer;
            sq.classList.add(currentPlayer);
            sq.classList.remove("hover");

            const winner = checkWinner();
            if (winner) {
                endGame(winner);
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });

    //Board reset
    newGameBtn.addEventListener("click", () => {
        state = Array(9).fill("");
        gameOver = false;
        currentPlayer = "X";
        status.textContent = defaultStatus;
        status.classList.remove("you-won");

        squares.forEach(sq => {
            sq.textContent = "";
            sq.classList.remove("X", "O", "hover");
            if (!sq.classList.contains("square")) sq.classList.add("square");
        });
    });
});
