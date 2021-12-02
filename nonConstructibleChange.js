function nonConstructibleChange (coins) {
  coins.sort();
  let change = 0;
  for (let i = 0; i < coins.length; i ++) {
    if (coins[i] > change + 1) {
      return change + 1;
    } else {
      change += cooins[i];
    };
  };
  return change + 1;
};