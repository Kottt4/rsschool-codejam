function sumOfOther(a){
const sum = a.reduce((acc,item)=>acc+item);
let rez = [];
for (let i=0; i< a.length; i++){
rez.push(sum - a[i]);
};
return rez
}
