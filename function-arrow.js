
console.log('ES6 允许使用“箭头”（=>）定义函数。')
console.log('要点：')
console.log('   - 箭头函数对于this指针的规定')
console.log('   - 匿名函数尽量使用箭头函数性质定义')
console.log('\n')

var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

console.log('如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。')
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
console.log('如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。')
var sum = (num1, num2) => { return num1 + num2; }
console.log('\n')

console.log('由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。')
// 报错
// let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
console.log('\n')


console.log('箭头函数可以与变量解构结合使用。')
const full = ({ first, last }) => first + ' ' + last;
// 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }
const a = {first: 'Jaime', last: 'Cheng'}
console.log(full(a))
console.log('\n')


console.log('rest 参数与箭头函数结合的例子')
const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5)) // [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5))// [1,[2,3,4,5]]
console.log('\n')

console.log('箭头函数有几个使用注意点。')
console.log('（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。this对象的指向是可变的，但是在箭头函数中，它是固定的。')
console.log('（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。')
console.log('（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。')
console.log('（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。')
console.log('\n')

function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42

console.log('箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。')

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

console.log('箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。')
console.log('this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。')
console.log('除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。')
console.log('由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。')
console.log('\n')

console.log('箭头函数不适用场合：')
console.log('1. 是定义函数的方法，且该方法内部包括this。')
console.log('\n')
console.log('const cat = {')
console.log('  lives: 9,')
console.log('  jumps: () => {')
console.log('    this.lives--;')
console.log(' }')
console.log('}')
console.log('上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。')
console.log('\n')

console.log('2. 需要动态this的时候，也不应使用箭头函数。')
console.log('\n')
console.log('var button = document.getElementById("press");')
console.log('button.addEventListener("click", () => {')
console.log(' this.classList.toggle("on");')
console.log('});')
console.log('上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。')
