import R from "./ramda.js";
import Game_module from "./Game_module.js";

var board;
var score = 0;

board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

window.onload = function() {
    setGame();
}

function setGame() {
    // board = [
    //     [2, 2, 2, 2],
    //     [2, 2, 2, 2],
    //     [4, 4, 8, 8],
    //     [4, 4, 8, 8]
    // ];

    let rows = board.length;
    let columns = board[0].length;


    // Loop through each row
    for (let r = 0; r < rows; r++) {
      // Loop through each column
      for (let c = 0; c < columns; c++) {
        // Create a new div element
        let tile = document.createElement("div");
        // Assign an ID to the div based on the row and column numbers
        tile.id = r.toString() + "-" + c.toString();
        // Retrieve the value from the board array corresponding to the current row and column
        let num = board[r][c];
        // Call the updateTile function to update the appearance or content of the tile element
        updateTile(tile, num);
        // Get the container element with the ID "board" and append the tile element to it
        document.getElementById("board").append(tile);
      }
    }

    //create 2 to begin the game
    board = setTwo(board);
    updateBoard(board);

}

document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        board = slideLeft(board);
        board = setTwo(board);
    }
    else if (e.code == "ArrowRight") {
        // slideRight();
        board = slideRight(board);
        board = setTwo(board);
    }
    else if (e.code == "ArrowUp") {
        // slideUp();
        board = slideUp(board);
        board = setTwo(board);

    }
    else if (e.code == "ArrowDown") {
        // slideDown();
        board = slideDown(board);
        board = setTwo(board);
    }

    updateBoard(board);

    document.getElementById("score").innerText = score;
})

// Funtion to stay
function updateBoard(uboard){
    let rows = uboard.length;
    let columns = uboard[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                let num = uboard[r][c];
                updateTile(tile, num);
        }
    }
}

// Funtion to stay
function updateTile(tile, num) {
    tile.innerText = "";  // Clear the existing content of the tile element.
    tile.classList.value = ""; // Clear the classList of the tile element, removing any previously assigned classes.
    tile.classList.add("tile"); // Add the class "tile" to the tile element. (Presumably used for styling purposes)
    if (num > 0) { // Check if the provided number is greater than 0.
        tile.innerText = num.toString(); // Set the content of the tile element to the string representation of the number.
        if (num <= 4096) { // Check if the number is less than or equal to 4096.
            tile.classList.add("x" + num.toString()); // Add a class based on the number. Example: If the number is 2048, add "x2048" class.
        } else {
            tile.classList.add("x8192"); // If the number is greater than 4096, add the class "x8192" to the tile element.
        }
    }
}

function setTwo(uboard) {
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
            if (board[r][c] == 0) { //at least one zero in the board
                return true;
            }
        }
    }
    return false;
}








function filterZero(row){
    return row.filter(num => num != 0); //create new array of all nums != 0
}

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

function slideLeft(uboard) {
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

function slideRight(uboard) {
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

function slideUp(uboard) {
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
function slideDown(uboard) {
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
