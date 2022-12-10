/**
 * 接口是 TypeScript 中的一种特殊类型，它用于描述一个对象的形状（shape）
 * 上面的声明定义了一个 NumberArray 接口，它表示一个具有数字索引的对象，
 * 并且其值都必须为数字。 
 */
// 例如，你可以使用该接口来定义一个数组，如下所示：
interface NumberArray {
    [index: number]: number
}
let arr: NumberArray = [1, 2, 3];

/**
 * 上面的代码中，我们定义了一个 NumberArray 类型的变量 arr，并将其初始化为一个数字数组。
 * 因为 arr 的类型是 NumberArray，所以它必须满足接口的要求，即必须是一个具有数字索引的对象，
 * 并且其值都必须为数字。
 */
/**
 * 需要注意的是，在 TypeScript 中，接口是静态的，它不会像 JavaScript 那样随着对象的变化而变化。
 * 因此，接口只能用于描述对象的形状，而不能用于描述对象的值。
 */

// Class 声明
interface PersonalIntl {
    name: string
    sayHi(name: string): string
}

/**
 * 在上面的代码中，PersonalIntl 是一个接口，它定义了一个对象必须具有的 name 属性和 sayHi() 方法，
 * 并且这个方法接受一个字符串参数，并返回一个字符串。
 * 这个接口类型可以用来约束一个对象，以确保它具有正确的形状。
 */
/**
 * 在 TypeScript 中，我们可以使用 implements 关键字来实现一个接口。
 * implements 关键字可以用于 class 类的接口使用
 * 这意味着，我们定义的类必须拥有接口中定义的所有属性和方法。例如：
 */
// 实现 PersonalIntl 接口
class Personal implements PersonalIntl {
    // 实现接口中定义的 name 属性
    name: string = ''
    constructor() { }

    // 实现接口中定义的 sayHi() 方法
    sayHi(name: string): string {
        return `Hello, ${name}. My name is ${this.name}.`
    }
}

const personal = new Personal()
personal.name = 'John Doe'
console.log(personal.sayHi('Jane Doe')) // 应输出：Hello, Jane Doe. My name is John Doe.

/**
 * 在上面的代码中，我们定义了一个 Personal 类，并实现了 PersonalIntl 接口。
 * 我们在类中定义了名为 name 的属性和一个名为 sayHi() 的方法，这个方法接受一个字符串参数，并返回一个字符串。
 * 然后我们创建了一个 Personal 类的实例，并调用了它的 sayHi() 方法。
 */

interface person {
    name: string,
    age: number,
    sing(sing: string): string
}

class Content implements person {
    name: string = '';
    age: number = 18

    sing(sing: string): string {
        return `你好, 我是${this.name}, 今年${this.age}岁, 喜欢${sing}`
    }
}

const content = new Content()
content.name = '小明'
content.age = 19
console.log(content.sing('唱歌'));


/**
 * TypeScript 如何设计 Class 的声明？
 */
interface IComparable {
    message: string
}
class Greeter implements IComparable {
    message: string;
    constructor(message: string) {
        this.message = message
    }
}

const greeter = new Greeter('这是一条设计class声明信息')
console.log(greeter);
