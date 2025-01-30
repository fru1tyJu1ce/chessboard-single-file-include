const boardHTML = `    
<style>
table {
  width: 100%;
  border: 2px;
  border-color: black;
  border-style: double;
  display: block;
}

td {
  user-select: none;
  width: 50;
  position: relative;
  border: 2px;
  border-color: black;
  border-style: double;

  margin-left: auto;
  margin-right: auto
}

td:hover {
  border: 2px;
  border-color: #09ff00;
  border-style: groove;
}

.selected {
  border: 2px;
  border-color: #09ff00;
  border-style: groove;  
}

td .square {
  vertical-align: center;
  text-align: center;
  border: 0px;
  width: 50px;
  height: 50px;
  transition: 0.3s;
}

td .black {
  background-color: #a07c5e;
}


td .white {
  background-color: whitesmoke;
}

#board {
  display: inline-block;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

#board.rotated {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.piece {
  width: 90%;

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.piece:hover {
  width: 97%;
}

.piece.rotated {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.char {
  text-align: center;
}

.top {
  rotate: 180deg;
}

.right {
  rotate: 180deg;
}

#storage {
  display: none;
}
</style>
<table>
      <tbody>
        <tr>
          <td class="char top"></td>
          <td class="char top">a</td>
          <td class="char top">b</td>
          <td class="char top">c</td>
          <td class="char top">d</td>
          <td class="char top">e</td>
          <td class="char top">f</td>
          <td class="char top">g</td>
          <td class="char top">h</td>
          <td class="char top"></td>
        </tr>
        <tr>
          <td class="number left">8</td>
          <td>
            <div class="square white" id="a8"></div>
          </td>
          <td>
            <div class="square black" id="b8"></div>
          </td>
          <td>
            <div class="square white" id="c8"></div>
          </td>
          <td>
            <div class="square black" id="d8"></div>
          </td>
          <td>
            <div class="square white" id="e8"></div>
          </td>
          <td>
            <div class="square black" id="f8"></div>
          </td>
          <td>
            <div class="square white" id="g8"></div>
          </td>
          <td>
            <div class="square black" id="h8"></div>
          </td>
          <td class="number right">8</td>
        </tr>
        <tr>
          <td class="number left">7</td>
          <td>
            <div class="square black" id="a7"></div>
          </td>
          <td>
            <div class="square white" id="b7"></div>
          </td>
          <td>
            <div class="square black" id="c7"></div>
          </td>
          <td>
            <div class="square white" id="d7"></div>
          </td>
          <td>
            <div class="square black" id="e7"></div>
          </td>
          <td>
            <div class="square white" id="f7"></div>
          </td>
          <td>
            <div class="square black" id="g7"></div>
          </td>
          <td>
            <div class="square white" id="h7"></div>
          </td>
          <td class="number right">7</td>
        </tr>
        <tr>
          <td class="number left">6</td>
          <td>
            <div class="square white" id="a6"></div>
          </td>
          <td>
            <div class="square black" id="b6"></div>
          </td>
          <td>
            <div class="square white" id="c6"></div>
          </td>
          <td>
            <div class="square black" id="d6"></div>
          </td>
          <td>
            <div class="square white" id="e6"></div>
          </td>
          <td>
            <div class="square black" id="f6"></div>
          </td>
          <td>
            <div class="square white" id="g6"></div>
          </td>
          <td>
            <div class="square black" id="h6"></div>
          </td>
          <td class="number right">6</td>
        </tr>
        <tr>
          <td class="number left">5</td>
          <td>
            <div class="square black" id="a5"></div>
          </td>
          <td>
            <div class="square white" id="b5"></div>
          </td>
          <td>
            <div class="square black" id="c5"></div>
          </td>
          <td>
            <div class="square white" id="d5"></div>
          </td>
          <td>
            <div class="square black" id="e5"></div>
          </td>
          <td>
            <div class="square white" id="f5"></div>
          </td>
          <td>
            <div class="square black" id="g5"></div>
          </td>
          <td>
            <div class="square white" id="h5"></div>
          </td>
          <td class="number right">5</td>
        </tr>
        <tr>
          <td class="number left">4</td>
          <td>
            <div class="square white" id="a4"></div>
          </td>
          <td>
            <div class="square black" id="b4"></div>
          </td>
          <td>
            <div class="square white" id="c4"></div>
          </td>
          <td>
            <div class="square black" id="d4"></div>
          </td>
          <td>
            <div class="square white" id="e4"></div>
          </td>
          <td>
            <div class="square black" id="f4"></div>
          </td>
          <td>
            <div class="square white" id="g4"></div>
          </td>
          <td>
            <div class="square black" id="h4"></div>
          </td>
          <td class="number right">4</td>
        </tr>
        <tr>
          <td class="number left">3</td>
          <td>
            <div class="square black" id="a3"></div>
          </td>
          <td>
            <div class="square white" id="b3"></div>
          </td>
          <td>
            <div class="square black" id="c3"></div>
          </td>
          <td>
            <div class="square white" id="d3"></div>
          </td>
          <td>
            <div class="square black" id="e3"></div>
          </td>
          <td>
            <div class="square white" id="f3"></div>
          </td>
          <td>
            <div class="square black" id="g3"></div>
          </td>
          <td>
            <div class="square white" id="h3"></div>
          </td>
          <td class="number right">3</td>
        </tr>
        <tr>
          <td class="number left">2</td>
          <td>
            <div class="square white" id="a2"></div>
          </td>
          <td>
            <div class="square black" id="b2"></div>
          </td>
          <td>
            <div class="square white" id="c2"></div>
          </td>
          <td>
            <div class="square black" id="d2"></div>
          </td>
          <td>
            <div class="square white" id="e2"></div>
          </td>
          <td>
            <div class="square black" id="f2"></div>
          </td>
          <td>
            <div class="square white" id="g2"></div>
          </td>
          <td>
            <div class="square black" id="h2"></div>
          </td>
          <td class="number right">2</td>
        </tr>
        <tr>
          <td class="number left">1</td>
          <td>
            <div class="square black" id="a1"></div>
          </td>
          <td>
            <div class="square white" id="b1"></div>
          </td>
          <td>
            <div class="square black" id="c1"></div>
          </td>
          <td>
            <div class="square white" id="d1"></div>
          </td>
          <td>
            <div class="square black" id="e1"></div>
          </td>
          <td>
            <div class="square white" id="f1"></div>
          </td>
          <td>
            <div class="square black" id="g1"></div>
          </td>
          <td>
            <div class="square white" id="h1"></div>
          </td>
          <td class="number right">1</td>
        </tr>
        <tr>
          <td class="char bot"></td>
          <td class="char bot">a</td>
          <td class="char bot">b</td>
          <td class="char bot">c</td>
          <td class="char bot">d</td>
          <td class="char bot">e</td>
          <td class="char bot">f</td>
          <td class="char bot">g</td>
          <td class="char bot">h</td>
          <td class="char bot"></td>
        </tr>
      </tbody>
    </table>
    <!--Path of the Icons -->
    <div class="storage" id="storage">
    <img class="piece whitepiece" id="K" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='45'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath stroke-linejoin='miter' d='M22.5 11.63V6M20 8h5'/%3E%3Cpath fill='%23fff' stroke-linecap='butt' stroke-linejoin='miter' d='M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5'/%3E%3Cpath fill='%23fff' d='M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7'/%3E%3Cpath d='M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0'/%3E%3C/g%3E%3C/svg%3E" draggable="true">
    <img class="piece whitepiece" id="Q" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='fill:%23ffffff;stroke:%23000000;stroke-width:1.5;stroke-linejoin:round'%3E%3Cpath d='M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z'/%3E%3Cpath d='M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z'/%3E%3Cpath d='M 11.5,30 C 15,29 30,29 33.5,30' style='fill:none'/%3E%3Cpath d='M 12,33.5 C 18,32.5 27,32.5 33,33.5' style='fill:none'/%3E%3Ccircle cx='6' cy='12' r='2' /%3E%3Ccircle cx='14' cy='9' r='2' /%3E%3Ccircle cx='22.5' cy='8' r='2' /%3E%3Ccircle cx='31' cy='9' r='2' /%3E%3Ccircle cx='39' cy='12' r='2' /%3E%3C/g%3E%3C/svg%3E" draggable="true">
   
    <img class="piece whitepiece" id="R" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:%23ffffff; fill-opacity:1; fill-rule:evenodd; stroke:%23000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.3)'%3E%3Cpath d='M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14' style='stroke-linecap:butt;' /%3E%3Cpath d='M 34,14 L 31,17 L 14,17 L 11,14' /%3E%3Cpath d='M 31,17 L 31,29.5 L 14,29.5 L 14,17' style='stroke-linecap:butt; stroke-linejoin:miter;' /%3E%3Cpath d='M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5' /%3E%3Cpath d='M 11,14 L 34,14' style='fill:none; stroke:%23000000; stroke-linejoin:miter;' /%3E%3C/g%3E%3C/svg%3E" draggable="true">
   
    <img class="piece whitepiece" id="B" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:%23000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.6)'%3E%3Cg style='fill:%23ffffff; stroke:%23000000; stroke-linecap:butt;'%3E%3Cpath d='M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z'/%3E%3Cpath d='M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z'/%3E%3Cpath d='M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z'/%3E%3C/g%3E%3Cpath d='M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18' style='fill:none; stroke:%23000000; stroke-linejoin:miter;'/%3E%3C/g%3E%3C/svg%3E" draggable="true">
    
    <img class="piece whitepiece" id="N" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:%23000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.3)'%3E%3Cpath d='M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18' style='fill:%23ffffff; stroke:%23000000;' /%3E%3Cpath d='M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10' style='fill:%23ffffff; stroke:%23000000;' /%3E%3Cpath d='M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z' style='fill:%23000000; stroke:%23000000;' /%3E%3Cpath d='M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z' transform='matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)' style='fill:%23000000; stroke:%23000000;' /%3E%3C/g%3E%3C/svg%3E" draggable="true">
    
    <img class="piece whitepiece" id="P" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cpath d='m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z' style='opacity:1; fill:%23ffffff; fill-opacity:1; fill-rule:nonzero; stroke:%23000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;'/%3E%3C/svg%3E" draggable="true">
  
    <img class="piece blackpiece" id="k" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='fill:none; fill-opacity:1; fill-rule:evenodd; stroke:%23000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;'%3E%3Cpath d='M 22.5,11.63 L 22.5,6' style='fill:none; stroke:%23000000; stroke-linejoin:miter;' id='path6570'/%3E%3Cpath d='M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25' style='fill:%23000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;'/%3E%3Cpath d='M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37' style='fill:%23000000; stroke:%23000000;'/%3E%3Cpath d='M 20,8 L 25,8' style='fill:none; stroke:%23000000; stroke-linejoin:miter;'/%3E%3Cpath d='M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5' style='fill:none; stroke:%23ffffff;'/%3E%3Cpath d='M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37' style='fill:none; stroke:%23ffffff;'/%3E%3C/g%3E%3C/svg%3E" draggable="true">
    
    <img class="piece blackpiece" id="q" src="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='fill:%23000000;stroke:%23000000;stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round'%3E%3Cpath d='M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z' style='stroke-linecap:butt;fill:%23000000' /%3E%3Cpath d='m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z' /%3E%3Cpath d='M 11.5,30 C 15,29 30,29 33.5,30' /%3E%3Cpath d='m 12,33.5 c 6,-1 15,-1 21,0' /%3E%3Ccircle cx='6' cy='12' r='2' /%3E%3Ccircle cx='14' cy='9' r='2' /%3E%3Ccircle cx='22.5' cy='8' r='2' /%3E%3Ccircle cx='31' cy='9' r='2' /%3E%3Ccircle cx='39' cy='12' r='2' /%3E%3Cpath d='M 11,38.5 A 35,35 1 0 0 34,38.5' style='fill:none; stroke:%23000000;stroke-linecap:butt;' /%3E%3Cg style='fill:none; stroke:%23ffffff;'%3E%3Cpath d='M 11,29 A 35,35 1 0 1 34,29' /%3E%3Cpath d='M 12.5,31.5 L 32.5,31.5' /%3E%3Cpath d='M 11.5,34.5 A 35,35 1 0 0 33.5,34.5' /%3E%3Cpath d='M 10.5,37.5 A 35,35 1 0 0 34.5,37.5' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E" draggable="true">
    
    <img class="piece blackpiece" id="r" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:%23000000; fill-opacity:1; fill-rule:evenodd; stroke:%23000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.3)'%3E%3Cpath d='M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ' style='stroke-linecap:butt;stroke-linejoin:miter;' /%3E%3Cpath d='M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ' style='stroke-linecap:butt;' /%3E%3Cpath d='M 12,35.5 L 33,35.5 L 33,35.5' style='fill:none; stroke:%23ffffff; stroke-width:1; stroke-linejoin:miter;' /%3E%3Cpath d='M 13,31.5 L 32,31.5' style='fill:none; stroke:%23ffffff; stroke-width:1; stroke-linejoin:miter;' /%3E%3Cpath d='M 14,29.5 L 31,29.5' style='fill:none; stroke:%23ffffff; stroke-width:1; stroke-linejoin:miter;' /%3E%3Cpath d='M 14,16.5 L 31,16.5' style='fill:none; stroke:%23ffffff; stroke-width:1; stroke-linejoin:miter;' /%3E%3Cpath d='M 11,14 L 34,14' style='fill:none; stroke:%23ffffff; stroke-width:1; stroke-linejoin:miter;' /%3E%3C/g%3E%3C/svg%3E" draggable="true">
    
    <img class="piece blackpiece" id="b" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:%23000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.6)'%3E%3Cg style='fill:%23000000; stroke:%23000000; stroke-linecap:butt;'%3E%3Cpath d='M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z' /%3E%3Cpath d='M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z' /%3E%3Cpath d='M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z' /%3E%3C/g%3E%3Cpath d='M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18' style='fill:none; stroke:%23ffffff; stroke-linejoin:miter;'/%3E%3C/g%3E%3C/svg%3E" draggable="true">

    <img class="piece blackpiece" id="n" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cg style='opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:%23000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;' transform='translate(0,0.3)'%3E%3Cpath d='M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18' style='fill:%23000000; stroke:%23000000;' /%3E%3Cpath d='M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10' style='fill:%23000000; stroke:%23000000;' /%3E%3Cpath d='M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z' style='fill:%23ffffff; stroke:%23ffffff;' /%3E%3Cpath d='M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z' transform='matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)' style='fill:%23ffffff; stroke:%23ffffff;' /%3E%3Cpath d='M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ' style='fill:%23ffffff; stroke:none;' /%3E%3C/g%3E%3C/svg%3E" draggable="true">

    <img class="piece blackpiece" id="p" src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='45' height='45'%3E%3Cpath d='m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z' style='opacity:1; fill:%23000000; fill-opacity:1; fill-rule:nonzero; stroke:%23000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;'/%3E%3C/svg%3E" draggable="true">
    </div> `;

