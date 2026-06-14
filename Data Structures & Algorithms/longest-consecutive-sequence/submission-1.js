class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for(const num of nums){
            set.add(num);
        }
        let ans = 0;
        for(const num of set){
            if(!set.has(num-1)){
                let len = 1;
                let cur = num;
                while(set.has(cur+1)){
                    cur++;
                    len++;
                }
                ans = Math.max(ans, len);
            }
        }

        return ans;
    }
}
