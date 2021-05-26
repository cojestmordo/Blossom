let canvas = document.getElementById("elo");
let counter = document.getElementById('counter');
const ctx = canvas.getContext("2d");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const boardx = 600;
const boardy = 600;
elo.height = boardy;
elo.width = boardx
elemLeft = elo.offsetLeft;
elemTop = elo.offsetTop;
let posx = 0;
let posy = 0;
const size = 50;
const gap = 5;
let cells = [];


//2d array filled with objects
for (let i = 0; i < boardy / size; i++) {
  cells[i] = [];
  for (let j = 0; j < boardx / size; j++) {
    cells[i][j] = new Cell(posx, posy, size, size, 'gray');
    ctx.fillStyle = cells[i][j].color;
    ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
    posx += size;
  }
  posx = 0;
  posy += size;
}
// Add event listener for `click` events.
elo.addEventListener('click', createGrass, false);

function createGrass(event){
  const x = event.pageX - elemLeft
  const y = event.pageY - elemTop;
  counter.textContent = x + ',' + y;
  for (let k = 0; k < cells.length; k++) {
    let cube = cells[k];
    cube.forEach(checkElement)

    function checkElement (element) {
      if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
        if (element.grass === false) {
          element.color='green'
          ctx.fillStyle = element.color;
          ctx.fillRect(element.left, element.top, element.width, element.height);
          element.grass = true;
        } else if (element.grass === true) {
          element.color='gray'
          ctx.fillStyle = element.color;
          ctx.fillRect(element.left, element.top, element.width, element.height);
          element.grass = false;
        };
      };
    }
  }
}
setInterval(change,1000)
function change(){
// This loop is for outer array
for (let i = 0, l1 = cells.length; i < l1; i++) {
  // This loop is for inner-arrays
  for (let j = 0, l2 = cells[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      if (cells[i][j].grass===true && cells[i+1][j].grass===true && cells[i-1][j].grass===true && cells[i][j+1].grass===true && cells[i][j-1].grass===true){
        cells[i][j].color='blue';
        ctx.fillStyle = cells[i][j].color;
        ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
      }
  }
}
}
