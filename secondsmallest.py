def getSecondOrderElements(a):
    largest = smallest = a[0]
    secondLargest = secondSmallest = None
    
    
    for number in a[1:]:
        if number > largest:
            secondLargest = largest
            largest = number
        elif secondLargest is None or number  > secondLargest:
            secondLargest = number
            
        if number < smallest:
            secondSmallest = smallest
            smallest = number
            
        elif secondSmallest is None or number < secondSmallest:
            secondSmallest = number
            
    return secondLargest,secondSmallest


print(getSecondOrderElements([2,1,3,4,5]))
print(getSecondOrderElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
#                             l      