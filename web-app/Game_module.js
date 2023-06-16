import R from "../web-app/ramda.js";
const Game_module = Object.create(null);
/**
 * Check if the board is full
 * @memberof Game_module
 * @function
 * @param
 * @returns
 */


/**
* Check if adjacent cells have different values
* @memberof Game_module
* @function
* @param
* @returns
*/

/**
* Check if the game is over
* @memberof Game_module
* @function
* @param
* @returns
*/

/**
* Check for empty cells
* @memberof Game_module
* @function
* @param
* @returns {Boolean}
*/



/**
* Move and combine cells
* @memberof Game_module
* @function
* @param
* @returns
*/

/**
* Insert a new cell where empty
* @memberof Game_module
* @function
* @param
* @returns
*/
Game_module.setTwo = function (uboard) {
    if (!hasEmptyTile(uboard)) {
        return uboard;
    }
    var rows = uboard.length;
    var columns = uboard[0].length;
    let found = false;
    while (!found) {
        //find random row and column to place a 2 in
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (uboard[r][c] == 0) {
            uboard[r][c] = 2;
            // let tile = document.getElementById(r.toString() + "-" + c.toString());//ERRORS
            // tile.innerText = "2";
            // tile.classList.add("x2");
            found = true;
        }
    }
    return uboard;
}

function hasEmptyTile(uboard) {
    let rows = uboard.length;
    let columns = uboard[0].length;

 

    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (uboard[r][c] == 0) { //at least one zero in the board
                return true;
            }
        }
    }
    return false;
}


/**
* Calculate the score
* @memberof Game_module
* @function
* @param
* @returns
*/

/**
* probability of 2 or 4
* @memberof Game_module
* @function
* @param
* @returns
*/





export default Object.freeze(Game_module);
