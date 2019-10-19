def dirReduc(arr):
    if len(arr) <= 1:
        return arr
    else:
        for i in range(0,len(arr)-1):
            if arr[i] == "NORTH" and arr[i+1] == "SOUTH" or arr[i] == "EAST" and arr[i+1] == "WEST" or arr[i] == "SOUTH" and arr[i+1] == "NORTH" or arr[i] == "WEST" and arr[i+1] == "EAST":
                arr.pop(i)
                arr.pop(i)
                dirReduc(arr)
                return arr
        return arr

print(dirReduc(["NORTH", "SOUTH",  "EAST", "WEST", "EAST", "WEST"]))
print(dirReduc(["EAST", "SOUTH",  "SOUTH", "SOUTH", "SOUTH", "WEST"]))

# print(dirReduc(["NORTH","SOUTH", "EAST"]))
# dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
# dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]