class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):	
    	self.account_balance += amount	
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        # print("User:"+ self.name + "Balance:" + self.account_balance)
        print "User: {}, Balance: {}".format(self.name,self.account_balance)
        return self

user1=User("Ghado","gh@gmail.com")
user2=User("Jan","jan@gmail.com")
user3=User("hui","hui@gmail.com")

user1.make_deposit(100).make_deposit(200).make_deposit(50).make_withdrawal(150).display_user_balance()
user2.make_deposit(200).make_deposit(200).make_withdrawal(150).make_withdrawal(10).display_user_balance()
user3.make_deposit(500).make_withdrawal(150).make_withdrawal(10).make_withdrawal(10).display_user_balance()