function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{"node": root, "depth": 0}];
  while (stack.length > 0) {
    const nodeInfo = stack.pop();
    let { node, depth } = nodeInfo;
    if (node === null) {
      continue
    }
    sumOfDepths += depth
    stack.push({"node": node.left, "depth": depth + 1})
    stack.push({"node": node.right, "depth": depth + 1})

  };
};