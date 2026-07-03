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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let savedNode = new ListNode()
    let loopNode1 = savedNode
    while (list1 && list2) {
        if (list2.val <= list1.val) {
            loopNode1.next = list2
            list2 = list2.next
        } else {
            loopNode1.next = list1
            list1 = list1.next

        }

        loopNode1 = loopNode1.next

    }
    loopNode1.next = list1 !== null ? list1 : list2
    return savedNode.next

};