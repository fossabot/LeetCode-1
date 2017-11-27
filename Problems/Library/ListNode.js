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

  static generateList(array) {
    // eslint-disable-next-line prefer-destructuring
    const length = array.length;
    if (length === 0) {
      return null;
    }

    const result = new ListNode(NaN);
    let current = result;
    for (let i = 0; i < length; i += 1) {
      current.next = new ListNode(array[i]);
      current = current.next;
    }

    return result.next;
  }
}

export default ListNode;
