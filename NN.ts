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
    public feedForword(input_array:number[]):number[] {
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
    public train(input_array:number[], answer:number[]) {
        // let outputArray = this.feedForword(input);
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weight_ih, inputs);
        hidden.add(this.bias_h);
        hidden.map(sigmoid)
        // activation function

        let outputs = Matrix.multiply(this.weight_ho, hidden);
        outputs.add(this.bias_o);
        outputs.map(sigmoid);

        // ------------------------->//

        // return output.toArray();
    
        // convert array to matrix object.
        // let output = Matrix.fromArray(outputArray);
        let targets = Matrix.fromArray(answer);
        // calculate the error;
        // ERROR = TARGET - OUTPUT;

        let output_errors = Matrix.subtract(targets, outputs);

        // calculate gradient
        let gradient = Matrix.map(outputs, dSigmoid);
        gradient.multiply(output_errors);
        gradient.multiply(this.learning_rate);
        this.bias_o.add(gradient);
        
        // calculate deltas;
        let hidden_T = Matrix.transpose(hidden); // kind of confusing;
        let weight_ho_deltas = Matrix.multiply(gradient, hidden_T);
        this.weight_ho.add(weight_ho_deltas);

        // calculation the hidden layer erros
        let weight_ho_t = Matrix.transpose(this.weight_ho);
        let hidden_errors = Matrix.multiply(weight_ho_t, output_errors);

        // calculate hidden greadient;
        let hiddent_gradient = Matrix.map(hidden, dSigmoid);
        hiddent_gradient.multiply(hidden_errors);
        hiddent_gradient.multiply(this.learning_rate);
        this.bias_h.add(hiddent_gradient);
        // calulate input to hidden deltas;
        let input_T = Matrix.transpose(inputs);
        let weight_ih_deltas = Matrix.multiply(hiddent_gradient, input_T);
        this.weight_ih.add(weight_ih_deltas);
        // let gradient = outputs *(1-outputs); 

        // outputs.print();
        // targets.print();
        // output_errors.print();
        // hidden_errors.print();
    }
}
