function printALL(strs: string | Array<string> | null) {
    //  真值缩小
    //  for 循环时 strs 可能是null 
    //  在类型判断前加上 && 运算
    //  strs && 
    //  或者是 
    //  在最外层进行 strs 的 一个真值判断
    if (strs) {
        if (typeof strs === 'object') {
            for (const key of strs) {

            }
        } else if (typeof strs === 'string') {

        } else {
            // ... 
        }
    }

}
type values = number[] | undefined
type num = number
function modelesAll(values: values, num: num) {
    if (!values) {
        return values
    } else {
        return values.map((item) => {
            return item * num
        })
    }
}
console.log(modelesAll([2, 2, 3], 2));
