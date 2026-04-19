class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const keys = new Set()
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]
            if(keys.has(value)) return true
            keys.add(value)
        }
        return false
    }
}
