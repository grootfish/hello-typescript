// 函数声明
function sum(x, y) {
    return x + y;
}
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var xSum = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
// 可选参数后面不允许再出现必需参数了
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
