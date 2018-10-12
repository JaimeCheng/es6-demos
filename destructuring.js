// 解构赋值，即对某种结构进行解析，然后将解析出来的值赋值给相关的变量，常见的有数组、对象、字符串的解构赋值等

/****************
 ***** 解构赋值 *****
 ****************/

console.log('1.可以嵌套多层，只要等式两边结构匹配即可，若不匹配则报错')

const [a, [b, [c]]] = [1, [2, [3]]]
console.log('const [a, [b, [c]]] = [1, [2, [3]]]')
console.log('a:' + a)
console.log('b:' + b)
console.log('c:' + c)
console.log('\n')

const [x, y, z = 3] = [1, 2]
console.log('const [x, y, z = 3] = [1, 2]')
console.log('x:' + x)
console.log('y:' + y)
console.log('z:' + z)
console.log('\n')


// 可以嵌套多层，只要等式两边结构匹配即可，若不匹配则报错
// const [a, [b, [c]]] = [1, [2, [3]]]  // 多层嵌套
// const { a: x, b } = { a: 1, b: 2 } // 结构不匹配

console.log('2.解构不成功，相应值为undefined')
const [a1, b1] = [1]
console.log('const [a1, b1] = [1]')
console.log('a1:' + a1)
console.log('b1:' + b1)
console.log('\n')


console.log('3.不需要匹配的位置置空')
const [, d] = [1, 2]
console.log('const [, d] = [1, 2]')
console.log('d:' + d)
console.log('\n')


console.log('4. "..."扩展运算符，匹配余下值，类型为数组（匹配不上则为[]）')
const [e, ...f] = [1, 2, 3]
console.log('const [e, ...f] = [1, 2, 3]')
console.log('e:' + e)
console.log('f:' + f)
console.log('\n')


console.log('5. 解构赋值允许指定默认值，当相应的值===undefined时(null匹配还是null)，默认值生效')
const [i, j = [2, 3]] = [1]
// const [i, j = [2, 3]] = [1, undefined] //同上
console.log('const [i, j = [2, 3]] = [1]')
console.log('const [i, j = [2, 3]] = [1, undefined]')
console.log('i:' + i)
console.log('j:' + j)

const [i1, j1 = [1, 2]] = [1, null]
console.log('const [i1, j1 = [1, 2]] = [1, null]')
console.log('i1:' + i1)
console.log('j1:' + j1)
console.log('\n')


console.log('6. 对象也可解构赋值，对象的属性没有次序，变量必须与属性同名')
const { m, n } = { m: 1, n: 2 }
console.log('const { m, n } = { m: 1, n: 2 }')
console.log('m:' + m)
console.log('n:' + n)
console.log('如果变量名不一致，必须写成下面这样')
let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
console.log('let { foo: baz } = { foo: "aaa", bar: "bbb" }')
console.log('baz:' + baz)
console.log('foo: error: foo is not defined')
console.log('\n')


console.log('7. 字符串的解构赋值,字符串被转换成了类数组的对象,类似数组的对象都有一个length属性')
const { 0: w1, 1: w2, length: len} = 'czm'
// const [w1, w2, w3] = 'czm'
console.log('const { 0: w1, 1: w2, length: len} = "czm"')
console.log('w1:' + w1)
console.log('w2:' + w2)
console.log('len:' + len)
console.log('\n')


console.log('8. 函数参数的解构赋值')
console.log('function add([x, y]){\n return x + y\n}')
function add([x, y]){
  return x + y
}
console.log('add([1, 2]) = ' + add([1, 2]))

console.log('举个列子: ')
console.log('eg = [[1, 2], [3, 4]].map(([a, b]) => a + b)')
const eg = [[1, 2], [3, 4]].map(([a, b]) => a + b)
console.log('eg: ')
console.log(eg)
console.log('\n')

console.log('变量的解构赋值的用途。\n')


