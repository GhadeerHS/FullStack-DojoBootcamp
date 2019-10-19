class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = 0.02
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
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self, amount):	
    	self.account.deposit(amount)
        # print(self.account_balance)

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        # print(self.account.balance)

    def display_user_balance(self):
        self.account.display_account_info()
        # print(self.account.balance)

user1=User("Ghado","gh@gmail.com")
user1.make_deposit(100)
user1.make_withdrawal(50)
user1.display_user_balance()