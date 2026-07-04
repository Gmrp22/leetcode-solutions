function removeDuplicates(nums: number[]): number {
    if (!nums) return 0
    // let p = 0
    // let p1 =0


    // while(p<nums.length){
    //     p1+=1
    //     if(nums[p] == nums[p1]){
    //         nums.splice(p1,1)
    //         p1-=1
    //     }else{
    //         p+=1
    //     }
    // }
    let l = 1
    for (let p2 = 1; p2 < nums.length; p2++) {
        if (nums[p2] !== nums[p2 - 1]) {
            nums[l] = nums[p2]
            l++

        }
    }


    return l
};