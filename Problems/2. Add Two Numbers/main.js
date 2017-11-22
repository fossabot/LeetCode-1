/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.log = function() {
  let self = this;
  let str = '';
  while (self !== null) {
    if (self.next === null) {
      str += `${self.val}`;
    } else {
      str += `${self.val} -> `;
    }
    self = self.next;
  }
  console.log(str);
};

ListNode.prototype.init = function(array) {
  let current = this;
  current.val = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    // current.val = array[i];
    current.next = new ListNode(array[i + 1]);
    current = current.next;
  }
};


/**
 * @version 0.1
 * @description 简陋的实现
 * @description ERROR for input: [5], [5]
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
function addTwoNumbers(l1, l2) {
  'use strict';
  const l1Array = [];
  const l2Array = [];

  let l1current = l1;
  while (l1current !== null) {
    l1Array.push(l1current.val);
    l1current = l1current.next;
  }

  let l2current = l2;
  while (l2current !== null) {
    l2Array.push(l2current.val);
    l2current = l2current.next;
  }

  let count = 0;
  let result = new ListNode(-1);
  let resultCurrent = result;
  for (let i = 0; i < l1Array.length; i++) {
    let sum = l1Array[i] + l2Array[i] + count;
    if (sum > 9) {
      count = 1;
      sum -= 10;
    } else {
      count = 0;
    }
    resultCurrent.val = sum;
    resultCurrent.next = new ListNode(-1);
    resultCurrent = resultCurrent.next;

    console.log(sum);
  }
  console.log(l1Array);
  console.log(l2Array);

  resultCurrent = result;
  while (resultCurrent !== null) {
    if (resultCurrent.next.val < 0) {
      resultCurrent.next = null;
    }
    resultCurrent = resultCurrent.next;
  }

  // result.log();
  return result;
}


/**
 * @version 0.2
 * @description 简陋的实现
 * @description Time Limit Exceeded
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
function addTwoNumbers(l1, l2) {
  'use strict';
  const l1Array = [];
  const l2Array = [];

  let l1current = l1;
  while (l1current !== null) {
    l1Array.push(l1current.val);
    l1current = l1current.next;
  }

  let l2current = l2;
  while (l2current !== null) {
    l2Array.push(l2current.val);
    l2current = l2current.next;
  }

  let length = Math.max(l1Array.length, l2Array.length);
  let count = 0;
  let result = new ListNode(-1);
  let resultCurrent = result;
  for (let i = 0; i < length; i++) {
    let l1num = (l1Array[i] === undefined) ? 0 : l1Array[i];
    let l2num = (l2Array[i] === undefined) ? 0 : l2Array[i];
    let sum = l1num + l2num + count;
    if (sum > 9) {
      count = 1;
      sum -= 10;
    } else {
      count = 0;
    }
    resultCurrent.val = sum;
    resultCurrent.next = new ListNode(-1);
    resultCurrent = resultCurrent.next;
    console.log(sum);
  }

  if (count !== 0) {
    resultCurrent.val = count;
    resultCurrent.next = new ListNode(-1);
    resultCurrent = resultCurrent.next;
  }
  console.log(l1Array);
  console.log(l2Array);

  resultCurrent = result;
  while (resultCurrent !== null) {
    if (resultCurrent.next.val < 0) {
      resultCurrent.next = null;
    }
    resultCurrent = resultCurrent.next;
  }

  result.log();
  return result;
}


/**
 * @version 0.3
 * @description 稍微高级的实现
 * @description 225ms 39.19%
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
function addTwoNumbers(l1, l2) {
  'use strict';
  let ptr1 = l1;
  let ptr2 = l2;
  let result = new ListNode(0);
  let ptrR = result;

  while (true) {
    let val1 = 0;
    let val2 = 0;

    if (ptr1 === null) {
      val1 = 0;
    } else {
      val1 = ptr1.val;
    }

    if (ptr2 === null) {
      val2 = 0;
    } else {
      val2 = ptr2.val;
    }

    ptrR.val += val1 + val2;
    if (ptrR.val > 9) {
      ptrR.val -= 10;
      ptrR.next = new ListNode(1);
    } else {
      ptrR.next = new ListNode(0);
    }

    if (ptr1 !== null) {
      ptr1 = ptr1.next;
    }

    if (ptr2 !== null) {
      ptr2 = ptr2.next;
    }

    if (ptr1 === null && ptr2 === null) {
      if (ptrR.next.val === 1) {
        ptrR = ptrR.next;
      } else {
        ptrR.next = null;
        break;
      }
    } else {
      ptrR = ptrR.next;
    }
  }

  return result;
}

/**
 * @version 0.3.1
 * @description 稍微高级的实现
 * @description 205ms 72.27%
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
function addTwoNumbers(l1, l2) {
  'use strict';
  var ptr1 = l1;
  var ptr2 = l2;
  var result = new ListNode(0);
  var ptrR = result;

  while (true) {
    var val1 = 0;
    var val2 = 0;

    if (ptr1 === null) {
      val1 = 0;
    } else {
      val1 = ptr1.val;
    }

    if (ptr2 === null) {
      val2 = 0;
    } else {
      val2 = ptr2.val;
    }

    ptrR.val += val1 + val2;
    if (ptrR.val > 9) {
      ptrR.val -= 10;
      ptrR.next = new ListNode(1);
    } else {
      ptrR.next = new ListNode(0);
    }

    if (ptr1 !== null) {
      ptr1 = ptr1.next;
    }

    if (ptr2 !== null) {
      ptr2 = ptr2.next;
    }

    if (ptr1 === null && ptr2 === null) {
      if (ptrR.next.val === 1) {
        ptrR = ptrR.next;
      } else {
        ptrR.next = null;
        break;
      }
    } else {
      ptrR = ptrR.next;
    }
  }

  return result;
}

/**
 * @version 0.3.2
 * @description 稍微高级的实现 Best
 * @description 205ms 72.27%
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
var addTwoNumbers = function(l1, l2) {
  'use strict';
  var ptr1 = l1;
  var ptr2 = l2;
  var result = new ListNode(0);
  var ptrR = result;

  while (true) {
    var val1 = 0;
    var val2 = 0;

    if (ptr1 === null) {
      val1 = 0;
    } else {
      val1 = ptr1.val;
      ptr1 = ptr1.next;
    }

    if (ptr2 === null) {
      val2 = 0;
    } else {
      val2 = ptr2.val;
      ptr2 = ptr2.next;
    }

    ptrR.val += val1 + val2;
    if (ptrR.val > 9) {
      ptrR.val -= 10;
      ptrR.next = new ListNode(1);
    } else {
      ptrR.next = new ListNode(0);
    }

    if (ptr1 === null && ptr2 === null) {
      if (ptrR.next.val === 1) {
        ptrR = ptrR.next;
      } else {
        ptrR.next = null;
        break;
      }
    } else {
      ptrR = ptrR.next;
    }
  }

  return result;
};


/**
 * @version 0.4
 * @description 别人的实现
 * @description 205ms 72.27%
 * @param {ListNode} l1 LN1
 * @param {ListNode} l2 LN2
 * @return {ListNode} LN_Result
 */
var addTwoNumbers = function(l1, l2) {
  var ln1 = l1, ln2 = l2;
  var carry = 0, remainder = 0, sum = 0;
  var head = node = new ListNode(0);

  while (ln1 != null || ln2 != null || carry != 0) {
    sum = (ln1 != null ? ln1.val : 0) + (ln2 != null ? ln2.val : 0) + carry;
    carry = (sum > 9) ? 1 : 0;
    remainder = sum % 10;
    node = node.next = new ListNode(remainder);
    ln1 = (ln1 != null ? ln1.next : null);
    ln2 = (ln2 != null ? ln2.next : null);
  }
  return head.next;
};

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// Case 1
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Case 2
// let l1 = new ListNode(5);
// let l2 = new ListNode(5);

// Case 3
// let l1 = new ListNode(0);
// let l2 = new ListNode(7);
// l2.next = new ListNode(3);

// Case 4
// let l1 = new ListNode(-1);
// l1.init([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
//   9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9
// ]);
// let l2 = new ListNode(1);

let result = addTwoNumbers(l1, l2);
result.log();
