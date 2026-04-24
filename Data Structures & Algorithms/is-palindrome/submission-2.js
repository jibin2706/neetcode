class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();

        const cleanStr = [];
        const validChars = new Set([
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
        ]);
        for (let i of s) {
            if (validChars.has(i)) cleanStr.push(i);
        }

        const length = cleanStr.length;
        for (let i = 0; i < length / 2; i++) {
            if (cleanStr[i] !== cleanStr[length - 1 - i]) return false;
        }

        return true;
    }
}
