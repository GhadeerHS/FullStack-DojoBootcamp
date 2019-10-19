class node:
    def __init__(self,data=None ):
        self.data=data
        self.next=None
​
class linkedlist:
    def __init__(self):
        self.head= node()
        self.tail=self.head
​
    def append(self,data):
        self.tail.next= node(data)
        self.tail=self.tail.next
​
    def delet(self,data):
        pointer=self.head
        while(pointer.next.data!=data):
            pointer= pointer.next
        pointer.next=pointer.next.next
​
    def length(self):
        pointer=self.head.next
        counter=0
        while(pointer!=None):
            counter+=1
            pointer= pointer.next
​
        return counter
​
    def get(self, index):
        if( index< 0 or  index>=self.length() ):
            print("Index out of bound")
            return None
        pointer=self.head
        for _ in range(index):
            pointer= pointer.next
        return pointer.data
​
    def display(self):
        pointer=self.head.next
        while pointer is not None :
            print(pointer.data)
            pointer= pointer.next
​
a = linkedlist()
a.append("sara")
a.append("Ghadeer")
a.append("amal")
​
#a.display()
#a.delet("amal")
#print(a.length())
a.display()
#print(a.get(1))