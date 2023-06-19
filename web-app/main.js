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
// KEEP
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
    board = Game_module.setTwo(board);
    updateBoard(board);

}
// Keep this here, doesnt work in api
document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        board = Game_module.slideLeft(board);
        board = Game_module.setTwo(board);
    }
    else if (e.code == "ArrowRight") {
        // slideRight();
        board = Game_module.slideRight(board);
        board = Game_module.setTwo(board);
    }
    else if (e.code == "ArrowUp") {
        // slideUp();
        board = Game_module.slideUp(board);
        board = Game_module.setTwo(board);

    }
    else if (e.code == "ArrowDown") {
        // slideDown();
        board = Game_module.slideDown(board);
        board = Game_module.setTwo(board);
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





