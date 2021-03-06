/*-----------> random integer genrator function <----------------*/
function randomInt(a:number, b:number):number {
    if (a > b) {
        throw Error(`${a} should be less than ${b}`);
    }
    else {
        let totalNumber = b - a + 1;
        let x = Math.floor(Math.random() * totalNumber + a);
        return x;
    }
}

/*-----------> random integer array genrator function <----------------*/

function randomIntArray(a:number, b:number):Array<number> {
  if (a > b) {
      throw Error(`${a} should be less than ${b}`);   
  } else {
    let array = [];
    let totalNumber = b-a+1;
    for(let i=0; i<totalNumber; i++) {
      let randomNum = randomInt(a, b);
      for(let j=0; j<array.length; j++) {
        if(randomNum==array[j]) {
          randomNum = randomInt(a, b);
          j=-1;
        }
      }
      array.push(randomNum);
    }
    return array;
  }
}

/*-----------> random integer array genrator function within certaing rang and with certain number<----------------*/
function ranIntArrayInRange(num:number,  range:Array<number>):Array<number> {
    if(num > (range[1]-range[0])) {
      throw Error(`${num} should be less than the range of numbers`);
    
    } else {
      let array = [];
      for(let i=0; i<num; i++){
        let randomNum = randomInt(range[0], range[1]);
        for(let j=0; j<array.length; j++){
          if(randomNum == array[j]) {
            randomNum = randomInt(range[0], range[1]);
            j=-1;
          }
        }
        array.push(randomNum);
      }
      return array;
    }
  }

/*------------------> Function for make a 2D array<------------------*/ 

function TwoDArray(row:number, column:number):Array<Array<any>> {
  this.row = row;
  this.coloumn = column;
  let array = new Array(row);
      for(let j=0; j<row; j++) {
        array[j] = new Array(column);  
    }
    return array;
}
/*------------------> Sigmoid Function <------------------*/ 

function sigmoid(x:number):number {
  return 1/(1+Math.exp(-x));
}

/*------------------> Derivative Sigmoid Function <------------------*/ 

function dSigmoid(y:number):number {
  // return sigmoid(x)*(1-sigmoid(x));
  return y*(1-y);
}