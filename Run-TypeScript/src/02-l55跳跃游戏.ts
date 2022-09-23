
function fourSum(nums: number[]): boolean{
    let jump: number[] = []
    for (let i = 0; i < nums.length; i++) {
        //初始化 : jump[i] 中的每一项 加上 i(索引) 加 nums[i] (nums数组中的每一项)  
        jump.push(i + nums[i]) // 初始化 jump 数组  , jump[i] = i + nums[i] 
    }
    let index: number = 0; // 储存当前所在位置
    let max_jump: number = jump[0] // 储存当前最远可到达的位置 初始化为 jump[0]

    // idnex 小于 储存数组长度 并且 index 小于等于  最大可到达的位置  
    // 如果 jump.length 长度为0 且 max_jump 最大可到达位置 小于等于 index  index 为 0
    // 该题无解 return false 
    while (index < jump.length && index <= max_jump) {
        if (max_jump < jump[index]) {
            // 
            max_jump = jump[index]
        }
        index++ // 用过 while 每次 循环 jump数组中的每一项
    }
    if(index == jump.length) { // index 跳跃到数组末尾 游戏有解
        return true 
    }

    return false
}


let res = fourSum([2, 4, 2, 3, 1, 0, 0])
console.log(res);

