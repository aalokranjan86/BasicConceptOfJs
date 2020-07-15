// const sayHello = (name) => `Hello ${name} !`
// console.log(sayHello('Aalok'));


const arr = [{
  name:'Ak',
  age:18,
},{
  name:'Vik',
  age:20,
},{
  name:'Sou',
  age:18,
},{
  name:'VikAss',
  age:20,
}]

const res = arr.filter((arr1)=> arr1.age != 18)

console.log(res);
