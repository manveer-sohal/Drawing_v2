//import InputHandler from "/src/input";
//import Practice from "/src/practice";

let canvas = document.getElementById("gamescreen");
//gets "gamescreen" from index.html = canvas
let ctx = canvas.getContext("2d");
//ctx is the context that the object is 2d

//canvas.width  = window.innerWidth ;
//canvas.height = window.innerHeight ;

let test = false;
let drawX;
let drawY;
let predrawX = 0;
let predrawY = 0;
let colour = "black";
let r = "#FF0000";
let g = 100;
let b = 0;
let Brush_Size = 2;
let Colour_Size = 2;
let Eraser_Size = 2;

document.addEventListener("mousedown", mouseDown);
function mouseDown() {
  test = true;
  Color();
  drawX = event.clientX - canvas.getBoundingClientRect().left - 10;
  //console.log(drawY, drawX);

  drawY = event.clientY - canvas.getBoundingClientRect().top - 10;

  document.addEventListener("mousemove", mouseMove);
  function mouseMove() {
    if (test === true) {
      predrawX = drawX;
      predrawY = drawY;
      drawX = event.clientX - canvas.getBoundingClientRect().left - 10;
      drawY = event.clientY - canvas.getBoundingClientRect().top - 10;
      console.log(drawX, drawY);
      draw();
    }
  }
}

document.addEventListener("mouseup", mouseUp);
function mouseUp() {
  test = false;
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(predrawX, predrawY);
  ctx.lineTo(drawX, drawY);
  ctx.lineCap = "round";
  ctx.strokeStyle = colour;
  ctx.lineWidth = Brush_Size;
  ctx.stroke();
  ctx.closePath();
}

//let LastTime = 0;

//function gameloop(timestamp) {
//let deltaTime = timestamp - LastTime;
//LastTime = timestamp;
//requestAnimationFrame(gameloop);
//}
//gameloop();

function Color() {
  //sets colours to be every a value in css
  const colours = document.querySelectorAll("a");

  //loops through the colors and checks if it is being hoverd
  for (const colour_in_a of colours) {
    if (colour_in_a.matches(":hover")) {
      Brush_Size = Colour_Size;
      console.log(colour_in_a.id);
      colour = colour_in_a.id;
    }

    const sizes = document.querySelectorAll("a2");
    for (const size_in_a2 of sizes) {
      if (size_in_a2.matches(":hover")) {
        colour = "White";
        if (size_in_a2.id == "small") {
          Eraser_Size = 2;
        } else if (size_in_a2.id == "medium") {
          Eraser_Size = 40;
        } else if (size_in_a2.id == "large") {
          Eraser_Size = 100;
        }
        Brush_Size = Eraser_Size;
      }
    }
  }
}
