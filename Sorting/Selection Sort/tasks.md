Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

***Example 1:***
***Input:*** nums = [2][2][1][1]
***Output:*** [1][1][2][2]
***Example 2:***
***Input:*** nums = [2][1]
***Output:*** [1][2]

***Explane code***

The selectionSort function takes an array arr as input and sorts it in ascending order using the selection sort algorithm. Here is how the function works:
1. Initialize a variable min_index to keep track of the index of the minimum element in the array.
2. Loop through the array from the first element to the second-to-last element.
3. Set min_index to the current index of the outer loop.
4. Loop through the array from the next element after the current index of the outer loop to the last element.
5. If the current element is less than the element at min_index, set min_index to the current index of the inner loop.
6. Swap the element at min_index with the element at the current index of the outer loop.
7. Repeat steps 2-6 until the entire array is sorted.


***Example code***
```JS
function selectionSort(arr) {
    let min_index;
    for (let i = 0; i < arr.length; i++) {
        min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
}

```