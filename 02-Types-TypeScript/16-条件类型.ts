/**
*  语法中 extends 是关键字
*  T U X Y 均表示一种类型
*  T 可以 赋值 给 U  条件结果为true 类型为X 否则 条件结果为false 类型为 Y 
*/

T extends U ? X : Y

// number
type T0 = number extends boolean ? string : number

// string
type T1 = true extends boolean ? string : number
