function sayHello(person) {
    return 'hello, ' + person;
}
var user = 'grootfish';
console.log(sayHello(user));
// 布尔类型 boolean
var isDone = false;
var createdByNewBoolean = new Boolean(1);
// 数值类型 number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串类型 string
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// 空值 void
function alertName() {
    alert('My name is grootfish~');
}
var unusable = undefined;
// Null 和 Undefined
var u = undefined;
var n = null;
/**
 * 与 void 的区别是，undefined 和 null 是所有类型的子类型。
 * 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量,而 void 类型的变量不能赋值给 number 类型的变量：
 * 这样不会报错
 */
var num = undefined;
// 任意值 any
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
