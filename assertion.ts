// 需要在还不确定类型的时候就访问其中一个类型特有的属性或方法
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}

interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}
// 将一个父类断言为更加具体的子类
function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
      return true;
  }
  return false;
}
// 将任何一个类型断言为 any
(window as any).foo = 1;

// 将 any 断言为一个具体的类型
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();

// 类型断言的限制
// 若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

function testAnimal(animal: Animal) {
  return (animal as Cat);
}
function testCat(cat: Cat) {
  return (cat as Animal);
}

// 类型断言 vs 类型转换
function toBoolean(something: any): boolean {
  return Boolean(something);
}

toBoolean(1);

// 类型断言 vs 类型声明

// 类型断言 vs 泛型
function getCacheData<T>(key: string): T {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();
