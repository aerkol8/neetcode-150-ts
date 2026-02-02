
class Solution232 {
    /**
     * Encodes a list of strings to a single string using manual counting.
     */
    encode(strs: string[]): string {
        let result: string = ""; 
        for (let str of strs) { 
            let counter: number = 0;
            for (let i = 0; i < str.length; i++) {
                counter++;
            }
            result = `${result}${counter}#${str}`; 
        }
        return result; 
    }

    /**
     * Decodes the string back into a list of strings using nested loops.
     */
    decode(str: string): string[] {
        let result: string[] = [];
        let i: number = 0;
        let counter: string;

        while (i < str.length) {
            counter = '';
            while (str[i] !== '#') {
                counter = counter + str[i];
                i = i + 1;
            }

            let word: string = '';
            let lengthValue: number = Number(counter);

            for (let k = i + 1; k < lengthValue + i + 1; k++) {
                word = word + str[k];
            }

            result.push(word);
            i = i + lengthValue + 1; 
        }
        return result;
    }
}


