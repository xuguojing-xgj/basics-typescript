/**
 * 泛型类型别名定义
 */
// 此例中,定义了一个名为 Nullable 的泛型类型别名, 它有一个形式类型参数T
// 该泛型类型别名表示可以为空的T类型, 即 "Nullable<T>" 类型的值 也可以为 undefined 或  null
type Nullable<T> = T | undefined | null

/**
 * 泛型类型别名示例
 */
// 示例 1 使用泛型类型别名定义简单容器类型

type Container<T> = { value: T }
const _e: Container<number> = { value: 0 }
const _f: Container<string> = { value: '1' }

// 示例 2 使用泛型类型别名定义树状结构

type Tree<T> = {
    value: T,
    left: Tree<T> | null,
    right: Tree<T> | null
}

const _tree: Tree<string> = {
    value: '0',
    left: {
        value: '1',
        left: {
            value: '1-1',
            left: null,
            right: null
        },
        right: {
            value: '1-2',
            left: null,
            right: null
        },
    },
    right: {
        value: '2',
        left: null,
        right: null
    }
}


/**
 * 泛型约束
 */

interface point {
    x: number,
    y: number
}
function identity<T extends point>(x: T): T {
    return x
}

identity({ x: 0, y: 0 })
// 对于一个形式类型参数,可以同时定义泛型约束和默认类型,但默认类型必须满足泛型约束
// <TypeParameter extends ConstraintType = DefaultType>

// 在该语法中, 默认类型位于泛型约束之后, 类型参数T 的泛型约束为number类型, 默认类型为数字字面类型的联合类型
function _fn<T extends number = 0 | 1>(num: T): T {
    return num
}
//  <T extends number = 0 | 1> 约束后的泛型 T DefaultType 为 number 类型的 0 | 1
_fn<100>(100)

// 如果泛型形式类型参数定义了泛型约束, 那么函数传入的实际类型参数必须符合泛型约束, 否则将抛出错误

function _p<T extends boolean>() { }
_p<true>()
_p<false>()
_p<boolean>()
// _p<string>() ->  类型“string”不满足约束“boolean”

/**
 * 泛型约束引用类型参数
 */
// 在泛型约束中,约束类型允许引用当前形式类型参数列表中的其他类型参数,
// 形式类型参数 U 引用了在其左侧定义的形式类型参数 T 作为约束类型
// <T , U extends T>

// 形式类型参数 T 引用了在其右侧定义的形式类型参数 U
// <T extends U, U>

// 需要注意的是,一个形式类型参数不允许直接或间接的将其自身作为约束类型,
// 否侧将产生引用的编译错误
// <T extends T>  // 错误
// <T extends U, U extends T>  // 错误

