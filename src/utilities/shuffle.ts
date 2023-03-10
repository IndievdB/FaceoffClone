/**
 * Perform a Fisher-Yates shuffle in place on the given list and return the list.
 */
const shuffle = <T>(list: T[]) => {
    const result = [...list];
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};

export default shuffle;
