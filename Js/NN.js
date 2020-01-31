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
                this.data[i][j] = randomInt(0, 10);
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
    multiply(a) {
        try {
            if (typeof a === "number") {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                        this.data[i][j] *= a;
                    }
                }
            }
            else {
                throw `"${a}" must be a number`;
            }
        }
        catch (error) {
            throw new Error(error);
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
    transpos() {
        try {
            let mat = new Matrix(this.cols, this.rows);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    mat.data[j][i] = this.data[i][j];
                }
            }
            return mat;
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
}
let start = performance.now();
let a = new Matrix(2, 2);
a.randomise();
let b = Matrix.Identity(2);
let c = Matrix.multiply(a, b);
let d = new Matrix(12, 12);
d.randomise();
console.table(d.data);
let k = d.determinant();
console.table(k);
console.log(performance.now() - start);
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
//# sourceMappingURL=NN.js.map