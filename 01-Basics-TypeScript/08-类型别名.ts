//  定义类型 类型别名
//  ts 项目中 不同文件夹 不允许出现两个一样的函数名
type Point = {
    x: number,
    y: number
}
function xyCoordinate(pt: Point) {

}
xyCoordinate({
    x: 34,
    y: 199
})

type ID = number | string
function idFn(id: ID) {

}

idFn(100)
idFn('1200')

type UserInputString = string
function strFn(str: string): UserInputString {
    return str.slice(0, 3)
}
let result = strFn('hello')
result = 'new hello world'
console.log(result);
