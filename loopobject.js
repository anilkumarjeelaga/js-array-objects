
const main = document.createElement('div')
document.body.prepend(main)
const obj1  = {firstName:"Mike Adams",id:1,age:30,comany:"google"};
for(let i =0; i< 1; i++){
obj1[`val${i + 1}`] = i;
}
const arr1  =Object.entries(obj1);
console.log(arr1);

adder('<h1>Entries</h1><hr>')

for(const[key, value] of Object.entries(obj1)){
    // console.log(key,value);
    // const ele = document.createElement('div')
    // ele.textContent = `${key}, ${value}`
    // main.append(ele)
    const ele = adder(`${key} = ${value}`);
}
adder('<h1>Keys</h1><hr>')
// keys
const arr2 = Object.keys(obj1);
console.log(arr2); 

arr2.forEach(val => {
const ele = adder(`${val} = ${obj1[val]}`)
})
// values
adder('<h1>Values</h1><hr>')

const arr3 = Object.values(obj1);
console.log(arr3); 

arr3.forEach((val,index) => {
const ele = adder(`${index} = ${val}`)
})
function adder(html){
    const ele = document.createElement('div');
    ele.innerHTML = html
   return  main.append(ele)
}

const obj_111 = [1,2,3,4,5];
delete obj_111[0]
console.log('length is',obj_111.length);