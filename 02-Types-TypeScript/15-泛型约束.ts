/**
* 通用约束 : 
*/
// 在函数泛型中想要 记录 访问一些属性 
function loggingIdentity<T>(arg: T): T {
 // 比如 : arg.length
  console.log(arg.length)
 // 这样编译器会提示错误 arg 形参上 并没有 .length 成员
 // Property 'length' does not exist on type 'Type'.
  return arg
}

// 写法 1 :
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // Array has a .length, so no more error // 数组的长度为.length，因此不会再有错误
  return arg;
}
  

  
// 写法 2 :
 
  
interface Lengthwise {
  length : number  
}

function loggingIdentity2<T extends Lengthwise>(arg: T) : T {
   // Now we know it has a .length property, so no more error // 现在我们知道它有一个.length属性，所以没有更多错误
  console.log(arg.length) 
  return arg
}
  
loggingIdentity({ length: 10, value: 3 }); // 在使用时 必须传入对应的属性 的值
  
// 在类型约束上使用 类型参数
  
function getProperty<T, K extends keyof T >(obj: T, key: K) {
  return obj[key]  
}
  
let objVal = {a: '1' , b : '2', c: '3' }
getProperty(objVal, 'a')
getProperty(objVal, 's') // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
  
