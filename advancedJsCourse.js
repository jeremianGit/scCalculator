const obj = {
	player:"Bob",
	exp:100,
	lev:false
}
//Destructuring the obj
const{player,exp,lev}=obj;
//With this console.log(player) will return Bob instead of console.log(obj.player)
let a=1;
let b=2;

function add(a,b){
	return a+b;
}

//no function keyword necessary
const add1=(a,b)=>a+b;

//Currying aallows you to break the parameters of a function step by step
const curryAdd2=(a)=>(b)=>a+b;

curryAdd2(2)(9);//returns 11

//Composing functions
const composedFunct=(f,g)=>(a)=>f(g(a));

const sum=(num)=>num+1;
//this function is like writing sum(sum(5));
//sum(5)=>6 therefore sum(6)=>7
composedFunct(sum,sum)(5);


///Arrays
const arr=[12,3,45,23];
let double=[];
//forEach lops through the array and the function pushs the multipled value of each elemet into the new array
arr.forEach((num)=>{
	double.push(num*2);
})

//with maps instead
const dArr=arr.map((num)=>{
	return num*2;
})
//Or
const drr=arr.map((num)=>num*2);

//filtering an Array
//this filters the array for numbers greater than 5
const filterArr=arr.filter((num)=>num>5);


//reduce method 
//the comma seperated number after the function is the initial value of the accumulator
const redArr=arr.reduce((accumulator,num)=>{
	return accumulator+num
},0);