// A node's value must be strictly greater than nodes to its left
// and less than or equal to nodes to its right
// BST property holds for all nodes in the tree
// NB: the less than or equal to part can be applied on either side

// when deleting a node replace it with the left most value in right sub tree
// avg time/space iterative soln O(log(n)) time, O(1) space
// recursive soln O(lon(n)) time and space
// worst case can be O(N) if there is a one branch tree

class BST {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value) {
    let currentNode = this
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value)
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value)
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }

  contains (value) {
    let currentNode = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }
    return false
  }

  remove (value, parentNode = null) {
    let currentNode = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          } else {
            // do nothing, single node tree
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break
      }
    }
    return this
  }

  getMinValue () {
    let currentNode = this
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}
