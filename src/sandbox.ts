let char = 'luigi';

//tsc allows declaring of types which means modification of types are not allowed

console.log('yes')


const circ = (diameter:number)=>{
    return diameter * Math.PI
}
//we define param types

//type checks and assigning types learnt


console.log(circ(2))

/* arrays and objects */

let names = ['luigi', 'mario', 'yoshi'];

names.push('owee')
//arrays can only be pushed initial types
//above array can't accept types other than string
//except declared with mixed types


let numbers = [10,12,14]

numbers.push(1)

let arr = [];

arr.push('yes');
arr.push(1);
arr.push(true)


/* Objs */

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40
//note items of objects have to be mutated with the same type

//modifying an obj

ninja ={
    name: 'owee',
    belt: 'white',
    age: 10
}
//typesc throws err when modified objects do not include same keys and key-value type

/* explicit types */
//declared items can be given types so that when they are to be modified they do not accept other types

let character: string;
let age: number;
let isLoggedIn:boolean;

//age = 'luigi';
age=30;

// isLoggedIn = 25

//working with arrays
let ninjas: string[]=[];


//union type to allow for one two or more types
let mixed: (string|number)[] = []

mixed.push('yes')
mixed.push(1);
// mixed.push(true);
console.log(mixed)

let uid: string|number;

uid=123;
uid='tr'
// uid=false


//objects
let ninjaOne:object;
ninjaOne = { name: 'yoshi', age:30}

let ninjaTwo:{
    name: string,
    age: number,
    student: boolean
}


//any type


//
console.log('test')


//type functions

let greet: Function;

// greet = 'hello'

greet = ()=>{
    console.log('hello, again');
}

const add = (a: number, b:number, c?:number|string)=>{
    console.log(a+b);
    console.log(c);
}
//use ?: for optional param
const minus = (a: number, b:number, c?:number|string):number=>{
    return a-b;
}
//):number to explicitly set return value as number
console.log(add(1,2))

/* using type declaration to set alias for string|number to avoid repeats */

const logDetails = (uid: string|number, item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number})=>{
    console.log(`${user.name} says hello`)
}

console.log('hello')

// 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