//this is my main way of making calc
const myCalculator = {
    result:0,
    firstNumber: +prompt('please give us the first number'),
    secondNumber: +prompt('please give us the second number'),
    action: prompt('please give us the action for calc'),
    sum(){
        this.result=this.firstNumber+this.secondNumber;
        alert(` this is your result ${this.result} for first number ${this.firstNumber} + ${this.secondNumber}`);
        console.log(` this is your result ${this.result} for first number ${this.firstNumber} + ${this.secondNumber}`);
    },
    mines(){
        this.result=this.firstNumber-this.secondNumber;
        alert(` this is your result ${this.result} for first number ${this.firstNumber} - ${this.secondNumber}`);
        console.log(` this is your result ${this.result} for first number ${this.firstNumber} - ${this.secondNumber}`);
    },
    division(){
        this.result=this.firstNumber/this.secondNumber;
        alert(` this is your result ${this.result} for first number ${this.firstNumber} / ${this.secondNumber}`);
        console.log(` this is your result ${this.result} for first number ${this.firstNumber} / ${this.secondNumber}`);
    },
    multi(){
        this.result=this.firstNumber*this.secondNumber;
        alert(` this is your result ${this.result} for first number ${this.firstNumber} * ${this.secondNumber}`);
        console.log(` this is your result ${this.result} for first number ${this.firstNumber} * ${this.secondNumber}`);
    },
    showTheResult(){
        switch(this.action){
            case '+':
                this.sum()
                break;
            case '-':
                this.mines()
                break;
            case '*':
                this.multi()
                break;
            case '/':
                this.division()
                break;
            default:
                alert('Error');
                console.log('Error');
        }
    },
}

myCalculator.showTheResult()




// // this is my first way fo making a calculater


// const firstNumber = +prompt('please give us the first number');
// const secondNumber = +prompt('please give us the second number');
// const action = prompt('please give us the action for calc');
// let answer=null;

// const myCalc = {
//     Calc(firstNumber,secondNumber,action){
//         switch(action){
//             case `+` :
//                 answer=firstNumber+secondNumber;
//                 alert(answer);
//                 console.log(answer);
//                 break;
//             case `-` :
//                  answer=firstNumber-secondNumber;
//                  alert(answer);
//                  console.log(answer);
//                  break;
//             case `/` :
//                 answer=firstNumber/secondNumber;
//                 alert(answer);
//                 console.log(answer);
//                 break;
//             case `*` :
//                 answer=firstNumber*secondNumber;
//                 alert(answer);
//                 console.log(answer);
//                 break;
//             default:
//                 console.log('Error');
//         }
//     }
// };
// myCalc.Calc(firstNumber,secondNumber,action)








// this is my second way fo making a calculater


// const mySecondCalc = {
//     sumFunction(firstNumber,secondNumber){
//         answer=firstNumber+secondNumber
//         alert(answer);
//         console.log(answer);
//     },
//     minesFunction(firstNumber,secondNumber){
//         answer=firstNumber-secondNumber
//         alert(answer);
//         console.log(answer);
//     },
//     multiFunction(firstNumber,secondNumber){
//         answer=firstNumber*secondNumber
//         alert(answer);
//         console.log(answer);
//     },
//     dividFunction(firstNumber,secondNumber){
//         answer=firstNumber/secondNumber
//         alert(answer);
//         console.log(answer);
//     },
// }

// switch(action){
//     case '+':
//         mySecondCalc.sumFunction(firstNumber,secondNumber);
//         break;
//     case '-':
//         mySecondCalc.minesFunction(firstNumber,secondNumber);
//         break;
//     case '*':
//         mySecondCalc.multiFunction(firstNumber,secondNumber);
//         break;
//     case '/':
//         mySecondCalc.dividFunction(firstNumber,secondNumber);
//         break;
//     default:
//         console.log('Error');
//         alert('Error');
    
// }




//this is my third way



// const myCalculator = {
//     result:0,
//     firstNumber:2,
//     secondNumber:1,
//     sum(){
//         this.result=this.firstNumber+this.secondNumber;
//         console.log(this.result)
//     },
//     mines(){
//         this.result=this.firstNumber-this.secondNumber;
//         console.log(this.result)
//     },
//     division(){
//         this.result=this.firstNumber/this.secondNumber;
//         console.log(this.result)
//     },
//     multi(){
//         this.result=this.firstNumber*this.secondNumber;
//         console.log(this.result)
//     },
// }
// myCalculator.mines()


