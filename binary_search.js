/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const compareNumbers = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return 1;
    }
    if (firstNumber < secondNumber) {
        return -1;
    }
};

// Функия возвращает индекс элемента в массиве
// Если функция возвращает -1, значит элемента в массиве нет
/**
 *
 * @param {Array} arr
 * @param {number} targetValue
 * @return {number} index of targetValue
 */
const doBinarySearch = (arr, targetValue) => {
    let start = 0;
    let end = arr.length - 1;

    arr.sort(compareNumbers);
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (targetValue === arr[middle]) {
            return middle;
        }
        if (targetValue < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
};

module.exports = doBinarySearch;
