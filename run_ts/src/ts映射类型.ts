// typescript内置了Readonly、Partial、Pick、Record、Required五个高级类型
// Readonly只读 举例
interface Person {
    name: string;
    age?: number;
}

// Readonly只读 源码
/**
 * type Readonly<T> = {
    readonly [P in keyof T]: T[P];
   };
 */
// 例子 : 
type newPerson = Readonly<Person>

// newPerson === {
//     Readonly name: string,
//     Readonly age?: number
// }