/* INIT BOARD ELEMENT */
try {
  document.getElementById('board').innerHTML = boardHTML;
} catch (error) {
  'ERROR: <div id="board"></div> not found'
}

/* BOARD SETTINGS */

const STORAGE = document.querySelector('.storage');

GAMEMODE = true;
ROTATED = false;
IDCOUNT = 9;

SELECTEDSQUARE = ''; // actual/last per click selected square
LASTPOSSTR = ''; // last position, before the last move/change (for reverse/undo)
LASTPOSFEN = '';  

/* FEN STATS */
TURN = 'w'

K = 'K';
Q = 'Q';

k = 'k';
q = 'q';

ENPASANT = '-'


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

function addListnerDragEvent(pieceId) {
  if (!GAMEMODE) return;
  document.getElementById(pieceId).addEventListener('dragstart', dragstart, false);
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
    allPieces[i].addEventListener('dragstart', dragstart, false);
  }
}


/* MOVE PIECES BY CLICK */

function click(ev) {
  ev.preventDefault();
  if (!GAMEMODE) return;
  LASTPOSSTR = getActPosStr;
  LASTPOSFEN = getActFEN();
  let target = (ev.srcElement || ev.target);
  if (SELECTEDSQUARE === '' && target.tagName === 'IMG') { // click on piece without selected piece
    SELECTEDSQUARE = ev.srcElement.parentElement.id || ev.target.parentElement.id;
    let square = document.getElementById(SELECTEDSQUARE).parentElement;
    square.classList.add('selected');
  }
  else if (SELECTEDSQUARE !== '') { // click on occupied target suqare after piece selection
    if (target.tagName === 'IMG') movePiece(SELECTEDSQUARE, ev.srcElement.parentElement.id || ev.target.parentElement.id);
    else movePiece(SELECTEDSQUARE, ev.srcElement.id || ev.target.id);
    let square = document.getElementById(SELECTEDSQUARE).parentElement;
    square.classList.remove('selected');
    SELECTEDSQUARE = '';
  }
}


