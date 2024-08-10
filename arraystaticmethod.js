const str = 'Harvey Gonzalez';
const arr = Array.from(str);
console.log(arr);

const arr1 = [1,2,3,4];
const arr2 = Array.from(arr1,(ele,index) => {

    console.log(ele)
    return ele * 2
})
console.log(arr2)

const arr3 = Array.from(arr1, ele => ele * 2)
console.log(arr3)
const arr_3 = Array.from(str)
console.log(arr_3,'1')

const arr4 = document.querySelectorAll('li');
const arr5 = Array.from(arr4, (ele => ele.textContent));
console.log(arr4);
console.log(arr5);
console.log(Array.isArray(arr1));
console.log(Array.isArray(str))
console.log(Array.isArray([]))

const arr6 = Array.of(5);
console.log(arr6);

const arr7 = Array.of(4,5,6,7);
console.log(arr7)
const str1 = '1,2,3,4,5,6,7,8,9,10,11'
const arr8 = Array.of(str1);
console.log(arr8)
const arr9 = str1.split(',');
console.log(arr9)

const arr10 = Array.from(str1, (val) => {
    if(val != ',') return val
});
console.log(arr10);

const arr11 = [...str1]
console.log(arr11)