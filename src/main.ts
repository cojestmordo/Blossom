import { Cell } from "./classes/cell.js";
import { Player } from "./classes/player.js";

const elo:any = document.getElementById("app")!;
const counter = document.getElementById('counter')!;
const ctx:CanvasRenderingContext2D = elo.getContext("2d")!;


//define board size

const boardx:number = 800;
const boardy:number = 800;
elo.height = boardy;
elo.width = boardx
let elemLeft = elo.offsetLeft;
let elemTop = elo.offsetTop;
let posx = 0;
let posy = 0;

// other variables 

const size:number = 50;
let cells:any[] = [];
let playerPosX:number=300;
let playerPosY:number=300;

//2d array filled with objects
for (let i = 0; i < boardy / size; i++) {
  cells[i] = [];
  for (let j = 0; j < boardx / size; j++) {
    cells[i][j] = new Cell(posx, posy, size, size, 'gray', false, false, false);
    ctx.fillStyle = cells[i][j].color;
    ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
    posx += size;
  }
  posx = 0;
  posy += size;
}
let player = new Player(playerPosX,playerPosY,size,size,'blue');
  function drawPlayer(){
    ctx.fillStyle = player.color;
    ctx.fillRect(playerPosX, playerPosY, player.width, player.height);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'w') { 
      playerPosY -= size;
    } else if (event.key === 's') {
      playerPosY += size;}
      else if (event.key === 'a') { 
        playerPosX -= size;
      } else if (event.key === 'd') {
        playerPosX += size;
  }
function sawMoss(){
  for (let i = 0, l1 = cells.length; i < l1; i++) {
    // This loop is for inner-arrays
    for (let j = 0, l2 = cells[i].length; j < l2; j++) {
    if(cells[i][j].top===playerPosY && cells[i][j].left === playerPosX){
      cells[i][j].moss=true;
      cells[i][j].color='lightgreen'
    }
    }
  }
}
  sawMoss();
  grassGrowing();
  drawPlayer();
});

// Add event listener for `click` events.
elo.addEventListener('click', createGrass, false);

// mouse click creates grass here
function createGrass(event:any){
  const x = event.clientX - elemLeft
  const y = event.clientY - elemTop;
  counter.textContent = x + ',' + y;

  for (let k = 0; k < cells.length; k++) {
    let cube = cells[k];
    cube.forEach(checkElement)

    function checkElement (element:any) {
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
        }
      }
    }
  }
  grassGrowing();
  drawPlayer();
}
function grassGrowing(){

// This loop is for outer array
  for (let i = 0, l1 = cells.length; i < l1; i++) {
    // This loop is for inner-arrays
    for (let j = 0, l2 = cells[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      if (cells[i][j].moss===true &&
          cells[i+1][j].moss===true &&
          cells[i-1][j].moss===true && 
          cells[i][j+1].moss===true &&
          cells[i][j-1].moss===true){
            cells[i][j].color='green';
            cells[i][j].grass=true;
           
              if (cells[i][j].grass===true &&
                  cells[i+1][j].grass===true &&
                  cells[i-1][j].grass===true &&
                  cells[i][j+1].grass===true &&
                  cells[i][j-1].grass===true){
                    cells[i][j].color='darkgreen';
                    cells[i][j].tallGrass=true;
             
                      if (cells[i][j].tallGrass===true &&
                         cells[i+1][j].tallGrass===true &&
                          cells[i-1][j].tallGrass===true &&
                           cells[i][j+1].tallGrass===true &&
                            cells[i][j-1].tallGrass===true){
                        cells[i][j].color='#aa9955';
                        cells[i][j].tree=true;
                       
                          if (cells[i][j].tree===true &&
                             cells[i+1][j].tree===true &&
                              cells[i-1][j].tree===true &&
                               cells[i][j+1].tree===true &&
                                cells[i][j-1].tree===true){
                            cells[i][j].color='yellow';
                            cells[i][j].blossom=true;
                            
                          }
                      }
                  }
          } 
          autoColorChange();
    }
  }
}
function autoColorChange(){
  for (let i = 0, l1 = cells.length; i < l1; i++) {
    // This loop is for inner-arrays
    for (let j = 0, l2 = cells[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      switch (cells[i][j].color) {
        case 'gray':
          ctx.fillStyle = cells[i][j].color;
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
          break;
        case 'lightgreen':
          ctx.fillStyle = cells[i][j].color;
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
          break;
        case 'green':
          ctx.fillStyle = cells[i][j].color;
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
          break;
        case 'darkgreen':
          ctx.fillStyle = cells[i][j].color;
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
          break;        
        case '#aa9955':
          ctx.fillStyle = cells[i][j].color;
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
          break;          
        case 'yellow':
            ctx.fillStyle = cells[i][j].color;
            ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
            break;       

        default:
          console.log('something is not working with autoColorChange mate!')
          ctx.fillStyle = 'blue';
          ctx.fillRect(cells[i][j].left, cells[i][j].top, cells[i][j].width, cells[i][j].height);
      }
    }    
  }
}

drawPlayer();