// string 参数类型注释  // void返回值类型注释 void 代表没有返回值 
function greet(name: string): void {
    console.log('hello' + name.toUpperCase() + '!');

}
greet('aioing')

// 通常函数不需要写 void 返回值 ts 会根据return 自动判断返回值类型
function getNumber() {
    return 100
}

// context 类型
const arr = ['1', '2', '3']
arr.forEach((s) => {
    console.log(s.toUpperCase());
    console.log(s);
})