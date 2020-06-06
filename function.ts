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


