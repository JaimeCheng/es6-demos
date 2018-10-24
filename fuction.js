
console.log('1. 函数参数的默认值')
console.log('ES5写法:')
console.log('function log(x, y) {')
console.log('  y = y || "World"')
console.log('  console.log(x, y)')
console.log('}')
function log5(x, y) {
  // 为了避免下面第三种情况的解决办法
  // if (typeof y === 'undefined') {
  //   y = 'World'
  // }
  y = y || 'World'
  console.log(x, y)
}
log5('Hello') // Hello World
log5('Hello', 'China') // Hello China
log5('Hello', '') // Hello World
console.log('\n')

console.log('ES6写法:')
console.log('function log(x, y = "World") {')
console.log('  console.log(x, y)')
console.log('}')
function log6(x, y = 'World') {
  console.log(x, y);
}
log6('Hello') // Hello World
log6('Hello', 'China') // Hello China
log6('Hello', '') // Hello

function Point(x = 0, y = 0) {
  this.x = x
  this.y = y
}
const p = new Point();
console.log(p) // {x: 0. y: 0}
console.log('\n')

console.log('参数默认值与解构赋值结合使用')
console.log('function foo({x, y = 5}) {')
console.log('  console.log(x, y)')
console.log('}')
function foo({x, y = 5}) {
  console.log(x, y)
}
foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined

console.log('双重默认值')
console.log('function fetch(url, { body = "", method = "GET", headers = {} } = {}) {')
console.log('  console.log(method)')
console.log('}')
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method)
  console.log(body)
  console.log(headers)
}
fetch('http://example.com')

console.log('举个例子：')
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y]
}
// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y]
}
console.log(m1()) // [0, 0]
console.log(m2()) // [0, 0]
console.log(m1({x: 2, y: 3})) // [2, 3]
console.log(m2({x: 2, y: 3})) // [2, 3]
console.log(m1({})) // [0, 0]
console.log(m2({})) // [undefined, undefined]
console.log(m1({x: 2})) // [2, 0]
console.log(m2({x: 2})) // [2, undefined]
console.log(m1({z: 2})) // [0, 0]
console.log(m2({z: 2})) // [undefined, undefined]

// const {x = 0, y = 0} = {x: 2}
// console.log(x,y)

// const {x, y} = {x: 2}
// console.log(x,y)

const[x, y = 5, z] = [2,,3]
console.log(x,y,z)

function f(x, y = 5, z) {
  console.log([x, y, z]) 
}

f() // [undefined, 5, undefined]
f(1) // [1, 5, undefined]
// f(1, ,2) //报错是一位空位的格式只能在数组里
f(1, undefined, 2) // [1, 5, 2]
f(1, null, 2) // [1, null, 2]
console.log('\n')

console.log('指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。')
console.log('如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。')
console.log('length属性，不包括 rest 参数')

// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2
// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1
// (function(...args) {}).length // 0
const aa = function(...args) {}
console.log(aa.length)
console.log('\n')


console.log('一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。')
console.log('这种语法行为，在不设置参数默认值时，是不会出现的。')
console.log('\n')

console.log('2. rest参数 形式为...变量名,只能作为最后一个参数，length属性，不包括 rest 参数')
console.log('rest 参数代替arguments变量的例子')
// es6
const sortNumbers1 = (...numbers) => numbers.sort()
console.log(sortNumbers1(2,3,4))
// 传统
function sortNumbers2() {
  return Array.prototype.slice.call(arguments).sort();
}
console.log(sortNumbers2(2,3))
console.log('\n')


console.log('3. 严格模式')
console.log('从 ES5 开始，函数内部可以设定为严格模式')
function doSomething(a, b) {
  'use strict';
  // code
}
console.log('ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错')
console.log('两种方法可以规避这种限制。第一种是设定全局性的严格模式，这是合法的。')
console.log('"use strict"')
console.log('function doSomething(a, b = a) {')
console.log(' // code')
console.log('}')
console.log('第二种是把函数包在一个无参数的立即执行函数里面。')
console.log('const doSomething = (function () {')
console.log(' "use strict;"')
console.log(' return function(value = 42) {')
console.log('   return value;')
console.log(' };')
console.log('}());')