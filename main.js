let canvas = document.getElementById("elo");
let counter = document.getElementById('counter');
const ctx = canvas.getContext("2d");

const boardx = 400;
const boardy = 400;

elo.height=boardy;
elo.widht=boardx

elemLeft = elo.offsetLeft,
elemTop = elo.offsetTop,
elements = [];

let posx = 0;
let posy = 0;
const size = 50;
const gap = 5;
let arr = [];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener for `click` events.
elo.addEventListener('click', function(event) {
  var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
      counter.textContent=x + ',' + y;
      elements.forEach(function(element) {
      if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
        ctx.fillStyle = 'red';
        ctx.fillRect(element.left, element.top, element.width, element.height);
          // alert('elo' + element.color)
        };
      }
);
}, false);

//2d array filled with objects
for(let i=0; i<8 ;i++) {
  arr [i]=[];
  for(let j=0; j<6 ; j++) {
    arr[i][j] = new Cell (posx, posy, size, size, getRandomColor());
    elements.push(arr[i][j])
    ctx.fillStyle = arr[i][j].color;
    ctx.fillRect(arr[i][j].left, arr[i][j].top, arr[i][j].width, arr[i][j].height);
    posx += size;
  }
  posx = 0;
  posy += size;
}

// Add element.
// elements.push({
//     colour: '#05EFFF',
//     width: 150,
//     height: 100,
//     top: 20,
//     left: 15
// });

// Render elements.
// elements.forEach(function(element) {

//     ctx.fillStyle = element.colour;
//     ctx.fillRect(element.left, element.top, element.width, element.height);
// });