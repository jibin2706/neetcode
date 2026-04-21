class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const counter = {};

        for (let i = 0; i < strs.length; i++) {
            const value = strs[i];
            const sortedValue = value.split("").sort().join("");
            if (!(sortedValue in counter)) counter[sortedValue] = [];
            counter[sortedValue].push(value);
        }
        return Object.values(counter);
    }
}
