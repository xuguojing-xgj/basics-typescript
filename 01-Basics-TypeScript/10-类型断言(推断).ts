//  类型断言 两种写法  当不知道 一个值为 什么类型时 
const myCanvas = document.getElementById('mias') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('mias')

//  unknown 比 any 更具体 语义
const q = (123 as unknown) as string
