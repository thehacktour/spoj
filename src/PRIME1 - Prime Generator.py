x = int(input())

add = 0

for i in range(x):
    
    a,b = [int(i) for i in input().split()]

    for n in range(a,b+1):
        if n%2 == 0:
            print(n)