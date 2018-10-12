//const定义的变量不可以修改，而且必须初始化赋值
//var定义的变量可以修改，如果不初始化会输出undefined，不会报错
//let是块级作用域，函数内部使用let定义后，对函数外部无影响

/****************
 ***** const *****
 ****************/

console.log('*****const*****')
const const_a = 1;    //正确
//const const_a;    //错误，必须初始化
console.log('const----函数外定义a: ' +　const_a);//有输出值
//console.log('函数未初始化const定义a:' + const_a)//无法输出 报错
//const_a = 5;
//console.log('函数外修改const定义a:' + const_a);//无法输出
console.log('\n')



/****************
 ***** var *****
 ****************/
console.log('*****var*****')
var var_a = 1;
console.log('var----函数外定义a: ' + var_a);//可以输出a=1
var var_b;//不会报错
console.log('var----函数外未初始化定义b: ' + var_b);//可以输出b: undefined
function var_change(){  
  var_a = 4;
  // var var_a = 4;  // 如果加var，函数外打印a输出1 
  console.log('var----函数内定义a: ' + var_a);//可以输出a=4
}
var_change();
console.log('var----函数调用后,a为函数内部修改值: ' + var_a);//可以输出a=4
console.log('\n')



/****************
 ***** let *****
 ****************/
console.log('*****let*****')
let let_a = 3;
console.log('let----函数外定义a: ' + let_a);//输出a=3
function let_change(){   
    let let_a = 6;
    console.log('let----函数内定义a: ' + let_a);//输出a=6
}
let_change();
console.log('let----函数调用后a不受函数内部定义影响: ' + let_a);//输出a=3
console.log('\n')


