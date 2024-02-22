/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // return numbers.length === 0
    //     ? []
    //     : numbers.length === 1
    //     ? [...numbers, ...numbers]
    //     : [numbers[0], numbers[numbers.length - 1]];

    // It really doesn't like the formatting :/

    let result: number[];
    if (numbers.length === 0) {
        result = [];
    } else if (numbers.length === 1) {
        result = [...numbers, ...numbers];
    } else {
        result = [numbers[0], numbers[numbers.length - 1]];
    }

    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        Number(num) ? Number(num) : 0
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // return amounts.map((amount: string): number =>
    //     !Number(amount)
    //         ? 0
    //         : amount[0] !== "$"
    //         ? Number(amount)
    //         : Number(amount.substring(1))
    // );

    const result = amounts.map((amount: string):
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter(
            (message: string): boolean => message[message.length - 1] !== "?"
        )
        .map((message: string): string =>
            message[message.length - 1] === "!"
                ? message.toUpperCase()
                : message
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.length > 0
        ? colors.every(
              (color: string): boolean =>
                  color === "red" || color === "blue" || color == "green"
          )
        : true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((curr: number, num: number) => curr + num, 0);
    return sum.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const ind = values.findIndex((value: number): boolean => value > 0);
    const sum =
        ind !== -1
            ? values
                  .splice(ind, values.length - ind)
                  .reduce((curr: number, val: number) => curr + val, 0)
            : values.reduce((curr: number, val: number) => curr + val, 0);
    const result = [...values];
    return ind !== -1
        ? result.splice(ind, 0, sum)
        : result.splice(result.length, 0, sum);
}
