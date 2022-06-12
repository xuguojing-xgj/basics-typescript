function printAll(strs: string | Array<string> | null) {
    if (typeof strs === 'object') {
        // for (const key of strs) {
        console.log(typeof strs);
        console.log(typeof new Array());
        console.log(typeof Boolean("hello"));

        console.log();
        // }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        // ....
    }
}
printAll(['12', '123'])


