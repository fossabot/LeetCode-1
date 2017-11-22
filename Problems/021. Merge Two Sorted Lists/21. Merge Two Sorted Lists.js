/* eslint no-console: off, prefer-destructuring: off */

// Test code
function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.print = function print() {
  let self = this;
  const array = [];
  while (self !== null) {
    array.push(self.val);
    self = self.next;
  }
  console.log(array.toString());
};

const a1 = new ListNode(1);
a1.next = new ListNode(8);
a1.next.next = new ListNode(10);

const a2 = new ListNode(2);
a2.next = new ListNode(7);
a2.next.next = new ListNode(9);
a2.next.next.next = new ListNode(11);
a2.next.next.next.next = new ListNode(13);

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @version 1.0.0
 * @description
 * @description 132ms 58.14%
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists1 = function mergeTwoLists(list1, list2) {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let l1 = list1;
  let l2 = list2;

  const result = new ListNode(NaN);
  let current = result;
  while (l1 !== null && l2 !== null) {
    if (l2.val < l1.val) {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    current = current.next;
  }

  current.next = l1 === null ? l2 : l1;

  return result.next;
};

/**
 * @version 1.0.1
 * @description
 * @description 132ms 58.14%
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists11 = function mergeTwoLists(list1, list2) {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let l1 = list1;
  let l2 = list2;

  const result = new ListNode(NaN);
  let current = result;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 === null ? l2 : l1;

  return result.next;
};

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @version 2.0.0
 * @description
 * @description 115ms 70.61%
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists2 = function mergeTwoLists(list1, list2) {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    // eslint-disable-next-line no-param-reassign
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
    // eslint-disable-next-line no-else-return
  } else {
    // eslint-disable-next-line no-param-reassign
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};

mergeTwoLists1(a1, a2).print();
mergeTwoLists11(a1, a2).print();
mergeTwoLists2(a1, a2).print();
