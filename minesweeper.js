console.log("minesweeper.js loaded");
document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
        const bombCount = 1;
        function createBoard() {
            const board = [];
            for (let i = 0; i < boardSize; i++) {
                board.push(new Array(boardSize).fill(0));
            }

            // Place bombs
            let bombsPlaced = 0;
            while (bombsPlaced < bombCount) {
                const row = Math.floor(Math.random() * boardSize);
                const col = Math.floor(Math.random() * boardSize);
                if (board[row][col] !== 'B') {
                    board[row][col] = 'B';
                    bombsPlaced++;

                    // Update numbers around bomb
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            const r = row + i;
                            const c = col + j;
                            if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] !== 'B') {
                                board[r][c]++;
                            }
                        }
                    }
                }
            }

            return board;
        }

        function renderBoard(board) {
            const boardElement = document.getElementById('minesweeper-board');
            boardElement.innerHTML = '';
            for (let row = 0; row < boardSize; row++) {
                for (let col = 0; col < boardSize; col++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.row = row;
                    cell.dataset.col = col;

                    cell.addEventListener('click', () => handleCellClick(cell, board));

                    boardElement.appendChild(cell);
                }
            }
        }

        function handleCellClick(cell, board) {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);

            if (cell.classList.contains('revealed')) return;

            cell.classList.add('revealed');

            if (board[row][col] === 'B') {
                cell.classList.add('bomb');
                cell.textContent = 'B';
                alert('Game Over!');
                revealAllBombs(board);
            } else {
                if (board[row][col] > 0) {
                    cell.classList.add('number');
                    cell.textContent = board[row][col];
                }

                if (board[row][col] === 0) {
                    revealAdjacentCells(row, col, board);
                }

                if (checkWin(board)) {
                    alert('You Win!');
                }
            }
        }

        function revealAllBombs(board) {
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                if (board[row][col] === 'B') {
                    cell.classList.add('bomb', 'revealed');
                    cell.textContent = 'B';
                }
            });
        }

        function revealAdjacentCells(row, col, board) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const r = row + i;
                    const c = col + j;
                    if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
                        const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
                        if (cell && !cell.classList.contains('revealed')) {
                            handleCellClick(cell, board);
                        }
                    }
                }
            }
        }

        function checkWin(board) {
            const cells = document.querySelectorAll('.cell');
            let revealedCount = 0;
            cells.forEach(cell => {
                if (cell.classList.contains('revealed')) {
                    revealedCount++;
                }
            });

            return revealedCount === (boardSize * boardSize - bombCount);
        }

        function startGame() {
            const board = createBoard();
            renderBoard(board);
        }

        const restartButton = document.getElementById('restart-button');
        if (restartButton) {
            restartButton.addEventListener('click', () => {
                // Restart game logic here
                console.log('Restart button clicked');
            });
        } else {
            console.error('Restart button not found');
        }

        startGame();
});
