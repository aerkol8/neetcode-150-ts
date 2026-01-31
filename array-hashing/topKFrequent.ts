class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number, number>();
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1);
        }

        for (const [n, c] of count) {
            freq[c].push(n);
        }

        const res: number[] = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}