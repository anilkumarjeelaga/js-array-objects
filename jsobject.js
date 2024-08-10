const arr1 =[1,2,3]
console.log(typeof(arr1))
const obj1 = {}
obj1.first = "Clarence Owen"
obj1["last"]="Francis Marshall"
const obj2 = new Object()
obj2.first = "Jim Johnson"
obj2['last']="Shane Ryan"
console.log(obj1)
console.log(obj2);

// 
const obj3 = {
    firstName:"Jeremiah Ford",
    id:100,
    memberid:true,
    javascritCourse:['HTML','scss','Angular','Javascript']

}
console.log(obj3["firstName"])
console.log(obj3.javascritCourse[3]);

const obj4 = {
    id1:1,
    id2:2,
    id3:3
}
for(let i= 1; i<4; i++){
    // return i;
    console.log(obj4["id" + i])
}

const obj5 = {
    first:"james",
    middle:"Webb",
    last:"Ramsey",
    full: function(){
        return `${this.first}${this.last}`
    },
    fulldt: () => {return `${obj5.first}${obj5.middle}${obj5.last}`}
}
console.log(obj5)
console.log(obj5.full())
console.log(obj5.fulldt())


// 
const obj6 = {
    first:"Robertson"
}
const obj7 = {
    last:"Patton"
}
const obj8 = Object.assign(obj6, obj7);
console.log(obj8);
console.log(obj6);
console.log(obj7);

// object assign
const obj_11 = {
    firstName:'James',
    lastName:'find',
    age:32
}
const obj_12 = {
    lastName:'deta',
    company:"google"
}
const obj_13  = Object.assign(obj_11, obj_12, {domain:'developer'});
obj_13.id = 200
console.log('10',obj_11)
console.log('11',obj_12)
console.log('12',obj_13)
// const obj_14 = Object.assign({}, obj_13);
// console.log('222222222222222222',obj_14);
const obj_14 = Object.assign({}, obj_12);
obj_14.value = "Hello";
console.log(obj_14)
console.log(obj_13,'1');


const val1 = JSON.stringify(obj_13);
console.log('stringify', val1);

const val2 = JSON.parse(val1);
console.log('parse', val2);

const ob1 = {a:1};
const ob2 = {b:2};
const ob3 = {c:3};
const ob4 = {a:7};
const res = Object.assign(ob1, ob2,ob3,ob4);
console.log(ob1);
const ob5 = Object.assign({}, ob1,ob2,ob3,ob4);
console.log(ob5);

Object.freeze(ob5);
ob5.a = 777;

console.log(ob5.a);
console.log(Object.isFrozen(ob5.a));
console.log(Object.isFrozen(obj_13  ));
Object.seal(obj2);
const person = {
    firstName: 'James',
    lastName: 'Find',
    age: 32
};
Object.seal(person);
// console.log('issealed',Object.isSealed(obj2))
// console.log('issealed1',Object.isSealed(ob4))
// delete obj0.age =22;
// obj
console.log('s',Object.isSealed(person))
person.company = 'google';
console.log(person.company);
delete person.age;
console.log(person.age,'age')
person.age = 43;
console.log(person.age)
console.log(Object.isSealed(person));
