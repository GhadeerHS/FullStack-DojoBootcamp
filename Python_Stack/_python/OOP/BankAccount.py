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

class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = 0.01
        self.account_balance = 0
    def deposit(self, amount):
		# your code here
        self.account_balance += amount	
        return self
    def withdraw(self, amount):
        if amount < self.account_balance:
            self.account_balance -= amount
            return self
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.account_balance -= 5
            return self
    def display_account_info(self):
        print "Balance: ${}".format(self.account_balance)
        return self
    def yield_interest(self):
        if self.account_balance >0:
            self.account_balance *= self.int_rate
            return self
        else:
            print("Insufficient funds")
		# your code here

G_acc=BankAccount(0.01,0)
J_acc=BankAccount(0.01,0)

G_acc.deposit(1000).deposit(500).deposit(1200).withdraw(450).yield_interest().display_account_info()
# J_acc.deposit(2000).deposit(700).withdraw(200).withdraw(350).withdraw(350).withdraw(350).yield_interest().display_account_info()
J_acc.deposit(2000).deposit(700).withdraw(200).withdraw(1350).withdraw(1350).withdraw(350).yield_interest().display_account_info()