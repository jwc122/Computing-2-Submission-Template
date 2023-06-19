import Game_module from "../Game_module.js";
import R from "../ramda.js";

/* when all tiles are full - game over */

/* if 2 numbers are the same */
/**
 * Returns if the board is in a valid state.
 * A board is valid if all the following are true:
 * - The board is a rectangular 2d array containing only 0, 1, or 2 as elements.
 * - Player 1 has the same number of tokens as Player 2 or has exactly one more.
 * - There are no empty slots in columns below filled ones.
 * - At most one player has a winning configuration.
 * @memberof Game_module.test
 * @function
 * @param {Board} board The board to test.
 * @throws if the board fails any of the above conditions.
 */
// const throw_if_invalid = function (board) {
//     // Rectangular array.
//     if (!Array.isArray(board) || !Array.isArray(board[0])) {
//         throw new Error(
//             "The board is not a 2D array: " + display_board(board)
//         );
//     }
//     const height = board[0].length;
//     const rectangular = R.all(
//         (column) => column.length === height,
//         board
//     );
//     if (!rectangular) {
//         throw new Error(
//             "The board is not rectangular: " + display_board(board)
//         );
//     }

const throw_if_invalid = function(board) {
    // 2-D array
    if (!Array.isArray(board) || !Array.isArray(board[0])) {
        throw new Error(
            "The board is not a 2D array"
        );
    }
    // Square - 4x4
    const width = board.length;
    if (!(width === 4)) {
        throw new Error(
            "The board length is not 4"
        );
    }
    const square = R.all(
        (column) => column.length === 4,
        board
    );
    if (!square) {
        throw new Error(
            "The board is not square"
        );
    }
    // All entries are powers of 2: (0), 2, 4, 8, 16, etc.
    const is_valid_token = function(token) {
        if (!Number.isInteger(token)) {
            return false;
        }
        if (token === 0) {
            return true;
        } else {
            return Math.pow(2, Math.round(Math.log(token) / Math.log(token)));
        }
    };
    const contains_valid_tokens = R.pipe(
        R.flatten,
        R.all((slot) => is_valid_token(slot))
    )(board);
    if (!contains_valid_tokens) {
        throw new Error(
            "Board contains invalid tokens"
        );
    }
}

/* if the board is empty dont end the game - testing if game over*/
describe("top level", function () {
    it("item", function () {
    });
});

/* an empty board has 0 cells - testing if the board is empty*/

/*if you can move left if VALID*/

/*if you can move right */

/*if you can move up */

/*if you can move down */

/*if adjacent cells are the same - not game over*/

/*if up and down cells are the same - not game over */

/*example based test for left*/

/*example based test for up*/

/*example based test for down*/

/*example based test for right*/

/*score board should be 0 at empty board*/

/*move left, score remains the same*/