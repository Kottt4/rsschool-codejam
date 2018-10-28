function recursion (q){
function recursion1 (q){
var z = [q.value];
var a = q.left;
var b = q.right;
if (a != undefined){z.push(recursion1 (a))} else {z.push('l')};
if (b != undefined){z.push(recursion1 (b))} else {z.push('r')};
return z;
};
//
function sum(z){
var zString = z.toString().split(',');
var rezzz =[];
var ok = zString.length;
for (var xx = 0; xx<ok/4; xx++){
var rez = [];
for (let i = 0; i<zString.length-2; i++){
if (zString[i+1]==='l' && zString[i+2]==='r' 
&& zString[i] != 'l' && zString[i] != 'r') {
rez.push(+zString[i]); zString[i] ='a'
};
};
for (var i =0; i<zString.length; i++)
{if (zString[i]=== 'a'){
zString.splice(i,1)
};
};
rezzz.unshift(rez);
};
rezzz.splice(0,1);
return rezzz
};
//
var zh= recursion1 (q);
return sum(zh);
}

