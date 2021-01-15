const obj = [{'name1':'张三'},{'name2':'李四'}]
console.log(...obj)
const obj1 = {a:1}
const obj2 = {b:2}
const obj3 = {}
Object.assign(obj3,obj1,obj2)
console.log(obj3);
输出：{ a: 1, b: 2 }
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1,v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
Object(true)
Object(2)
Object('abc')
当assgin()参数中包括数字，布尔值时这些参数，是不会被合并到目标对象中，只有字符串可以合并进入，因为数字和布尔值的包装对象不会产生可枚举的属性
var arr = ["1", "4", "3", "4"];
arr.shift();
console.log(arr.shift())

var arr = ["10", "6789", "9", "4"];
arr.sort();
console.log(arr.sort(function(a,b){return b-a}))

var str = "abTcgThgT12T32"
var n=str.split("T");
console.log(n);