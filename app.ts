console.log("this is a ts file")
console.log("this is a ts file2")

const addFun = (a:number,b:number) => a+b;
const addFunReturn = addFun(1,2);
console.log('addFunReturn',addFunReturn);

const subFun = (a:number, b:number) => a-b;
const subFunReturn = subFun(10,5);
console.log('subFunReturn',subFunReturn);

const multiFun = (a:number, b:number) => a*b;
const multiFunReturn = multiFun(10,5);
console.log('multiFunReturn',multiFunReturn);

const divFun = (a:number, b:number) => a/b;
const divFunReturn = divFun(10,5);
console.log('divFunReturn',divFunReturn);