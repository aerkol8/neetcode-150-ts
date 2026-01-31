class Solution {
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                const index = map.get(nums[i])!;
                return [index, i];
            } else {
                const complement = target - nums[i];
                map.set(complement, i);
            }
        }

        return [];
    }
}