class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let dict = {};
        for(const c of s){
            dict[c] = (dict[c] || 0) + 1;
        }
        for(const c of t){
            if(!dict[c]) return false;
            dict[c]--;
        }
        return true;
    }
}
