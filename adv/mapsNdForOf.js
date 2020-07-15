var cap ={
  name:'Vik',
  age:20
}
var cap2 ={
  name:'Ak',
  age:20
}
var cap3 ={
  name:'Sou',
  age:19
}

let res = new Map()
//console.log(typeof res);
res.set('obj1',cap)
res.set('obj2',cap2)
res.set('obj3',cap3)
//console.log(res.get('obj2'));
//res.forEach((value,key) => console.log(key + ' = '+ value.name))

var arrOfArr = [['one',1],['two',2]]
var newArr = new Map(arrOfArr)
console.log(newArr);
