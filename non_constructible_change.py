def nonConstructibleChange(coins):
    # sort coins
    coins.sort()
    # initialize a smallest_change variable as coins[0]
    largest_change = 0
    # iterate through coins
    for coin in coins:
        if coin > largest_change + 1:
            return largest_change + 1
        largest_change += coin

    return largest_change + 1
