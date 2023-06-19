import R from "./ramda.js";
const Game_module = Object.create(null);



/**
* Insert a new cell where empty
* @memberof Game_module
* @function
* @param
* @returns
*/
Game_module.setTwo = function (uboard) {
// function setTwo(uboard) {
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
            uboard[r][c] = twoOrFour();
            // let tile = document.getElementById(r.toString() + "-" + c.toString());//ERRORS
            // tile.innerText = "2";
            // tile.classList.add("x2");
            found = true;
        }
    }
    return uboard;
}
/**
* Check for empty cells
* @memberof Game_module
* @function
* @param
* @returns {Boolean}
*/
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



function filterZero(row){
    return row.filter(num => num != 0); //create new array of all nums != 0
}

/**
* Check if adjacent cells have different values
* @memberof Game_module
* @function
* @param
* @returns
*/

/**
* Move and combine cells
* @memberof Game_module
* @function
* @param
* @returns
*/
function slide(row) {
    //[0, 2, 2, 2]
    row = filterZero(row); //[2, 2, 2]
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    } //[4, 0, 2]
    row = filterZero(row); //[4, 2]
    //add zeroes
    while (row.length < 4) {
        row.push(0);
    } //[4, 2, 0, 0]
    return row;
}

Game_module.slideLeft = function (uboard) {
// function slideLeft(uboard) {
    let rows = uboard.length;
    for (let r = 0; r < rows; r++) {
        let row = uboard[r];
        row = slide(row);
        uboard[r] = row;
        // for (let c = 0; c < columns; c++){
            // let tile = document.getElementById(r.toString() + "-" + c.toString());
            // let num = board[r][c];
            // updateTile(tile, num);
        // }
    }
    return uboard
}


Game_module.slideRight = function (uboard) {
// function slideRight(uboard) {
    let rows = uboard.length;
    for (let r = 0; r < rows; r++) {
        let row = uboard[r];         //[0, 2, 2, 2]
        row.reverse();              //[2, 2, 2, 0]
        row = slide(row)            //[4, 2, 0, 0]
        uboard[r] = row.reverse();   //[0, 0, 2, 4];
        // for (let c = 0; c < columns; c++){
        //     let tile = document.getElementById(r.toString() + "-" + c.toString());
        //     let num = board[r][c];
        //     updateTile(tile, num);
        // }
    }
    return uboard;
}
Game_module.slideUp = function (uboard) {
// function slideUp(uboard) {
    let columns = uboard[0].length;
    for (let c = 0; c < columns; c++) {
        let row = [uboard[0][c], uboard[1][c], uboard[2][c], uboard[3][c]];
        row = slide(row);
        // board[0][c] = row[0];
        // board[1][c] = row[1];
        // board[2][c] = row[2];
        // board[3][c] = row[3];
        for (let r = 0; r < 4; r++){
            uboard[r][c] = row[r];
        //     let tile = document.getElementById(r.toString() + "-" + c.toString());
        //     let num = board[r][c];
        //     updateTile(tile, num);
        }
    }
    return uboard;
}
//
Game_module.slideDown = function (uboard) {
    let columns = uboard[0].length;
    for (let c = 0; c < columns; c++) {
        let row = [uboard[0][c], uboard[1][c], uboard[2][c], uboard[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        // board[0][c] = row[0];
        // board[1][c] = row[1];
        // board[2][c] = row[2];
        // board[3][c] = row[3];
        for (let r = 0; r < 4; r++){
            uboard[r][c] = row[r];
            // let tile = document.getElementById(r.toString() + "-" + c.toString());
            // let num = board[r][c];
            // updateTile(tile, num);
        }
    }
    return uboard;
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
function twoOrFour(){
    const randomNumber = Math.random();
     // Return 2 or 4 based on the random number
     if (randomNumber < 0.5) {return 2;} else {return 4;}
}





export default Object.freeze(Game_module);
