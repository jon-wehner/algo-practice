def tournamentWinner(competitions, results):
    scores = {}
    i = 0
    while i < len(competitions):
        key = competitions[i][0]
        if results[i] == 0:
            key = competitions[i][1]
        if key in scores:
            scores[key] += 3
        else:
            scores[key] = 3
            i += 1
    return max(scores, key=lambda key: scores[key])

# competitions is an array of arrays
# [homeTeam, awayTeam]
# results[i] = result of competitions[i]
# 1 means home team won, 0 means away team won
# teams receive 3 points for a win, 0 points for a loss, no ties
# team with the most points wins the tournament
# one winner and each team competes against each other once

# iterate through competitions
# store winner and points in a dictionary
# for competitions[i]
# 	if 0 result = 1, if 1 result = 0
# dict[competitions[i][result]] += 3 pts
# 	if dict[team] already exists for winner, add their points
# keep running through, find the maximum value in the dict and return
