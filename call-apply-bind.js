
// call、apply、bind的作用是改变函数运行时this的指向，并且立即执行
// call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组

var a = 1
var obj1 = {
  a: 2,
  fn: function () {
    console.log(this.a)
  }
}
obj1.fn() // 2

function fn1 () {
  console.log(this) // window
}
fn1()

var b = 1
var obj2 = {
  b: 2,
  fn: function () {
    // 'use strict' // b为undefined
    console.log(this.b)
  }
}
var fn2 = obj2.fn
fn2()// 1 (node环境没有window对象 所以是undefined)

// 如果你当前执行上下文(context)就 null 或者 undefined，那么 window 对象就是默认的 context
// 严格模式下默认 context 是 undefined
// 因此上面的this绑定的就是window，它也被称为隐性绑定。
// fn2.call(obj2) 显示地绑定this为obj2


// 构造器调用模式
// new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上
function Person (name, age) {
  // 这里的this都指向实例
  this.name = name
  this.age = age
  this.sayAge = function () {
    console.log(this.age)
  }
}

var dot = new Person('Dot', 12)
dot.sayAge() // 2


// call
// call 方法第一个参数是要绑定给this的值，后面传入的是一个参数列表。当第一个参数为null、undefined的时候，默认指向window。
var obj = {
  message: 'My name is: '
}

function getName (firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName)
}

console.log(getName.call(obj, 'Dot', 'Dolby'))


// apply
// apply接受两个参数，第一个参数是要绑定给this的值，第二个参数是一个参数数组。当第一个参数为null、undefined的时候，默认指向window。
var obj1 = {
  message: 'My name is: '
}

function getName1 (firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName)
}

getName1.apply(obj1, ['Dot', 'Dolby'])// My name is: Dot Dolby

// apply()和call() 的真正强大的地方是能扩充作用域,可用来借用别的对象的方法
// eg.1
var Person1 = function () {
  this.name = 'Dot'
}
var Person2 = function () {
  this.getname = function () {
    console.log(this.name)
  }
  Person1.call(this)
}
var person = new Person2()
person.getname() // Dot

// eg.2
var color = 'red'
var o = {
  color: 'blue'
}
function sayColor () {
  console.log(this.color)
}
sayColor.call(this) // => red
// sayColor.call(window) // => red
sayColor.call(o) // => blue



// bind
// 第一个参数是this的指向，从第二个参数开始是接收的参数列表。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。
// bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数
const name = 'Cheng'
function hello (msg = ' nice to meet you') {
  console.log(this.name + msg)
}
const jaime = {
  name: 'Jaime'
}
const hi = {
  name: 'bibo'
}
hello.call(jaime) // Jamie nice to meet you
hello() // Cheng nice to meet you
const sayHi = hello.bind(hi)
sayHi()

// bind中的参数
function fn(a, b, c) {
  console.log(a, b, c)
}
var fn1 = fn.bind(null, 'Dot')

fn('A', 'B', 'C')  // A B C
fn1('A', 'B', 'C') // Dot A B
fn1('C', 'D')      // Dot C D
fn.call(null, 'Dot', 'A') // Dot A undefined
//fn1 方法的实参实则是在 bind 中参数的基础上再往后排。


// 应用场景

// 求数组中的最大和最小值
var arr = [1,2,3,89,46]
var max = Math.max.apply(null,arr)//89
var min = Math.min.apply(null,arr)//1
console.log(max)

// 将类数组转化为数组
const arrayLike = {'1':'gg','2':'love','4':'meimei',length:5}
var trueArr = Array.prototype.slice.call(arrayLike)
console.log(trueArr)

// 数组追加
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var total = [].push.apply(arr1, arr2);//6
console.log(arr1, arr2, total)

// 判断变量类型
function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('dot') // false
console.log(isArray([2])) //true

// 利用call和apply做继承
function Person(name,age){
  // 这里的this都指向实例
  this.name = name
  this.age = age
  this.sayAge = function(){
      console.log(this.age)
  }
}
function Female(){
  Person.apply(this, arguments)//将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female('Dot',2)
console.log(dot)


// call、apply和bind函数存在的区别:
// bind返回对应函数, 便于稍后调用； apply, call则是立即调用。
// 在 ES6 的箭头函数下, call 和 apply 将失效


// 双冒号运算符，函数绑定运算符是并排的两个冒号（::）
// 箭头函数并不适用于所有场合，所以提出了“函数绑定”（function bind）运算符，用来取代call、apply、bind调用。
// 双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

// 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);

// 如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。


