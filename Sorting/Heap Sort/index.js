/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums = [-2,3,-5]) {
    for (let i = Math.round(nums.length / 2 - 1); i >= 0; i--) {
        maxHeapify(nums, nums.length, i)       
    }

    for (let i = nums.length - 1; i > 0; i--) {
        let temp = nums[i];
        nums[i] = nums[0];
        nums[0] = temp;
        maxHeapify(nums, i, 0)
    }

};

/**
 * @param {number[]} arr
 * @param {number} heapSize
 * @param {number} index
 * @return {void}
 */
var maxHeapify = function(arr, heapSize, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if(largest !== index){
        let temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr, heapSize, largest)
    }
}

sortArray()