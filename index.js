const a = +prompt('please give us the first number');
const b = +prompt('please give us the second number');
const c = prompt('please give us the action for calc');
let answer=null;
// this is my first way fo making a
const myCalc = {
    Calc(a,b,c){
        switch(c){
            case `+` :
                answer=a+b;
                alert(answer);
                console.log(answer);
                break;
            case `-` :
                 answer=a-b;
                 alert(answer);
                 console.log(answer);
                 break;
            case `/` :
                answer=a/b;
                alert(answer);
                console.log(answer);
                break;
            case `*` :
                answer=a*b;
                alert(answer);
                console.log(answer);
                break;
            default:
                console.log('Error');
        }
    }
};
myCalc.Calc(a,b,c)

// const mySecondCalc = {
//     sumFunction(a,b){
//         answer=a+b
//         alert(answer);
//         console.log(answer);
//     },
//     minesFunction(a,b){
//         answer=a-b
//         alert(answer);
//         console.log(answer);
//     },
//     multiFunction(a,b){
//         answer=a*b
//         alert(answer);
//         console.log(answer);
//     },
//     dividFunction(a,b){
//         answer=a/b
//         alert(answer);
//         console.log(answer);
//     },
// }

// switch(c){
//     case '+':
//         mySecondCalc.sumFunction(a,b);
//         break;
//     case '-':
//         mySecondCalc.minesFunction(a,b);
//         break;
//     case '*':
//         mySecondCalc.multiFunction(a,b);
//         break;
//     case '/':
//         mySecondCalc.dividFunction(a,b);
//         break;
//     default:
//         console.log('Error');
//         alert('Error');
    
// }

