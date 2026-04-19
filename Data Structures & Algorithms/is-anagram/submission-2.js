class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const counter = {}

        for (let i = 0; i < s.length; i++) {
            const value = s[i]
            if (value in counter) counter[value]++
            else counter[value] = 1
        }
        
        for (let i = 0; i < t.length; i++) {
            const value = t[i]
            if (value in counter) counter[value]--
            else return false
        }

        const values = Object.values(counter)
        for (let i = 0; i < values.length; i++) {
            if (values[i] === 0) continue
            return false
        }
        return true
    }
}
