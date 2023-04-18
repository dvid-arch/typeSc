"use strict";
let char = 'luigi';
//tsc allows declaring of types which means modification of types are not allowed
console.log('yes');
const circ = (diameter) => {
    return diameter * Math.PI;
};
//we define param types
//type checks and assigning types learnt
console.log(circ(2));
/* arrays and objects */
let names = ['luigi', 'mario', 'yoshi'];
names.push('owee');
//arrays can only be pushed initial types
//above array can't accept types other than string
//except declared with mixed types
let numbers = [10, 12, 14];
numbers.push(1);
let arr = [];
arr.push('yes');
arr.push(1);
arr.push(true);
/* Objs */
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
//note items of objects have to be mutated with the same type
//modifying an obj
ninja = {
    name: 'owee',
    belt: 'white',
    age: 10
};
//typesc throws err when modified objects do not include same keys and key-value type
/* explicit types */
//declared items can be given types so that when they are to be modified they do not accept other types
let character;
let age;
let isLoggedIn;
//age = 'luigi';
age = 30;
// isLoggedIn = 25
//working with arrays
let ninjas = [];
//union type to allow for one two or more types
let mixed = [];
mixed.push('yes');
mixed.push(1);
// mixed.push(true);
console.log(mixed);
let uid;
uid = 123;
uid = 'tr';
// uid=false
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
//any type
//
console.log('test');
