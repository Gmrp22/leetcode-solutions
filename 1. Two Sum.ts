function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map()


    for (let x = 0; x < nums.length; x++) {
        let complement: number = target - nums[x]

        if (map.has(complement)) {
            console.log(complement, x)
            return [x, map.get(complement)]
        }
        map.set(nums[x], x)
    }
    return []

};