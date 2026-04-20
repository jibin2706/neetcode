class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            const diff = target - value;
            if (diffMap.has(diff)) return [diffMap.get(diff), i];
            else diffMap.set(value, i);
        }
    }
}
