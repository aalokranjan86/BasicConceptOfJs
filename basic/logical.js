let isVerified = true
let isLoggedIn = false
let hasPaymentToken = true
let hasGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
  console.log("Acces Successfully");
}else if (isVerified || hasGuest) {
  console.log("Acces to the Guest");
}else {
  console.log("Connect to the Admin");
}
