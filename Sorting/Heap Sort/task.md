<div><p>Given an array of integers <code>nums</code>, sort the array in ascending order and return it.</p>

<p>You must solve the problem <strong>without using any built-in</strong> functions in <code>O(nlog(n))</code> time complexity and with the smallest space complexity possible.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [5,2,3,1]
<strong>Output:</strong> [1,2,3,5]
<strong>Explanation:</strong> After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [5,1,1,2,0,0]
<strong>Output:</strong> [0,0,1,1,2,5]
<strong>Explanation:</strong> Note that the values of nums are not necessairly unique.
</pre>

**Code expamle**

```JS
function heapSort(arr) {
    // Mutates elements in arr by utilizing the heap data structure
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, arr.length, i);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        // swap last element with first element
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        // note that we reduce the heap size by 1 every iteration
        maxHeapify(arr, i, 0);
    }
}

function maxHeapify(arr, heapSize, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }  
    if (largest !== index) {
        let temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr, heapSize, largest);
    }
}
```