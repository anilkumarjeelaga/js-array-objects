const main = document.createElement("div");
document.body.prepend(main);

const arr = ["Brett Thompson","Iva Pittman"];
// arr.length  = 20;

const arr1 = new Array("Manuel Wells","Josephine Murray");
// arr1.length = 40;
console.log(arr);
console.log(arr[0])
console.log(arr.length);
console.log(arr[arr.length - 1])
console.log(arr1);
console.log(arr1[0])
console.log(arr1[arr1.length - 1])
console.log(arr1.length);''
const arr2 = [10,true,[1,2,3],{firstName:"Lester Lee"},null,undefined,,'last'];
console.log(arr2)

const arr3  = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr3[2]);
for(let i = 0; i<arr3.length; i++){
    // console.log(arr3[i])
    for(let x = 0; x<arr3[i].length; x++){
        console.log(arr3[i][x])
    }
}

const arr4 = [[10,20,30],[40,50,60],[70,80,90]];
for(let i = 0; i< arr4.length; i++){
// console.log(arr4[i])
for(let y = 0; y<arr4[i].length; y++){
    console.log(arr4[i][y])
        const ele = document.createElement('div');
        ele.textContent = arr4[i][y]
        ele.classList.add('box')
         main.append(ele)
}
}