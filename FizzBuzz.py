class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        ans = []

        # store all the mappings
        fizz_buzz_dict = {3: "Fizz", 5: "Buzz"}

        # list divisors
        divisors = [3, 5]

        for num in range(1, n + 1):

            num_ans_str = []

            for key in divisors:
                if num % key == 0:
                    num_ans_str.append(fizz_buzz_dict[key])
            if not num_ans_str:
                num_ans_str.append(str(num))

            ans.append(''.join(num_ans_str))
        return ans
