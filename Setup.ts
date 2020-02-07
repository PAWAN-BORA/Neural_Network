///<reference path="test.ts"/>

let training_data = [
    {
        inputs:[0, 1],
        targets:[1],
    },
    {
        inputs:[1, 0],
        targets:[1],
    },
    {
        inputs:[1, 1],
        targets:[0],
    },
    {
        inputs:[0, 0],
        targets:[0],
    },
]

let nn = new NeuralNetwork(2, 4, 1);
let inputs = [1, 0];
let targets = [1, 0];

let weigMat = new Matrix(weight1Data.length, weight1Data[0].length)
weigMat.putData(weight1Data);
let weig2Mat = new Matrix(weight2Data.length, weight2Data[0].length)
weig2Mat.putData(weight2Data);
let bias1Mat = new Matrix(bias1Data.length, bias1Data[0].length);
bias1Mat.putData(bias1Data);
let bias2Mat = new Matrix(bias2Data.length, bias2Data[0].length);
bias2Mat.putData(bias2Data);
nn.setWeights(weigMat, weig2Mat);
nn.setBiases(bias1Mat, bias2Mat);

for(let i=0; i<1000000000; i++) {
    // let data = training_data[0];       
    let data = training_data[randomInt(0, 3)];       
    nn.train(data.inputs, data.targets);
}

console.log(nn.predict([0, 1]));
console.log(nn.predict([1, 0]));
console.log(nn.predict([1, 1]));
console.log(nn.predict([0, 0]));
console.log("weigh1", nn.weight_ih.data);
console.log("weigh2", nn.weight_ho.data);
console.log("bias1", nn.bias_h.data);
console.log("bias2", nn.bias_o.data);



// let cvs = document.getElementById("canvas") as HTMLCanvasElement;
// let ctx = cvs.getContext("2d");
// let resolution = 10;
// let rows = 500/resolution;
// let cols = 500/resolution;
// let num = 0;
// function draw():void {
//     for(let i=0; i<10; i++) {
//         let data = training_data[randomInt(0, 3)];       
//         nn.train(data.inputs, data.targets);
//     }
//     for(let i=0; i<cols; i++) {
//         for(let j=0; j<rows; j++) {
//             // ctx.fillStyle = `rgb(255, 0, 154)`;
//             let x1 = i/cols;
//             let x2 = j/rows;
//             inputs = [x1, x2];
//             let y= nn.predict(inputs);
//             let ranColor = y[0]*255;
//             ctx.fillStyle = `rgb(${ranColor}, ${ranColor}, ${ranColor})`;
//             ctx.fillRect(i*resolution, j*resolution, resolution, resolution);
//         }
//     }
//     num++;
// }
// function start():void {
//     requestAnimationFrame(start);
//     draw();
// }
// start();
// console.log(nn.weight_ih.print());
// console.log(nn.weight_ho.print());
// nn.train(inputs, targets);
// let output = nn.feedForword(inputs);
// console.log(output);


// let start = performance.now();
// let a = new Matrix(2, 2);
// // a.data[0][0] = 1;
// // a.data[0][1] = 4;
// // a.data[1][0] = 5;
// // a.data[1][1] = 7;
// a.randomise();
// let b = Matrix.Identity(2);
// // b.data[0][0] = 2;
// // b.data[0][1] = 1;
// // b.data[1][0] = 6;
// // b.data[1][1] = 4;
// // b.randomise();
// // console.table(a.data);
// // console.table(b.data);
// let c = Matrix.multiply(a, b);
// // console.table(c.data);

// let d = new Matrix(12, 12);
// d.randomise();
// console.table(d.data);
// let k = d.determinant();
// console.table(k);
// // let l = d.transpos();
// // console.table(l.data);
// console.log(performance.now()-start);
