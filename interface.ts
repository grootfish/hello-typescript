// 赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};

// 可选属性
interface Woman {
  name: string;
  age?: number;
}

let jerry: Woman = {
  name: 'Tom'
};

// 任意属性
interface Man {
  name: string;
  age?: number;
  [propName:string]: string | number;
}

let cat: Man = {
  name: 'Tom',
  age:123,
  gender: 'woman'
};

// 只读属性
interface Dog {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let dog: Dog = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

dog.id = 9527;
