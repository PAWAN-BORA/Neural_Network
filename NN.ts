///<reference path="Matrix/Matrix.ts"/>

class NeuralNetwork {
    private input_nodes:number;
    private hidden_nodes:number;
    private output_nodes:number;
    private weight_ih:Matrix;
    private weight_ho:Matrix;
    private bias_h:Matrix;
    private bias_o:Matrix;
    private learning_rate:number = 0.1;
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
    public setLearningRete(val:number):void {
        this.learning_rate = val;
    }
    public setWeights(weight_ih:Matrix, weight_ho:Matrix):void {
        this.weight_ih = weight_ih;
        this.weight_ho = weight_ho;
    }
    public setBiases(bias_h:Matrix, bias_o:Matrix):void {
        this.bias_h = bias_h;
        this.bias_o = bias_o;
    }
    public predict(input_array:number[]):number[] {
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, inputs);
        hidden.add(this.bias_h);
        // activation function
        hidden.map(sigmoid)
        let output = Matrix.multiply(this.weight_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);
        return output.toArray();
    }
    public train(input_array:number[], target_array:number[]) {
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, inputs);
        hidden.add(this.bias_h);
        // activation function
        hidden.map(sigmoid)


        let outputs = Matrix.multiply(this.weight_ho, hidden);
        outputs.add(this.bias_o);
        outputs.map(sigmoid);

        let targets = Matrix.fromArray(target_array);
        // calculate the error;
        // ERROR = TARGET - OUTPUT;
        let output_errors = Matrix.subtract(targets, outputs);

        // calculate gradient
        let gradient = Matrix.map(outputs, dSigmoid);
        gradient.multiply(output_errors);
        gradient.multiply(this.learning_rate);
        
        // calculate deltas;
        let hidden_T = Matrix.transpose(hidden); // kind of confusing;
        let weight_ho_deltas = Matrix.multiply(gradient, hidden_T);
        this.weight_ho.add(weight_ho_deltas);
        this.bias_o.add(gradient);

        // calculation the hidden layer erros
        let weight_ho_t = Matrix.transpose(this.weight_ho);
        let hidden_errors = Matrix.multiply(weight_ho_t, output_errors);

        // calculate hidden greadient;
        let hiddent_gradient = Matrix.map(hidden, dSigmoid);
        hiddent_gradient.multiply(hidden_errors);
        hiddent_gradient.multiply(this.learning_rate);
       
        // calulate input to hidden deltas;
        let input_T = Matrix.transpose(inputs);
        let weight_ih_deltas = Matrix.multiply(hiddent_gradient, input_T);
        this.weight_ih.add(weight_ih_deltas);
        this.bias_h.add(hiddent_gradient);

        // output_errors.print();
        // hidden_errors.print();
    }
}

