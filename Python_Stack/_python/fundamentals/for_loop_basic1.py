# 1- Basic - Print all integers from 0 to 150.

for x in range(0,150,1):
    print(x)


#2- Multiples of Five - Print all the multiples of 5 from 5 to 1,000

for x in range(5,1000,5):
    print(x)

# 3- Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for x in range(1,100):
    if (x%10 == 0):
        print("Coding Dojo")
    elif (x%5 == 0):
       print("Coding")
    else:
        print(x)

# 4- Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for x in range(0,500000):
    if(x%2 != 0):
        sum += x
print(sum)


# 5- Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for x in range(2018,1,-4):
    if(x>0):
        print(x)

# 6- Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
def FlexibleCounter(lowNum, highNum, mult):
        for x in range (lowNum,highNum+1):
                if(x % mult == 0):
                        print(x)
print(FlexibleCounter(2,9,3))
