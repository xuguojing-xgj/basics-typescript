function example() {
    let x: string | number | Boolean

    x = Math.random() < 0.5 // 返回布尔值
    // let x: boolean
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello ts'
        // x: string
        console.log(x);

    } else {
        x = 100
        //  x: number
        console.log(x);

    }
    return x
}
let x1 = example()
console.log(x1);

// x1 = 'hello'
// x1 = 100
// x1 = true
