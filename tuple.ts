// 简单的元组
let tom: [string, number] = ['Tom', 25];

// 元组中的越界的元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);
// Argument of type 'true' is not assignable to parameter of type 'string | number'.
