

//ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
/* Infinity 属性用于存放表示正无穷大的数值，不是常量，可以把它设置为其他值 */ 
/* NaN 属性是代表非数字值的特殊值,NaN 与所有值都不相等，包括它自己 */

console.log('1. Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity')
console.log('Number.isFinite(15): ' + isFinite(15))
console.log('Number.isFinite("15"): ' + Number.isFinite('15'))
console.log('Number.isFinite(NaN): ' + Number.isFinite(NaN))
console.log('Number.isFinite(Infinity): ' + Number.isFinite(Infinity))
console.log('\n')

console.log('2. Number.isNaN()用来检查一个值是否为NaN')
console.log('Number.isNaN(NaN): ' + isNaN(NaN))
console.log('Number.isNaN(15): ' + Number.isNaN(15))
console.log('Number.isNaN("15"): ' + Number.isNaN("15"))
console.log('Number.isNaN(true): ' + Number.isNaN(true))
console.log('Number.isNaN(9/NaN): ' + Number.isNaN(9/NaN))
console.log('Number.isNaN("true" / 0): ' + Number.isNaN('true' / 0))
console.log('\n')

console.log('3. Number.isInteger()用来判断一个数值是否为整数')
console.log('Number.isInteger(): ' + Number.isInteger())
console.log('Number.isInteger(25): ' + Number.isInteger(25))
console.log('Number.isInteger(25.0): ' + Number.isInteger(25.0))
console.log('Number.isInteger(25.1): ' + Number.isInteger(25.1))
console.log('Number.isInteger(null): ' + Number.isInteger(null))
console.log('Number.isInteger(true): ' + Number.isInteger(true))
console.log('\n')
console.log('特殊例子')
console.log('Number.isInteger(3.0000000000000002): ' + Number.isInteger(3.0000000000000002))
console.log('Number.isInteger(5E-324): ' + Number.isInteger(5E-324))
console.log('Number.isInteger(5E-325): ' + Number.isInteger(5E-325))
console.log('小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了')
console.log('5E-325由于值太小，会被自动转为0')
console.log('\n')

// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
console.log('4. Number.isSafeInteger()用来判断一个数值是否在-2^53到2^53之间（不含两个端点）范围内')
console.log('ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。')
console.log('Math.pow(2, 53): ' + Math.pow(2, 53))
console.log('Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1: ' + (Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1))
console.log('Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER: ' + (Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER))
console.log('Number.MIN_SAFE_INTEGER === -9007199254740991: ' + (Number.MIN_SAFE_INTEGER === -9007199254740991))
console.log('Math.pow(2, 53) === Math.pow(2, 53) + 1: '+(Math.pow(2, 53) === Math.pow(2, 53) + 1))
console.log('Number.isSafeInteger(Number.MAX_SAFE_INTEGER): ' + Number.isSafeInteger(Number.MAX_SAFE_INTEGER))

// 超出了精度范围，导致在计算机内部，以9007199254740992的形式储存。
console.log('9007199254740993 === 9007199254740992: ' + (9007199254740993 === 9007199254740992))
console.log('\n')


console.log('5. Math.trunc方法用于去除一个数的小数部分，返回整数部分,对于非数值，Math.trunc内部使用Number方法将其先转为数值')
console.log('Math.trunc(4.1): ' + Math.trunc(4.1))
console.log('Math.trunc(4.9): ' + Math.trunc(4.9))
console.log('Math.trunc(-4.1): ' + Math.trunc(-4.1))
console.log('Math.trunc(-4.7): ' + Math.trunc(-4.7))
console.log('Math.trunc("123.456"): ' + Math.trunc('123.456'))
console.log('Math.trunc(true): ' + Math.trunc(true))
console.log('Math.trunc(null): ' + Math.trunc(null))
console.log('Math.trunc(): ' + Math.trunc())
console.log('Math.trunc(NaN): ' + Math.trunc(NaN))
console.log('Math.trunc("foo"): ' + Math.trunc('foo'))
console.log('Math.trunc(undefined): ' + Math.trunc(undefined))
console.log('对于没有部署这个方法的环境，可以用下面的代码模拟')
console.log('Math.trunc = Math.trunc || function(x) {')
console.log('  return x < 0 ? Math.ceil(x) : Math.floor(x);')
console.log('}')
console.log('\n')
