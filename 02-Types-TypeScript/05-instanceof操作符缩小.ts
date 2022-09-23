function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
//  直接使用时间格式  会报错 new Date() 实例化时间格式则不会报错
logValue(new Date())
logValue('hello ts')