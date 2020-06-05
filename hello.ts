function sayHello(person: string){
  return 'hello, '+ person
}

let user = 'grootfish';

console.log(sayHello(user));

// 布尔类型 boolean
let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);


// 数值类型 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串类型 string
let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


// 空值 void
function alertName():void{
  alert('My name is grootfish~')
}
let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

/**
 * 与 void 的区别是，undefined 和 null 是所有类型的子类型。
 * 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量,而 void 类型的变量不能赋值给 number 类型的变量：
 * 这样不会报错
 */
let num: number = undefined;

// 任意值 any
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');


