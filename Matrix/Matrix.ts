class Matrix {
    public rows:number;
    public cols:number;
    public data:number[][] = [];
    constructor(rows:number, cols:number) {
        this.rows = rows;
        this.cols = cols;
        this.setData();
    }
    private setData():void {
        for(let i=0; i<this.rows; i++) {
            this.data[i] = [];
            for(let j=0; j<this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }
    public randomise():void {
        for(let i=0; i<this.rows; i++) {
            for(let j=0; j<this.cols; j++) {
                this.data[i][j] = Math.random()*2-1;
            }
        }
    }
    public static Identity(num:number):Matrix {
        let mat = new Matrix(num, num);
        for(let i=0; i<mat.rows; i++) {
                mat.data[i][i] = 1;
        }
        return mat;
    }
    public static add(mat1:Matrix, mat2:Matrix):Matrix {
        try {
            if(mat1.rows!==mat2.rows && mat1.cols!==mat2.cols) {
                throw 'For matrix addition rows and columns of both matries should be equal'
            }
            let mat = new Matrix(mat1.rows, mat1.cols);
            for(let i=0; i<mat.rows; i++) {
                for(let j=0; j<mat.cols; j++) {
                    mat.data[i][j] = mat1.data[i][j] + mat2.data[i][j];
                }
            }
            return mat;
        } catch (error) {
            
        }
    }
    public static subtract(mat1:Matrix, mat2:Matrix):Matrix {
        try {
            if(mat1.rows!==mat2.rows && mat1.cols!==mat2.cols) {
                throw 'For matrix subtraction rows and columns of both matries should be equal'
            }
            let mat = new Matrix(mat1.rows, mat1.cols);
            for(let i=0; i<mat.rows; i++) {
                for(let j=0; j<mat.cols; j++) {
                    mat.data[i][j] = mat1.data[i][j] - mat2.data[i][j];
                }
            }
            return mat;
        } catch (error) {
            
        }
    }
    public static multiply(a:Matrix, b:Matrix):Matrix{
        try {
            if(a.cols!==b.rows) {
                throw `number of columns:${a.cols} should be equal to number of rows:${b.rows}`;  
            }
            let mat = new Matrix(a.rows, b.cols);
            for(let i=0; i<mat.rows; i++) {
                for(let j=0; j<mat.cols; j++) {
                    let sum = 0;
                    for(let k=0; k<a.cols; k++) {
                        sum += a.data[i][k]*b.data[k][j];
                    }
                    mat.data[i][j] = sum;
                }
            }
            return mat;
        } catch (error) {
            throw new Error(error);
        }
    }
    public static transpose(matrix:Matrix):Matrix {
        try {
            let mat = new Matrix(matrix.cols, matrix.rows);
            for(let i=0; i<matrix.rows; i++) {
                for(let j=0; j<matrix.cols; j++) {
                    mat.data[j][i] = matrix.data[i][j];
                }
            } 
            return mat;
        } catch(error) {
            throw new Error(error);
        }
    }
    public static fromArray(array:number[]):Matrix {
        let m = new Matrix(array.length, 1);
        for(let i=0; i<m.rows; i++) {
            m.data[i][0] = array[i];
        }
        return m;
    }
    public static map(matrix:Matrix, fn:Function):Matrix{
        let result = new Matrix(matrix.rows, matrix.cols);
        for(let i=0; i<matrix.rows; i++) {
            for(let j=0; j<matrix.cols; j++){
                let val = matrix.data[i][j];
                result.data[i][j] = fn(val);
            }
        }
        return result;
    }
    public toArray():number[] {
        let array = [];
        for(let i=0; i<this.rows; i++) {
            for(let j=0; j<this.cols; j++) {
                array.push(this.data[i][j])
            }
        }
        return array;
    }
    public multiply(a:number|Matrix):void {
        try {
            if(typeof a === "number") {
                for(let i=0; i<this.rows; i++) {
                    for(let j=0; j<this.cols; j++) {
                        this.data[i][j] *= a;
                    }
                }
            } else if(a instanceof Matrix){
                if(a.rows!==this.rows && a.cols!==this.cols) {
                    throw `for Element wise multiply dimansion of both matrices should be equal`;
                }
                for(let i=0; i<this.rows; i++) {
                    for(let j=0; j<this.cols; j++) {
                        this.data[i][j] *= a.data[i][j];
                    }
                }
            } else {
                throw `"${a}" must be a number or Matrix`;
            }
        } catch (error) {  
            throw new Error(error);
        }
    }
    public add(mat:number|Matrix):void {
        try {
            if(typeof mat ==="number") {
                for(let i=0; i<this.rows; i++) {
                    for(let j=0; j<this.cols; j++) {
                        this.data[i][j] += mat;
                    }
                }
            } else {
                if(this.rows!==mat.rows && this.cols!==mat.cols) {
                    throw 'For matrix addition rows and columns of both matries should be equal'
                }
                for(let i=0; i<this.rows; i++) {
                    for(let j=0; j<this.cols; j++) {
                        this.data[i][j] += mat.data[i][j];
                    }
                }
            }
            
        } catch (error) {
            
        }
    }
    public subtract(mat:Matrix):void {
        try {
            if(this.rows!==mat.rows && this.cols!==mat.cols) {
                throw 'For matrix subtraction rows and columns of both matries should be equal'
            }
            for(let i=0; i<this.rows; i++) {
                for(let j=0; j<this.cols; j++) {
                    this.data[i][j] -= mat.data[i][j];
                }
            }
        } catch (error) {
            
        }
    }
    public inverse():Matrix {
        try {
            let mat = new Matrix(this.rows, this.cols);
            if(this.rows!==this.cols) {
                throw `inverse of non-square matrix in not possible`;
            }

            return mat;

        }catch {

        }

    }
    public putData(data:number[][]):void {
        try {
            if(data.length!==this.rows && data[0].length!==this.cols) {
                throw 'dimension of data and matrix are mismatched';
            }
            for(let i=0; i<this.rows; i++) {
                for(let j=0; j<this.cols; j++) {
                    this.data[i][j] = data[i][j];
                }
            }
            
        } catch (error) {
            throw new Error(error);
        }
    }
    public determinant():number {
        
        try {
            if(this.rows!==this.cols) {
                throw `determinant of non-square matrix in not possible`
            }
            if(this.rows==1){
                
                return this.data[0][0];

            }
            let det:number =0;
            let temp:Matrix;
            let sign = 1;
            for(let i=0; i<this.rows; i++) {
                if(this.data[0][i]===0) {
                    continue;
                }
                temp = this.getCoffactorMatrix(0, i, this.rows);
                det +=  sign*this.data[0][i]*temp.determinant();
                sign *= -1; 
                // console.log(det);
            }
            return det;

        } catch (error) {
            throw new Error(error);
        }
    }
    private getCoffactorMatrix(i:number, j:number, n:number):Matrix {
        let mat:Matrix = new Matrix(n-1, n-1);
        let indX=0, indY=0;
        for(let row=0; row<n; row++) {
            for(let col=0; col<n; col++) {
                if(row!==i && col!==j) {
                    mat.data[indX][indY++] = this.data[row][col];
                    if(indY===n-1) {
                        indY = 0;
                        indX++;
                    }
                }
            }
        }
        return mat;
    }
    public map(fn:Function){
        for(let i=0; i<this.rows; i++) {
            for(let j=0; j<this.cols; j++){
                let val = this.data[i][j];
                this.data[i][j] = fn(val);
            }
        }
    }
    
    public print() {
        console.table(this.data);
    }
}