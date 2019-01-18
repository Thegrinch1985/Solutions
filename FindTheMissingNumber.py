#You are given a list of n-1 integers
#and these integers are in the range
#of 1 to n. There are no duplicates in list.
#One of the integers is missing in the list.
#Write an efficient code to find the missing integer.

def getMissingNo(A):
    n = len(A)
    total = (n+1)*(n+2)/2
    sum_of_A = sum(A)
    return total - sum_of_A


A = [1, 2, 3, 4,  6]
miss = getMissingNo(A)
print(miss)