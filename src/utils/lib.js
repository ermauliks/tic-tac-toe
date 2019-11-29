const flatten = list => {
    return list.reduce(function(r, c) { // result and current value
        return r.concat(Array.isArray(c) ? flatten(c) : c);
    }, []);
};

// Recursively finds next position for computer
export function getRandomPos(board, trial = 0) {
    let random = Math.floor(Math.random() * 9);
    let counter = 0;

    // TODO: Hack to prevent call stack
    if (trial > 1000) return [null, null];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (counter++ === random) {
                if (board[i][j] === undefined) {
                    return [i, j];
                } else {
                    trial += 1;
                    return getRandomPos(board, trial);
                }
            }
        }
    }
}

export function getWinner(boxes) {
    // Array with winning combinations
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    boxes = flatten(boxes);

    // Iterate over array with winning combinations
    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i];

        // Check if the game board contains winning combination
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            // Return the winner ('X' or 'O')
            return boxes[a]
        }
    }

    return null;
}