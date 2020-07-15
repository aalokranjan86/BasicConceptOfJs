let hello = function (name) {
  console.log(`Hello ${name}`);

}
//hello('Aalok')

let sayHello = function (firstName,lastName) {
  console.log("Welcome to this site");
  console.log(`Gud Morning ${firstName} ${lastName}`);
}
//sayHello('Luulllliiii','Don')

let add = function(num1,num2){
  let adder=num1+num2
  return adder;
}
//let result=add(8,6)
//console.log(result);

let multiply = function (num1,num2) {
  return num1*num2
}
let res=multiply(8,5)
//console.log(res);


let guest=function (name='default',age=18) {
  return "Hello " + name + ' Your age is: ' +age
}
console.log(guest('Luulllliiii',25));
