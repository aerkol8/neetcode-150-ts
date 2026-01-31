class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.join('#');
            
            if (!map.has(key)) {
                map.set(key, []);
            }
            
            map.get(key)!.push(str);
        }

        return Array.from(map.values());
    }
}