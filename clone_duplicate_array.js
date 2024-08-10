const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9,10];
const arr2 = arr.concat(arr1);
const arr3 = arr2.concat([11,12,13,14,15]);
const arr4 = arr2.concat([arr,arr,[10,10]])
const arr5  = arr.concat();
const arr6 =arr.concat('1','2');
const arr7 = arr.concat(['1','2']);
const arr8 = arr.concat('5,6')
const str = '5,6';
const arr9 = str.split(',');
const arr10 = arr.concat(str.split(','))

console.log(arr2,'concat');
console.log(arr,'1');
arr.length = 10;
console.log(arr,'2')
arr.length = 1;
console.log(arr,'3')
arr.length= 0
console.log(arr,'4')
// console.log(arr.length);
console.clear()
console.log(arr3,'concat-1')
console.log(arr4, 'concat-2')
console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);
console.log(arr9);
console.log(arr10,'split')