// function car1(firstName,lastName){
// this.firstName = firstName
// this.lastName = lastName
// }
// console.log(firstName + + lastName)
// const car2 = new car1()
function moboile(name, ram){
this.names = name
this.rams = ram
}
const brandphone = new moboile('Vivo','32gb');
brandphone.charger  =true
document.write(brandphone.names, brandphone.rams);
console.log(brandphone);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public') ))

// const a= 'hi'
// const b= 'hello'
// obj1 = {
//     a:'1',
//     b:'2'
// }
// document.write(obj.a);