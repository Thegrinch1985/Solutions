#Given an array of integers,
#  and a number ‘sum’, find the number of pairs of integers 
# in the array whose sum is equal to ‘sum’.



def countPair(arr, s, n):

    count = 0  # initilize result

    #consider all possible pairs
    # and check their sums

    for i in range(0 , n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == s:
                count += 1
    return count


arr = [23, 75, 64, 34, 10, 19, 20, 1 , 5, 7, -1, 5, -60, 66]
n = len(arr)
s = 6
print("Count of pairs is", countPair(arr, s, n))