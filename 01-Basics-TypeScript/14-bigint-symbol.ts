//  bigint 表示任意大 整数值

// 两种写法
// 1. BigInt('10000009888') BigInt(1999838333)
//                  ↓
//    10000009888n       1999838333n

const oneHundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n

console.log(oneHundred);
console.log(anotherHundred);

const s1 = Symbol('name')
const s2 = Symbol('name')

// if (s1 === s2) {
//     console.log('1');  
// }
console.log(s1);
console.log(s2);

