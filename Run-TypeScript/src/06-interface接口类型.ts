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