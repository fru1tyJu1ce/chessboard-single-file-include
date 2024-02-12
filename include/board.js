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
      <img class="piece blackpiece" id="K_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAQAAADVFOMIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAHkrSURBVHja7d13nBRF2sDxHzlKkowEURABAxIMgHHNgBEzZvHMeO8Z7vQ8s3KeZ845KxgBI2sEVBTEACigi4DknMMC8/7hyqmwszO73T3p950Pd8j0dvc+1d31dHV1FUiSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJGkLyhkCKQe1owPbshWwnKlM4AdDIklSNtuTh5lF7E+fWTzMngZHkqRstC+jNqv6f/8Zxb4GSZKkbFKLx9kYt/qPEWMjj1PLYEmSlB3aMLHEyv+3z0TaGDBJkjLfDsxMuPqPEWMuHQyaJEmZrQm/JFX9x4jxC00MnCRJmatCCR3/iu8QWMHgSZKUqS4vVfUfI8ZlBk+SpMxUn2WlTgBW0NAAStmrvCGQstjf2KrUP1uDvxpASZIyT2Xmlvr+P0aM+VQxiJItAJIyTV4ZG/Hrc4BBlEwAJGWag8q8hgMNomQCICnTdEuDNUiSpIgtLFMPgBgxFhpEKVuVMwRSlqrA+jKvI0YlNhhKKRv5CEDKVjUDuUWoaSAlEwBJuXd2e42QvERIkiQTAEmSZAIgSZJMACRJkgmAJEkyAZAkSSYAkiTJBECSJJkASJIkEwBJkmQCIEmSTAAkSZIJgCRJMgGQJEkmAJIkmQBIkiQTAEmSZAIgSZJMACRJkgmAJEkyAZAkSSYAkiTJBECSJJkASJIkEwBJkmQCIEmSTAAkSVIQyhkCKaXqcygH0JFWbJ0jv/FCfmY87/M2Cyx+SVIu6sbLrCWWo5+1vEw3DwJJUm5pyis5W/X//vMKTT0YJEm5ojeLrfyLPovp7QEhScoFA9hgxf+7zwYGeFBIkrK/+rfK3/xjCiBJymoHs97qfoutAL08OKQo+RqgFKX6TKSBYdiiRbRnrmGQouJAQFKU7rb6L1Y97jAIki0AUjbqyDcm3XHE6MQ3hkGyBUDKNpd5xpVwQ/JXgyDZAiBlm1rMprphiGsVTVhmGCRbAKRscoDVf4mqs79BkEwApOyynyFIgAmAZAIgZZmOhiABHQyBZAIgZZdtDUECWhsCyQRAyi61DEECtjIEkgmAlF1858ZrkuTJJuUgX28zSpIJgJSDphuCBEwzBJIJgJRdJhiCBEw0BJIJgJRdPjIECfjQEEjRsFuSFJV6zKKKYYhrLU1ZZBgkWwCkbLKIIQahBG9Y/Uu2AEjZpwtfeM7FtSefGwTJFgAp24xhmEGIY6jVv2QLgJSdWjDese6KsZKdKTAMki0AUjaaznkGoRjnWv1LUapgCKRIfUdF9jYMm7mRuwyCZAIgZbMPqUJPw/AHt3C1QZAkZb8zWU3MDzFirOZMDwhJUq5oxydW/sT4hHYeDJKk3HI4H7MxZ6v+jXzM4R4EUqr4GqCUWm3ow/50pEUO/c7TGc8HDGGKxS+ZAEi5rjI1qRPoGmvzVQBr2Y2lge7VElawzuKWJCksdQNpqK9rIKXs5EBAkiSZAEiSJBMASZJkAiBJkkwAJEmSCYAkSTIBkCRJJgCSJMkEQJIkmQBIkiQTAEmSZAIgSZJMACRJkgmAJEkyAZAkSSYAkiTJBECSJJkASJJkAiBJkkwAJEmSCYAkSTIBkCRJJgCSJMkEQJIkmQBIkiQTAEmSZAIgSZJMACRJkgmAJEkyAZAkSSYAkiTJBECSJJkASJIkEwBJkmQCIEmSCYAkSTIBkCRJJgCSJMkEQJIkmQBIkiQTAEmSZAIgSZJMACRJkgmAJEkyAZAkSSYAkiTJBECSJJkASJIkEwBJkmQCIEmSTAAkSZIJgCRJJgCSJMkEQJIkmQBIkiQTAEmSZAIgSZIyTgVDIGXheb0bp3I1rQJY18FsC8xgo2GVJCldVeJwnmERsYA/C3mGw6hkgCVJSi/l2JsHWBB41f/7z3zupyflDLYkSemgJv35LtSq//efSVxCDYMuSVIqbcvtLIms8v/ts4jbAulhIEmSktaChyiMvPL/7bOOp9nOQpAkKUrNuYs1Kav8/5cEPMQ2FoYkSVGoyc1pUPn/9lnNDfYJkCQpbL35OW0q/98+MznVtwMkSQrLjoxIu8r/t89HtLOAJEkKWkWuYHXaVv+/Pgy4wtFFJUkKUge+SOvK/7fPOHa1sCRJCkI5LkmjTn8ltwOcb5FJklRWtRmUMZX/b5/XqGvBSZJUensyLeOq/xgxCuhq4UmSVDpnsTYjq/8YMdZwmgUoSVKyKnBrxlb+v30eoqIFKUlS4uoyPOOr/xgx3qG2hSlJUmKa8HVWVP8xYnznbAGSJCVixwzt+Ffc52fHCJQkqSR7sDCrqv8YMRbQzYKVJKl4u7Eo66r/GDGWmAJIklScTll49/+/FMCRASRJ2oJds7j6jxFjMV0sZEmS/mgXFmR19R8jxiJ2s6AlSfqfnZmf9dV/jBjz2MnCliTpVx2YlxPVf4wYc30pUEoH5QyBlHL1+Zztcuj3/Zk9mGuxS6lV3hBIKVaNoTlV/UMrhlLdgpck5bJyPJ8zjf+//wyy/VFKrQqGQEqpWzgvJ3/vDlTgQ4tfkpSbTs/Ju//fPv09ACRJuWhf1uZ0ArCWfTwIpFTxKZyUKs0YR4Mcj8E8OjHLQ0FKBd8CkFKjIi/kfPUPDXmeih4MUirYCVBKjZs5ySAArajIB4ZBkpQbDmNDTj/9//1nA4d4QEjRsw+AFL3mfEV9w7DJInZjmmGQomUfAClqlXjJ6v8P6vGsPQGkqNkHQIratZxsEP6kBev5xDBIUfIRgBStToymkmHYzHr2YKxhkEwApOxUhTF0NAxb9A3dWGcYpKj4CECK0o0cbRCK0Zhyzg4g2QIgZaPdGWlntzjWsydjDINkAiBll6p8xY6GIa4JdGatYZCi4CMAKSpXc6xBKEFD1vk2gGQLgJRNtuc7qhqGEq2mIwWGQQqfAwFJ0bjL6j8h1bjfIEgmAFK2OI7DDEKCDuYogyCFz0cAUvi24nuaGYaEzaA9KwyDFC47AUrhu4FDDUISaoNTBEu2AEiZrhXf+/w/SWto5/yAki0AUmZ7gF0NQpIqUp/XDINkC4CUubrxuedZKcTYnS8NgxQe3wKQwnW71X8pb05uMwiSCYCUqQ6nh0EopX3sOimFm2VLCs9ouhmEUvucPQ2CZAuAlHkOtfovkz04yCBItgBImecz9jAIZfIp3Q2CZAuAlFkOtvovs73IMwiSLQBSZhlhB0DbACRbAKRcc6DVf0BtAPsbBMkEQMocVxmCgFxtCKQw+AhACkMnvjIIAUbza4Mg2QIgZYJLDIHRlGwBkHJNUwqoYhgCs5ZtmW0YJFsApPS/Y7X6D1IVLjIIki0AUrqrxXRqG4ZALaYlyw2DZAuAlM7OsfoPXF3OMgiSLQBSepvIjgYhcBPoaBAkWwCk9NXd6j8UHdjdIEgmAFL6OsMQGFkpE/gIQApSDWazlWEIxVKassowSLYASOmot9V/aGpzmEGQTACk9HSUITC6UmbwEYAUnCrMo5ZhCM1SGrLOMEi2AEjp5gCr/1DVZl+DIJkASOnnCENghCUTACkXWwBkhKUMYR8AKSjNmW4QQrcNMw2CZAuAlE72MwQR2McQSCYAUnrZ1xBEYH9DIJkASOmluyEwylLmsA+AFIxaLPF8isBG6rDcMEi2AEjpopPVf0TXrF0MgmQCIKWPLoYgIp0NgWQCIKVTC4CMtJRBKhoCJaQa9ahHXepRia2oSHWqUIXqf1pqBWtYxkrWsoTVrGIBC3NmAtcOHiQRaZ8zv2l16lOfalSjDlWpTm2qUuNPy6xiLWtZxXqWU8giFrGYRaz2MFHJfGqpzTWiKduwDU1pQTMaUY+6VCv12laxgPnMZwHzmM50ZjCDuVl4Ji2jpodOJJZSJwt/q8Y0pznNaUkD6tOQ+tTfLMFO3GoWsZg5zGQGs5jBL8xinoeOTAC0ufq0YQfa0oa2tClDZZ+oNcxgBlOYzCQmM5X1GR/BZvziYRSZJszJ+N+hEq3YgR1oy/a0oDlVQt/iKqYwueism8JCDyOZAOSuiuzIrkWfeindk0IK+IHvGcc3/MiGjIzm/rzvIRWZffgkI/e7Am3ZhV3ZkXZsS6WU7stCvuFrvmYcP2RBAi4TACVU4u3ozu50omME9xzJW8l3fMM4vuZr1mZQXPvzkAdXZM7msQza26p0Kkq0O5ahUT88axjPOEYzih88tHLtLlC5UtK70IPu7EuDtN7PGuzBHgCsZzIjGcVYJmRAfJt5iBntP2lKZ7rTg85UTfMEpQtdOAdYxheMYiQjWeNBZgKgbLjj78RBHMSeaX4R2tKx2Z729Adm8jmf8AETiFklCWia1mdcR/Znb/ZI673cslrkkQes4VPe412+SeMzToEcrMpWDdiXPA7PoqppPh8xipGMTcN9e5tDPOQiM5Q+abhXrelBdw5jm6w64/J50wmYTQCUOdpxDEdn8dC008nnLYazLI326WsHqI3Q2LQad7EWB3EoB9I8S6MdYyyv8iqTPPBMAJTOOtCXXjkyVOoGPmco+WnSHjCHRh5+kZmZJnfZrelNL/amck5EvYBhDGaUjwVMAJR+VX8/+tI6B3/zAt7kVUak+PXBNWn5TkW2WpniQZcqsA9Hcxjb5mDsf2Qwz/C9B6EJgNJBXfpyas7Pkr6QtxjMOxSmZOvVcmbA43RRhXUpqvr3pC/H0TjH4z+Rp3nCsQVNAJTKi2AvTuXQFA8okl5pwOu8Qn7kaUCjLBiZLrM0YEHEW6zEgRzLESkeNCudrOMtnuKtFKViMgHIYU3pz/lp/k5/qixmMM9E+qxyB4dQiVgbfoxwax3ox+n28tiieTzBg/xsIEwAFI0eXMxRjuFQgh94iWf4KZJt7ZaWryZms058Hcl2mnMSZ7CDAY9rIx9wN8PsHmgCoDDV5nTOp62BSPjCNIInGBT65Kh78JnBjlQ3vgx5C9U5gdPp4TUyiZT7fp5Kq5dzZQKQNRpyPpdk5USoYVvGizwQ6h3jPnxkmCPVnU9DXPuOnMY5Pu0vheU8wUBmGQgpOK24i1XE/JThM4b+1AipfA40vhF/9g2pJKvSl+HGt0yfNTxtK2VmKG8I0t4uPM+PXEw1Q1EmnXmIX7iT7UJYt2MARC2MN1/acDdzGESe4S3j2dCPCTzLTobCBEBl0ZHXGceJVDAUgajDJUzmDfY3FF65fqcceQzlBy6itqENREVO5hteob2hMAFQabTgIb7mCPtpBH7M9+F9fuCSAOdm32BYI7Y+wPvVU/mG4fTyahiwchzNdwwKpc1NJgBZrCn38yP9vfMPzQ7cyc9cR30TgIwUTMQbcAO/8JSN1SHWMH2ZyD05P3KiCYASVJtbmcJ5ju8XugZcw8/cEcDEMiYAUdtY5jW04C5+5uqAUkAVrzIX8iO3UMtQmAAonnKcyiSuCLBxWvHVYAAFPE07E4AcagHYjruYxMWeZxGeZ1dSwCW2aZoAqDjd+ZKnHHA0cpXoxwReYpdSr8GpgKK2stQ/uRsvM5mLqWoQI7Y1d/IZexiIdLrjVHpoyq2ckrryKEcDGtCAJkX/X5Ma1KQONajBVkXLVChqw1vOegpZASynkCUsZjFLiv7MZh6/sCIzyyDGm/yzVAMGtWWSh3Ckti3V6PMd+BfHZuZVrybb0JCm1KEudahDXepShwrUBmpSiYpF5+nSTU9HlrGSVSxhBStZyTzmM5/ZRf+f0rPsZf7GdA9hEwD9dgf6f1wd2iA1xWYc29KabdmWbWlN00Db5lYyk7nMZBo/UcBPzMicNvKNvMh1TE7yp5wNMGr1WJzkT+zIv+ibKW2eFWnOdrSmNS1pRiOaBXp5WM9MpjKVqRQwlanMjvrXW8713BngmxwyAchYu/AoXaLZVCM60pEO7ET7SHvkFDKNn5jMeCYyIekrdwqSgFe4iilJ/EQV1nggR3oXWTmp6qMVf+fMdJ8+qy4d6EAHdqA1LSPtA7yMCYxnPOP5LrrWgW84mzEeyiYAuaw61zEg7AvT1uzO7uxO5zTp8DyLCUzgW8YwMX1bBgp5jOuSuK9f42iAkd5BJp6/NuE6zkjXyr8i7enCznSgPU3TYo/mM5bRjGY0i8Le1Hpu57rQJ+qSCUCa6skj4U00Wo4O7MPu7J7Gw3KvYhxjGMsYJgXwXlfgVnIvN7E8oWXn2HkzQr/QPKHlanAh/0i/18/KswNd6EIXdk3bFxFiTGY0o/mYCWFupoBzyfeANgHINbX5L2eEE/8m9CCPwwJ4vT06K/icUYxkVLrdEMziGp5MoKFiktOfRGgCHUtcpgJncS1N0mm3K7EzPejOARk10eA8Piaf90rV6zKhTONR/uYkwiYAuWQPng1+gMyqHEgvDsjokTfXMoaRjODjdHqT4Hv+xeASlvmCrh7WkRlFjxKWyON2dk6X3d2KfelJDzpTOYODPoX3Gcb7YXR3mUY/RnhYmwDkgkr8iyuDHRCjLnn05ogsGmprA1+TTz6fsC49duhdLon7qt97HOihHZm3ODzOtztyV3qURgV2JY889s7oiv+PVvEBQ3mdecGudj03c4PvBZgAZLtteYbuwa2uAcdzJPukewfnUlvChwznzXR4bbiQB/hnsU2VgznWgzsyL3JiMd/U4DKuTH2HzJYczoHsl7WTCxbyMa8xiAVBrvQLTknq3Rspw5zNcmLBfKrGescGxdbFcsOE2K2xHrHyMVL7mVnsYE13E/MT2ef2Ym5nTmN2qvetQ+za2JjYxpw4K9fHhsdOjdUILnrLOMNKQtmpJi8Fc5qUj+0beyy2JJZ7ZsceifWJVU3tJX4Eu26hdC+zWo7wM2ALJdCZT1O5T9ViR8Qejc3JwbNyceyR2N6xckFF8vmoh0TzEYDCtyOvsGPZV1Ob4xkQxIoy2Co+YDAvp24A/g3cx9V/ej3wBF7wII/MMbz6h/+uxS38JVWj/FXhIPpmVQ+c0viJR3gsmEcCEziWHzzITQCyx3E8Rs2yrqQz/TnFCcx+lwY8zRDWpmbzM7iAob/7770YZZlEpusfxpA7intolrqqv0/WPulP1lqGcCefln1FyzmTl42nCUA2qMRALi3bKipzIufTzVhuZgmDeYaRxFKx8Ze5eNMw6tsww9KITGPmFv2tGfdyZCounD3px7HUsSw2M5r7eKmsb+/EuIMrfCvABCDTNWFQie8sx1WDs/m/BAc+y1UzeJ7HUtGBeAlX8jAxoAJrsvZVjPS70axGDCjPedwcfct7S07gbLa3HOKYw0P8t6yj+3zCCdHPU2QCoODsxpCyNE5uzUVcyNbGMSGf8gwvsDTqzY7kTKYAP9PSMojEFNoC7XicPaPdcB1Oop8T2idoAfdwb9lmFPiF3qWanlsmAGngSJ4tfY/WZvyNc+wQm6SVDOJhPo92o6v4O/fwMT2NfyTe5yAGcCPVotzoXvTnuGg3mQWW8zC3l+U2fgUnM8Q4mgBknsu4tbT9kutxORd7sSm1H3iSR1kY5SY/Yhl9jHwkXqFR2R6rJac2x3M+uxj3UufH9zCw9JOAb+Qy/msUTQAySSUe4KzS/WgNLuEyOxcFcNkZxL2MjW6D67JovNf0VkilqDbVlQvpaypeZosYyD2ln+jrYS6k0CiaAGSGerzMfqXLG87gX2kyL3h2GMvdvOC1Q0mrwGFcTJ6BCMxMrufx0nbsz6cvS4yhCUD624b3SjdSz2HcSRvjF7hfuJ9Hgh21XFmtAf0530Q8BD8wgHdL96PjOZhZRtAEIL215r3SzMfbmjt8hByi1TzH7Q4vphK15/84iaoGIjSv8Vd+Ls0P/sxBThZkApDOOvEODZP9oWpcwRVeckK3kbe4JYhxypSlOnMJJwU7U7e2mI7/m1tZk/wPzuFgvjV+JgDpqSdDkx8V9EjuoJWxi8zH/Ju3UzNyoNL4Qng4V0T5akHOK2DAH8bSTtASejPS6JkApJ9eDEq2u3Aj7udoIxe5bxnIS2wwEAIqcgJX0NFARG4wFzA/2R9axTG8Y+xMANLLCTyd7MtJfbmf+kYuRaZya+n7JCtLlOcYbmAHA5Eii7mSh5P9oXWcwmBjZwKQPo7lheRGgm/I/Rxj3EwClNLK/0baGogUG8a5yXbv38ApvGjkTADSQ1+eT676P5F7HOE/TfzITTxrEpBjKtGPq2htINLCAi5Ktj4v5HheM3ImAKl3NC8m0/hfiwc4yaillSn8k0F2DMyZO/8TuL407+oqRM9xHsuTSwGO43XjZgKQWkfxUjLVf2dedCLRtDSe632wmAPyGMhuhiEN/cyJyU3jtY5jS/MigX6fDKssjkjm7r8cl/Cp1X+a6sggRjmhX1bbnQ8YbvWfplrxCdcmUyVVZjCHGTdbAFLlYIYkPgFMA570aE17MV7jH0wyEFlnR27hCMOQ9oZyZjLDdq/lMD4waiYA0evCh9RMdOHuDHJs8QxRyANcxyIDkTXqcy3nJtdPVynzC8cyOvHFl7MvXxk1E4BotWUkDRJd+BQecajfjLKYgdzJWgOR8SpxBjc53kZGWcv5PJ744nPpzk9GzQQgOk0Zlej4vRW5gwsz5NeKMY/5zGMO85nHclaynKWsLBq1exVrgXLUAapThfLUoW7Rnzo0phHN2CqLCnkylzHEYz2jHcW/s6rXzTJmMpd5LGYJi4v+N8YaVgOLAahCdQCqUoPa1KIGW9GABjShAQ1omDGX/Du4PPGXc3+iB3M82k0AolGLj9k1sUXrM4j90vhXWcdEJjOVqUylgOmsK+P6qtOMxrSiNdvRmu1onOFF/QEXM8EjPiPtzF3sm+G/w2x+ooCfKOBn5jCLVWVcX2Va0Jpt2ZZt2YEdE+/ClALDOSHxB3HfsTdLPOZNAMJXlXfYJ9FL0Otsm4a/wiy+4FvGM54pIQ+BU4Md6FD0aZWRh1sh93Btcm8oK+Vqcy0XZuRT/438zISiz6QyV/jxVaQtHdiJneiWlj2UfuKIxNPvDznUZ3YmAOFHbBDHJrboQbySeC/BCKxlDKP5nM+ZkZLt12QXutCZLuyQYe+fzuJvvOCxnzGn6MnclmFtTxuYxBjGMIZvWZmSPWjOHuzB7nShShrFZRlH836iC7/EiY7mZQIQrhu4OrEFT+HxZGcHCu3iMo73eZ9RId9PJG4rdmMPetCduhlT8B9xoQ8DMsBO3MveGbO3ixjFCD5nHCvSZI+q04MDOIBOaZKkr+P0xJPva7nOM8AEIDwn8lxiMbuMgWkQ3MW8yRu8X9Q9KP2Upz096M6+bJMBhV/InVybNkmUNleD67k4Ixr+f+EjRjKSiWl7y1qPAziSw6iT8j3ZyN+4I7FFYxzvcJ4mAGHpxkdUS6Ra+y+XpHhXZ/AGb/AxhRkS2h05kDz2S6tHJlsylfN41zMhLR3KA7RM831czofkM5wfMiSmldiXIzmCZinej/9weWKp0ir2YYzngglA8LbhC5qUvFgVnuL4FO7mEl7mGUZk5MOwSuzBwfRm57Tey2f5K/M9H9JKI+7gxLTew68ZxjuMzsh5J8uzN/04htop3IfnODOxd5Rm0i3Z2YVNAFSSanxM10QWe52DUrSL63mLZxla9NZ+JmtJb3qzT1p1R/q9hfyVZ+xvlDYXsTO4jXppundr+YghDGN6FlwC+3AKh1IhRdt/i2MSu7Z9RU+f1JkABBunwRxT8mLVeYO8lOzgHB7hYX7JqqBvxaH05bCigU3STT79meqZkXLb8UiajrSximEM5p206d4XjBacy1k0Ssm23+UoVieyoO8DmAAE6nIGlrxQDYawfwp2bgT382qZh/BJVzXoRV8OS6TzRcRWcBkPeZ1J6eXrfAZSIw2r/rcYzLCsvQ2tzLFcwF4p2PJwjkgsBfhrov0GTQBUkp58UHLX4hq8mej4QIHZyOvcypc5UAQ16c0pHJR2PbzzOSsLGnczUyseT7t7//W8y7MMTdG7/NHagyvpE3kV8gG9E0msCtmXTz1HTADKriFfldwJtgZDI74YFfIitzIxp4qiHsdyKt3Tap+WcRmP2A4Q+YXrHP6TZjNPTORpnsqxIem35zLOiHi8k5EclsjInL+wm311TQDKqgLvckDJ1f879Ij0PuNxbsrZO8+dOJVTaZhGe/QO52RZ/4v01pxHU9bVdkvm8jRP5ewwUa34J6dF2jXwEw5NpBXgPQ5lo2eLyuJGYiV9KsXeikVnY2xQrG2MHP9UjvWNDY9tjKWLJbGTc75MovocG1uYNuW+MTY81jdWOefLpF1sUKRn43uJxfxaKzBbAMoij3dKSm3L8xwnRLZDw/mH41z8rgHyHE5Pm7aAJ7nYSYNCVot76Zc29/1P8KgT0W+yO7dE+Bj0OU4t+fZ+I4fzjiVjAlA6zfia+iUtdGdko/79xN8d53IzlTmCASnpkby5n+nHSIskxCrmWbZPiz0Zy8M8nQUjbgStN3dFNv/p/VxQ8kLz2dVhgYpXwRDESY5eoWNJC13P5ZHszGpu5iS+tVQ2s4GJPM4wqtE+5YdzHU6lBh/74DEEFbmMZ2iQ8v0o5FUGcCVjM3JMv7BN5mHWs0ckb+t0JcbHJS1Ug448Z7koeZeW/Izp4oieeL0aa+mz3xI/28Ruji1Kg+fCo2ItLI2AP9vGPk+Dkl0YuzHW1NIo8dM6NjSiEjk/kf25yMqs+LtcbVl7xpQ09syxvBTBlJnzuICXLY8EbcU5XJryuQUXcTpDLYzAHMXjKZ+Vbgb/5dEsG9UvTCdyd8nPT8tsI8fyWkkLraEb31kiJgCJq8Jodom/yG58EsEYZIO5wJdZk1SJE7mcDindhxj3cFnWjs4YpYrcyOUpvlD9yL08yFoLIykNuY9jQ9/KavYpeSi0cezhyajE/aekZqVmsZmhN2/NjR1jc2IpP+VifWJfpLjB+DMf3ATQ9D86xaU4OtY7Vs6SKOXn+Ni80EtoRqxJyXtyq5WaLQCJ2o/8+G371fiIbiHvxPv0Y7ZlUSZ53MjuKdz+Us728U0Z9OGJlM7y9zU387KjPJaxHeApDgl5G2PZu6SBgTayH59YGn9W3hBsphZPxY9LOZ4Oufov5AoOtPovs3z24DBGp2z7tRnErb5qUyoVuY3XU1j9f8ohdGKw1X8ZzeNwrgr5jYnOPF7SvWx5nk6zkaPTgtemzd1R0tC/N/KXUHdgKoczyHIIyI88ymh2pGlKtl6OHuzF205PnqQGDOHklDVQfskZXOUQPwGJMYIPyKN2iNvoCHwUf5E61ORtS+PP1yf9UQ8+jn//35eXQg3bUPqx1HII/EDvy420SdHWp3EMYy2EhHXjZZqnaNs/cDWvet8fuLo8y2GhphnH8mr8RTbS0xkC/8hHAH9UhUfix6QNj4ZY/ccYyJFW/6FEdhDtOTdFg4K1ZBRnWwgJOpWPUlT9z+RcduIVq/8QLKYX14UY2XI8SbuSartHqGJJ/J6PAP7oWo6O93V1htMitI2voh93efEJzUbG8iAr6ErVyLddkT40YjgbLIYSMvAHuSHi6WV/tYRr6MdoR3EM0UdM5rDQSrcKPXkqfm+DBmws6UlBbvERwO/txBgqx1vgCU4PbeO/cJTT/ERia67h/EgGK/2zTzmauRZAserzCnunYLvreZx/Ms8CiMCuvEar0Nb+WEktbevpyteWggnA5iowKv47Y2fzSGgb/45DmWkZRKYdt9ErBdv9hSP4yvBv0c4MoWUKtpvPXx0oLkKNeZPdQlv7mTwRf4HRdLch7jf2Afifi+JX/7tyd2ibHk53q/9I/UBvDuP7yLe7DR/R2/BvwdF8moLqfzwHc6DVf6TmsB8fhLb2e9k5/gK7c6FlYAvAn21NAbWK/3orvgptItLnONNxKlOiEhfzr8hfD97IPxho8P9wGfoHN0R+MVrGv7jXOf1SojJPcUJI655M5/hzNiyjNQstA7AT4P9cE//t/wdKGhyg1G7jfFukUmQjn/EUTdkp4uouj+1426qnSDWe4pKIq/8Yz3ME+Xb5S5ENvEZt9gjpXq5h/Km4qrCR9y0DWwD+py7T4t0IHsHrIW34Wq4z+im3N/fRMeJtfk4fp3kC6vE6PSPe5iQuYrihT7krQhui/1heiff1clqy2PjbAvCby+INV92It0Oa9+8qbjT2aWAaj7KM7vFfAQnYNvThrZy/Cm3Ph3SKdIsr+QenM8WDPg2MIsZ+oax5X55mZbw2gOWMMP62APyqOtPiTV09JKRuW/+0+k8rrXiQgyPd4kKOYFQOR3x3htAw0i2+zfn87KGeRi4PqT/MEI6I9/U8tnV8blsAfnUexxT/5Tn8LaS7/5uMfFpZwrNMZJ+QWnu2nHmewHgm5Wi8j2QIdSLc3iIG8FeWeKCnWSvASg4KYb07MDPeC7c1mMMXRt8WAKjElOLfP2rNN9QMYaN/d4LqNLU1t3NqhCfGBi7hvhyM8yX8N8K3kGM8yd9Y5OGdlsJ5FLqcXSko/usZbEehLQA6jdOKz49eZocQNvkf/mXc09RqXucz9g117rLfK89hVAnxvej0vO+4jesjTLKm0Zc7WO3BnaZGUCeENwKqsBPPFP91babwrQmAnin+MeQJXBbCBp/gIqOe1n7icRpG2DmtJ015K2dmgajIo1wQ4b3/oxyVgiGflIz32JZdAl/rtvzA+OK/bs2DuR53HwHsy4fF35tNKGl+qVJ4nb6+AZ4RDuNhmkW2tVc4mbU5ENWqvMCRkW3tF87mXQ/ljEgLXw2hs/UPdIg31kOPnO6Di0MBw1+K/+rQEKr/jznR6j9DvEVHno5sa8fwVuRjEkavFm9HWP0/QUer/wyxnuNDeDOvHYfG+/o8WwByW2OmFf/y95scFvDmCtidBZ7rGeUoHmHriLY1lsOyek66erwVf8KNAC3gnNCG71JYx8fntAl4nUPpU/yXa2mR25NA5noLwDnFV/8tA38nfDGHWf1nnNfYhfyIttWZT9gmayPZnM8iq/7fY2er/4yziCMCf03zsHhTTFXhrNyOeG4nABXiFf9fAu4huZ7jcvaN78w2k4MYENHz+R0YyXZZGcWWfEjbSLa0lis5lNkeuBnoe44L+BFpBc6J9/VfcrsjfG4nAL2LTw4rc2bAG7sosvtIBS3GXezBxMgqyjZZF8G2kSU239GVgU7yk7GGMyDgNZ4Vb4jvFvE7CZgAZLM4qeExAQ9Req9vnGS4r+nK45FsqTkfs2NWxa4DH0f0aONhduc7D9aMdh8PBLq+xvG7nfbP5VjncifAhsykYnFffsQ+AW7qc/ZhnWd2FujH/aGMDPln8zgwa0Yp6cR78abaCMxyzuUFD9EsUJkRdAtwfR/Em8y9kKa52zUrl1sAjiu++m/J3gFuaAHHWf1niWfoGskdZkM+pEtWRKwb70dS/X9DF6v/LLGO4wIdtnlfmhf/ZSX65m6kczkBOKX4r04KsGlkI/2Y4TmdNX6gG3dHsJ165NM1C+7+36FuJInZXkz24Mwa0+gXYD+O8pwQ7+uTTAByz3bx2phODHBDN/GO53NWWcMlnB7ByPK1eYddMzpSu/F+BNX/KvpxqnO7Zpm3Ap0uLe4VvTvbmgDkmjg3+TuxU2Cb+YDrPJez0FP0iGBe+XoMD/BYjNquDI+g+i9gL571gMxC1/BRYOvqFK9bbblA7/hMADLCyfFyg6As4XQ2eCZnpa/oHMEws/V5n44ZGZ92vEO90LfyNl35xoMxK23glAB7AsSt408xAcgtnYqf5bdc/OdFSTnPp/9ZbBGHcmXob5w34H3aZ1xsduBDGoW8jRgD6RVoZzGll5lcHNi64vbr2pGdTQByyRHFf7UHrQLayIu86Dmc1WIMpC8rQt5KQ4azfYZV/x/ROORtLOfICNIvpdZzvBTQmraL/1ZN79yMb64mAL3CPxJmcr7nbw54lR5MC3kbTRke4cTEZdWC90Kv/qeyF0M8+HLA+cwMaE29TQBMAIqup7uFfyT8m8WevTnhG7rwccjbaMUHoTepB6MB79Ii5G18yp6M98DLCYu4Pfy7Pugaes5qApA2Di/+cVDLgLpcrYpwJnml2gIODr282zKUrdI+ErV5l3Yhb+Nx9mOuB13OeDKgV253jdeKVp7DTQByRe9SZolJeCHwaS2VztZyGleE/ES6K29QNa2jUJ1hdAp1Cxv4P85yXM2csjigfgDl4l/de+VibHMxAagWb2DooI4Cp/7JPf+mb8jDA+3HS8WPX51ylXmZHqFuYRVH818PtJwT1NU07tX9IKqbAOSCfYsv6BrsG8gmJjLGszYHvcoBzA91C314LE1n8CrPUyHPrDqX/ez4l5NGMymQ9exPteK/rE5PE4BcsF/xX+0dUBOrk5Lkqs/YiymhbuFUbkzL3/zfAY6fsSWT2IsvPMBy1POBrKV6/BaqfXIvrrmYAOxdqq+S4vv/uetH9mBEqFv4Bxel3W99Hv8XcmLVkwIPrpz1HLGwL/4E1PxrApDWasZ7BTCYBOAzfvSMzWGLOJjXQt3CHfRJq9/4GO4Ndf2D2S/kRytKbz8F1PoT9wrfhRomANmuO5WK+6p6QDOw+wAg162mL4+GuP4KvMAeafPb9uDZUC8kD3ICaz2oclwwV9Vu8R7yVkqjk8oEICRxnvPsSeUANhAL+e5PmWAD/UOdB7I6w4qfziJS2/NqqC8nDuQ8B/wVrwbyEKBqvFngg3sGbAKQiQlAMJ1Ax/GLZ6uIcS3/F9CTyy3Zmjepn/LfsiHv0SDEGF7KlR5KAmbwbSDr2buUtYMJQDaoGq+VP5gEYJjnqor8lzNYH9rat+OVQNqsSq8Kr7JtaGtfz2nc6UGkQK+scROA3VN8QpkAhKxj8QVcjs4mAArYUxwb4vPrvVM64FQ5HqF7aGtfy9E84wGkgK+snePfILbPrZjmWgKwa7z7qdoBbGC2QwDpD97gyBDHBzyDy1L2m/2DfqGtexV9GOrBo9/5IpAZIOrRspQ1hAlA5tst7JJ/P8SnvspM73AIy0Nb+60ckZLf6miuD23dK+nDex44+oONfBT2XSAhT2VhApC+LQDBlPwnnqfawlFxKMtCO4Wfp2vkv1Enng7t4rGUg3jfg0YhXV07mQDkaAJQnp3CbgEY4VmqLRjFQaHND1mdV2gY6W/ThKGhjZmyiDw+9YDRFnwcfgvALrlVJ+ZWAtCWmuEmAHMDmrRC2Wc0eaGlAM0ZVPz4VoGrxOB4M6uXufq3F422bCILwk4AatHaBCBb7Vz8V/VpGsj9vz0AVJyxHMzSkNa9D7dF9nvcGVrf/yUcxDgPFBUjFkgLa8v43b13MQHIVm2K/2r7QDbwueeo4viCQ0LrC3AJZ0TyO/Tj/JDWvIxDGOtBojhGB7KW7Ur9pQlAJtsu7FL/2jNUJaSIh4b2RsD9Ac1lEU8nHgppzSvpHdDlXdkrmCusCUBuJgCtwy71bzxDVYJPOZQVoay5Kq+EOCwvwNa8QrVQ1ryKXr5BoxIF84Ao7tV++1yKZ24lANuXKjdI2IxAuqgo243iqJBGB2zB81QIbb8rMDikgX/X0Cugd7yV3eYx2xYAE4BSqRavn18QpW73JSUmnxNDmiMgj3+GttfXsV8o613P8XzoQaGEfB12ArBNLs0HkEsJQGvKhdsC8INnpxL0GueE9MbIP8kLZb0H8/dQ1ruRMxjiAaEIr7Jxr/YVaGUCkI1axSvzxgFs4CfPTiXsSS4K6ZR+LpBXWv+oMU+GdLH4G896MChhBQGso1m8e0FCnODSBCCFGhX/VYNAAmECoGTcx3WhrLdh4D0BKjIokBR5c1dzhweCIr7KVqRuKWsKE4DMFWe01Pppk5sql1zLfaGsdx+uDXR9N9AzlP28i5s8CJSC26y4Q2c3yJ1o5lICUL+Uh0OCCpnu2akkXcJroaz3HxwU2LoO44pQ9vFl/uoBoCT9zMYA1tKg1NmBCUCmahBuic9ng2enkrSBkxkVyon9TECN9g15PP4T01IaQb9ALuXKLetYZAJgAlCqK1npDocEzfPcVCms5ohQ3h9pyBMBVNzleDyUR6LfcyRrLHyl6ErrIwBbAH5n6wBW7yBAKp2FHMacENZ7COeVeR0XcngIezabQwO5j1Mumh/AOra2BSDnEoB6xX8VxPCmtgCotKbSi5UhrPc/tC/Tz3fk3yHs1QoOZ5qFrhQmANXjfVnXBCAbxanlqwZyHyeV1thQnohX4zmqlPqnq/BcIGfGH23kZMfMVBkE0dZatdRfmgBkqqrhlvgqz0yVwWtcHcJad+XGUv/srewcwh5d7rh/KpPVYScA1XInlrmUAFQPNwFY65mpMrmFp0JY61/Zv1Q/dwCXhLA3j3G7Ba2UJwDVbAHIsQSgfLwpHoIocfs0q6zOCWFOvPI8zlZJ/1StUF7+G8EFFrLS4ErrI4BcSwBCL3FbAFRWhRzH1MDX2rIUXfn+Q4vA9+PH0KZBli0AAbYAVMid+QBzJwGIW+JB3Ous98xUmc3nyBDeBzg3yRkCD+bswPdhOUfYUVYBiGDAtSq5EsvcSQDKxb/zKrtKnpkKwLecGvhEweV4kjoJL12bRwJv/o9xFhMtXKXJlbaEK36FXIll7iQA68O+e6/omalAvBpCR7lmSTwGuJPmgW//FgZbsApEEO3zhWX62gQgyxIAWwCUTq7k/cDXeXaC0wMdzumBb/tdrrFQlTktACYAWafQBECZYgMn8HPA6yzHw9QocamteCDw36aAk5woS5mUAORMhy4TgMASgFqemQrMAo4J/MXSllxX4jI3Bt78v5qjHfdfAQriShv3ir8xd6apzJ0EYGO8m5AgLrX1PDMVoK+4NPB1XsJucb/vGsJ7+hfzjYWpAAVxpV0T9v2gCUAmtQEsNgFQ2nmQZwNeY0Uej9NZtSIPBd79+UUetSCVdgnAIhOAnEsAlpXycEhQXc9MBew8fgh4jbtwYbHfXUqngLc2mf4WojItAVhqApCNFoebADTwzFTAVnBCIOOe/d4NxYzx14p/BbylVRzDcgtRAds63MqAXOqykksJwKJwS7x5CGOnK9d9E/iUPDW5b4v/fn8C7wgk50LGW4AKvMraJuwWgMW5FE1bAAJKAKpR37NTgXuEFwNeYy96bfZvR3JowFt5mScsPAWuSSADAS00AbAFIMHDIWGtPDsVgvOZEfAa7/jTYOdV+W/AW5jGORacQhDMJFWLSv2lCUAWtgD8kkaHpvTnA/fUgF9M3p7/+8N/X8a2ga5/A/1YYsEpBC0DWEeMmbYA5FwCsKD4r1bF+zJhbT07FYqPSjGhb3xX/e5C2pwrAl77rYyw0BSKIK6yc+JPS70gd6KZSwlA3HbU6QFsoINnp0LyT0YHur7qDNz09zsC7v43lustMIUkiKvstDLUFCYAmSpuHf9zABvo6NmpkKznNFYGusbj2Q+API4JdL0rOZF1FpjSOAGYXqavTQCyMAEIosx3cEpghWYS/wh4jXdRgYrcFfBar2CKhaWQVKJN+C0AJgBZmgDESn1IJKRqIAentGX38nGg69uJMzmb9oGu80Put6AUmh0CeQkw7tV+Q/wegtkll25Z1zKXxsXfXwWhG997jiokGzmTbwN9Xn9dwHcAyzkrXpYtldHugaxlcrwvZzsXQPa2ARRrQhodntKWFQTcX78JjQJd32VMtZAUoj0CWcv4UtYSJgCZLU7iNyOQGSD28AxVqO7nvbTdtw942AJS2icAi5ld6uYBE4BMNrH4r2KBNN7vRHXPUYUoxrmsSMs9W86ZNv8rVLUC6bEyodS1hAlA1iYAwTwEqMhenqUK1c+Bz9oXjKsD6UgrFa9nIBVWCVf6nJrBKrcSgAnhl/uBnqUK2V18lXb79GUxcwxKwTkg/GogqO5gJgBpaGq8ydXHpdEhKhVvA2eyPq32aD1/YYMFo5DlBbKWsfG+XJ5L4wDmWgKwId7bfl8GclHt5KTACt033JtW+3NnGrZJKNs0CmSs1cL4t3oTc6sjS/kcO4a+Lf6rVYE8BCgfUJYqxfPPNHpb6WeutUAUuoMoF8Bavo7XDAzf5VZMcy0B+CLel58HsokjPFMVuhVclDb7cmHAsxRI4V1ZS7jKj86tmOZaAvB5+GV/OFU9VxW6IbyVJvvxpoWh0FXjkCgSgM9zK6q59whgddgJwFbs69mqCAyIP6t5JNbwVwtCEcgLaBDsuDX8ilwbyz3XEoDCeL2VfmBuIBs5yrNVEZjCHSnfh//wkwWhCARzVf2Fgnhff5lrL7OUz7njKE4CGOODQDZxbCAzVkkluSHFXQFncKuFoAhUDSgByC9D84AJQDYYXYbDI0H1AnpaJcW3iitTuv1L7f6nSPSiTiDreT/+11+YAGS7j+O955kf0Eb6ecYqEi8yImXb/pBXLABF4uRA1hKLnwBs4JNci2u5HDyWvmaX4r+cRNsANrGGJizxrFUEuvF5Sk7jjXSLP6aaFJC6zKZKAOsZz07xvh5DV1sAsl/cJHB4IJuoyometYrEF7yUku0+b/WvyO7/qwSynvwy1AwmANkibk+/oN5p/otnrSLy9xS8DriGqw28InJuQOsZZgJgAsDHFMbLDpYFspGdnRhYEfk5BTMD3O3kv4pIz0DmAIDF8R/xr+NTE4BcsCLemwBreTvNslapJDeyMNLtLWagQVdEzgvs/r8w3tejcvGVlvI5eUTFHUP19YA2cpzzAioiS7gl0u1dzyKDrkg04uiA1vRGGWoFE4BsEvdIeJM1gWykKhd49ioi9/FLZNuaxUMGXBG5KKAOgKt5J/4CQ0wAcsVEphT/5XI+DGgz51PN81eRWBNhG8D18SdUlQJTI7Du1MPjt/B/z2QTANsAAHghoI005FTPYEXkEaZGsp2fecJgKyJnsHVAa3qhDDWCCUBOJQCvBtYb5NKcDbCiVshNkWznOtYZbEWiAgMCWtPyklr4h+RmhHO1fvqUOcV/uZLXAtrMDvT1LFZEnmRS6NuYwrMGWhE5ie0CWtMrrIr39dyA5oI3AcgQG+N39g/uIvdP2wAUkQ3cGPo2rmG9gVZE9//BDTb1XEn5wUYTgNzyfLwv8+M1ECSlA8d6JisiL8Tr3RqAnxhskBXZ/X/bgNY0q6SO3TnbrJW7CcDIeH2mNgR4RFxjG4AiawP4T6jrv5kNBlkZeP+/IX5e+7kJQK6J8WK8rx+MN2twkm0AJ3k2KyJPMTO0df/i839F5vTA7v9jPBJ/gecDu9ibAGSQZ+InhR8EtqEbAxrKQirJWv4b2rpvs/+/IlKNfwW2rvdKejD2XO7GOZcTgO/5Jt7XwY121pILPaMVkYeYH8p6F/KYwVVEBtA8sHU9GP/rLyN4ecYEIC3FHdHkdWYHtqF/UNdzWpFYyT2hrPe/uThXilJiay4PbF2/lDQJ8FO5HOncTgCeiTemaWGAdzz1nD1dkbkv/jvPpUwrHjCwisg11AlsXY/Gf3F1ZW53bMntBGARL8f7+sEAn3lexI6e14rosH468HU+xWIDq0h05PzA1rW2pEe5L7HUBCB3xT06ZgY2KwBU4i7PbEXkroC7NW/06FVk7qZiYOt6tqQRXXJ8YstcTwBGMT7e1/8J8EJ6IEd6bisSP5Q09WmS3srNqdKUAsexX2DripX0Tsy3fGECkNsejvfleN4LcFN3UN3zW5G4M43XJhVnq0CHsnqTifEXyPmOLSYAT7Es3te3B7ipVlzrGa5IvMe3ga1rfIBjYkjx3BDg63+UlEwscWQrE4BlPBrv6+GMC3Bjl9LJc1yRCO7m5u7cHShNkeoa6IgpX/Bx/AUeYkWuR7ycBx0t+TFer5MjA5scGGAMezieuiJQk1lsFcB6ltOM5YZToavIF4HeIB3OW/G+LmQ7ZtgCoGm8Gu/rNwJtA+jCJUZcEVgR0Dssz1n9KxL/F2j1/2X86h9esvq3BeBXu8efDSrYNoDVdMrlsScVmc6MCWQtXxlKha4DY6ga3f2/B7YJwO+MpHu8II1jlwA3NpruPgZQ6OqyKIC11HMIIIWuIp/SNcD1jaVr/J4rHwX4tmEG8xHAr26J92WM6wLd2O5cZsQlqcjfA63+4ZqSOq7ebMxtAfi9L+IdgeX4jN0D3NhauvKdMZctABKd+JzKAa5vBHvHX+Bz9jTqtgD83k3x2wCCvWevwotUM+aScl51ng+0+ocrS1rgeqNuAvBHQ/g6fk45NNDNtec2Yy4p591Bu0DX9wqfxl9gDG8bdROAP9/k3xh/gcvjTyuZtAs4wqhLymlH0j/Q9a3nnyUtcoNRNwHY3KvxR0/9gacC3uCjNDPqknJW8/gDsZbqqvp9/AW+Crgx1wQga9oA/h5/gasCnjq6Pq9QxbhLykmVeIGtA13jspIf71/pyNYmAFv2Fp/E+3pu/J6CpbB7oJMNSVLmuDfe8Culcg2z4y/wPsON+//4GuAfdePzeDGpzDcBd1iBM3jSuCsEvgaodHYKzwS8xonsSmG8BWLsyWgjbwtAcb7gjXhfr+OiwDf5ALsZd0k5ZRceCnydl8av/mGQ1b8JQHxXxu/sn8+QgDdYlVcCfg4mSemsLq9SPeB1Dua9+AsUlvyCgAlArptUUrfUAawMeJOteNKCkJQz1c7ztA54ncv5v5IWuZ8pxt4EoCRXsTDe11MDnhkAoBdXGXdJOeFaDgnhsl3C7L6LfP/fBCARJR4od4Qwj+S19DLykrLekSHc7nzB/SUtcnX8G7vc5FsAW1KRcXSMt8AujKFiwBtdxX58YewVGN8CUPrpzMfUCHid6+nGuPiLTGDXgIdytQUga61nQPwFvuHuwDdanddpYewlZa1WDAu8+of/lFT9w6VW/7YAJOP1+EP11+Abtgt8o9/Sk2XGXrYAKAvVYSQdAl/rJDqxOv4iL9PX6NsCkIyLWRHv65WcyobAN7ozgwJ/tCBJqVeJQSFU/xs5u6TqfzmXGn0TgORML6mz/6chPAaAg3nQ2EvKOvdwYAhr/TcjS1rkan4x+lvmI4DiVeRLdo23QBW+on0IG76SgUZfZeYjAKWPq0N5C+97dmNN/EXGsnsIjbW2AGS99ZzLxngLrOXsUI6sWzjO6EvKGieVPEtfqS7R/Uqq/jdygdW/CUDpfMHD8Rf4jFtC2Gw5ng6lsUySoncIT4TS2Hw9Y0ta5F5H/49f1yieWnwX/928inzCniFseBWHxp+bWCqBjwCUDvbivRBe/YOR7FvSzf3P7MxyS8AWgNJaxpnE4i2wnpNDeXGvOkPpbPwlZbRdeTOU6n8J/Uqq/mOca/VvAlA27/NE/AWmck4oG67FO6F0MZSkaHQknzqhrPl8fi5pkYdLmh5QPgIoWW2+o3n8RZ6mXyibnsneFFgCKhUfASi1tucTmoSy5ic5o6RFprGT9/+2AJTdUv5S0iLnMT6UTTfjQ4cHlpSBtuG9kKr/77iwpEVi9Lf6NwEIxls8En+BlRzN0lA23YLhNLIEJGWUBrzHtqGseQlHs7KkhR6w+d8EIDiXMjn+AlM4PX5vwVJryzvUtwQkZVD1n8+Ooaw5xqn8WNJC33OZZWACEJyVnERh/EVeD238vl1De5ImSUFryPvsHNK6b2RoSYsUchqrLAUTgCCN5caSFrmKd0Pa+I58SDPLQFLaa8wH7BTSut8vaYoWgH/ypaWQGN8CSCZZ+pC94y9Sj7G0CmnzU9jfOS2UBN8CUPSa8z5tQlr3dDqzoKSFRrCfg//aAhC8jZzOkviLLOJ41oa0+TaMpLWlICltteDD0Kr/NRxTcvW/kJOt/k0AwjGVfiX19PuCAaFtviUfsr2lICktteIjtgtt7RcypqRFYpzFDMvBBCAsw7i3pEUe5PEQ8+sRjg4oKQ21ZURIL/4BPMxjJS90O29YDsmwD0CyKvEJe8RfpCrvs1doOzCbQ/jWclCJ7AOg6OzMOyG+qzSCA0t+uPoFPVlnSdgCEKZCTilpzJ819GFKaDvQhI9L6osoSRHaJ9RXlX/imJKr/yWcYPVvAhC+nziVjfEXWcihzA9tB+rwHn0tB0lp4QjepnZoa0/oarqRU5hqSZgARGEINwSSs5ZaFV4oeYICSQrdGbxMtdDWnmB76tW8aUmYAETlOgaXtMgITg1pcGCACjzArZaDpJS6gsepGNraY5zNpyUv9poXQxOAKMU4i4klLTSIa0I+9e6zACWlSPi3IX/nuZIX+q7k17O1Zb4FUHrb8iVbl7TQY5wZ6k4Mpl+IjxqUyXwLQGGqynMcHeoWHubckhdaRDd+sjRsAYjaVE4secypvzA81J3oy4c0tCwkRWpr3g25+n+XC0peaAOnWP2bAKTGcK4uaZFC+jIh1J3Yk09pZ1loC9fG9FmLskt7vgj5ZeRvOY71JS92OW9bGqXnI4Cyxu95TihpoWZ8EvIo/ss53vNAm2X368t8gseoWNI7r8o5eQymTqhb+Im9mVXyYs9xiqVhC0DqxDiTsSUtNJMDmRnqbmzFG5xjaegPNjK3zOuYa/WvPzmXt0Ou/meQl0j1/zX9LQ0TgNRaTd+SR6ko4KAQBwYCqMTD3GZx6g9+SIM1KJtU4L88GOJrfwDzOJCfE8lNj2CVJWICkGpT6V3ygTiRA0PvTf03hlHL8tAmn5Z5DaMMojapwStcGvI2lnIok0pebAW9mG6JmACkg9GJ9Ff5ht6sDHlHDuUjWloeKvJOmdfwrkFUkW0ZxREhb2MFh/JVyYtt4JSS5waWCUBU3uT8RO6mjmRNyDvSibEcaHkIgJFlfENqqi0AKrIPn7NLyNtYR18+S2TBi532NxgVDEFAvqIyPUtaqICJHBNy1lWdE1mZ2GmkrFeZg8rw0zebAAgox2U8zVYhb6WQY3krkQWv4zbLJKiSVXCxfJzTS16sH09G0PDyPOfYQ0ZU5ycal/Jn57Cdx5CowWMcH/pWNnIKLySy4GOcbZmYAKSjSryZSPv72TwUQQrwNUc7P2aOHX41qU4ValOJWlShOjWpRNdSXy8f5UsKWcEq1rKU9SxlLatYQaGhziGteY2dI6j+z+aJRBZ8mz6JjA8kE4BU2IqP6VTyYqfxWARPXxZyAvmWSVaoTB3qbvFPVapRk0rUjXBvFm9KDBazmCUsYfGf/qyzyLLCwTxPvdC3soHTeTaRBceyLyssFROA9NWUz2hR8mIn8VTIb9P+emJdzUAnysogVWlIUxrSmMY0pAkNiyr6Ghn2e6wsSgTmMYv5zGYu85jFvNA7wSo45fk710Vwo7KeU3gpkQWnshdzLBcTgPTWnhGJJM3H8jyVItid9zk5gBHhFLxaNKcVDWlGg00Vfu0s/52XMpt5mxKCuUxjOss9FNJQfZ7m0Ai2U8gJvJrIggvokcgAATIBSLVOvJ9Ii+zhvEzVCHbnF06wN3caqEtrWtOUJpv+XwBrmEUBBcwu+v9pTkCUct14iVYRbGcdx/N6Ypljnm/+mwBkih68k0ir7WG8EkkKUMjf+a+PAiLWiB1ow7a0oBXNaRZJe082KOQXpjOdaUxlMpOZZ0girhQu46YIHlDCGo5ObBKzFRzkm80mAJnkAIYlUrcfxOtUi2SHhnB66IMR57o6bEdrWtOaDnTM+ub86FoICphAAQUUMN6HwCHbmifpFcmWVnFEYp2UV3M4H1oyJgCZ5XBepXLJi+3H0Ii6eE3jOL6wXAJVmR1pSxvasANtqG9AQjefKUxmCpOZzA++bRCwPXgpkT7MAVhJLz5KZMG1HBnAmNYyAYjc0byUSEvaXgyN4FUbgEL+yW1O8FpmTWlPBzrTno5UMRwps57pTGQsE5jI9x7XZVSeK7guogdVi+iVWJv+evom1klAJgDp5ySeSWTMnx15l+YR7dKHnMovlkzS6tCxqNrfhZqGI+2s48eiVOBLHxOUQnOeZt+ItjWLQ/k2kQU3cAovWjYmAJnrLB5JJMpNeYedItqlpfzFsyrB06MtXdiNndip1APqKnqzGc+3jONLptj1NSFH80hErZDwPYckNpNvjLMSGx5QJgDp60LuSWSxugyle2Q79QznO6RWnHSsM53pzJ5sbTAy2nK+ZSxjGctEU4FiVONWLo5sa6PpxYLEqv8Lud/SMQHIfP/HfxJZrDqDODyynZrESYnMvJ2D1X43GhqMrLOU8UWpwASD8TtdeI62kW1tGMcnNsFUjL/xX0vHBCBbWgHuTiTWlXiUUyPbqXVcy79zftCVmuzBnnShqwPz5IhZjGEMn/F5zreBVeQK/hXh+BSPc25iM/nEuIj7PFJNALJHglMAluNf/CvC3RrN6fyQkwXSiG50pwddE3lXU1loA5MYySg+ZEZO/v7b8SQ9Itze3QxI7DHMBvrzuMenCUB2OYUnE5tZ41L+E8F0wb9ZxZXcm0PPR5vSnTx6sKMHv4oUMIqRjMqhfgLluZibIxqC7Nc6/a/cndii6zmN5z0mTQCyT1+eS6y97VBeYqsId2wUp/NjVoe+Au3oTg/2iWiYE2WiuXzJSEbxRZYPMNSSJ9gvwu2t5GTeSGzRdZyY2NxAMgHIPL0ZnNjIMbswNLKRAQCWcRmPZOX9T0cOJI+9fXdfCVvOJ+QzPEu7C57KvZHeXsyiD2MTW3QNx/Kmx58JQPbal6GJ1UXNGEqnSHftbf6S2Pu5GaEh+5DHoZGmUcou8/iYfN7Ooj4CLXmIgyPd4lj6MCuxRVdxJMM96kwAsltP3kwsAa/BsxwZ6a6t4vqMHyq4OnuRRx67eXArIAXkk897LM3wi/05/CfSe394jVMSe+0PVtLbKX9MAHLBXrxJncSKJ9p3AgBGcXZGvhdQgV3JI4+ejs6vUKznG/LJ52MKM3Dvt+ORSJ/7A9zNpYneTiziMEZ7jJkA5IadeJtmiS16Fg9EPJP8Gq7lPxk0PkAdDqEPh1DX40oRWMQ7DOGdDGoPqMgF3BTRnKP/S5cu5oFEF57BIUz0yDIByB1JDP5/AIMjr9y+pD9fp30QW3EQvTnIN/kVuQ18zlBeZ1La72knHqFz5EnSsYm350/kkBwdisEEIIfVZUii43C04NXIT+H13M/VLE/L0JWnE73pFXlMpD8rYBhD+SixEe4iV51r+L9E5iQP1LccRUGiC39O78QmB5AJQHapwnMck9iiVXkowkGCfzOLi3klrUJWjTx60dthe5VWFvA2Q3mXZWm1V724l5aRb/VFzmZlogu/wYms9vgxAchNFbif/oku3J/7Is/lYRgXpMXLgfU4imPYj6oeNUpTa3ifV3idxWmwL00YSL/It7qBq/h34uOJPEH/NG06MQFQRCVwPVcnuvCBvJCCCWqXcQ33pfA8rc7hnOqTfmWIDXzIM7yewtaAilzI9RG/8AewgBN4P/HFr+U6jxYTAJ3JQ4ne2jfnVbqkYBcnMYB3It9qNfLoy9ER91+WgmgNyGcwr6WgF81+3JVo/+JAfc3RTE08S7qQBz1KTAAEcDTPUD2xRavyAKenZCeHcRE/R7StqhxIX45yAF9ltNW8z2BeSfyZeBltw80paPgHeIGzEx3yB1ZyEkM8OkwA9JtdGZL4qLUDGJiSBvFV3MptrAl1GxXYj1M5gloeE8oSq/iAp3kj5CmGqnE5V0Q4w9//rONv3JP44rM4gjEeFSYA+r2mDEn8vbYuDGLblOzmL1zF0yGte09O57jEBkmUMsxiBvFEaMPd9eauFF0RpnMCnyW++Df0yaIpR0wAFJiaPE/vRBeuzWOJvkMYuA+4hPGBrrEJx3EGu3gMKMv9wEs8HnAN2JY7OTRFv89QTmdR4ou/Rr/InofIBCDjyiOJwf/LcTG3RTxM8G8KeYBrAhkMtTIH048jU/R7SNHbyAc8HNAjgRpcxt9T9IbMem7i+mQmD0ticgCZAOSmpAb/786LbJOiHZ3DtTxWptcDO9CPM2homSsHLWYwD/FVGdZQkbO5lkYp2v8ZHJ9M039SkwPIBCB3HcDLiT8Ir8/TKWv+g0n8k8Gl+Ln6nMQZ7GpZh3JftpzVrGE5hSwpqmp+s2zTJE8rNs1pV2nTuxYVNnW9LFd0ANahEltRlWpslYJBqHLBVzzJ8ywsxU/m8d+UvO73q/c5mbmJL57U5AAyAcht7RjK9okuXJ4ruC6FTeifcBlfJHHI7c959HZYn1JV7UtY/Ic/i1nMUgpZxlpWsYLCEEehK0cdKlGT6lShFpWoQx3qUpc6RX9+/d8KFlPS1jKEB/kgiZ/Yg9sSnUgkBIVczW2Jj/cHk+jNFMvZBECJqsvzHJL44l14njYp3N1hXMqPJS61FadyATtauiVYw1xmM485zGEes1hYVOEvz4B936ooEdiapjSgCY1oSFMaOoRziSZwH8+wosTlWnIDp6Tw0j2VU/g0uYvDKRk0d7IJgNKkbC7nZsonung1buXiFO5uIU9wTZxGwXZcwKm+3b+ZVUxjOjOZxTzmMpv5zEqzKWWCUZsmNKQxjWlAU5rRgpaJjn2VQ5bxJPfHmWK4HpczgCop3MNnOD+BJGWTGP/mH3b8MwFQafTmGWonvvhxPJTSt+iXcQd3Fj13/p/y7M8lHO7BBsBiCpjNLAqK/n9qMk2pWaYuTWlCa1oX/X9LHyAAMIq7eG2z7rV1uJQBKU2hF9Ofl5P5gRWcnmbTicoEIKPswOu0S3zx5jzDPind4eXczy2bWvy25mz+QqucvsOfUvSZxnRmsNZjulhVaEFzWtKGNrSlTUpGtUsXU3mQxzZ1DqzJBVxB3ZTu0WecnPhY/wBTOIoJHtUmACqLWjzNEYkvXp6L+HeKu9gt5F7+y/acyyk52MxbyAwKKGAiEyjgZ9s/y9BC0JoOtKc1rWmfg+nAWoZwB99yNn9P2ct+v1rPTdyw6Q2ShLzFyZs1BsoEQKUopaR6A0A3nkqm2SCkajCXhvZZwnjG8z2TmcI0pzgPQUVa0Ya27EhHOibzXCwLEspUn0nfc2pyg/f75N8EQIE6hseTefxXjZu5OJmcQaW4ME9hAhOZwEQm5vCT/FRoSns60J4O7JbTDwrCt5E7uSq5CcCWcjqvGzkTAAWpDYOTGyx/X57I6afv4ZjNBCYylglMCHleRCXWMtCCDnSmPR1oZ8obsALO4JPkfmQcffnJyJkAKGhVGZjcm35bcTtnW8iBVPtjGctYRiUz8YkiVpNd6UxnOrOjR32ZxXiYvyXzyh/AM/yFVcbOBEDhOIUHqZHMDxzGIzQ1bmWq9j9nvsHIKLXYuSgVaG8wSmUmZ/NOcj+ygnN53siZAChM7RhMx2R+oB53cYpxS9g8xvAlYxjDHIOR8RrTlS50oSsNDEbCnmZAsoNK/0DfgOcIlwmAtqAa93BWcj9yGA/S3MjFNZlRjGAUkw1FVtqB7vSke0qHzM4E0/kLbyf7Q89wHiuNnQmAotGfu5IbXr0WAznXAt/MBiYxklF8xHSDkRMa0Y3u9KCrE1JtJsYDXJnsnBOruJAnjJ0JgKK0Ey/QIbkf6cGj7GDkiq5a4xjJKEY4WkmOqkEnutODnjk1qkA8BZyT1JyEAHzLiUw0diYAilpVBnJRcmVYnesZkNMjrq/jU4bzPmMdrkcAVKILB5DHnjndIrCe/3Itq5NtMHiES+31bwKgVDmCx9g6uR/pysPsmpP3N/nk825WzrWnsqvOXuSRx245eFn8iv6MTfaHFnAmQz1uTACUSs14hv2S+5GKXMANbJUjAZrLJ+TzFr94rCgBDdmHPA6hRY78vqu4nv8kN84/QD6nMtujxQRAqVaeK7gu2QHDW3AvvbM6LCv4kHyG871HiEqhA3nksV9yw25knCFcyIxkf6iQq/mPY/2bAChd7M5zbJfsD/Xm3qy8z5nBMIbwoVPvqsyqsh996MU2Wfi7zeZKnk7+x6ZwUnJzA8kEQGGrxq3JdgmEWtzA+VTMmiBMZCjDGOXUPAq8PaAXvdkray6Z67mPfyb7wt+v3f7+L9nxgWUCoCgczGM0S/aH2nEnB2f4L76GkQzjFZ/zK1QNOYReHJbxjwU+5mK+Tf7H5nI2wzwKTACUrrbmAfom/2PHc1uGjhQ4n6EM4z2HIVNkanIQvTk8QwcXns7fGFyaH3yRC5wLywRA6e5k7qVOsj9Uncu5IrnBBVNsIa/yEh8l339ZCkAF9ud4jqJeBu3zOh7kqtK04C/iAl60zE0AlAka8yiHJ/9jrbmDPhnw6y1lCIN5l3WWtFKeBuxJX06ifgbs6xv8lYLS/OBwzvTpmgmAMqlkz+XfpXnV/xDuTOPhgpczhEG8a/9+pZUqHMJx9KFm2u7hDwzg3dL84DIu4xF71ZoAKNO05GEOSv7HKnF+Gg4TtIo3eYm3kh2sVIpMNQ7jeA6netqdO7dxS+mS5nc5J/lhAmQCoPTQlwdL85DyX1ybNr/CRt7nSd6wm58yQk36cDoHUD5t9uhfXF+aH1vK5d77mwAos23DQxyW7A+NZbe02PmfeJKnvAVRxmnBaZyW/NhcofiKzsn/0Jucy0zL0QRAme807qBu4os3ZE7KD401DOVh3vcGRBmsM/05KeU9A2I0ZU4yP7CYAaUZIlCZprwhyAlPsSPPJ774nimt/mOM4EwacBz5Vv/KaGM5l6acxcgU3+ftnsziz9HO6t8EQNlkLidzMD8ltnC7lO3mL9zEDuzNE442qiyxnMfpyQ7cksIW9YTP6B85kFOYZ6mZACjbvEdHrkukM3DjlNz3v0tvWnI1UywpZZ3J/IOWHMF7KWnVSuiMLmQgO5FvWZkAKDut4Vp2Y0RJi0X9zHIpd7IDhzDMGUaVxTYwhINpx90sjXjLCZzRH7MLV7LGUjIBUDabyD6cxoJ4i0Q5zM4kBrANl3rfr5xpC7iEbTi3NJPxlCHzj2sxA9if7y0bEwBlvxhPswMPF98WGc2MH+t5mf1ox10+71eOWcHD7ML+vML6SLa3ON6Xg9mBu2x8MwFQ7ljEuexbXM4f/t34PAayPX35yJJQzvqQY2nBlRF0Dpxc3Bc/chDHMd+yyE2OA5DbqvJ3rqDKn/+5I9+FuNEJ3MaLjuYvFanCiVxG+xC3sBPjN//HtdzCrZ6IJgDKZdtzM33/fFjMpEkoG/uUgQz17X7pT8rTmyvYM5R1z6bZ5ufcMAYk+lqwsveoU677keM44I83CDFeDmFDo+hDd4ZY/Uub2cgb7EVPhoVwfgz+8zoncTi9rf5lC4B+VZEzuel/k5rvzNcBHhzreYl/R9rrWcpUu3A5x1ExsPXF2PX3594SbuUO1hlnSb9Xj7tYT+zXzxuxYKyJPR1rG8OPHz8Jf1rF7oqtDOgMfP1/693A0zT0QidbALRlnbiTvQHa89XmvQOTtIT7uNtxRaVSaMjFXEjtMq5lLbsx8de/fswlfGNcJcVLCk9gNjFiV5fpvmNF7OZYXe/l/Pgpw6de7JbYijKdh1f/uqZZHOelTVIiHidGrHxsaCkvOmtjD8WaePn24yeAT/3YrbFVpTwT34lV+HUtj3tR0+YqGgIVZyMn8Q57JflThTzBjcwwfKGrTF1qUJdK1KQ6VahNJWpRherUpFLRv0PtTa/61KRS0d+qUu1P61q9abDYwk3jMm5kKbCCQhZTyApWsZalrGcpa1lV9O8rWWx/spAt4Eru45+cvqn8EvUpfdlgAGUCoNJYziEM5uAkUobnuM63iwJTlYbUpS51tvineoBbqluGn13FYpZs+rPkd/+1mHnOLhOIGfRnINdyUhJvbr9LX5YbOpkAqPQpwOFcxxUJHCgxXuWa37obKem7+QY0oTENaEpDGtGEhjQpcwewaFSnOs2K/XYps5nHbOYyj1nMYw5zmEehRZ60n+jHrVzH0Qn03V7PQP7l3b9MAFQ2G7iaV7mdfeNW/kO5nrEGK0G1aEFLWtCCbWhGIxr+bwCGrFOb2rTb7F8XMJd5zGQG05nBz0z3XjUhEziWzlxD77hJwEf8H18ZLJkAKAhfsR896c/RW2h2XsIgHmScQSpWBZoUVffNaUlLmlMn52NSn/p0+MO/LGYG05jGDKYznWnMdnq6YozlCDrxF47bwnG0ild5mBEGSQlxHABtyeOcsaV/rsJedGEH6rEVS1nID4zmi4gmNM0kldmWtrSlDW1oTbOkO28JCvmFAqYwhclMZqoPDbZw99aN3WnH1tRmOYuYxBg+LW5unyc404jJBEBlSABUvKa0pzWtaU0H2tq0FrD1TKeAAgqYyASm+XQ7WSYA2mISKalUqtCejnSkLW3ZrsyjJir+hao1rTf911p+ZAqTGc94JvgaomQCIEVzp9+Z9nSgPR2t9FOWenXY1INgPdOZyFgmMJHv7TcgmQBIQapLB9rTgc7sQk3DkYZtA70AWMePRanAGGYbGskEQCqdJnSlC13YjUYGIyNUpj3ti/4+h68YwxhTAckEQEpMbXaiM53pvKkqUSZqzGEcBsBsxjKWsYx2XkrJBED6s63Ypaja39FXY7JME3oVPSL4LRX4lIWGRTIBUG7bgR70YE/aWu3nUCqwkcl8zghGMcmgyARAyiUVaEd3erAvzQ1GDipPO9pxOjCPLxjJKL7wZUKZAEjZrAad6E4PejgYrwBoWNQmsJKvGckoRrDEoMgEQMoeW7MPPenBrh7wKiY17E53YD3jGMkIPmaRQZEJgJTJh/cu5JHHvh7oSvCI6UpXLmUj48gnn5GsMSgyAZAySWvyyOMQtjIUKoXydKYzV7CaUeSTzzjHGJQJgJTeGtOTPA6nmaFQAKqRRx4wn4/I512mGRKZAEjppToHcBB5tDMUCkED+tIX+J583uN9VhsSmQBIqb80H0ovDnWMfkVgR3bkIlYzimG8zEwDIhMAKRU60Ive7El5Q6FI/fpg4E4mMpRhjCJmSGQCIEVz0O5BX46khaFQSrWnPVcwjXcZxnusNSAyAZDCsjX705s+1DYUShst6U9/VvEBQxnCHAMiEwApSPU5huPZmwqGQmmpOr3oxf18xEu86mRDMgGQyq4OfejLwVQyFEp7FTiAA3iAzxnMcywwIDIBkEqjGnn04wgqGwplWBrQne4MZDiDeZ1lBkQmAFKiqnIgfTmaGoZCGasKvejFGvIZzKusMCBKO75BpTS7aB7JCyxgCP2s/pUVyWwvnmI2z3MEVQyHbAGQtqQD/TiTBgZCWacmJ3IiSxjEM4w0HLIFQPpNXfozlvFcYfWvLFaH/oxgAlfQ0GDIBEC5rgJ5DGIOD7GbwVBOaM+tzGI4fX2zRSnmIwClTDtO5zQaGwjlZOKbxxwG8TjfGA6ZACh31OFETqebgQhAIStYznoWU8gKVrOGZRSylHWsZCXrWEFh0ZKrWVP0t7Ws+tNaqm/qoFaVakV/q0wNKlODGlSmDhWpRVWqUZNK1KUSNanpHWwZNeZiLuZznuRFlhoOmQAo2+3GBZy4qZJRydawgMUsZskW/6Ty9bKa1KEudanzpz91qUN9qlp0CdmDPbiD57mPcQZDJgDKTpU5gv7kGYg4FjObWcxmMbM2/W122s42t4IV/FLst9VoQlPq/u5/m7CNwzoVE6uzOIuxPMzTm9ppJBMAZYWm/IVzfN7/B6v4mRlMZzrTmcFc5mbZCPKrKaBgs3/dmkY0ojktaEELmtOK6h4KRTrzENfyMA8zy2DIBEDZcVm7hBN8XsxiCpjNLAqK/n9qTs4jv5CFTPzDv9SlKU1oTeui/2+Z01M+NeFfXM3b3MX7OXl8yARAWaIqx/FXdsnpKr+AiUyggB9Y6QFRTJQWM+F3/12ZbWhNB9rTmtZsS7mci0gFetGLH3iQRz1qFKJyhkBb8DhnlHUV23IhZ1InxwK3iClMZjJTmMIUlnskldlWtKUNbWhLG9pSN+eSo8e5l5/LvqInONNjSbYAKAK7cDnH5czBtZjxjOdbxvO988AHbjljGbvpv+qzIx3ZmY50zInksi7/xyW8xL/51kNBJgBKdz24gsOzvmmpkClMYCJjmZCjz/JTYwEjGFH096a0pwPt6UCnrO5IWJGTOZlRDGSoB4BMAJSeytGHK9gzi3/DmYzhO75lPFNYb4Gn2CxmkV90GWtLR3ZiZ7rQNEt/2+4M4VMGMtR0UyYASi+VOJHL6ZCVv9tSxjOWsYxgqgWdltYzkYkMAqAJXehMZ7rSKOt+z714gx+5lwdZa6ErkJs2aXNJdQKswdn8lRZZFoLlfMtYxjKWid5zZaSmdKYzndmD+ln2m83hTu5N7v0AOwHKFgAFrR4XcyFbZ9G95DhG8SVjmGK1n+FmMYuhQDna0JUudKdTllzwGnMrf+Ne7mGRxSxbAJSKFoCaXMCVWdIXeyVfM5JRjGCJpZ+1atCJ7vSgR5YctSu4j1sSm0bIFgCZACioBKAKp3F9FjxlnccXjGQUX7DOUs8ZFWhHd3qwL80z/ndZyG3cs9nsjiYAMgFQKAlAZfrzD5pk9C/4IyMZwSgmWdY5rR3d6UlPWmf0bzGLm3kkfgprAiATAJU1ASjPMdzCdhn7iy3gQ/IZbn9+/UETepBH7wxOa6dzE48X/3KqCYBMAFSWBKAcx3IDO2TkL7Se0Qwln3FstHRFceltJ/LIowdVM3L/p3Irj7HBBEAmAAo2AchjILtl4K9SQD75vOO4/EpYNbqTRx6dKJ9x+z6B63h58zdYTAC0Bb4GqAR04252z7B9ns+bvMMHzLf4lKTV5JMPNOQADubwjBpHoAODGM3FfGExygRAZT9EbuL/MmqG9u8ZwlA+33JTqJSwebzAC1RgT3rTh3YZs9+78ym3c5XDVcsEQGVRm1c4IEP2dT0jGMpQfrTYFKANjGQkV9CGPvSiR0ZcNCtwOZ05JrExAmQCIG2p+n83I5r+l/IOQ3ibxRaZQjOF27mdehxKHw6hVtrv7wG8y8GmADIBUOnuIl5M++p/Fq/wBp9QaHEpEot4jueozN4cyTE0Tut93Z0X6eWjMBWrvCFQca7mkDTeu3k8wL4052Let/pXxNaRz4Vsw/48mNbdTA/hagtLxfI1QG3J45zRkbFUTtN7sFcZxAfe2SgtVGR/juMo6qVpqtKZ8b4GKFsAlIxb0rD6X8oz9KEJ5zDc6l9pYj3vcTYN6cnDafjEvTI3W0QyAVAydqVXWu3PCl7gSBpxKkOdtkdpaAMjOZfGHMkLrEirPevNrhaPTACUuLPTaF/Gci5NOIk3WGvBKK2t4Q1OogHHkb/5aHwpc5YFIxMAJX5YHJMW+zGdG9ieLjycZvdUUvw0YDAH0oYbmJEW+3OsF3qZAChR+9ZN9etNq3meg9iWa/jJ4lBG+olraMVBvMCaFO9JY/ata3nIBEAJ2WvrVG59LANozskMd+Y+ZbiNDOckGnMuo1K6H3vWsyxkAqCEbL9VarY7j//QgS7cxUILQVljKQ/Tg47cnrIxA9rUshRkAqCE1KmSivv+c2nFZUw0/MpKE/gb23BcStoCalcx/jIBUEIqRzr53xqeohtdeJjVhl5ZbR2D6cHuPBPxGy1VKhh7mQAoIasiG1t3FtfRgtP50qArZ3zBqbTgSqZFtsWVjpYtEwAlZk4Et+Ix3udoWnBtWo+lLoVjHgPZjmP4IJLxAubauCYTACVmYsgjmi7nfjqQx2sO6KsctoFXOYCO3B/6OBcTnRVYJgBKzJvzwnsBbz7X0YoL+N4wS8BELqAZA5gd2hZivDPPOMsEQAmZtmZcKOudygW05FoWGWLpd5ZxF9txIT+HsvavKFhjjGUCoAQ9E/gav+M02nK/Pf2lLVrNfWxHH8YEvuanDa5MAJRMArAswLV9wuHswtOsN7BSHBsZSjd6MSLAdS7jWQMrEwAlbhF3BbKeGEPYi314K43mRpPSWYw32ZvuDA3onLnLR24yAVByBjK1zHczL9CRI/jMYEpJ+pQ+7MSLZZ4PYyoDDaZMAJSclZxO6UcPifEGu3KSA/tKpTaBE+nEkDK0BBRyOisNpIpR0RCoOJ9wKfeW6iff42rH9ku52lTitzlgqlC96G8V+N+8MHWBxZv+a9mmURlWbRqodimFgfYGUbK+5Qi6cSMHluqnL+UTQygTAJXGfWzFLUn+zEiu8qITarVeh7qb/tSmSlFFX4Xq1KQSdalETaoT5Owva1nFCgpZTCErWMValrKepaxlKYtZsumPo82E4wsOYh9upEeSP/d37jN4MgFQad3KXB5IuDIZwz95x6CVWWUa0IRGNKQxdalDHepuqvRT8dSuClWom8ByGzclA7+lBHOYx1xmM591FmuZfExPDuUGOiectJ3HE4ZNJgAqiyf4msfZtcTlJnANr9nXP0kVaEhDmtKQxjSmYVG1Xz9Df5vy1KNeMd8tYC7zmMV8Zhf9bR7zHAo6KW/zDkdxPR1KXPJrzmScAZMJgMpqHF05natoFafyv4HBbDRUJapFC1rRnBa0oAUtaUquzNNan/qbVVzrmcV0pjGd6czgZ6az3EMkrhiv8jp9+WecJOBnbuJJx9xQAsoZAm3B45yx+b3qQRzPQTT5w79OZTjPMcI7/2I0oXVRZd+ClrSgtiGJawnTmcY0ZjCd6fzEXENSzIW7JydzINv+4V9n8x4v8d6W2lWe4EyjJlsAVEobeJu3gaa0oSFVWc0cJjmV72bq0Ya2tKUNbWjDVgYkKXWow86/++9lTGEKU5jEFKb87o0FWwI+4ROgATvQmGqsYR5TmGVgZAKgMM3yMvMnVWhGB9rTuuij4NSi8++6vS2mgAIKmMgEJvu4AJhvCi4TAClaVWnPTnRkZ9qzjeGISN0/pAO/MIFvGc94Jmwat0CSCYAUgqZ0pj0daE/HQN+zV2lswzYcDMAGpjGRCUxkLD/4ZoFkAiAFoR67sRMd2YkOm0bTU3qpQGta0wuAlUzkW8bzHV/ZZ0AyAZCSVZNd6UxnOrOjr8pklBp0pWvR32czlrGMZZTz4UkmAFI8lWhLd3rQmXbOk5UFmtCrqF1gNiMZxVi+YpVhkUwApN+q/Z3pShe60METImtTgb70BdYzgTF8yRi+cagcmQAYAuWqGnSiOz3o6fA8OXTB24VdOAtYxThGMooRLDEsMgGQckMjutGdHnSlssHIWdXpTndgA5MYySg+YrpBkQmAlJ1a04Pu9LBbn36nAu1pT39+7SeQzygmOrC1TACk7LADB7IfPWhoKBTHb/0E5jKSD8hnsiGRCYCUmeqzH3kcTEtDoSQ04hiOAeYwgnyGOfS1TACkTFGN7uSRRydf5VMZNC5qESggn3zece4BmQBI6asDvcijB1UNhQLTmv70Zz2jGUo+49hoSGQCIKWLehxGLw6gvqFQaJfKX98aWEA+Q3nbYYZlAiCl+u6sN73Yh0qGQpGozwmcwAY+ZyhD+N6AyARAilYFdqU3vX43OawU5fHXne7cSgHDGMrHFBoSmQBIYavOAfSiD40NhVKuNRdzMQv5gGG8wVIDIhMAKQzNOIo+7OP4fUozW9OXvqzlI4bwuq8NygRACvICezh9OcTDVWmsCgdzMPfwGYN5iTkGRCYAUlnUpTd9OdhOfsoQ5elOd/7LZwzmBeYZEJkASMmqzRH05SAb/JWxacDtfM7TvGTfAJkASImpRh59OYbqhkIZ7dd3Be5mOIN5zZEElYaJqpQ2KnEEg1nIEPpZ/StLVKEXTzGHQfTxjku2AEib25HTOJ1GBkJZqTp96csiXuYBvjYcsgVAAqhNf0YykSus/pXl6tGfcUzgCoetlgmAcv3wy+NpZvEQ3Q2GckZ7buUXBtHbJlillMefUqQNp3Mq2xiISKzf1AVt4+/6pC8G6m76r9qb7ge28sIQuir0pS8zeIqn+NFwyARAuaE6J3AG3SlnKEptOYtZUvRnJStYxVqWsp6lrGUVK1nHEgpZzhpWl2Er1ahKLSpSh8rUoDpVqE0lalGF6tSkJnWoW/RnK4ukVJpzNVcxksd5qUwlJZkAKO1tx3mc+bu7ThVvHfOYwxzmM+931f2vf9ZHsgerWZ3gtLcVqUPdTelAXerSgIY0pjENHMmhBOXoSU9u53EeoMBwyARA2ac8B3Mhh9jtZAs2Mpe5zC6q8Ocxi3nMZWEG/QbrWcCCYr6rT0Ma0aQoIWhIExrRyOPgT+rxN/7KW9zLe8QMh0wAlC1qcQKX0N5AFFnLTAqYzSwKKGA2U1mVxb/tAhYw8U//VokGNKE1rWlKE1rThloeFpSnF734kUd5hEWGQyYAynQ7cQGnUCOnY7CSKfzIdKYxjenMKPZeOXcUMotZjP1DO0FzWtCSlrSgDW1yeCCo7bmVq3mW+xjv5UMmAMrU+5nDuZgDcrKzXyEzKKCAiUyggJ/Z6OGQQDvBuN/9d11a04H2tKY1O+ZcOlCTv/AXxnI3L1DowSETAGWS2pzHhTTLqd95Gj8whUlMYQrT2OBBUCaLGbuphaACrWhDG9rSlh1omTMx6MxT3MS9PMAyDwiFwDextCWPc0bpf7gh53NxjvT0X8qPTGQsE/iG+R43kahFGzrQmfbslCNjRy7nCf7NzLKs4gnO9MiRCYBCTQC2ZQDnUC2rg1PIFCYUVftT7bGdUnWLUoEOdMryxwTreImbmGQCoAD5CECB2Y0rOIYKWXuv/xVfMoZv+dHm/bSxmJGMLLqUbc/OdKELnbPyjYLK9OMkXmbgH3pKSCYASrkeXMHhWdigVMi3jGIsY/nejnxpbT0/8AODAGhKZ7rTg12z7O2TChzP8YxiIEMtcJkAKPXKczj/YI8sq0wmM5axjOUL1lnEGWcWsxgKVKAdnelMZ3bLosdS3RnCOO7kOVuiVEb2AdCWJNgHoAIn8w92yJpfew4jGcmnfGO1n2Uqswvd6UGPLOo2OImbE08C7AMgEwAFlwCUoxc3sEtW/LoFjGIko5hol76s15Tu5NGDHbPi4vc9t/JsIg+nTABkAqCgEoA8bqVzhv+SG5jESEbxITMs8ZzTiG50pwddM36yovFcz8slpa4mANoC+wAoaftzI3tm8P6vZzT5jORzVliYOWsuQxkK1GRPenIA3TL2YtiRQXzK1XxoocoWAIXZArA7V9MrY3+tAvLJZzhLLGH9SQ32JI88dsvYi+Io/sEntgDIFgCFc6dxDcdm5OVxPh+Rz7tMsxBVjJXkkw80pid5HJ6Bw1h352PyuYKvLEyZAChI7fgHJ2fcHO6rGUU++YzzHX4laA6DGQy0Jo88Ds6wQYXyGMObXMW3FqRMABSE6tzIRRl2qPzMUIYwgrUWn0qlgId5mKrsTW96Z9AEROXoxSHcw9WsshBV4tEibe53fQDa8xptM2bHNzKGNxjmHZACtQu96UOXDLpgTuYoJv7vP+0DIFsAlKy9GZohjaCryGcow5hjoSlw3/ANN9KEXvThgIwYVbAtn9G7+E6BkgmA4tuTtzJgNPXZDGMo+ay2wBTykfYIj1CdPHrTi8Zpvre1eIsD+cxikwmAkrcNr6Z59T+DwQziC8fvU4RWMYQhlGd3juNYtknjPa3Bq3TlF4tMxShvCLRl5Xgsje9xFvIMB9KK/2O01b9SYCOfcSkt6cndzE7bvWzM03b0kgmAknUKB6Xlfs3nQfanEaeS78t9SnkaMJJLaM4BPMSCtNzD/TjFYpIJgJJRiWvTbp+W8Ax9aMZ5fOhEqEojG/iAv9CYntzN/LTbu+szfrYDmQAoUkfQOo32ZhXP0otGnMpQCi0cpWkaMJJL2IbePJtW7+C3oo+FIxMAJe6MtNmTT+lPE/rxJussFqW9dQyjH03pn0b978+wWGQCoERtVWG/NNiL2dzNLnTnEZZZJMooS3mEvWjHdWkx/8T+1KpgmcgEQAnp0zC1Q52s42V60ZxLHNFPGWwS17I9vXklxa1XVend0NKQCYASskud1G17IleyDX15045+ygLrGcaxNObclM7St3MdS0ImAEpIi5qp2OoKHqATHRiYhj2ppbJYzMN0ZjceZEVKtt+ypmUgEwAlpEalqLc4iUtoxvl8bfCVtcZxHtswgMk5cEbLBECZelhE2Pq+kXz6sCN329VPOWApd9GOAxnM+gi3Wm69kZcJgBKybnk021nIv9mOAxnqcL7KITHyOY623MaiiLZYuMKoywRAid2lTA1/G+M4lxZcwc+GWzlpKpfTlOMiGS9gaYHxlgmAErJkRJhr38BLdGc3Hk6r8dKk6K1lMHvRnUEhv/OyZKSxlgmAErtcPL0ypDb5dTxDB07gU4MsFfmU42nD3awOaf0rWfuMUdbmnClSW/TxzL2bBr3OpTzAXcwxuNIWNWYA51Er8PV+MmufZkZXtgAoQRMeDXZ9c7iSFvzd6l+K/CwJ+myWCYCy2rwbJq0Jal1TGUBrBvqan1SipdxKS05jUmBrnLJ23g3GVSYASti16z+8M4j1fMXxtOGu0J5uStlnHU/TgRMYF8ja3r/jWkcB0BbZB0DF+mRmzzL1AxjHNQwzjFKp9eIGdi3TGj6es28T4yhbAJSk9/adVljan/2B0+hi9S+VyTB2o08Z5sScuX70vkZRxXGWaBXfArBomwntjquWdCvRVAZwHl87up8UgMk8QgG7UDfpn1wUe/a4yx0BQCYAKlUbwPeNftj+6BpJpAAzuYIzGWflLwUmxjc8wGx2TeoVwfkbnz7pby8bPRXPPgAqwc27936/Y42ELjjcwoN295NCUo3zuJIGCS07fuXQA/4x2pjJBEBlcm3Vtq/3Pjj+hOKL+C934YwjUrhqMoBLqRd3mRUMfXfykdeuMVoyAVAAzuq2+0t9WjXa4nfTeYh7fctfikgtLuRcWmzxu7kMnfr5CY99YZRkAqAgLzv9et61b93O7EB9KrOGeUxiNMMZyUaDI0WqPD04kN3ZgYZUZR0LmMRYPlo04uJlzxkdmQAoeLW5ngvsOiqloY08x6UsNBAyAVBYduceuhoGKa18wYV8aRiUDAcCUrJGszunMddASGliEQPYy+pfybIxV6XxDY9Sg84mkFKKrecejuZjh95Q8nwEoNLbgbs42DBIKfMxF/GdYVDpeAen0pvEIfThRwMhpcAUjmM/q3/ZAqDUqcQZ3Jjg8GSSgrCYgdzJWgOhsrAPgMpqI2N5jCrs5tEkRWAdd3Es+WwwFLIFQOlhe27laI8oKUQxXubv/GQgZAKgdNOVWzjAMEihGMWVOL2vTACUtvK4hS6GQQrUGP5OvmFQkHwLQEHLpxvHM9lASAGZRF+6Wf3LFgBlhoqcwlVsbyCkMpnCTTzHegMhEwBlkvIcw3XsaCCkUilgII9b+csEQJmaBBzH1XQwEFJSxnMjg51pWyYAyvSjrBf/orOBkBLyHf/hOd/zlwmAskUeNzuNsFSCb7iJl53aRyYAyraj7TD+ye4GQtqiz7mBtwyDTACUrQ7mKnoaBukPPuYmhhsGmQAo23XiUk6gkoGQKOR17uAzAyETAOWKxvyFC9naQCiHLeNJ/sMMAyETAOWaqhzHlY4UoJz0E/fwKCsNhEwAlKvKsz+XcLjHonLIKO7iVV/0kwmABLsygBOpbCCU5dbyInfwjYGQCYD0P004n3NpYCCUpebxMPcxx0DIBEDaXGWOpD/7e2Qqq2zkAx7hddYZCpkASPFsw8lcQHMDoSwwh6d4hJ8MhEwApMRUYD/6cxQVDYUy+L7/YV6n0FDIBEBKVjNO4TxaGghlmNk8zUNMNRAyAZBKrzz72xagDLvvf431hkImAFIQtuF0TqadgVAam8hzPMVMAyETACloHejLqWxrIJRmZvIKgxlpIGQCIIWnPHvRlxMdMUBpYQlDGcxbjusnEwApGlU4iL4cTQ1DoRRZQz5P84Zv98sEQIpedQ7nVA52amFFaiOf8TQvssxQyARASqXGHM8x7EUFQ6GQbWAkr/IScw2FTACkdLE1h9OLQ6lpKBSCNYxkGC85lr9MAKT0VI08enEkDQ2FArKYfIbxGssNhUwApHRXgT3py1HOJ6AymcHbDONdu/nJBEDKNB3oSy86GwglqYBhDGYUMUMhEwApc23HIRzE/vYOUImW8wHv8Q4FhkImAFK2qMCu5NGbPSlvMPQnGxlHPvl8YnO/TACkbFWf/cjjUPsHCIB5fEw+Q5ltKGQCIOWG1uSRxyFsZShy0mpGkU8+X/mcXyYAUi6qRk96sjfdqGowcqTi/5JP+ISRrDYYMgGQVJFd6EF3DqCewchKK/icUYxkJGsMhmQCIP1ZeXakOz3YhxYGIyvM5UtGks84NhoMyQRAKlkberA3PdjeUGSkKYzkE0byo6GQTACk0qjNTnSmM51pbzDS3mzGMpaxfM58gyGZAEjBqEMXetCZLjQ2GGllCRMYySi+dKoeyQRAClPTojaB3WlgMFJmGd8V3e9PMBiSCYAUrVZ0oCMd6EB7XySMwGq+ZwLjGc8EphkOyQRASpd2gfZ0oD0dTAYCtJ7pTGQCExnLD2wwIJIJgJSuKrMD7dmJ9rRlO5OBUt3p/8RkJjKeCUyi0IBIJgBS5qlL66JPBzpQx4Bs0RoKmEBB0edn39qXTACk7FKf7diO7dmO7dmWxjl7Fm5kLgX8yE/8xI/8xEIPDckEQMq19oGmNKEpTWhNU5pn5fREa1nELAqYzSxmM4sCZtiwL5kASPpjG0FTmtOUZjSmAVuzNVtTn0oZsvfrWFj0mcdcfmEWM5jl/b1kAiCpdGpRn/qb0oGtqU99alGbalSnTqTncowlrGI1S1nGfBZsqvAXMp8FLLeoJBMASVGpSjXqUo3q1KYG1ahFTaoVPUyoTI2ipX5LFKr94c2ENUUT48ZYUvQvK1kHwHJWs4JlrGIVS1jNahaz2tn0JEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJClj/D+aKsboc+W8sAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMi0yOFQxMzozNjoyNSswMDowMAlsgykAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTItMjhUMTM6MzY6MjUrMDA6MDB4MTuVAAAAAElFTkSuQmCC
