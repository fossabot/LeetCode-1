/* eslint no-console: off, prefer-destructuring: off */

import ListNode from '../Library/ListNode';

/**
 * @version 1.0.0
 * @description
 * @description 82ms 91.60%
 * @param {ListNode[]} head
 * @return {ListNode}
 */
const swapPairs1 = function swapPairs(head) {
  // 空链表或只有一个节点的链表
  if (!head || !head.next) {
    return head;
  }
  let current = head;
  while (current !== null) {
    const left = current.next === null ? current.val : current.next.val;
    const right = current.val;
    current.val = left;
    if (current.next !== null) {
      current.next.val = right;
    } else {
      break;
    }
    current = current.next.next;
  }
  return head;
};

/**
 * @version 1.0.1
 * @description
 * @description 76ms 100%
 * @param {ListNode[]} head
 * @return {ListNode}
 */
const swapPairs101 = function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }
  let current = head;
  while (current !== null) {
    const left = current.next === null ? current.val : current.next.val;
    const right = current.val;
    current.val = left;
    if (current.next !== null) {
      current.next.val = right;
    } else {
      // 提前直接返回
      return head;
    }
    current = current.next.next;
  }
  return head;
};

const l1 = ListNode.generateList([1, 23, 4, 656, 43, 21, 6, 76, 8]);
l1.print();
swapPairs1(l1);
swapPairs101(l1);
l1.print();
