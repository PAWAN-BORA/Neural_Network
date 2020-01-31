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
                this.data[i][j] = randomInt(0, 10);
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
    public multiply(a:number):void {
        try {
            if(typeof a === "number") {
                for(let i=0; i<this.rows; i++) {
                    for(let j=0; j<this.cols; j++) {
                        this.data[i][j] *= a;
                    }
                }
            } else {
                throw `"${a}" must be a number`;
            }
        } catch (error) {  
            throw new Error(error);
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
    public transpos():Matrix {
        try {
            let mat = new Matrix(this.cols, this.rows);
            for(let i=0; i<this.rows; i++) {
                for(let j=0; j<this.cols; j++) {
                    mat.data[j][i] = this.data[i][j];
                }
            } 
            return mat;
        } catch(error) {
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
}