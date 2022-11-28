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


