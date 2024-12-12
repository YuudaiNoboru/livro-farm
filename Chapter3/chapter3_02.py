from typing import List

def square_numbers(numbers: List[int]) -> List[int]:
    return [number ** 2 for number in numbers]

imput_numbers = [1, 2, 3, 4, 5]
squared_numbers = square_numbers(imput_numbers)
print(squared_numbers)