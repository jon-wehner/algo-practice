# Do not edit the class below except for
# the insert, contains, and remove methods.
# Feel free to add new properties and methods
# to the class.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        while True:
            if value < self.value:
                if self.left is None:
                    self.left = BST(value)
                    break
                else:
                    self = self.left
            else:
                if self.right is None:
                    self.right = BST(value)
                    break
                else:
                    self = self.right
        return self

    def contains(self, value):
        while self is not None:
            if value < self.value:
                self = self.left
            elif value > self.value:
                self = self.right
            else:
                return True
        return False

    def remove(self, value, parent=None):
        if value < self.value:
            if self.left is not None:
                self.left.remove(value, self)
            elif value > self.value:
                if self.right is not None:
                    self.right.remove(value, self)
            else:
                if self.left is not None and self.right is not None:
                    self.value = self.right.getMinValue()
                    self.right.remove(self.value, self)
                elif parent is None:
                    if self.left is not None:
                        self.value = self.left.value
                        self.right = self.left.right
                        self.left = self.left.left
                    elif self.right is not None:
                        self.value = self.right.value
                        self.left = self.right.left
                        self.right = self.right.right
                    else:
                        pass
                elif parent.left == self:
                    parent.left = (self.left if self.left
                                   is not None else self.right)
                elif parent.right == self:
                    parent.right = (self.left if self.left
                                    is not None else self.right)
        return self

    def getMinValue(self):
        if self.left is None:
            return self.value
        else:
            return self.left.getMinValue()
