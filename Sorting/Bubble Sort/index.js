/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const oldHeights = [... heights];
    let hasSwapped = true;
    do {
        hasSwapped = false
        for (let i = 0; i < heights.length - 1; i++) {
            if (heights[i] > heights[i + 1]) {
                let temp = heights[i + 1];
                heights[i + 1] = heights[i];
                heights[i] = temp;
                hasSwapped = true;
            }
        }
    } while (hasSwapped);
    return oldHeights.reduce((acc, curr, i) => heights[i] !== curr ? ++ acc : acc, 0)
};

