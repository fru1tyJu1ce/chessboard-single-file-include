/* BOARD SETTINGS */


const STORAGE = document.querySelector(".storage");
GAMEMODE = true;
ROTATED = false;
IDCOUNT = 0;


const PIECEIMGPATH = 'res/pieces/';

/*
document.getElementById('button').onclick = function () {
  rotateBoard();
}
*/

/* BOARD & PIECE ROTATION */

function rotateAllPieces() {
  let allPieces = document.getElementsByClassName('piece');
  for (let i = 0; i < allPieces.length; ++i) {
    allPieces[i].classList.toggle('rotated');
  }
}

function rotateBoard() {
  document.getElementById('board').classList.toggle('rotated');
  rotateAllPieces();
  ROTATED = !ROTATED;
}



/* PIECE MOVEMENT & (DRAG & DROP) EVENT LISTNER INITIALIZATION */

function addListner4Movement(pieceId) {
  if (!GAMEMODE) return;
  document.getElementById(pieceId).addEventListener('dragstart', drag, false);
}

function initMovementListners() {
  if (!GAMEMODE) return;
  let allSuqares = document.getElementsByClassName('square');
  for (let i = 0; i < allSuqares.length; i++) {
    allSuqares[i].addEventListener('click', click, false);
    allSuqares[i].addEventListener('drop', drop, false);
    allSuqares[i].addEventListener('dragover', allowDrop, false);
  }
  let allPieces = document.getElementsByClassName('piece');
  for (let i = 0; i < allPieces.length; i++) {
    allPieces[i].addEventListener('dragstart', drag, false);
  }
}



/* MOVE PIECES BY CLICK */

function click(ev) {
  console.log(ev); // TODO
}

/* DRAG & DROP PIECES */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("pieceId", ev.srcElement.id || ev.target.id);
  ev.dataTransfer.setData("squareId", ev.srcElement.parentElement.id || ev.target.parentElement.id);
}

function drop(ev) {
  ev.preventDefault();
  let target = (ev.srcElement || ev.target);
  let pieceId = ev.dataTransfer.getData("pieceId");
  let squareId = ev.dataTransfer.getData("squareId");
  if (target.tagName == 'IMG') {
    target = target.parentElement;
    if (squareId == target.id) return;
    target.removeChild((ev.srcElement || ev.target));
  }
  target.appendChild(document.getElementById(pieceId));
  console.log('suqare: ' + squareId + ' target suqare: ' + target.id);
  if(GAMEMODE)sendControlInstruction(squareId,  target.id)
  
}


/* PIECES PLACING FUNCTIONS */

function movePiece(suqareId, targetSuqareId) {
  if (suqareId == targetSuqareId) return;
  let target = document.getElementById(targetSuqareId);
  let suqare = document.getElementById(suqareId);
  if (target.hasChildNodes()) target.removeChild(target.firstChild);

  target.appendChild(suqare.firstChild);
}

function piecePlacement(pieceId, squareId) {
  document.getElementById(squareId).appendChild(document.getElementById(pieceId));
}

function spawnPiece(piece, side, square) {
  IDCOUNT++;
  let id = piece + '_' + side;
  let newId = id + IDCOUNT;
  let pieceElem = document.querySelector('#' + id);
  let clone = pieceElem.cloneNode(true);
  clone.id = newId;
  clone.draggable = GAMEMODE;
  pieceElem.after(clone);
  addListner4Movement(newId);
  piecePlacement(id + IDCOUNT, square);
}

function clear() {
  let allSuqares = document.getElementsByClassName('square');
  for (let i = 0; i < allSuqares.length; i++) {
    square = allSuqares[i];
    if (square.hasChildNodes()) square.removeChild(square.firstChild);
  }
}

function buildFromPosStr(posStr) {
  //if (posStr.length < 72) return;
  let positions = posStr.replace(/(\r\n|\n|\r)/gm, "");
  console.log(positions);
  clear();

  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let linecount = 9;
  let columncount = -1;

  for (var i = 0; i < positions.length; i++) {
    columncount++;
    columncount %= 8;
    if (columncount == 0) linecount--;
    if (linecount == 0) return;
    let square = String(columns[columncount]) + String(linecount);
    //console.log(square);
    //console.log(positions[i]);


    if (positions[i] == '.') {
      continue;
    }
    else if (positions[i] == 'K') {
      spawnPiece("K", "white", square);
    }
    else if (positions[i] == 'Q') {
      spawnPiece("Q", "white", square);
    }
    else if (positions[i] == 'R') {
      spawnPiece("R", "white", square);
    }
    else if (positions[i] == 'B') {
      spawnPiece("B", "white", square);
    }
    else if (positions[i] == 'N') {
      spawnPiece("N", "white", square);
    }
    else if (positions[i] == 'P') {
      spawnPiece("p", "white", square);
    }
    else if (positions[i] == 'k') {
      spawnPiece("K", "black", square);
    }
    else if (positions[i] == 'q') {
      spawnPiece("Q", "black", square);
    }
    else if (positions[i] == 'r') {
      spawnPiece("R", "black", square);
    }
    else if (positions[i] == 'b') {
      spawnPiece("B", "black", square);
    }
    else if (positions[i] == 'n') {
      spawnPiece("N", "black", square);
    }
    else if (positions[i] == 'p') {
      spawnPiece("p", "black", square);
    } else {
      columncount--;
    }
  }

}

function build() {
  clear();
  spawnPiece("K", "black", "e8");
  spawnPiece("Q", "black", "d8");
  spawnPiece("R", "black", "h8");
  spawnPiece("R", "black", "a8");
  spawnPiece("B", "black", "f8");
  spawnPiece("B", "black", "c8");
  spawnPiece("N", "black", "g8");
  spawnPiece("N", "black", "b8");
  spawnPiece("p", "black", "a7");
  spawnPiece("p", "black", "b7");
  spawnPiece("p", "black", "c7");
  spawnPiece("p", "black", "d7");
  spawnPiece("p", "black", "e7");
  spawnPiece("p", "black", "f7");
  spawnPiece("p", "black", "g7");
  spawnPiece("p", "black", "h7");

  spawnPiece("K", "white", "e1");
  spawnPiece("Q", "white", "d1");
  spawnPiece("R", "white", "h1");
  spawnPiece("R", "white", "a1");
  spawnPiece("B", "white", "f1");
  spawnPiece("B", "white", "c1");
  spawnPiece("N", "white", "g1");
  spawnPiece("N", "white", "b1");
  spawnPiece("p", "white", "a2");
  spawnPiece("p", "white", "b2");
  spawnPiece("p", "white", "c2");
  spawnPiece("p", "white", "d2");
  spawnPiece("p", "white", "e2");
  spawnPiece("p", "white", "f2");
  spawnPiece("p", "white", "g2");
  spawnPiece("p", "white", "h2");
}

function sendControlInstruction(from, to) { // TODO
  msg = JSON.stringify({
    type: "move",
    data: from + '->' + to,
    from: from,
    to: to
  })
}

/* INITIALIZATION */

function init() {
  initMovementListners();
  build();
  //clear();
  //movePiece('e2', 'e4');
  //movePiece('b2', 'b7');
  //rotateBoard();
}

