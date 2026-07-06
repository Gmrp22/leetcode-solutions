/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    let acarreo = 0
    let init = dummy
    while (l1 !== null || l2 !== null || acarreo > 0) {
        let val1 = (l1 !== null) ? l1.val : 0
        let val2 = (l2 !== null) ? l2.val : 0

        let result = val1 + val2 + acarreo


        let actual = result % 10
        acarreo = Math.floor(result / 10)

        dummy.next = new ListNode(actual);
        dummy = dummy.next;


        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

    }
    return init.next
};