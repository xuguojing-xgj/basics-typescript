function printCoord(pt: { x: number, y: number }) {
    console.log('x坐标:' + pt.x);
    console.log('y坐标:' + pt.y);
}
printCoord({
    x: 45,
    y: 109
})

//  形参 后面带? 表示可选的 可传可不传
function printName(obj: { name?: string, age?: number }) {
    //  obj.name? 可选也可能是undefined  
    //  如果是undefined 不会执行toLowerCase 方法 加上 ? 或者是判断
    console.log(obj.name?.toLowerCase());
    console.log(obj.age);
}
printName({ name: 'xaioming' })
printName({ age: 19 })