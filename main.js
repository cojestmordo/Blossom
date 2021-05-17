let canvas = document.getElementById("elo");
const ctx = canvas.getContext("2d");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

let posx = 0;
let posy = 0;
const width = 60;
const height = 60;
const gap = 5;

let kwadrat = new Prostokat(posx, posy, width, height,);
ctx.fillRect(kwadrat.pozycjax, kwadrat.pozycjay, kwadrat.szerokosc, kwadrat.wysokosc);

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.fillStyle = kwadrat.kolor;
        ctx.fillRect(gap + kwadrat.pozycjax,gap + kwadrat.pozycjay, kwadrat.szerokosc, kwadrat.wysokosc);
        kwadrat.pozycjax += width + gap;
    }
    kwadrat.pozycjax = 0;
    kwadrat.pozycjay += height + gap;
}