let email='ag123@gmail.com'
let password='123456'

let userChecker =function (mail) {
  if ((mail.includes('@gmail.com')) && mail.length>6) {
    return true;
  }
  return false;
}

let passChecker=function (pass) {
if ((pass.includes('56')) && pass.length>8) {
  return true;
}
return false
}
console.log(userChecker(email));
console.log(passChecker(password));
