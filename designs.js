//Cria o EventListener para o botão Enviar onde ele evita que o botão atualize o site e chama a função makeGrid();.
document.querySelector('#sizePicker').addEventListener('submit', function (handle) {
  handle.preventDefault();
  makeGrid();
}, false);

//Criação do grid
function makeGrid() {
  const tableGrid = document.querySelector('#pixelCanvas');
  const gridHeight = document.querySelector('#inputHeight').value;
  const gridWidth = document.querySelector('#inputWeight').value;

//Limpa o Grid sempre que o botão for clicado.
  tableGrid.innerHTML = '';

//Pega a altura e a largura escolhida pelo usuário e cria o grid.
  for (let row = 0; row < gridHeight; row++){
    let tr = tableGrid.insertRow(row);

    for (let col = 0; col < gridWidth; col++){
      tr.insertCell(col);
    }
  }

// Selecionar cada quadrado do grid para adicionar o listener de click, colocando a cor selecionada quando o quadrado for clicado.
  let selectAll = document.querySelectorAll('td');
  selectAll.forEach(function (colorTarget){
    colorTarget.addEventListener('click', function(){
      this.style.backgroundColor = document.querySelector("#colorPicker").value;;
    }, false);
  });
}
