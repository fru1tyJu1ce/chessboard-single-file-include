/* board.js must be included above in the html file */


async function demo() {

    

    GAMEMODE = false; // piece movement deactivated
    init(); // initialise the board
    
    spawnPiece( 'K', 'white', 'd6'); // spwans a piece on given suqare (long notation)
    
    await new Promise(r => setTimeout(r, 2000)); // only for visualisation
    
    clear(); // clear the board
    build(); // build standart start pos
    
    await new Promise(r => setTimeout(r, 2000)); // only for visualisation
    
    movePiece('e2', 'e4'); // move piece from square to square
    
    await new Promise(r => setTimeout(r, 2000)); // only for visualisation
    
    /* example pos. string */
    const posStr = ` 
    r . b q k b n r 
    p p p p . p p p 
    . . n . . . . . 
    . B . . p . . . 
    . . . . P . . . 
    . . . . . N . . 
    P P P P . P P P 
    R N B Q K . . R`
    
    buildFromPosStr(posStr); // builds pos. from string
    
    await new Promise(r => setTimeout(r, 2000)); // only for visualisation
    
    rotateBoard(); // rotates the board
    
    
    await new Promise(r => setTimeout(r, 2000)); // only for visualisation

    GAMEMODE = true; // piece movement activated
    init(); // initialise the board
    
    clear(); // clear the board
    build(); // build standart start pos
    
    rotateBoard(); // rotates the board

    }
    
    demo();
    