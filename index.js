const a = +prompt('please give us the first number');
const b = +prompt('please give us the second number');
const c = prompt('please give us the action for calc');
let answer=null;

const myCalc = {
    Calc(a,b,c){
        switch(c){
            case `+` :
                answer=a+b;
                alert(answer);
                break;
            case `-` :
                 answer=a-b;
                 console.log(answer);
                 break;
            case `/` :
                answer=a/b;
                console.log(answer);
                break;
            case `*` :
                answer=a*b;
                console.log(answer);
                break;
            default:
                console.log('Error');
        }
    }
};
myCalc.Calc(a,b,c)


