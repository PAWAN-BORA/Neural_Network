/// <reference path="NN.ts"/>
// let cvs = document.getElementById("canvas") as HTMLCanvasElement;
// let ctx = cvs.getContext("2d");

// let r:number, g:number, b:number;
// let brain:NeuralNetwork;
// brain = new NeuralNetwork(3, 3, 2);
// let which = "black";
// function pickColor():void{
//     r = randomInt(0, 255);
//     g = randomInt(0, 255);
//     b = randomInt(0, 255);
//     draw();
// }
// pickColor();

// function colorPredictor(r:number, g:number, b:number):string {
//     console.log(r+g+b);
//     let inputs = [r/255, g/255, b/255];
//     let outputs = brain.predict(inputs);
//     // console.log(outputs);
//     if(outputs[0]>outputs[1]) {
//         return "black"
//     } else {
//         return "white"
//     }
   
// }
// function traincolor(r:number, g:number, b:number) {
//      if(r+g+b>300) {
//         return [1, 0];
//     } else {
//         return [0, 1];
//     }
// }
// for(let i=0; i<10000; i++) {
//     r = randomInt(0, 255);
//     g = randomInt(0, 255);
//     b = randomInt(0, 255);
//     let inputs = [r/255, g/255, b/255];
//     let targets = traincolor(r, g, b);
//     brain.train(inputs, targets);
// }
// function draw():void {
//     ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
//     ctx.fillRect(0, 0, cvs.width, cvs.height);
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.font = 'bold 60px arial';
//     ctx.fillText("black", 150, 150); 
//     ctx.fillStyle = "white";
//     ctx.fillText("white", 350, 150); 

//     which = colorPredictor(r, g, b);
//     ctx.save();

//     if(which==="black") {
//         ctx.fillStyle = "black";
//         ctx.beginPath();
//         ctx.arc(150, 350, 80, 0, 2*Math.PI);
//         ctx.closePath();
//     } else {
//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         ctx.arc(350, 350, 80, 0, 2*Math.PI);
//         ctx.closePath();
//     }
//     ctx.fill();
//     ctx.restore();
//     ctx.save();
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.moveTo(cvs.width/2, 0);
//     ctx.lineTo(cvs.width/2, cvs.height);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.restore();
// }

// function start():void {
//     // requestAnimationFrame(start);
//     ctx.clearRect(0, 0, cvs.width, cvs.height);
//     draw();
// }
// start();

// cvs.addEventListener("mousedown", mousedown);
// cvs.addEventListener("mousemove", mousemove);
// cvs.addEventListener("mosueup", mosueup);
// cvs.addEventListener("click", click);

// function mousedown(event:MouseEvent) {

// }
// function mousemove(event:MouseEvent){

// }
// function mosueup(event:MouseEvent) {

// }
// function click(event:MouseEvent) {
//     let targets:number[];
//     let bound = cvs.getBoundingClientRect();
//     let center = event.x-bound.x;
//     // if(center>cvs.width/2) {
//     //     targets = [0, 1];
//     //     console.log("right");
//     // } else {
//     //     targets = [1, 0];
//     //     console.log("left");
//     // }
//     // let inputs = [r/255, g/255, b/255];
//     // brain.train(inputs, targets);
//     pickColor();
// }
