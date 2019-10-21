let startPoint = -100;
let bez1 = 400;
let bez2 = 100;
let endPoint = 200;
let counter = 0;
let resolution = 200;
let points = [];

let startPoint2 = 220, bez1_2=180, bez2_2=220, endPoint2 = 200

function setup() {
  createCanvas(400, 400);


  for(let i = 0; i < resolution; i++){
  
    let time = i / resolution;
    let newPoint = bezierPoint(startPoint, bez1, bez2, endPoint, time);
    points.push(newPoint);
    
   
  }
 // console.log(points[points.length]);
  //console.log(points.length);
  
  for(let i = 0; i < resolution; i++){
  
    let time = i / resolution;
    let newPoint = bezierPoint(startPoint2, bez1_2, bez2_2, endPoint2, time);
    points.push(newPoint);
  }
  
  
  


}

function draw() {
   
  background(220);
  
  
  let x = points[counter%points.length];
  let y = 200;
  ellipse(x, y, 100);
  
  
  counter++
}