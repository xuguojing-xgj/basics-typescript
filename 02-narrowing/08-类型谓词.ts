type Fishs = {
    name: string,
    swim: () => void
}
type birds = {
    name: string,
    fly: () => void
}
function isFish(pet: Fishs | birds): pet is Fishs {
    // 类型谓词 格式 parameterName is type 
    return (pet as Fishs).swim !== undefined
}
let res = isFish({
    name: '小明',
    swim: () => { }
})
console.log(res);
