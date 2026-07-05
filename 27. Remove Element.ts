function removeElement(nums: number[], val: number): number {
    let r = nums.length
    console.log(r)
    while (r > 0) {


        if (val == nums[r - 1]) {
            let element = nums.splice(r - 1, 1)
        }
        r -= 1
    }


    return nums.length
};

