let u: undefined = undefined

let n: null = null
// 严格模式下 undefined 不能赋值给 string
// let x: string = undefined

function doSomething(x: string | null) {
    if (x === null) {
        console.log(u);
    } else {
        console.log(n);
    }
}
doSomething('')
// 形参 后面带? 表示可选的 可传可不传
// ! 断言类型 不是null 和 undefined
function daunyanFn(x?: string | null) {
    console.log(x!.toUpperCase());
}
daunyanFn()