/* eslint no-console: off, prefer-destructuring: off */

import ListNode from '../Library/ListNode';

/**
 * @version 1.0.0
 * @description 207/207
 * @description 106ms 65.4%
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function removeNthFromEnd(head, n) {
  if (head === null || (head.next === null && n === 1) || n === 0) {
    return null;
  }

  let current = head;
  let index = 0;

  while (current !== null) {
    // console.log(current.val);
    // console.log(index);
    current.index = index;
    current = current.next;
    index += 1;
  }

  const flag = index - n - 1;
  console.log(flag);
  current = head;

  if (flag === -1) {
    return head.next;
  }

  while (current !== null) {
    if (current.index === flag) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return head;
};

// Test code
const a2 = new ListNode(2);
a2.next = new ListNode(7);
// a2.next.next = new ListNode(9);
// a2.next.next.next = new ListNode(11);
// a2.next.next.next.next = new ListNode(13);
removeNthFromEnd(a2, 2).print();
