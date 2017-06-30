const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3,2,1],[],[]];
    // this.run();
  }

  isValidMove(startIdx, endIdx) {
    let lastVal = startIdx.length-1;
    let lastVal2 = endIdx.length-1;
    let tow1 = startIdx[lastVal];
    let tow2 = endIdx[lastVal2];
    if (tow1 === -1){
      return false;
    }else if (tow2 === -1) {
      return true;
    }else if (tow2 > tow1) {
      return false;
    }
    return true;
  }

  run(){
    // console.log(this);
    // console.log(this.stacks);
    this.promptMove((startStack,endStack)=> {
      this.move(startStack, endStack);
      // console.log(this);
      if (this.isWon() === false){
        this.run();
      }
      else {
        console.log('Game over!');
      }
    });
    // console.log ( this.isWon)
    // reader.question("Would you like to play again?", function(answer) {
    //   if (answer === 'yes'){
    //     let newgame = new Game();
    //   }
    // });
    // console.log('Game over!');
  }

  move(startStack, endStack){
    // console.log(this);
    // console.log(startStack);
    // console.log(endStack);
    // console.log(this.isValidMove(startStack,endStack));
    if (this.isValidMove(startStack, endStack)) {
      console.log (this.stacks);
      let pop = this.stacks[startStack].pop();
      console.log(pop);
      this.stacks[endStack].push(pop);
      // this.promptMove(this.move.bind(this));
      // }
    }
  }

  promptMove(callback) {
    console.log(JSON.stringify(this.stacks));
    reader.question("Which stack would you like to move from?", function(startStack) {
      reader.question("Which stack would you like to move to?", function(endStack) {
        startStack = parseInt(startStack);
        endStack = parseInt(endStack);
        // console.log(this);
        callback(startStack,endStack);
        // this.move(startStack, endStack);
        // if (this.isValidMove(startStack, endStack)) {
        //   this.stacks[endStack].push(this.stacks[startStack].pop);
        //   if (this.isWon()) {
        //     break
        //   }
        // }
      });
    });

    // this.promptMove();
  }

  isWon() {
    if (this.stacks[2][-1] === 1) {
      if (this.stacks[2][0] === 3){
        console.log("You Win!");
        reader.close;
        return true;
      }
    }
    return false;
  }
}
module.exports = Game;
// var gar = new Game();
