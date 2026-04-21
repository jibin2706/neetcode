class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const counter = {
            // sort_value: index[]
        };

        for (let i = 0; i < strs.length; i++) {
            const length = strs[i].length;
            const sortedValue = strs[i].split("").sort().join("");
            if (!(sortedValue in counter)) counter[sortedValue] = [i];
            else counter[sortedValue].push(i);
        }
        return Object.values(counter).map((value) => value.map((i) => strs[i]));
    }
}
