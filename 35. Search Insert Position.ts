function searchInsert(nums: number[], target: number): number {
    let left = 0
    let position = 0
    let right = nums.length - 1
    for (let x = 0; x < nums.length; x++) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] == target) {
            return middle

        }
        if (nums[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return left
};