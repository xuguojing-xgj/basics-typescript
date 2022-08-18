type xToUpperCase = string | number
type yToUpperCase = string | boolean

function fn1(x: xToUpperCase, y: yToUpperCase) {
    //  等值缩小
    if (x === y) {
        x.toUpperCase()
        y.toUpperCase()
    }
}

function print2(strs: string | Array<string> | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const key of strs) {

            }
        } else if (typeof strs === 'string') {

        } else {
            // ... 
        }
    }

}

interface Container {
    value: number | null | undefined
}

function fn2(container: Container, num2: number) {
    if (container.value != null) {
        console.log(container.value);
        let q = container.value *= num2
        console.log(q);


    } else {
        console.log('1');

    }


}
// fn2({ value: 2 }, 2)
fn2({ value: null }, 2)