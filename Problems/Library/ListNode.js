/* eslint-disable no-console */

// Used by #19, #21
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print() {
    let ptr = this;
    const list = [];
    while (ptr !== null) {
      list.push(Object.assign({}, ptr));
      ptr = ptr.next;
    }
    console.log(list);
    return list;
  }
}

export default ListNode;
