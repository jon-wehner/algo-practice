function getNthFibMemo (n, memoize = { 1: 0, 2: 1 }) {
  if (memoize[n]) {
    return memoize[n]
  } else {
    memoize[n] = getNthFibMemo(n - 1, memoize) + getNthFibMemo(n - 2, memoize)
  }
}
