let nn = new NeuralNetwork(2, 2, 1);
let input = [1, 0];
let output = nn.feedForword(input);
console.log(output);


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
let a;