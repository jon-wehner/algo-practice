def minimumWaitingTime(queries):
    queries.sort()
    waiting_time = 0
    sum = 0
    while len(queries) > 1:
        waiting_time += queries.pop(0)
        sum += waiting_time
    return sum

    # first waiting time is 0
    # second waiting time is queries[0]
    # n waiting time is current wait time, plus queries[n-1]

    # 1,2,2,3,6
    # 0,1,3,5,8
