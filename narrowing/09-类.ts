// 定义类: 
// class 类名 {
//     属性名: 类型;
//     constructor(参数: 类型) {

//     }

//     方法名() {
//         ...
//     }
// }

class person {
    //  在属性前使用  static 关键字可以 定义类属性
    // readonly 只读属性 不能随意修改
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sing() {

    }
}

const newPerSon = new person('小明', 18)
console.log(newPerSon)