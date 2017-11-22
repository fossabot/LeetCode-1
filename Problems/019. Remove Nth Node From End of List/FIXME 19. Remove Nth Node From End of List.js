/* eslint no-console: off, prefer-destructuring: off */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @version 1.0.0
 * @description 25/25
 * @description 79ms 90.03%
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function removeNthFromEnd (head, n) {
  if (head === null || (head.next === null && n === 1)) {
    return null;
  }

  let current = head;
  let index = 1;

  while (current !== null) {
    console.log(current.val);
    console.log(index);
    current.index = index;
    current = current.next;
    index += 1;
  }

  const flag = index - n - 1;

  current = head;
  while (current !== null) {
    if (current.index === flag) {
      if (flag === 0) {
        current.next = null;
      } else {
        current.next = current.next.next;
      }
    }
  }

  return head;
};

removeNthFromEnd('??');
