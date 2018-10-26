
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
console.log('\n')


console.log('4. name属性，函数的name属性，返回该函数的函数名。')
function foo () {}
console.log(foo.name)
console.log('如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。')
var f = function () {}
console.log(f.name)
console.log('如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。')
const bar = function baz() {}
console.log(bar.name)

console.log('Function构造函数返回的函数实例，name属性的值为anonymous')
console.log((new Function).name) // anonymous

console.log('bind返回的函数，name属性值会加上bound前缀')
function bindf () {}
console.log(bindf.bind({}).name) // bound bindf
console.log((function(){}).bind({}).name) // bound
console.log('\n')


console.log('5. 箭头函数，见function-arrow.js')
console.log('\n')


console.log('6. 双冒号运算符，见 call-apply-bind.js')
console.log('\n')


console.log('7. 尾调用优化，指某个函数的最后一步是调用另一个函数，尾调用不一定出现在函数尾部，只要是最后一步操作即可')
function f(x) {
  if (x > 0) {
    return m(x)
  }
  return n(x);
}
function m(x) {}
function n(x) {}
console.log('尾调用优化，只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。')

console.log('只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”')
console.log('function addOne(a){')
console.log(' var one = 1;')
console.log(' function inner(b){')
console.log('   return b + one;')
console.log(' }')
console.log(' return inner(a)')
console.log('}')
console.log('上面的函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。')
console.log('\n')


console.log('尾递归优化函数调用自身，称为递归。如果尾调用自身，就称为尾递归')
console.log('递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误。但尾递归只存在一个调用帧，所以永远不会发生“栈溢出”错误。')
console.log('计算 Fibonacci 数列求和')
// 非尾递归
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(10)) // 89
// console.log(Fibonacci(100)) // 堆栈溢出
// console.log(Fibonacci(500)) // 堆栈溢出

// 改写尾递归
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(10)) // 89
console.log(Fibonacci2(1000)) // 7.0330367711422765e+208
// console.log(Fibonacci2(10000)) // Maximum call stack size exceeded

console.log('ES6 的尾调用优化只在严格模式下开启，正常模式是无效的,在正常模式下，函数内部有两个变量')
console.log('func.arguments：返回调用时函数的参数。')
console.log('func.caller：返回调用当前函数的那个函数。')
console.log('尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。')
console.log('\n')


console.log('8. ES2017 允许函数的最后一个参数有尾逗号,这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。')