/* DRAG & DROP PIECES */

function allowDrop(ev) {
  ev.preventDefault();
}

function dragstart(ev) {
  LASTPOSSTR = getActPosStr();
  LASTPOSFEN = getActFEN();
  ev.dataTransfer.setData('pieceId', ev.srcElement.id || ev.target.id);
  ev.dataTransfer.setData('squareId', ev.srcElement.parentElement.id || ev.target.parentElement.id);
}

function drop(ev) {
  ev.preventDefault();
  let target = (ev.srcElement || ev.target);
  let pieceId = ev.dataTransfer.getData('pieceId');
  let squareId = ev.dataTransfer.getData('squareId');
  let occupation = '';
  if (target.tagName === 'IMG') { // if target square is occupied
    occupation = target.id;
    target = target.parentElement;
    if (squareId === target.id) return; 
    target.removeChild((ev.srcElement || ev.target));
  }
  //console.log(target);
  target.appendChild(document.getElementById(pieceId));
  //console.log('suqare: ' + squareId + ' target suqare: ' + target.id); DEBUG
  if (GAMEMODE) interpretMove(squareId, target.id, pieceId, occupation); // TODO 
}


/* PIECES PLACING FUNCTIONS */

function movePiece(suqareId, targetSuqareId) {
  pieceId = getSuqareOccupation(suqareId);
  if (suqareId == targetSuqareId) return;
  let target = document.getElementById(targetSuqareId);
  let suqare = document.getElementById(suqareId);
  let occupation = '';
  if (target.hasChildNodes()) { // if target square is occupied
    occupation = target.firstChild.id;
    target.removeChild(target.firstChild);
  }
  target.appendChild(suqare.firstChild);
  if (GAMEMODE) interpretMove(suqareId, targetSuqareId, pieceId, occupation); // TODO 
}

