def runLengthEncoding(string):
    result = ''
    run_length = 1
    for i in range(1, len(string)):
        curr_char = string[i]
        prev_char = string[i - 1]
        if curr_char != prev_char or run_length == 9:
            result += str(run_length) + prev_char
            run_length = 0
        run_length += 1
    result += str(run_length) + string[len(string) - 1]
    return result


# function takes in a non empty string and returns run-length encoding
# AAA = 3A
# iterate through the string
# if next char = curr char
# add one to run length
# else add run to string
# return string
