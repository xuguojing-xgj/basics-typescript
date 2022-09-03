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

// Partial可选 将type 属性类型 为 可选?:
// 源码

/**
 * 
 * type Partial<T> = {
    [P in keyof T]?: T[P];
    };
 */

type newPartial = Partial<Person>
// newPartial === {name?: string; age?: number}



// Pick 返回部分属性 (自选返回属性)

// 源码：

/**
 * type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
    };
 */

type newPick = Pick<Person, "name">;
// person5 === {name: string}

/**
 * 详解 pick 
 */
interface Info {
    name: string,
    age: number,
    address: string
}

const info: Info = {
    name: '小明',
    age: 18,
    address: '无'
}

function a<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    let res: any = {}
    keys.map(key => {
        res[key] = obj[key]
    })
    return res
}
console.log(a(info, ['name', 'age']));

// Required 去掉可选属性

// 源码：

/**
 * type Required<T> = {
    [P in keyof T]-?: T[P];
    };
 */

type newRequired = Required<Person>
// newRequired === {name: string, age: numbers}


// Pick 主要⽤于提取某种数据类型的必选属性
interface Books {
    name: string,
    age: number,
    fn: () => void
}

const PickType = Pick<Books, 'name' | 'age'>;
let ObjPick: PickType = {
    name:'小明',
    age: 18
}