" alt="K_black" draggable="true"></img>
      <img class="piece blackpiece" id="Q_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDBwMJznZuOa+AAAD9klEQVRIx+2XXWwUVRTHfzvbLqXb2g9tVGwtlaLGCFH6gZbalBoeIA3G6ANCQqJAlMQS9YEnJfIswkNNMEUTNELRkDQ1wCM0fsT0C14MptbWloohIW3ZlMKW7p2/D9wM292d3Ym+Gc5kJ3Nmzv3f//nfc8/OwH37H1g4cGQRH/IBTzPI4n+ddCPdnKTVeiH6cDG4nCeUMSKwteGSIIFrhz6FvOPJjBFp5vhA78YlTBiXPf82wvERINV+p89yPs9oIAl9BWi1yrq02IgoPYgeotZvxbUxLdkFOkkCIRKc8IZeQhxIiulEdCb5HyMueVOnITi+C9nHaeDFpDvr7S/ZP80PuSqiFZcEShIADiIMldbLZwGxQL71KzGIg0sQROIeguNxbKMHiDPmBecDDjutt4YIEGGN9Xfi2Ji7Nkoc6KE1cx4TiHOedwiDYcJukXdshbxtt9A4BsMnXnQv4k//uu4HNrPdYy0cqnkJgAYMYGgAoIUaHOSx3sFWO94HehgQn1EBQAQBhrcAaMQBwnYh38QAYhkAFXQi4KL/Yr6MEIZvAfiCRYS4xQMU2tIShihFzCPEIscA+A6DEG3+0GW4FuBV4GsLLXbTnNRDNrDHXi3yFdBuPZdyf0FmuQKAy+eUeToadlmFsarvwnjrUcIxXAAmmUkGy0vh3U8lYRwqOES+rY0wL5CHsb3dsIN6r9VGOMzDhIAEA9m3zn4vbZernr5ukhzJfoKrSc/2Z2+qw96Vywqv6Yd8iIRYYcUAGMrOuiyNYSpf1zunPinL1U2mfZJPnSD1/nQqUF4a9N/JJZTHM6FVrGQlBZbULHEmQhP8wW8klo7LCX2ELyFME+00sY5CAOaY5g5zFBPhIYoAuMVFfuYMv9ytxCO5/3BDdO/TdUlx/ahPtU3PqTRFkFI9r206rJ8Ul3Rd+0S371IvzeTA2HG9pmKR8yjW6zquj8YzZO8z1zoGmpzCQDxiGnRpzNaYUqz9qAJb+1Gf5DPfPhPeoMCsg7/cATVrFwoCKI1QgdYuUBP8da9XmtdZvadmRX0go2rW+zqneUkbewMLcqFqE+1sZgtgmGSSK8xwh1nKiFDO41RTTRgYoYuzXKjKXMXp1vhs/ygLwKPUUU8t1VRTRDF5JJjjJpNMMsowQ1wDlrGaXxsZDCDH3g4pplN6Q4/l0LlS23VKMUl7O4KxfnDL2CslW3kE+It+RhlnihluM0+U5ZRTxROsZj2VwDW+pzd2blV6e8pstXQ5l+vMu/pGI248Qy3HNeKeUIfqjHOZLmqDan3vE6OBRuqd2qqaqpLllBLGcIPbTMWmxt0xBhlgiJv+zSjol0wJBZRygzgxf7j7lsX+AXYDak2a2NikAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEyLTI4VDEyOjM5OjU3KzAwOjAwuKsZEQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMi0yOFQxMjozOTo1NyswMDowMMn2oa0AAAAASUVORK5CYII=" alt=Q_black" draggable="true"></img>
      <img class="piece blackpiece" id="R_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDA4BES4hv/5LAAABTElEQVRIx2NgGAWjYPgBRqyi5gwOUNYBhpNoItjEYCJEgL0M/6FwL4YINrG92AxhwWo0E5ylwFAOpRnwiDERH0z7kdxIDNyP331UB1gDREBQmSRD7gp+INZob8lCkozul1xKtFp+hq0khPRWBn7i0zUDAxNDi1tlCkE3zGHY1c5Qw/CPFKMZGBikb1qpETL62M2nGuRE8QEiAuMAbu00THyjRo8aPWo0FapdSNH6Pl6AkPaFH7YKklQVMDAwMDD4nBHgIuiyMwIMPgxbSHO1ree2RB5ivD3/y3YvhsOkGH1c3MKOqBA9xPDyBIMlKQHy4yXDamLj6wfdUwgL9kaZn3oM0UYsUd9UzvCP4QDDaUJhvZfBiYFBnMGOaKMPMbxkYGBg2MfgTMjVTAwMDAwkhDTOoKVrRn9GpknPCKdrZgY+Mgz+y/BptLMycAAAUEuKXEoOI4wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMTRUMDE6MTc6NDYrMDA6MDBArp69AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTE0VDAxOjE3OjQ2KzAwOjAwMfMmAQAAAABJRU5ErkJggg==" alt="R_black" draggable="true"></img>
      <img class="piece blackpiece" id="B_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDA4BDAgM3heqAAACVUlEQVRIx+2WTWsTURSGn0kT1CSGpCC1KGoaqEKwII2oKCR0142uuuhS0JUL/QdN/4E/oNSltFsXUbcWpNQgtJRKsLgoFhSaRCfFymTmuMiQycdkMtzMSnruZph755l3zpzz3gun8R/EmO+VMZ7xmAw7GMFKSFDBwsCiQiJY9DImgiCYLPl7JOQTfQuxr4TZYNHfOq73g03IVXRMBBOdK0Gq1rhLjRAQoso9tOAUbyDt39hE+OBXuXcU+EXTxkobXyc/KniOkz5wC37C3CjgNHUHnJSXknTgJnWuqaPfdirOi0i+W3lJFfzAwURlShZFZFGmJNqJv6+GfuVoXhcn1jt1r6qhDxx107IgRREpyoJMd6o+UAFHsLqroiAihd5KsQirdGNPz+2z0W8fin3506Wee8cPNQ95jznk5Sbv1FTnerNNf6ZzanvjIRoF5JJ2gVTPiKILGsu8Vu/HF1lLXCNr8dz70fAQ9MU97RFn+m7/ZU9jchR7yrVd2m2YXpkeojr1NCUe01J7UvukKLp0JJ5ROsJ/x3XHjcbNmNf8zvGXuGquP7ruMI7vbar/xuts2RttP1Yokx2lRsLMs0KlC29QYYX5YYWruZxI75BlnHNEiAPnSZAhQwSLEBYhDPb5io4ONDD4Q5VdNjn2etFZiujtT24Nw7W2mxjtFa07OksuvWXHBJ992KjXKDPhjl5r+5kxwPMaA/zPWb/mnutZ3jCJwRbbVPlNnIg9U6fJd7bZJcsMlxkjac8YNEgwzgy3iXDIQ8qDLDZNVLGWYqR9H6lPI+D4B/5T4EZpm6KpAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEyLTE0VDAxOjEyOjA4KzAwOjAwcvIgXgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMi0xNFQwMToxMjowOCswMDowMAOvmOIAAAAASUVORK5CYII=" alt="B_black" draggable="true"></img>
      <img class="piece blackpiece" id="N_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDA0TDxLXhmXjAAACzElEQVRIx+2WTWgUZxjHf/sRa9xUF+2HhGQjKNSDUAoVpDaNVU+ieLCXQhF68CCIINRKSy+ll14sFDx4sFAE7aWnQK09WA/ixY+DisaDEhqwWNosGpu20Z3314NjsruZmZ3VHPN/GOadeWd+88zzPPPMC4ta1PNqKeWmo82MLBR4HXXqvBcfHSQisHlh0NuQwAxvArsJSMTRhUG/i0iD2xzhdyIk4grv88qLo/uYQiTEW2xrHBrnGza+CLrCP3PA2O7jqHrXrxy8zNbnRX89DyzjuNXT/qtOezj0fE9f9+DdBHzVwVb0n0/3Kz1mpP5k9SYD3YGrTBKtse6UlWZ0NDfe5IR6IfTd6S6xRwl4Rq3bIyk26G/q6cBFSnnBa3mMVYP6RSoYcYPT6l75PC96lAYWPelxS5loPKD+YXWGwTzg7Zjfil5Wvwyc6AwucI1GN/Ad6l8ue8xrndAfdINFLHhD/Ug+zQYXGevOZ8RD6i+B69noDzMhEfeau8kz6zc4Y1+glhXnLJ8jrvFd8vx1dafsaw/BnLawntIww8kPPscw/RSSps4DI7Ip3etvadScdNJaq1cBOU6ZIg+S32ivek5up6PPEvV6y1v2Nt/Y4D/2AzCSFqy31LpELElD/8ATLFho9XiMDc1faZJVVF0l69PQR5ry/2x0imXx7I6s6qmrb8uuNHSN6dm22UACP86m+Q0eZlX8DXWPceASKmSCPdyPxyUixviYAEA/P1PJap0PgFXyehoazjLAEKs5A1xiC48AGOACteyePJWALrddIxPALl7mYXxmJb8y1KnZ/w2sgGoW+qnCLPglRlnb9m6JHzIsKdDbGT2nz/ItxspAuTBbTQmxbtdyPsn3YyoBPbR6XeywZKjkQ5eBJ6S3p/l6hyg/eoa4VHOh+zsnsAVtfvSj5CY6X+NcZRzutVdNVnaWd7XqmsobwEUtrP4Hsx9YhHea48sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMTNUMTk6MTU6MTgrMDA6MDBmcfHXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTEzVDE5OjE1OjE4KzAwOjAwFyxJawAAAABJRU5ErkJggg==" alt="N_black" draggable="true"></img>
      <img class="piece blackpiece" id="p_black" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAgQELx4WcTvaAAABZUlEQVRIx+3WTUrDQBTA8X8jtH5g/EBBNy5aUOjORBEXouK6F7CXkOJlPIA7916irT2BgheobRRSSDIuQsDEpJ3JjBvJe7tM+TF9L/MyUEUV/y9q0r+84ZYD3nni2eQGLB4QBEQECB6xzNE9RCrvTMErfBH9gCM+WZb5q4ujzWqqJzXWaJuh/ZxnMzMFqeNlCuJRN7NrFz9TEB/HxJ6P8Agyb0iAx6E+/fILjvGBLnyZwyZ5oVfrDlHBSkRHj24iClYELT16qeSaBP02Z+1Vr43Xc9p4pTtO+wUvX19/tDqEhBk4JOBY/ywOETm0YKB3Hk/5yC1HXJIxblm4xbQQjvEJzTJwg9FcOMZHNNTp+wVskj1VeJtpavwXZcSETbXT2GVd6o5Sw6arOqVDyYKEDFXgfUk2yT35gpwrduZMnnYKPwD5k/tEnt5VokN25GlbaapZbPwdbcvfr122lNo41r86VKET35JEFvVO2EpYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAyLTA0VDA0OjQ3OjMwKzAwOjAwnnrgigAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMi0wNFQwNDo0NzozMCswMDowMO8nWDYAAAAASUVORK5CYII=" alt="p_black" draggable="true"></img>
      <img class="piece blackpiece" id="K_black" src="data:image/png;base64,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
      " alt="K_black" draggable="true"></img>
      <img class="piece whitepiece" id="K_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCQsXKxszpDY/AAADaklEQVRIx+2XX2wUVRTGfzN3N1igLTSybBt5KG6iDYJCxYpawArERJT6yptN9MnWP9H4ZAipMRiVpJo+EOOTaUlIiAmYoKXJao0EYW1rFrOBNpiAWePSRtol/ZOdmc+HrqTAzLDb1KSJfJN5uHPO+e7JmW/OuQP38D9DjOPE/hvqnYidi0/bzmlSiBSnaS8txF4atS6zIEsi6zhHEUeJLzZxwlyNulu9qGuuklhMYtukapy0pLRqHJNazDLuQD2aQ48QO0oJivg8W89+nozUudMaYYCv+ZtnjFqtOeM+bHlP8wM1vMx2K2EqnCxn6eXy3bZaQbflWt4m9yW1KFZA9jSf8qHlFYpZF2R5fMBhewatdVr0oja5lme5dLMijHiVOWd7bymrfzGoV2Q8cx2NFJ+MCJnrxmvT4E2vrN6U7ZmfWRVEbFkno+5J3Y7zqndsvVFcdcjWejd1h9cJRV3rBJY/9V70mfwwpscU0bCkIUW0WeO+Xl1C7PWn7o05Bfkjp1olNKmEapUL8Cko5tDjL5YLrQrGd0JbhPpCfPYpkvbvIfJC3vAedjHIbnaH+HggX2pn6Cd3NiTwNeDVEPssZ1xn2D/rI+Pmi5DQNcU7CEcYN3wZYDT9VU4msJJJoWSgNaNKx/QHb7zO5OqdKwugvqJ6x+RYd8tnchv5E6Z/zfJvTGNxOcMAZ8hwkTHyTFJFJffzEA08xXbuK3r9wgvu2JS7i3Nh1LDBfGvVddpvM0A3fUxhqKeBWiqJ4JDnTzL8jsty9vA6zRzmfU9Z93l+u3s3XG0fQ8s8FFeHTmnKpwBTOqV2xTXnZx9jtU/fCKB/h4/f4yDLgAKjXCRHHocIlcR4mAeJArMc4CN4l0/KnN5JDalT2xQVd1xRbVOnhpVU8JS3AqmTG0ljs5UWNtDAWlZSzQQ3+IsMF0hyHo+NpOFZvi8n6zZUpy5dC+kY19SlWiHaSh9gAJfhK1qYoe+m+G4wQTUr54mvg0d4jqDRFQlOfIjP54mvaZ74BjleFF/zAmZ4KypNfIjW8g5ml6w8xN3NNFHhY66giS3EPbDyXCpPIWCz3xxwExGv2XrcepQHqKaKSSb4g19J6Uc5thl1D9KLt7DDTSOHTMqevVXV9oxJcYjG8FCL0g5CCeqopoJpJsgyinPv/2sp4R/zBfzn5ksCOQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0xMVQyMzo0MzoyNyswMDowMFWJMWwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMTFUMjM6NDM6MjcrMDA6MDAk1InQAAAAAElFTkSuQmCC" alt="K_white" draggable="true"></img>
      <img class="piece whitepiece" id="Q_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAASNSURBVEjH7ZdNbFRVFMd/992Z129KW1vbaQFJoCBI0lZbwkIo7CTED5RGgZAUNRo3+JGQkBiEJSgLA7owISFGiyRNGhPiEtANmtriyqhVQWynrdiiKaXT9r37d9HpMP2YYYg7wv/lLs7Luf97z/+ce9598AD3AWzOnsW8y9uspZvp/7voVs7SQWvSMvaSdU2hdfYCZlGPnLHNuNqgNjAuOXUN+ljSKSHqF/VYAC8D9Ssx96vtszWOV2dfOUBZPTJRzwtP6TTwi710QI06IHuBvkU9Mgo0P7xW42JhjTOOzUmPIroQXRQl7VbjYq4mTHlkFKijNpjQbcUCPp+dyhXE4TSfk4iTafYRxJXU0gsYvAwCwCU6wWxKq9ONM2MWZiPQyTcZGdLCC2qUJgAcRSakLmlFvcmovEmiSbvOhIijcxhUE9xhmN31JW2Ldw1iEvyWco564LEvaW1w/jM4nw1Jex+eR2oh6DOJOINdar0TR/rRvIbMVynzg8JwS2ivJY/I6+iiEK8lj9DvW8OCkPdT8nyJ7NWMdR1+B3qK3bO7juplL1zBkwA0l4dbqAhpBmBzuHK/F1Vq13v09Mz8TEemB+plT1EJgB/RCxSH7AeItLR4hhYbmUlke3H4PFGRB0ClPVkvoDcr9QFjS71TM7v2KWCP9dpYQmH46EYDzYTrKKLY27XXFhCFCID3kVf6hgG+z0zdi25x2HNtPAf4UaAdV0AbTbLNQDPyaOAlV9gORMEHdrhdR7wEiB+y9dhrbZpWY2iHKePs6mlJeiywl3kLDUoaEuJN++3aQJJWTdNBqR3cEE5p17wkLsS5RwKpR9Zxms71gSSdEKI7FkiSFAvoRickSesDOjltXY+kFdOcy0590GhU0iHhGGgIJGlYEYd2zjBrp1DEDUuSGgIGcIckjcqIg9mbao/oBd5jjSPmG4AqdhiSNQdPADuomsmzIbbKHQZ60LwkLkQZ7pim9LXahZaqQfVapiVChSpUgfKd71CeK3e1Wq1ioWd1TiM6Jhxlc6nMggY+YstDXGqlEhWbPCrwKSKPScaZYkSTjDFuRlOhe7hRVzGXKTKf2sX98neoZzW1xMhbZPE7G5okzgB9/MyHJOJ3/yruR8d1bzguNHNmswqC8Tr04qfsJc4N4twiYAz4NymSRylQQoRiYlRRw2fsw3zhdmdo13NFMhf8sETk9JTID+3FhcIuriSs8H6qyztoaqmkhGKgDCjCZ4px4CZwizFuMMBx9U+6tfyR+z3kqNFEDipPyKR/abJXSBLlvj4xA/RznZtMkEiOAvKTo4zl1FGLr8nyxSkWF2SlveweFvnUUUcleRSSTwEAEyS4zSQ36KefBAZvONzE1VzlOFManNdwDoIM67xKA87kLLTXu/0eqnq7vN5c73wtrrHpHm6ejbjGVPe6C3U1NDGY6iPZ4BjkcYCa3NJYYX8Mq8DqoXC5F/N8SohQhA/AFOMEjDFF3F13f9vQgP0rXMdIbhVSTTN11LCM6ki1llobFhFx+fLNlJcgsONhaP4JhhjiTwbpp5uhBz9Y9yn+A0SxxAstMvB5AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEyLTI4VDEyOjM5OjU2KzAwOjAwHtwSpQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMi0yOFQxMjozOTo1NiswMDowMG+BqhkAAAAASUVORK5CYII=" alt=Q_white" draggable="true"></img>
      <img class="piece whitepiece" id="R_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDA0TEDjBZ6KrAAABkUlEQVRIx+2Xv0oDQRDGf7dnJCAKsdDY+A/7lCmCRLQSFHsFX0MfQbG1sjOFL2DrQYKEKHaCIigWFtFYKChCwOTWIieIbvZmYyHIfVPc8h377dzO7M4cJEjw/+AZ2Txz0ajM6TfGxH0yAgToyIIfjIkLTCJ9RmlV4BBYpjrJBgCTHcbELVNVcmlSZIAJqtNsdZgJMtHzO5fq8ul9tn0psRuNfIYsnIt09pptcSZcQ1aeN/UvQZNYXZ58w+pI5fbVoiCV1sLWZVjkSSoNGRX4uU01YBV+YyvU5615nl3C+Bwu6IursXXsYW41dBdhOypFbUdRU+k+XVmktWB53Zv0L5FIJ9L/UdqzvHoYGZ0JbZNv1GNDZ90XXULvxNwhOxrNkluVgVm/5NOMqTXv9NMutVc4dvG55gkrjKepuXndzHMg8mGVk6ZjRU8zJZJOO1T0Trs1fies6XcwzgYhZc7kTZmbBfFeqwKHtHkVR3wQ39icGfb6nj3nQ3Av2uv6LZu9nOt6/EGPa+XMaPOS/Kz8HT4Aui73d2YDWyoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMTNUMTk6MTY6NTYrMDA6MDBZMz9zAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTEzVDE5OjE2OjU2KzAwOjAwKG6HzwAAAABJRU5ErkJggg==" alt="R_white" draggable="true"></img>
      <img class="piece whitepiece" id="B_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmBxwPGQQzF0w0AAADKUlEQVRIx+2WTWhcVRTHf/fdN9Qkk8kH1VpQaxhENKVVjHRhraG4aBeKmzK6UfxYSLuoULDdhey6cNGtECNKaZmspC5MQWhsBQnSCJVYMjgWG9qCmo92ZjINc+/7d9HJkAwzSXiZlfSczXvn3vu/5/7vuecceCT/A7GbntnBMT4kze9UWutCKsyZ6ImKicIcqdZCD1t/WdJPsp6h1kJfeNlJkvSS48LmlgSbhL4xwywwywzkW+v1Llvo9m+p29sCz7QS2JCxN5EVsn+TwbTO45/RXp/VkrLa65C90hrPB+3dpBuVf3iL8vpKSWcXeWOrwAeD+/3uhtbKX3rBBfc5uBXgPru4281VARd0XAvV7//U7+0iz8a/vfHOVR5PCE2s8jzpzA9xkfejM1WgkvI6J3ROeZWqtjNCvBYP+usut1SFOSJqeqS2XcoxGi8pzr5bO/6MxjQkNKQxzdSsGYWzcZATJhpeExeXhC6tsQzLRIQxcohMYs1/mv2k65K91nmXTfekYv/NPb7a8DRX6qbksP94F4eSs12uqOZSVMrxbbwIGTDRJ4qaAEf6SCZiIF5tvI2ZGpxSjwlYqNNJTihrGOZ8/Kf+GRFqqBHH118abgD9JOYd3qtL0OI83xl2biU9DRh/tAnXR2X8ekyzQb34sv3jSdvecGiJfX5phE/jZr65JjxX1czF5jrYdogPmo5+w/g2H7tr+2W7G9NyA6aXldV2Zyfjc/18eNYNpPyb9kXSdNDDAiXy/MGP/p4NpqL3mY4fIyGHGQlzxq1iuBLmGOHwRoFrGnSk++inlzYSJIFOUmE6SkeJruhQMB7dDYJKkHd/UqAAFKlQZp5pJimtB/0Yp+wJnwTo9AZoo0O9wa7gOQY5QBtlLjNBjpt+XiVTBkTBAtii/4LTLDc+wY7wN6OMLupOretYkbKua1THNKrrKteNed3RRWVkFFxlR2PoLMroc70e9VRsw8wRFBtZbdRbORCdVEaIbGNCXrHf+51BRb/qGvPcI8lKmVnEcYtrTNPPHp7C0r1SMCiSotfsMa9GCXvbv83VZim2j/aYsdRB36Zb6kfSYnkACC95l1A4XNYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDctMjhUMTU6MjU6MDQrMDA6MDAF9y9CAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA3LTI4VDE1OjI1OjA0KzAwOjAwdKqX/gAAAABJRU5ErkJggg==" alt="B_white" draggable="true"></img>
      <img class="piece whitepiece" id="N_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDA4BER4HZs7nAAADGUlEQVRIx+2XT4hVVRzHv+eey2v0vRmbh1kMOi0cMMGwgSxoItFaZDG4EcqFu0QCkYLIFIqgRUoptJBaJEJoSkQLobSpFllKhZspYqaGkhkYc4qmxqZp/pxzPi18jfPnnfvu04E2893cc36H3+f+7u9374/flRa1qBtVg9IZuw5tXChwmx22w3qosttjvII6Fgb9sCiHZELrJW1V2MYSr0MLg35QvMsdLu3VXnu53U+wzuuiNmn5zaNL9uoOurBB2PAlsJ0CQtg+HdaGm0EX7dgzwCjDTHBNl698xkEeDwUv7AVtvlH0AcM3zNGla5cRjrDKKeiYSvWDt5qwi18ZmI3+7fpynBexIf1OK+sD32p/3+B/oJlGRmei/ew7dVFytq++wh4y4SJbEM1MkqXzNHh7XjYveHUyuZM/MIhXqKUTCO3PSTani+4Knh3sws0BfT6/tDxBMqFVeciPiAPRGDvonGcboOD1do6Qk+473XgEPEKJ3VXse0gmtaIWeps4Ho35OUR3FXsvBj2fDU7SnjXORcAfYDCxRPn022z0dvFexPljCj4ZTEP109dRUGtGntOeu11132OkPu3W0ebII/UitDOO3iTe4Rzn5rgF9iNMl5p0pt3H6lB2OhpHv1FyfZQp0z/DZYgtQegtpUrsn09FS9xJ2htHn73Pj7GWtYxNO3zCCpeM62lJ0kZxKop+CeNViKFPtk1BIPARZwE4iAlpj9b995U2u3+i6OMI3RVD7zVhAOjHYMIQhxE6oaWV08fEqxm95GuEOmPo1uTvdn+EfYgW9yk2mPeVVM7W2JH10a8U4BdEJXFV9agdFELcQ9Gl36uxYm+xPy93A5kdcAoT9HJmD1GrbrcfivSCbqvYVtqfiu6rmu217PRm7SaVaNn0upz+2JgDDG1TOjkTklZFB41UVrfY03b1meT+HN14qdGS2ujr2uc7TuWcx4rJ9NuUQ03J6JPk1WbMF7OzmjkyhOKzueMw8wqWpQeW+XtzoxEhf65bGpLXcqP7JfKj/xoyL9QzvwxmJWi2rJrqmrquyi/+TP0f+hfMgUa8CNz2/wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMi0xNFQwMToxNzozMCswMDowMCm7op4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTItMTRUMDE6MTc6MzArMDA6MDBY5hoiAAAAAElFTkSuQmCC" alt="N_black" draggable="true"></img>
      <img class="piece whitepiece" id="p_white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAQAAACQEyoRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAgQELwmVor4dAAAB+klEQVRIx+3WzUtUURgG8GfOe+fDjZ+jGEbiB7pMZ4wUC4to0ccqd/0LEYS0delG7A8IBItoo0JiizYtdaeOIbgRMsydC9MpGplz7tOiyGtenXM9dxXz7O7l3B+Hl/c99wDVVPP/JWG98g4e4wp2MI8PcW5A4SWY1YN+kwbxFio+egwcZ5lkmRME8SwuuEb9GPX5N4989R2ZeOg8uHAs8x1B5GyqWDkloBx4LAPAUTy7TknxQaAg930pIhUPPSR7wo0/8AaFsofBOOBeKXbo5UCtl9mhpYgeZ9krZPUuT2aXWe2tusoj4CuezgxB3HSjp2pMKYT+yYzBpFvzdXYzHfI6g26iy40WdfaH4kZvb6EUOkVbwGe3Wt8G34TU+jVB3HI8TmWl5VTzfWWL9lbcj9Zcwlw2mwF4k20modHvejz1qmmqJJYCr5aQAkVNu83jNfnWqOdo/imI4SwbtOwjf1G4Sw7b9ReGZ5vtWg7QeRE4rdbrz4R/43XaW0c6Ov0cfM/zs0gQY1HhRjl86LNi7vlygPpo9FPwU2WZBYJ4Em1SCnlDq/QZby2KfAl8YSdziiBa7UdmCLhhuYthALhuT+eS/lVLuh9JYsCebm72bds1jSaDbOhfNXR9rac+2l9TFOoi0DvqbpR7bK39/TqPhki9ug/nq0M1LvkFeDskGbUkJ+4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDItMDRUMDQ6NDc6MDkrMDA6MDCFbaK6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAyLTA0VDA0OjQ3OjA5KzAwOjAw9DAaBgAAAABJRU5ErkJggg==" alt="p_white" draggable="true"></img>
    </div> `;

document.getElementById('board').innerHTML = boardHTML;


/* BOARD SETTINGS */

const STORAGE = document.querySelector(".storage");
GAMEMODE = true;
ROTATED = false;
IDCOUNT = 0;


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

function click(ev) { // move piese by click 
  // TODO
  console.log(ev); 
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
  if (GAMEMODE) sendControlInstruction(squareId, target.id)

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
  let positions = posStr.replace(/(\r\n|\n|\r|\s)/gm, "");
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



/* INITIALIZATION */

function init() {
  initMovementListners();
  //build();
}


/* FUNCTION CALLED ON INPUT  */
function sendControlInstruction(from, to) {
  msg = JSON.stringify({ // JSON with the move data providet by the user input
    type: "move",
    data: from + '->' + to,
    from: from,
    to: to
  })

  /* PLACEHOLDER for TRIGGER FUNCTION */
  console.log(msg); // prints move data to console
}

