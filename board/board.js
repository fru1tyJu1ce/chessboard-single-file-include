const boardHTML = `     <table>
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
      <img class="piece blackpiece" id="K_black" src="/board/res/pieces/K_black.png" alt="K_black" draggable="true"></img>
      <img class="piece blackpiece" id="Q_black" src="/board/res/pieces/Q_black.png" alt=Q_black" draggable="true"></img>
      <img class="piece blackpiece" id="R_black" src="/board/res/pieces/R_black.png" alt="R_black" draggable="true"></img>
      <img class="piece blackpiece" id="B_black" src="/board/res/pieces/B_black.png" alt="B_black" draggable="true"></img>
      <img class="piece blackpiece" id="N_black" src="/board/res/pieces/N_black.png" alt="N_black" draggable="true"></img>
      <img class="piece blackpiece" id="p_black" src="/board/res/pieces/p_black.png" alt="p_black" draggable="true"></img>
      <img class="piece blackpiece" id="K_black" src="/board/res/pieces/K_black.png" alt="K_black" draggable="true"></img>
      <img class="piece whitepiece" id="K_white" src="/board/res/pieces/K_white.png" alt="K_white" draggable="true"></img>
      <img class="piece whitepiece" id="Q_white" src="/board/res/pieces/Q_white.png" alt=Q_white" draggable="true"></img>
      <img class="piece whitepiece" id="R_white" src="/board/res/pieces/R_white.png" alt="R_white" draggable="true"></img>
      <img class="piece whitepiece" id="B_white" src="/board/res/pieces/B_white.png" alt="B_white" draggable="true"></img>
      <img class="piece whitepiece" id="N_white" src="/board/res/pieces/N_white.png" alt="N_black" draggable="true"></img>
      <img class="piece whitepiece" id="p_white" src="/board/res/pieces/p_white.png" alt="p_white" draggable="true"></img>
    </div> `;

document.getElementById('board').innerHTML = boardHTML;