function placePiece(pieceId, squareId) {
  document.getElementById(squareId).appendChild(document.getElementById(pieceId));
}

function spawnPiece(piece, square) {
  LASTPOSSTR = getActPosStr();
  LASTPOSFEN = getActFEN();
  IDCOUNT++;
  let newId = piece + IDCOUNT;
  let pieceElem = document.querySelector('#' + piece);
  let clone = pieceElem.cloneNode(true);
  clone.id = newId;
  clone.draggable = GAMEMODE;
  pieceElem.after(clone);
  addListnerDragEvent(newId);
  placePiece(piece + IDCOUNT, square);
}

function clear() {
  let allSuqares = document.getElementsByClassName('square');
  for (let i = 0; i < allSuqares.length; i++) {
    square = allSuqares[i];
    if (square.hasChildNodes()) square.removeChild(square.firstChild);
  }
}

/* helper function returns pieceid if the square is occupied, empty string if suquasr is not occupied */
function getSuqareOccupation(squareId) {
  let square = document.getElementById(squareId);
  if (!square.hasChildNodes()) return '';
  return square.firstElementChild.id;
}

/* BUILD POS FROM STRING

example posStr: 
   "r . b q k b n r 
    p p p p . p p p 
    . . n . . . . . 
    . B . . p . . . 
    . . . . P . . . 
    . . . . . N . . 
    P P P P . P P P 
    R N B Q K . . R" */

