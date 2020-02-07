class Matrix {
    constructor(rows, cols) {
        this.data = [];
        this.rows = rows;
        this.cols = cols;
        this.setData();
    }
    setData() {
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }
    randomise() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random() * 2 - 1;
            }
        }
    }
    static Identity(num) {
        let mat = new Matrix(num, num);
        for (let i = 0; i < mat.rows; i++) {
            mat.data[i][i] = 1;
        }
        return mat;
    }
    static add(mat1, mat2) {
        try {
            if (mat1.rows !== mat2.rows && mat1.cols !== mat2.cols) {
                throw 'For matrix addition rows and columns of both matries should be equal';
            }
            let mat = new Matrix(mat1.rows, mat1.cols);
            for (let i = 0; i < mat.rows; i++) {
                for (let j = 0; j < mat.cols; j++) {
                    mat.data[i][j] = mat1.data[i][j] + mat2.data[i][j];
                }
            }
            return mat;
        }
        catch (error) {
        }
    }
    static subtract(mat1, mat2) {
        try {
            if (mat1.rows !== mat2.rows && mat1.cols !== mat2.cols) {
                throw 'For matrix subtraction rows and columns of both matries should be equal';
            }
            let mat = new Matrix(mat1.rows, mat1.cols);
            for (let i = 0; i < mat.rows; i++) {
                for (let j = 0; j < mat.cols; j++) {
                    mat.data[i][j] = mat1.data[i][j] - mat2.data[i][j];
                }
            }
            return mat;
        }
        catch (error) {
        }
    }
    static multiply(a, b) {
        try {
            if (a.cols !== b.rows) {
                throw `number of columns:${a.cols} should be equal to number of rows:${b.rows}`;
            }
            let mat = new Matrix(a.rows, b.cols);
            for (let i = 0; i < mat.rows; i++) {
                for (let j = 0; j < mat.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        sum += a.data[i][k] * b.data[k][j];
                    }
                    mat.data[i][j] = sum;
                }
            }
            return mat;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static transpose(matrix) {
        try {
            let mat = new Matrix(matrix.cols, matrix.rows);
            for (let i = 0; i < matrix.rows; i++) {
                for (let j = 0; j < matrix.cols; j++) {
                    mat.data[j][i] = matrix.data[i][j];
                }
            }
            return mat;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    static fromArray(array) {
        let m = new Matrix(array.length, 1);
        for (let i = 0; i < m.rows; i++) {
            m.data[i][0] = array[i];
        }
        return m;
    }
    static map(matrix, fn) {
        let result = new Matrix(matrix.rows, matrix.cols);
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                let val = matrix.data[i][j];
                result.data[i][j] = fn(val);
            }
        }
        return result;
    }
    toArray() {
        let array = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                array.push(this.data[i][j]);
            }
        }
        return array;
    }
    multiply(a) {
        try {
            if (typeof a === "number") {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] *= a;
                    }
                }
            }
            else if (a instanceof Matrix) {
                if (a.rows !== this.rows && a.cols !== this.cols) {
                    throw `for Element wise multiply dimansion of both matrices should be equal`;
                }
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] *= a.data[i][j];
                    }
                }
            }
            else {
                throw `"${a}" must be a number or Matrix`;
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    add(mat) {
        try {
            if (typeof mat === "number") {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] += mat;
                    }
                }
            }
            else {
                if (this.rows !== mat.rows && this.cols !== mat.cols) {
                    throw 'For matrix addition rows and columns of both matries should be equal';
                }
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] += mat.data[i][j];
                    }
                }
            }
        }
        catch (error) {
        }
    }
    subtract(mat) {
        try {
            if (this.rows !== mat.rows && this.cols !== mat.cols) {
                throw 'For matrix subtraction rows and columns of both matries should be equal';
            }
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] -= mat.data[i][j];
                }
            }
        }
        catch (error) {
        }
    }
    inverse() {
        try {
            let mat = new Matrix(this.rows, this.cols);
            if (this.rows !== this.cols) {
                throw `inverse of non-square matrix in not possible`;
            }
            return mat;
        }
        catch (_a) {
        }
    }
    putData(data) {
        try {
            if (data.length !== this.rows && data[0].length !== this.cols) {
                throw 'dimension of data and matrix are mismatched';
            }
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] = data[i][j];
                }
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    determinant() {
        try {
            if (this.rows !== this.cols) {
                throw `determinant of non-square matrix in not possible`;
            }
            if (this.rows == 1) {
                return this.data[0][0];
            }
            let det = 0;
            let temp;
            let sign = 1;
            for (let i = 0; i < this.rows; i++) {
                if (this.data[0][i] === 0) {
                    continue;
                }
                temp = this.getCoffactorMatrix(0, i, this.rows);
                det += sign * this.data[0][i] * temp.determinant();
                sign *= -1;
            }
            return det;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getCoffactorMatrix(i, j, n) {
        let mat = new Matrix(n - 1, n - 1);
        let indX = 0, indY = 0;
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (row !== i && col !== j) {
                    mat.data[indX][indY++] = this.data[row][col];
                    if (indY === n - 1) {
                        indY = 0;
                        indX++;
                    }
                }
            }
        }
        return mat;
    }
    map(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = fn(val);
            }
        }
    }
    print() {
        console.table(this.data);
    }
}
class NeuralNetwork {
    constructor(input, hidden, output) {
        this.learning_rate = 0.1;
        this.input_nodes = input;
        this.hidden_nodes = hidden;
        this.output_nodes = output;
        this.weight_ih = new Matrix(hidden, input);
        this.weight_ho = new Matrix(output, hidden);
        this.weight_ih.randomise();
        this.weight_ho.randomise();
        this.bias_h = new Matrix(hidden, 1);
        this.bias_o = new Matrix(output, 1);
        this.bias_h.randomise();
        this.bias_o.randomise();
    }
    setLearningRete(val) {
        this.learning_rate = val;
    }
    setWeights(weight_ih, weight_ho) {
        this.weight_ih = weight_ih;
        this.weight_ho = weight_ho;
    }
    setBiases(bias_h, bias_o) {
        this.bias_h = bias_h;
        this.bias_o = bias_o;
    }
    predict(input_array) {
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid);
        let output = Matrix.multiply(this.weight_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);
        return output.toArray();
    }
    train(input_array, target_array) {
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid);
        let outputs = Matrix.multiply(this.weight_ho, hidden);
        outputs.add(this.bias_o);
        outputs.map(sigmoid);
        let targets = Matrix.fromArray(target_array);
        let output_errors = Matrix.subtract(targets, outputs);
        let gradient = Matrix.map(outputs, dSigmoid);
        gradient.multiply(output_errors);
        gradient.multiply(this.learning_rate);
        let hidden_T = Matrix.transpose(hidden);
        let weight_ho_deltas = Matrix.multiply(gradient, hidden_T);
        this.weight_ho.add(weight_ho_deltas);
        this.bias_o.add(gradient);
        let weight_ho_t = Matrix.transpose(this.weight_ho);
        let hidden_errors = Matrix.multiply(weight_ho_t, output_errors);
        let hiddent_gradient = Matrix.map(hidden, dSigmoid);
        hiddent_gradient.multiply(hidden_errors);
        hiddent_gradient.multiply(this.learning_rate);
        let input_T = Matrix.transpose(inputs);
        let weight_ih_deltas = Matrix.multiply(hiddent_gradient, input_T);
        this.weight_ih.add(weight_ih_deltas);
        this.bias_h.add(hiddent_gradient);
    }
}
let weight1Data = [
    [
        -19.804729348708893,
        16.728854516486166
    ],
    [
        -14.528434162579579,
        17.612581950463962
    ],
    [
        15.45588902349543,
        -18.529303226201325
    ],
    [
        -13.487953326239591,
        -13.837188295278144
    ]
];
let weight2Data = [
    [
        14.9463291508372,
        -6.172972585929893,
        9.123670856182239,
        -2.7643453323754352
    ]
];
let bias1Data = [
    [
        -7.263731574564285
    ],
    [
        6.334549805778172
    ],
    [
        -6.801741821783551
    ],
    [
        5.198344325720556
    ]
];
let bias2Data = [
    [
        -1.1996230790421196
    ]
];
let training_data = [
    {
        inputs: [0, 1],
        targets: [1],
    },
    {
        inputs: [1, 0],
        targets: [1],
    },
    {
        inputs: [1, 1],
        targets: [0],
    },
    {
        inputs: [0, 0],
        targets: [0],
    },
];
let nn = new NeuralNetwork(2, 4, 1);
let inputs = [1, 0];
let targets = [1, 0];
let weigMat = new Matrix(weight1Data.length, weight1Data[0].length);
weigMat.putData(weight1Data);
let weig2Mat = new Matrix(weight2Data.length, weight2Data[0].length);
weig2Mat.putData(weight2Data);
let bias1Mat = new Matrix(bias1Data.length, bias1Data[0].length);
bias1Mat.putData(bias1Data);
let bias2Mat = new Matrix(bias2Data.length, bias2Data[0].length);
bias2Mat.putData(bias2Data);
nn.setWeights(weigMat, weig2Mat);
nn.setBiases(bias1Mat, bias2Mat);
for (let i = 0; i < 1000000000; i++) {
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
function randomInt(a, b) {
    if (a > b) {
        throw Error(`${a} should be less than ${b}`);
    }
    else {
        let totalNumber = b - a + 1;
        let x = Math.floor(Math.random() * totalNumber + a);
        return x;
    }
}
function randomIntArray(a, b) {
    if (a > b) {
        throw Error(`${a} should be less than ${b}`);
    }
    else {
        let array = [];
        let totalNumber = b - a + 1;
        for (let i = 0; i < totalNumber; i++) {
            let randomNum = randomInt(a, b);
            for (let j = 0; j < array.length; j++) {
                if (randomNum == array[j]) {
                    randomNum = randomInt(a, b);
                    j = -1;
                }
            }
            array.push(randomNum);
        }
        return array;
    }
}
function ranIntArrayInRange(num, range) {
    if (num > (range[1] - range[0])) {
        throw Error(`${num} should be less than the range of numbers`);
    }
    else {
        let array = [];
        for (let i = 0; i < num; i++) {
            let randomNum = randomInt(range[0], range[1]);
            for (let j = 0; j < array.length; j++) {
                if (randomNum == array[j]) {
                    randomNum = randomInt(range[0], range[1]);
                    j = -1;
                }
            }
            array.push(randomNum);
        }
        return array;
    }
}
function TwoDArray(row, column) {
    this.row = row;
    this.coloumn = column;
    let array = new Array(row);
    for (let j = 0; j < row; j++) {
        array[j] = new Array(column);
    }
    return array;
}
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
function dSigmoid(y) {
    return y * (1 - y);
}
//# sourceMappingURL=NN.js.map