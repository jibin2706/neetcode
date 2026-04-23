class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const isVisited = new Set();
        let result = 0;

        for (let num of nums) {
            if (isVisited.has(num)) continue;

            let counter = 1;
            let value = num - 1;
            while (true) {
                if (set.has(value)) {
                    isVisited.add(value);
                    counter++;
                    value--;
                } else break;
            }
            value = num + 1;
            while (true) {
                if (set.has(value)) {
                    isVisited.add(value);
                    counter++;
                    value++;
                } else break;
            }

            result = Math.max(counter, result);
        }

        return result;
    }
}