function buildFromPosStr(posStr) {
  if (posStr.length > 90) return;
  LASTPOSFEN = getActFEN();
  LASTPOSSTR = getActPosStr();
  clear();
  let positions = posStr.replace(/(\r\n|\n|\r|\s)/gm, '');

  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const pieces = ['K', 'k', 'Q', 'q', 'R', 'r', 'B', 'b', 'N', 'n', 'P', 'p'];
  let linecount = 9;
  let columncount = -1;

  for (var i = 0; i < positions.length; i++) {
    columncount++;
    columncount %= 8;
    if (columncount == 0) linecount--;
    if (linecount == 0) return;
    let square = String(columns[columncount]) + String(linecount);
    if (positions[i] == '.') {
      continue;
    }
    else if (pieces.includes(positions[i], 0)) {
      spawnPiece(positions[i], square);
    } else {
      columncount--;
    }
  }
}

/* BUILD POS from FEN STRING

example FEN: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3" */

function buildFromFEN(fen) {
  LASTPOSFEN = getActFEN();
  LASTPOSSTR = getActPosStr();
  clear();
  let parts = fen.split(' ');
  let positions = parts[0];
  positions = positions.replace(/\//g, '');

  // Set global variables from FEN parts
  TURN = parts[1];

  // Reset castling rights
  K = parts[2].includes('K') ? 'K' : '';
  Q = parts[2].includes('Q') ? 'Q' : '';
  k = parts[2].includes('k') ? 'k' : '';
  q = parts[2].includes('q') ? 'q' : '';

  ENPASANT = parts[3];

  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let linecount = 8;
  let columncount = 0;

  for (var i = 0; i < positions.length; i++) {
    if (!isNaN(positions[i])) { // If the character is a number, skip that many squares
      columncount += parseInt(positions[i]);
    } else { // Else, spawn a piece on the board
      let square = String(columns[columncount % 8]) + String(linecount);
      spawnPiece(positions[i], square);
      columncount++;
    }
    // Move to the next row if necessary
    if (columncount >= 8) {
      linecount--;
      columncount = 0;
    }
  }
}


function castling(from, to, piece) {
  // w kingside castling
  if (from === 'e1' && to === 'g1' && piece.charAt(0) === 'K' && K === 'K') {
    movePiece('h1', 'f1');
    return true;
  }
  // w queenside castling
  else if (from === 'e1' && to === 'c1' && piece.charAt(0) === 'K' && Q === 'Q') {
    movePiece('a1', 'd1');
    return true;
  }
  // b kingside castling
  else if (from === 'e8' && to === 'g8' && piece.charAt(0) === 'k' && k === 'k') {
    movePiece('h8', 'f8');
    return true;
  }
  // b queenside castling
  else if (from === 'e8' && to === 'c8' && piece.charAt(0) === 'k' && q === 'q') {
    movePiece('a8', 'd8');
    return true;
  }
  return false;
}

function checkForPawnPromotion(to, piece) {
  if (piece.charAt(0) === 'P' && to.endsWith('8')) {
    return true;
  }
  else if (piece.charAt(0) === 'p' && to.endsWith('1')) {
    return true;
  }
  return false;
}

function checkForEnPassant(from, to, piece) {
  if ((piece.charAt(0) === 'P' && from.charAt(1) === '2' && to.charAt(1) === '4') ||
    (piece.charAt(0) === 'p' && from.charAt(1) === '7' && to.charAt(1) === '5')) {
    return piece.charAt(0) === 'P' ? from.charAt(0) + '3' : from.charAt(0) + '6';
  }
  return '-';
}

/* interprets the move 4 castlings, promotions, enpassant and sets the FEN stats */
function interpretMove(from, to, piece, occupation) {
  if (castling(from, to, piece)) {
    if(piece.charAt(0).toUpperCase() === piece.charAt(0)){ K = ''; Q = '';} // set castling fen
    else { k = ''; q = ''}
  } else {
    if(from === 'a1' && piece.charAt(0) === 'R')Q ='';
    else if(from === 'h1' && piece.charAt(0) === 'R')K = '';
    else if(from === 'a8' && piece.charAt(0) === 'r')q ='';
    else if(from === 'h8' && piece.charAt(0) === 'r')k = '';
    else if( piece.charAt(0) === 'K'){ K = ''; Q = '';}
    else if( piece.charAt(0) === 'k'){ k = ''; q = '';}
  }

  if(checkForPawnPromotion(to, piece)) {
    // TODO CHOOOOOOSE
    console.log('start choosing')
  }

  ENPASANT = checkForEnPassant(from, to, piece);
  if (piece.charAt(0) === piece.charAt(0).toUpperCase()) TURN = 'b'; // determine next turn by w or b 
  else TURN = 'w'; // set turn fen


  // set other turn
  //console.log('interpreter: ' + from + ' / ' + to + ' | ' + piece + ' (' + occupation + ')');
  sendControlInstruction(from, to);
}

function move(move) {

}


function build() {
  clear();
  buildFromFEN(getStartPositionFEN());
}


/* INITIALIZATION */
function init() {
  initMovementListners();
}

/* GET THE ACTUAL POSITION STRING */
function getActPosStr() {
  let positions = [];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let linecount = 9;
  let columncount = -1;

  for (var i = 0; i < 84; i++) {
    columncount++;
    columncount %= 8;
    if (columncount == 0) linecount--;
    if (linecount == 0) return positions.join('');
    let squareId = String(columns[columncount]) + String(linecount);
    target = document.getElementById(squareId);
    if (target.hasChildNodes()) {
      let piece = target.firstChild.id.charAt(0);
      positions[i] = piece;
    } else positions[i] = '.';
  }
}

/* GET THE ACTUAL FEN STRING */
function getActFEN() {
  let fenRows = [];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let linecount = 8;
  let emptyCount = 0;

  for (let row = 0; row < 8; row++) {
    let rowRepresentation = "";

    for (let col = 0; col < 8; col++) {
      let squareId = `${columns[col]}${linecount}`;
      let target = document.getElementById(squareId);

      if (target && target.hasChildNodes()) {
        if (emptyCount > 0) {
          rowRepresentation += emptyCount;
          emptyCount = 0; 
        }
        let piece = target.firstChild.id.charAt(0);
        rowRepresentation += piece;
      } else {
        emptyCount++; 
      }
    }

    if (emptyCount > 0) {
      rowRepresentation += emptyCount; 
      emptyCount = 0; 
    }

    fenRows.push(rowRepresentation);
    linecount--;
  }

  // Combine the FEN rows with global variables for a complete FEN string
  let castlingRights = `${K}${Q}${k}${q}`;
  if (castlingRights === "") {
    castlingRights = "-";
  }

  // Construct and return the full FEN string
  let fen = fenRows.join('/') + " " + // Position
    TURN + " " +
    castlingRights + " " +
    ENPASANT + " ";
  return fen;
}

/* GET THE START POSITION FEN STRING */
function getStartPositionFEN() {
  return 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -';
}

/* GET THE ACTUAL POSITION STRING JSON */
function getPosStr() {
  return msg = JSON.stringify({ // JSON with actual position string 
    posStr: getActPosStr()
  })
}

/* GET THE ACTUAL FEN STRING JSON */
function getFEN() {
  return msg = JSON.stringify({ // JSON with actual position string 
    FEN: getActFEN()
  })
}

/* GET THE LAST POSITION STRING JSON */
function getLastPosStr() {
  return msg = JSON.stringify({ 
    posStr: LASTPOSSTR
  })
}

/* GET THE LAST FEN STRING JSON */
function getLastFEN() {
  return msg = JSON.stringify({ 
    FEN: LASTPOSFEN
  })
}

/* FUNCTION CALLED ON INPUT  */
function sendControlInstruction(from, to) {
  msg = { // JSON OBJECT with the move data providet by user input
    from: from,
    to: to,
    lastFEN: LASTPOSFEN,
    lastPosStr: LASTPOSSTR,
    posStr: getActPosStr(), 
    fen: getActFEN()
  }
  //console.log(msg);
  
  /* CUSTOM EVENT TRIGERED ON INPUT  */
  var evt = new CustomEvent("chessBoardInputOccured", {detail: msg});
  window.dispatchEvent(evt);
}
