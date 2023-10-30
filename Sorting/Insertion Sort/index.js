/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head = [4,2,1,3]) {
    for (let i = 1; i < head.length; i++) {
        let currentIndex = i
        while (currentIndex > 0 && head[currentIndex - 1] > head[currentIndex]) {
            let temp = head[currentIndex];
            head[currentIndex] = head[currentIndex - 1];
            head[currentIndex - 1] = temp;
            currentIndex -= 1;

        }
    }
    return head;
};

console.log(insertionSortList());
