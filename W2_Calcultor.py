def addNumbers(first_number, second_number):
    if second_number < 0:
        for i in range(abs(second_number)):
            first_number = first_number - 1
    else:
        for i in range(second_number):
            first_number = first_number + 1
    print first_number
  
addNumbers(-5,-10)
