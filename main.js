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

const boardx = 1200;
const boardy = 1200;
elo.height = boardy;
elo.width = boardx
elemLeft = elo.offsetLeft;
elemTop = elo.offsetTop;
let posx = 0;
let posy = 0;
const size = 50;
const gap = 5;
let cells = [];
let animals =[];


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
        if (element.moss === false) {
          element.color='lightgreen'
          ctx.fillStyle = element.color;
          ctx.fillRect(element.left, element.top, element.width, element.height);
          element.moss = true;
        } else if (element.moss === true) {
          element.color='gray'
          ctx.fillStyle = element.color;
          ctx.fillRect(element.left, element.top, element.width, element.height);
          element.moss = false;
        };
      };
    }
  }
}
function change(){
// This loop is for outer array
for (let i = 0, l1 = cells.length; i < l1; i++) {
  // This loop is for inner-arrays
  for (let j = 0, l2 = cells[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      if (cells[i][j].moss===true && cells[i+1][j].moss===true && cells[i-1][j].moss===true && cells[i][j+1].moss===true && cells[i][j-1].moss===true){
        cells[i][j].color='green';
        cells[i][j].grass=true;
        ctx.fillStyle = cells[i][j].color;
        ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
      
      if (cells[i][j].grass===true && cells[i+1][j].grass===true && cells[i-1][j].grass===true && cells[i][j+1].grass===true && cells[i][j-1].grass===true){
        cells[i][j].color='darkgreen';
        cells[i][j].tallGrass=true;
        ctx.fillStyle = cells[i][j].color;
        ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
      
      if (cells[i][j].tallGrass===true && cells[i+1][j].tallGrass===true && cells[i-1][j].tallGrass===true && cells[i][j+1].tallGrass===true && cells[i][j-1].tallGrass===true){
        cells[i][j].color='#aa9955';
        cells[i][j].tree=true;
        ctx.fillStyle = cells[i][j].color;
        ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
      
      if (cells[i][j].tree===true && cells[i+1][j].tree===true && cells[i-1][j].tree===true && cells[i][j+1].tree===true && cells[i][j-1].tree===true){
        cells[i][j].color='yellow';
        cells[i][j].blossom=true;
        ctx.fillStyle = cells[i][j].color;
        ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);

        setTimeout(checkSpider,1000)

      }
    }
  }
 } 
}
}
}

function checkSpider(){
  // This loop is for outer array
  for (let i = 0, l1 = cells.length; i < l1; i++) {
    // This loop is for inner-arrays
    for (let j = 0, l2 = cells[i].length; j < l2; j++) {
      if(cells[i][j].blossom === true || cells[i][j].occupied === false){
        cells[i][j].occupied = true;
        animals.push(spider= new Spider(cells[i][j].left, cells[i][j].top,size,'black'))
       
      for (let k = 0, l1 = animals.length; k < l1; k++) {
        ctx.arc(animals[k].left + (size/2), animals[k].top + (size/2), animals[k].large/2, 0, 2 * Math.PI);  
        ctx.fillStyle = animals[k].color;
        ctx.fill();
      }
      }
    }
  }
}
setInterval(change,2000)
