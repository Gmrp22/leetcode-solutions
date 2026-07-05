function removeElement(nums: number[], val: number): number {
    let r = nums.length
    let i = 0

    while (i < r) {
        if (val == nums[i]) {
            nums[i] = nums[r - 1]
            r -= 1

        } else {
            i += 1
        }

    }


    return i
};

