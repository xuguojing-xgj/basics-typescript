let textstring = 'hello world'
textstring = '字符串'

const qqconstString = 'asdggggg'
// qqconstString = ''

// 字符串文字类型
// 单独定义 只能是 hello 字符串
let textStr: 'hello' = 'hello'
// textStr = ''
// 文字类型 方法
function textFn(s: string, fn: 'left' | 'right' | 'center') {
    console.log(s);
    console.log(fn);

}
textFn('hello world', 'left')
textFn('yejingtainming', 'center')

//  数字 number 类型

function numFn(a: number, b: number): 5 | 4 | 0 {
    // 组合三元运算符
    return a === b ? 0 : a < b ? 5 : 4
}

// 数字跟字符串 组合

interface Options {
    width: number
}
function configFn(x: Options | 'auto') {
    console.log(x);
    if (typeof x !== 'string') {

        console.log(x.width);
    }

}
configFn({ width: 100 })
configFn('auto')

interface one1 {
    width: number
}
interface newone1 extends one1 {
    height: number
}

type two2 = {
    top: number
}
type newtwo2 = two2 & {
    bottom: number
}

function styleFn(a: newone1 | 'right', b: newtwo2 | 'left') {
    console.log(a, b);
    
}
styleFn({
    width: 100,
    height: 100
}, {
    top: 10,
    bottom: 10
})

//  布尔文字类型

let bool1: true = true
let bool2: false = false

//  类型推断

const obj2 = {
    count: 0
}
if (bool1) {
    obj2.count = 1
}

function handelRequest(url: string, methods: 'GET' | 'POST' | 'GUESS') {

}
const params = {
    url: 'https://baidu.com',
    methods: 'GET' as 'GET'
} as const
handelRequest(params.url, params.methods as 'GET')