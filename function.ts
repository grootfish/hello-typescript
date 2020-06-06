// 函数声明
function sum(x:number,y:number):number{
  return x+y
}

// 函数表达式
let mySum = function(x:number,y:number):number{
  return x+y;
}

let xSum:(x:number,y:number) => number = function(x:number,y:number):number{
  return x+y;
}

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数
// 可选参数后面不允许再出现必需参数了
function buildName(firstName:string,lastName?:string){
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 参数默认值
function defaultName(firstName:string='TOM',lastName:string='cat'){

    return firstName + ' ' + lastName;
}
let cattom = defaultName('Tom', 'Cat');
let tomz = defaultName('Tom');

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 重载
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
