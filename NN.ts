///<reference path="Matrix/Matrix.ts"/>

class NeuralNetwork {
    private input_nodes:number;
    private hidden_nodes:number;
    private output_nodes:number;
    private weight_ih:Matrix;
    private weight_ho:Matrix;
    private bias_h:Matrix;
    private bias_o:Matrix;
    constructor(input:number, hidden:number, output:number) {
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
    public feedForword(input_array:number[]) {
        let input = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, input);
        hidden.add(this.bias_h);
        hidden.map(sigmoid)
        // activation function

        let output = Matrix.multiply(this.weight_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);
        return output.toArray();
    }
}
