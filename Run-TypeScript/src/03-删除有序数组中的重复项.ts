function removeDuplicates(nums: number[]) {
    const n: number = nums.length
    if (n === 0) return 0
    let fast = 1, slow = 1
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast
    }
    return slow
}
let result = removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 1, 1, 1])
console.log(result);

