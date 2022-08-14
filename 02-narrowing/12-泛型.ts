/**
 * 在定义函数或者是类时, 如果类型不明确 就可以使用 泛型
 * 泛型的 定义 function myFn<T>() {}
 * <T> 代表一个不确定返回值类型的泛型(任意类型)
 */

function myFn<T>(a: T): T {
    console.log(typeof a)
    return a;

}
/**
 * 1): 直接调用具有泛型的函数 ts会自动推断参数类型
 * myFn(a: 10) TS 自动推断为 number
 * 2): 在调用具有泛型函数的时候 指定泛型
 * myFn<类型>
 */
myFn(10)
myFn<string>('xioaming')
/**
 * 泛型可以同时指定多个
 */
function fn2<T, K>(a: T, b: K): K {
    console.log(typeof a);

    return b
}
fn2<string, number>('小敏', 18)
/**
 * 在泛型上 搜小T 的返回类型 
 * 定义接口 泛型返回类型 缩小到接口定义的类型中
 */
interface inter {
    length: number
}
function fn3<T extends inter>(a: T): number {
    return a.length
}
fn3({
    length: 18
})


/**
 * 在类中使用 泛型
 */
class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const mc = new MyClass('小明')