/* eslint no-console: off, prefer-destructuring: off */

import ListNode from '../Library/ListNode';

/**
 * @version 1.0.0
 * @description 循环执行, 每次合并两个链表
 * @description 755ms 13.48%
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists1 = function mergeKLists(lists) {
  const mergeTwoLists = function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
      // eslint-disable-next-line no-param-reassign
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line no-param-reassign
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const length = lists.length;
  if (length === 0) {
    return lists;
  }

  let result = null;
  for (let i = 0; i < length; i += 1) {
    result = mergeTwoLists(result, lists[i]);
  }
  return result;
};

/**
 * @version 2.0.0
 * @description 循环执行, 每次合并两个链表
 * @description 135ms 95.81%
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists2 = function mergeKLists(lists) {
  const mergeTwoLists = function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
      // eslint-disable-next-line no-param-reassign
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line no-param-reassign
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };

  const cutList = function cutList(_lists, start, end) {
    if (start === end) {
      return _lists[start];
    }
    if (start < end) {
      const middle = Math.trunc((start + end) / 2);
      const listA = cutList(_lists, start, middle);
      const listB = cutList(_lists, middle + 1, end);
      return mergeTwoLists(listA, listB);
      // eslint-disable-next-line no-else-return
    } else {
      return null;
    }
  };

  return cutList(lists, 0, lists.length - 1);
};

const l1 = ListNode.generateList([1, 23, 4, 656, 43, 21, 6, 76].sort((a, b) => a - b));
const l2 = ListNode.generateList([12, 342, 563, 24, 45, 6, 76, 27].sort((a, b) => a - b));
const l3 = ListNode.generateList([12, 6, 8, 2, 7, 4, 23, 8, 21, 76].sort((a, b) => a - b));
// const res = mergeKLists1([l1, l2, l3]);
mergeKLists2([l1, l2, l3]);
// res.print();
// res2.print();
l1.print();
