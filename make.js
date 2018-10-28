function make(...params) {
let a = params.reduce((a,b)=>sum(a, b));
let qew =[a];

function innerSum(...nextParam) {
let b = nextParam.reduce((a,b)=>sum(a, b));
if (typeof b === 'function'){
let qwerty = qew.toString().split(',');
let rezult = qwerty.reduce((a,b)=>sum(+a, +b));
return rezult;
} else {
qew.push(b);
return make(qew)};
};

return innerSum;
};

function sum(a, b) {
    return a+b;
};
