// 接口
interface newPoint {
    x: number,
    y: number
}
function newPointFn(pt: newPoint) {

}
newPointFn({
    x: 435,
    y: 209
})


// 扩展接口
interface Ainmal {
    name: string
}
interface bear extends Ainmal {
    honey: boolean
}
const bear: bear = {
    name: '熊',
    honey: true
}
console.log(bear);
console.log(bear.name);
console.log(bear.honey);

// 类型别名 扩展 交叉扩展

type newAinmal = {
    name: string
}

type newBear = newAinmal & {
    honey: boolean
}
const container: newBear = {
    name: 'xiao熊',
    honey: true
}


// interface 向现有类型中添加字段
interface mywindow {
    count: number
}
interface mywindow {
    title: string
}

const w: mywindow = {
    count: 100,
    title: 'hello ts'
}
console.log(w);

//  扩展
//  interface 扩展 通过 extends 扩展名
//  interface 添加字段 可以重复声明接口

//  type 扩展 通过 扩展名 &(and)符
//只能通过 &符 添加字段 

//  定义类型的方式
// 1. 接口 interface
// 2. 类型别名 type

interface container {
    name: string
    age: number
    sing: boolean
}
interface func extends container {
    sex: string
}
interface func {
    title: string
}

const user: func = {
    title: '自我介绍',
    name: 'xaioming',
    age: 22,
    sing: true,
    sex: '男'
}
console.log(user);

type userVal = {
    name: string,
    age: number,
    sex: string,
    sing: boolean
}
type newUserVal = userVal & {
    name1: string,
    age1: number,
    sex1: string,
    sing1: boolean
}
const Userinformation: newUserVal = {
    name: 'xiaogogn',
    age: 21,
    sex: 'nv',
    sing: false,
    name1: '小欧明',
    age1: 21,
    sex1: '男',
    sing1: true
}
console.log(Userinformation);
