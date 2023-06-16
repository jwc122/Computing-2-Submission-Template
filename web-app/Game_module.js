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

Game_module.hasEmptyTile = function(rows, columns) {
  let count = 0;
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
          if (board[r][c] == 0) { //at least one zero in the board
              return true;
          }
      }
  }
  return false;
}



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

/**
* Calculate the score
* @memberof Game_module
* @function
* @param 
* @returns 
*/

/**
* generate random position
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

