function deleteEven(listHead) {
  const dummyHead = new SinglyLinkedListNode()
  dummyHead.next = listHead

  let prev = dummyHead
  let current = listHead
  while (current !== null) {
    if (current.tdata % 2 === 0) {
      prev.next = current.next
    } else {
      prev = current
    }
    current = current.next
  }
  return dummyHead.next
}
